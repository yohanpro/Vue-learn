Vue.createApp({
  data() {},
  methods: {
    addClasses(event) {
      console.log("object", event.target);
      event.target.classList.add("selected");
    },
  },
}).mount("#styling");
