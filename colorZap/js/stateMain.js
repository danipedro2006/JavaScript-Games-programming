var StateMain = {

  preload: function(){
		game.load.image("red","images/main/blocks/red.png");
    game.load.image("blue","images/main/blocks/blue.png");
    game.load.image("green","images/main/blocks/green.png");
    game.load.image("yellow","images/main/blocks/yellow.png");
    game.load.spritesheet("rings","images/main/rings.png",60,65,5);
    game.load.spritesheet("balls","images/main/balls.png",35,35,5);
    game.scale.forceOrientation(false, true);
  },
  create:function(){
    this.speed=50;
    this.incSpeed=20;
    this.maxSpeed=450;
    score=0;
    game.physics.startSystem(Phaser.Physics.Arcade);
    this.pointSound=game.add.audio("points");
    this.gameOverSound=game.add.audio("gameOver");
		var red=game.add.image(0,0,"red");
    var blue=game.add.image(0,100,"blue");
    var green=game.add.image(100,0,"green");
    var yellow=game.add.image(100,100,"yellow");
    red.inputEnabled=true;
    red.name="red";
    blue.inputEnabled=true;
    blue.name="blue";
    green.inputEnabled=true;
    green.name="green";
    yellow.inputEnabled=true;
    yellow.name="yellow";

    red.events.onInputDown.add(this.changeColor,this);
    blue.events.onInputDown.add(this.changeColor,this);
    green.events.onInputDown.add(this.changeColor,this);
    yellow.events.onInputDown.add(this.changeColor,this);

    this.blockGroup=game.add.group();
    this.blockGroup.add(red);
    this.blockGroup.add(blue);
    this.blockGroup.add(green);
    this.blockGroup.add(yellow);
    this.blockGroup.x=game.world.centerX-this.blockGroup.width/2;
    this.blockGroup.y=game.height-250;
    //Ring
    this.ring=game.add.image(game.world.centerX, this.blockGroup.y-150,"rings")
    this.ring.anchor.set(0.5,0.5);
  //Ball
    this.ball=game.add.sprite(0,0,"balls");
    this.ball.anchor.set(0.5,0.5);
    game.physics.arcade.enable(this.ball);

    this.scoreText=game.add.text(game.world.centerX, 170, "0");
    this.scoreText.addColor("#ffffff",0);
    this.scoreText.fontSize=64;
    this.scoreText.anchor.set(0.5,0.5);

    this.scoreLabel=game.add.text(game.world.centerX, 130, "score");
    this.scoreLabel.addColor("#ffffff",0);
    this.scoreLabel.fontSize=32;
    this.scoreLabel.anchor.set(0.5,0.5);

    this.setListeners();
    this.resetBall();

  },

  resetBall:function(){
    var color=game.rnd.integerInRange(0, 5);
    var xx=game.rnd.integerInRange(0,game.world.width);
    var yy=game.rnd.integerInRange(0,100);
    this.ball.frame=color;
    this.ball.x=xx;
    this.ball.y=yy;
    //this.ball.body.velocity.setTo(0,100);
    var rot=game.physics.arcade.moveToXY(this.ball,this.ring.x, this.ring.y, this.speed);
    this.ball.rotation=rot;
  },

  setListeners:function(){
    game.input.onUp.add(this.resetRing, this);
  },

  changeColor:function(target){
    console.log(target.name);
    switch(target.name){
    case "red":
    this.ring.frame=3;
    break;
    case "blue":
    this.ring.frame=1;
    break;
    case "green":
    this.ring.frame=2;
    break;
    case "yellow":
    this.ring.frame=4;
    break;
    }
  },

  resetRing:function(){
    this.ring.frame=0;
  },


  update:function(){
    var diffx=Math.abs(this.ring.x-this.ball.x);
    var diffy=Math.abs(this.ring.y-this.ball.y);
    if(diffx<10 && diffy<10){
      this.ball.body.velocity.setTo(0,0);

    if(this.ball.frame == this.ring.frame){
      this.resetBall();
      score++;
      this.scoreText.text=score;
    }
    else{
      game.state.start("StateOver");
    }
    }
  }
}
