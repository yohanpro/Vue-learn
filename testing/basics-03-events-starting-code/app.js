const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  computed: {
    // fullname() {
    //   console.log("running");
    //   if (this.name === "") {
    //     return "";
    //   }
    //   console.log("has");
    //   return this.name + " " + "Kim";
    // },
  },
  watch: {
    name(value) {
      this.fullname = value + " " + "Hi";
    },
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    add() {
      this.counter = this.counter + 1;
    },

    reduce() {
      this.counter = this.counter - 1;
    },
    signUp() {},
    reset() {
      this.name = "";
    },
    setName(event) {
      console.log("this.name", this.name);
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
