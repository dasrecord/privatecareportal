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
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Semi_annually">Semi-Annually</option>
          <option value="Annually">Annually</option>
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
          <option value="Efficient">Efficient - time is money</option>
          <option value="Knowledgeable">
            Knowledgeable - facts before feelings
          </option>
          <option value="Empathetic">Empathetic - vibes first</option>
          <option value="Communicative">
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
          <option value="Absolutely Critical">Absolutely Critical</option>
          <option value="Very Important">Very Important</option>
          <option value="Somewhat Important">Somewhat Important</option>
          <option value="Not Important">Not Important</option>
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
          text: `New Incoming Patient Reseach:
          :timer_clock: ${this.form.appointment_length}
          :calendar: ${this.form.appointment_frequency}
          :stethoscope: ${this.form.important_attribute}
          :hospital: ${this.form.bedside_manner}
          :trident: ${this.form.expectations}`,
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
