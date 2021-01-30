<template>
  <form @submit.prevent="submitFriendData">
    <div>
      <label> Name </label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label> Phone </label>
      <input type="text" v-model="enteredPhone" />
    </div>
    <div>
      <label> Email </label>
      <input type="text" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add a Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewFriend',
  data() {
    return {
      enteredName: '',
      enteredEmail: '',
      enteredPhone: ''
    }
  },
  methods: {
    submitFriendData() {
      this.$emit('friend-add', { name: this.enteredName, email: this.enteredEmail, phone: this.enteredPhone })
    }
  }

}
</script>
<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
