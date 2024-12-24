<template>
  <div class="research-view">
    <h1>Help us help you...</h1>
    <form @submit.prevent="submitForm">
      <!-- <div>
        <label for="name">What is your name?</label>
        <input type="text" id="name" v-model="form.name" required />
      </div> -->
      <!-- <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div> -->
      <!-- <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="form.phone" required />
      </div> -->
      <!-- <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="form.age" required />
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
      <!-- <div>
        <label for="medicalHistory">Medical History:</label>
        <textarea
          id="medicalHistory"
          v-model="form.medicalHistory"
          required
        ></textarea>
      </div> -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ResearchView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        age: "",
        medicalHistory: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send data to an API
      console.log("Form submitted:", this.form);
    },
  },
};
</script>

<style scoped>
.research-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
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
}

.research-view form button:hover {
  background-color: white;
  color: red;
}
</style>
