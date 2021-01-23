const app = Vue.createApp({
  data() {
    return {};
  },
});
app.component("friend-contact", {
  template: `
  <li>
    <h2>Manuel Lorenz</h2>
    <button @click="toggleDetails()" >
      {{detailsaAreVisible? 'Hide':'Show'}}
    </button>
    <ul v-show="detailsaAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>  {{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsaAreVisible: false,
      friend: {
        id: "manual",
        name: "Manual Lorenz",
        phone: "01234 5678 991",
        email: "manual@example.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsaAreVisible = !this.detailsaAreVisible;
    },
  },
});
app.mount("#app");
