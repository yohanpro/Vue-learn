const app = Vue.createApp({
    data() {
        return {
            myTest: 'This is my Test',
            myLink: 'https://yohanpro.com',
            seen: false
        };
    },
    methods: {
        changeSeen() {
            this.seen = !this.seen;
        }
    }
});


app.mount('#user-goal');