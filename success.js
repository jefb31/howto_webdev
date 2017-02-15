
BasicGame.Success = function (game) {

};


BasicGame.Success.prototype = {


  create: function () {

    this.add.sprite(0, 0, 'empty');
    if (localStorage.getItem('done') == 'firstLvl'){
      this.loadingText = this.add.text(this.game.width / 4, this.game.height / 2, "Bravo! Tu as obtenu ton bac.", { font: "30px monospace", fill: "#fff" });
      this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Clique pour continuer tes études.", { font: "20px monospace", fill: "#fff" });
    } else if (localStorage.getItem('done') == 'secondLvl'){
      this.loadingText = this.add.text(this.game.width / 4, this.game.height / 2, "Bravo! Tu as réussi tes études.", { font: "30px monospace", fill: "#fff" });
      this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Clique pour chercher du boulot.", { font: "20px monospace", fill: "#fff" });
    }
    this.loadingText.anchor.setTo(0.5, 0.5);
  },

  update: function () {

    if (this.input.activePointer.isDown) {
      if (localStorage.getItem('done') == 'firstLvl' || localStorage.getItem('done') == 'secondLvl'){
        this.state.start('FirstLvl');
      }
    }
  },

};
