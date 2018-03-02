var app = new Vue({
  el: '#app',
  created: function () {
    window.addEventListener("keypress", this.play, false);
  },
  methods: {
    play: function(e) {
      console.log(e.charCode);
      if (e.charCode == 65) {
        //A
        document.getElementById("key65").play();
      } else if (e.charCode == 83) {
        //S
        document.getElementById("key83").play();
      } else if (e.charCode == 68) {
        //D
        document.getElementById("key68").play();
      } else if (e.charCode == 70) {
        //F
        document.getElementById("key70").play();
      } else if (e.charCode == 71) {
        //G
        document.getElementById("key71").play();
      } else if (e.charCode == 72) {
        //H
        document.getElementById("key72").play();
      } else if (e.charCode == 74) {
        //J
        document.getElementById("key74").play();
      } else if (e.charCode == 75) {
        //K
        document.getElementById("key75").play();
      } else if (e.charCode == 76) {
        //L
        document.getElementById("key76").play();
      }
    }
  }
})
