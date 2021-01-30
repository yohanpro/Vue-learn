<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavortie">Toggle Favortie</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ name }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    email: {
      default: '',
      type: String
    },
    name: {
      default: '',
      type: String
    },
    isFavorite: {
      type: Boolean,
      default: false
    }

  },
  emits: {
    favoriteToggle: function (id) {
      if (id) {
        return true
      } else {
        console.warn('ID is Missing')
        return false
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavortie() {
      this.$emit('favoriteToggle', this.id)
    }
  }
};
</script>