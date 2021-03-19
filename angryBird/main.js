var mainState={
  preload:function(){
    //excecuted atthe begining, load images, sounds etc
    game.load.image('bird', 'assets/bird.png');
  },

  create:function(){
    //called after preload, et up the game, display, sprites etc

    game.stage.backgroundColor='#71c5cf';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.bird=game.add.sprite(100,245,'bird');
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y=1000;

    //read keyboard

    var spaceKey=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
  },
  update:function(){
    // called 80x per second, contains game logic

    if(this.bird.y<0 || this.bird.y>490)
      this.restartGame();
    },
    jump: function(){
      this.bird.body.velocity.y=-350;
    },

    restartGame: function(){
      game.state.start("main");
  }
};
//initialize Phaser and create 400x498 px game
var game=new Phaser.Game(400, 490,Phaser.AUTO, "ph_game");
game.state.add("main", mainState);
game.state.start("main");
