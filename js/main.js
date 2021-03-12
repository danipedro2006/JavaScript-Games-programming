var game;
window.onload=function(){
  if(screen.width>1500){
    game=new Phaser.Game(480, 640,Phaser.AUTO, "ph_game");
  }
  else{
    game=new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
  }

  
  game.state.add("StateTitle", StateTitle);
  game.state.start("StateTitle");
}
