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
    removeItem(idx) {
      console.log("event", idx);
      this.goals.splice(idx, 1);
      // this.goals.filter()
    },
  },
});

app.mount("#user-goals");
