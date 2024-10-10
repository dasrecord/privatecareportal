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
        <label for="expectations"
          >What do you expect most from your doctor?</label
        >
        <textarea
          id="expectations"
          v-model="form.expectations"
          required
        ></textarea>
      </div>

      <div>
        <label for="communication"
          >How important is communication with your doctor?</label
        >
        <select id="communication" v-model="form.communication" required>
          <option value="very_important">Very Important</option>
          <option value="important">Important</option>
          <option value="neutral">Neutral</option>
          <option value="not_important">Not Important</option>
        </select>
      </div>
      <div>
        <label for="availability"
          >How important is the availability of your doctor?</label
        >
        <select id="availability" v-model="form.availability" required>
          <option value="very_important">Very Important</option>
          <option value="important">Important</option>
          <option value="neutral">Neutral</option>
          <option value="not_important">Not Important</option>
        </select>
      </div>
      <div>
        <label for="bedside_manner"
          >How important is it for your doctor to give you their unbiased
          opinion?</label
        >
        <select id="bedside_manner" v-model="form.bedside_manner" required>
          <option value="very_important">Very Important</option>
          <option value="important">Important</option>
          <option value="neutral">Neutral</option>
          <option value="not_important">Not Important</option>
        </select>
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
  background-color: #0056b3;
}
</style>
