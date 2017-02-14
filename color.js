
BasicGame.Color = function (game) {

};


var leftHalf, righttHalf, isMale;

BasicGame.Color.prototype = {


  create: function () {

    this.add.sprite(0, 0, 'color');
    leftHalf = new Phaser.Rectangle(0,0,this.game.width/2,this.game.height/2);

    righttHalf = new Phaser.Rectangle(this.game.width/2,0,this.game.width/2,this.game.height/2);
  },

  update: function () {

        if (this.input.activePointer.isDown) {
          var insideLeft = leftHalf.contains(this.game.input.mousePointer.x, this.game.input.mousePointer.y);
          // this.state.start('Game', true, false, insideLeft);
          this.state.start('Game');
        }
  },

};
