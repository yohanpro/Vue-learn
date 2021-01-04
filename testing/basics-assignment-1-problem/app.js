
Vue.createApp({
    data() {
        return {
            myName: 'John',
            myAge: 30,
            imageUrl:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
        };
    },
    methods: {
        addAge() {
            return this.myAge+5
        },
        randomNum() {
            return Math.floor(Math.random()*1)
        }
    }
}).mount('#assignment')