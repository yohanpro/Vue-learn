const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
    setName(event, lastname) {
      this.name = event.target.value+" "+lastname;
    },
    add() {
      this.counter = this.counter + 1;
    },
    
    reduce() {
      this.counter = this.counter - 1;
    }
  }
});

app.mount('#events');
