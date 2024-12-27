<template>
  <div class="research-view">
    <h1>Help us help you...</h1>
    <form @submit.prevent="submitForm">
      <!-- <div class="demographics">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="form.phone" required />
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="form.age" required />
        <label for="medicalHistory">Medical History:</label>
        <textarea
          id="medicalHistory"
          v-model="form.medicalHistory"
          required
        ></textarea>
      </div> -->
      <div>
        <label for="appointment-length">
          How long should a doctor's appointment take?
        </label>
        <select
          id="appointment-length"
          v-model="form.appointment_length"
          required
        >
          <option value="5_minutes">5 minutes</option>
          <option value="15_minutes">15 minutes</option>
          <option value="30_minutes">30 minutes</option>
          <option value="45_minutes">45 minutes</option>
          <option value="60_mintues">60 minutes</option>
        </select>
      </div>

      <div>
        <label for="appointment-frequency">
          How often do you need to see your private care team?
        </label>
        <select
          id="appointment-frequency"
          v-model="form.appointment_frequency"
          required
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="semi_annually">Semi-Annually</option>
          <option value="annually">Annually</option>
        </select>
      </div>

      <div>
        <label for="important-attribute">
          Your ideal doctor or nurse is:
        </label>
        <select
          id="important-attribute"
          v-model="form.important_attribute"
          required
        >
          <option value="efficient">Efficient - time is money</option>
          <option value="knowledgeable">
            Knowledgeable - facts before feelings
          </option>
          <option value="empathetic">Empathetic - vibes first</option>
          <option value="communicative">
            Communicative - keeps me informed
          </option>
        </select>
      </div>

      <div>
        <label for="bedside_manner">
          How important is it for my private care team to give me their raw,
          unfiltered opinion?
        </label>
        <select id="bedside_manner" v-model="form.bedside_manner" required>
          <option value="absolutely_critical">Absolutely Critical</option>
          <option value="very_important">Very Important</option>
          <option value="somewhat_important">Somewhat Important</option>
          <option value="not_important">Not Important</option>
        </select>
      </div>

      <div>
        <label for="expectations">
          What do I expect most from my private care team?
        </label>
        <textarea
          id="expectations"
          v-model="form.expectations"
          required
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResearchView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        age: "",
        appointment_length: "",
        appointment_frequency: "",
        important_attribute: "",
        bedside_manner: "",
        expectations: "",
        medicalHistory: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Format the form data for Slack
        const payload = {
          text: `New form submission:\n
          Appointment Length: ${this.form.appointment_length}\n
          Appointment Frequency: ${this.form.appointment_frequency}\n
          Important Attribute: ${this.form.important_attribute}\n
          Bedside Manner: ${this.form.bedside_manner}\n
          Expectations: ${this.form.expectations}`,
        };

        const response = await axios.post(
          "https://relayproxy.vercel.app/das_record_slack",
          payload
        );
        console.log("Form submitted successfully:", response.data);
        this.form = {
          name: "",
          email: "",
          phone: "",
          age: "",
          appointment_length: "",
          appointment_frequency: "",
          important_attribute: "",
          bedside_manner: "",
          expectations: "",
          medicalHistory: "",
        };
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Status code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      }
    },
  },
};
</script>

<style scoped>
.demographics {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}

.research-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 8px;
}

.research-view h1 {
  text-align: center;
}

.research-view form div {
  margin-bottom: 15px;
}

.research-view form label {
  display: block;
  margin-bottom: 5px;
}

.research-view form select,
.research-view form input,
.research-view form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
}

.research-view form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
}

.research-view form button:hover {
  background-color: white;
  color: red;
}
</style>
