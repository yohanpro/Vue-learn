<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="fetchSurveyData"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

import axios from 'axios'
export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: []
    }
  },
  methods: {
    async fetchSurveyData() {
      const results = await axios.get('https://vue-http-67370-default-rtdb.firebaseio.com/surveys.json')
        .then(response => response.data)
      this.results = results
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>