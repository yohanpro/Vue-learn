Vue.createApp({
  data() {
    return {
      inputClass: "",
      inputClass_2: "",
      showParagraph: true,
      styleObject: {
        color: "",
      },
    };
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    inputText(event) {
      this.inputClass = event.target.value;
    },
    inputText2(event) {
      this.styleObject.color = event.target.value;
    },
  },
}).mount("#assignment");
