new Vue({
  el: '#app',
  data: {
    healthPlayer: 100,
    healthMonster: 100,
    gameIsRunning: false,
    logText: []
  },
  methods: {
    startGame: function() {
      this.healthPlayer = 100;
      this.healthMonster = 100;
      this.gameIsRunning = true;
      this.logText = [];
    },
    attack: function() {
      attackDamage = this.getRadomNumber(3, 10);
      this.healthMonster -= attackDamage;
      this.logText.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + attackDamage
      })
      this.monsterAttack();
    },
    specialAttack: function() {
      attackDamage = this.getRadomNumber(10, 20);
      this.healthMonster -= attackDamage;
      this.logText.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + attackDamage
      })
      this.monsterAttack();
    },
    heal: function() {
      if (this.healthPlayer > 90) {
        this.healthPlayer = 100;
      } else {
        this.healthPlayer += 10;
      }
      this.logText.unshift({
        isPlayer: true,
        text: 'Player heals with 10'
      })
      this.monsterAttack();
    },
    giveUp: function() {
      if (confirm("You gave up! Do you want to start a new game?")) {
        this.startGame();
      } else {
        this.gameIsRunning = false;
      }
    },
    monsterAttack: function () {
      attackDamage = this.getRadomNumber(3, 10);
      this.healthPlayer -= attackDamage;
      this.logText.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + attackDamage
      })
      this.checkWin();
    },
    checkWin: function () {
      if (this.healthMonster < 0) {
        if (confirm("You won! Do you want to start a new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      } else if (this.healthPlayer < 0) {
        if (confirm("You lost! Do you want to start a new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    },
    getRadomNumber: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
})
