function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const vueApp = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playererHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playererHealth + "%" };
    },
    isDisableSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playererHealth -= attackValue;
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
});

vueApp.mount("#game");
