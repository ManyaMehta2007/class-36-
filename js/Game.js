class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100);

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var displayPosition = 130;

      //for in loop - used on arrays
      //allPlayers = [player1, player2, player3, player4]
      //index           0          1       2        3
      for(var plr in allPlayers){
        if(plr === "player" + player.index)
          fill("red");
        else
          fill("black");

      displayPosition = displayPosition + 20; 
      textSize(15);
      //Manya: 0
      text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null ){
      player.distance = player.distance + 50;
      player.update();
    }
    
  }
}
