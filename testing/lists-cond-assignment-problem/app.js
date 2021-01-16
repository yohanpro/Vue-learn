Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      isShow: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
  },
}).mount("#assignment");
