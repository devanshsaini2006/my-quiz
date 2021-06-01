class Quiz {
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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
background("yellow");
fill("brown")
text("results of quiz", 340, 50)
text("..................",320,65)
Contestant.getPlayerInfo();
    //write code to change the background color here
    if(allContestants !== undefined){
      var display_answers = 230;
      fill("blue");
      textSize(20);
    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns === allContestant[plr].answer)
    fill("green")
    else
    fill("red")

    display_answer = 30;
    textSize(15);
    text(allContestant[plr].name+":" + allContestants[plr].answer, 250,display_answers)
    }

    
    
  }
  }
}
