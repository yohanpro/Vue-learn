Vue.createApp({
    data() {
        return {
            outputKeyDown:'',
            outputKeyDownOnEnter:''
        }
    },
    methods: {
        alertShow() {
            alert('hihi')
        },
        inputKeyDown(event) {
            this.outputKeyDown=event.target.value
        },
        inputKeyDownOnEnter(event) {
            
        }
    }
}).mount('#assignment')