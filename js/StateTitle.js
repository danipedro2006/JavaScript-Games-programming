var StateTitle = {

  preload: function(){
		game.load.image("logo","images/title/gameLogo.png");
    game.load.spritesheet("buttons","images/ui/buttons.png", 256,75);
    game.scale.forceOrientation(false, true);
  },
  create:function(){
		this.logo=game.add.sprite(game.world.centerX,180,"logo");
    this.logo.anchor.set(0.5,0.5);
    this.btnStart=game.add.button(game.world.centerX,game.world.height-60, "buttons",this.startGame,this,7,6,7);
    this.btnStart.anchor.set(0.5,0.5);
    this.setListeners();
  },

  startGame:function(){
    game.state.start("StateMain");
  },
  setListeners:function(){
  //  game.scale.enterIncorectorientation.add(this.wrongWay(),this);
    //game.scale.leaveIncorectorientation.add(this.rightWay(),this);
  },

  wrongWay:function(){
    console.log("wrongway");
  },

  rightWay:function(){
    console.log("rightway");
  },

  update:function(){

  }
}
