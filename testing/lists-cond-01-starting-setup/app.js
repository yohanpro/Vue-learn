const app = Vue.createApp({
  data() {
    return {
      enterGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal(event) {
      this.goals.push(this.enterGoalValue);
    },
  },
});

app.mount("#user-goals");
