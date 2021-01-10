Vue.createApp({
  data() {
    return {
      value: 0,
      text: "",
    };
  },
  watch: {
    value(val) {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      console.log(this.value);
      if (this.value === 37) {
        return this.value;
      } else if (this.value < 37) {
        return "Not There Yet";
      } else {
        return "TOO Much";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.value = this.value + num;
    },
  },
}).mount("#assignment");
