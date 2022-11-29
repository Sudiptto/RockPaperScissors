const strRock="Rock";
const strPaper="Paper";
const strScissors="Scissors";
let arrChoices=[strRock,strPaper,strScissors];
let userChoice="";
let user_win = 0;
let user_tie = 0;
let user_loss = 0;
let compChoice="";


let nodeChoices=document.getElementById("choices").children;
for (nodeChoice of nodeChoices){
  nodeChoice.addEventListener("click",UserMakesChoice);
}

function UserMakesChoice(event){
  
  let uChoice=document.getElementById("UserChoice");
  uChoice.innerHTML="Great! You made a choice of: "
  switch(event.target.innerText){
    case strRock:
      uChoice.innerHTML+=strRock;
      userChoice=strRock;
      break;
    case strPaper:
      uChoice.innerHTML+=strPaper;
      userChoice=strPaper;
      break;
    case strScissors:
      uChoice.innerHTML+=strScissors;
      userChoice=strScissors;
      break;
    default:
      uChoice.innerHTML+="You were unable to make a choice";
  }
  setTimeout(ComputerMakesChoice,200);
  
}

function ComputerMakesChoice(){
  
  compChoice=arrChoices[Math.floor(Math.random()*arrChoices.length)]
  console.log(compChoice);
  let cChoice=document.getElementById("ComputerChoice");
  cChoice.innerHTML="The Computer made a choice of: "
  switch(compChoice){
    case strRock:
      cChoice.innerHTML+="<img src=\"Images/rock.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
      break;
    case strPaper:
      cChoice.innerHTML+="<img src=\"Images/paper.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\" \>";
      break;
    case strScissors:
      cChoice.innerHTML+="<img src=\"Images/scissors.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
      break;
    default:
      cChoice.innerHTML+="Computer unable to make a choice";
  }

  setTimeout(WhoIsTheWinner,200);

}

function WhoIsTheWinner(){
  let winner_choice=document.getElementById("winner");
  let msgResult=document.getElementById("msgWinner");
  if (userChoice==compChoice){
    msgResult.innerHTML="It's a tie!!"
    user_tie += 1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strRock && compChoice==strPaper ){
    msgResult.innerHTML="Computer Wins!"
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/computer_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    user_loss += 1;
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strRock && compChoice==strScissors){
    msgResult.innerHTML="You Win!"
    user_win += 1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/human_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strPaper && compChoice==strRock){
    msgResult.innerHTML="You Win!"
    user_win+= 1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/human_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strPaper && compChoice==strScissors){
    msgResult.innerHTML="Computer Wins!"
    user_loss+=1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/computer_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strScissors && compChoice==strRock){
    msgResult.innerHTML="Computer Wins!"
    user_loss += 1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/computer_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } else if(userChoice==strScissors && compChoice==strPaper){
    msgResult.innerHTML="You Win!"
    user_win += 1;
    document.getElementById("score").innerHTML = "Current Stats <br> Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie;
    winner_choice.innerHTML+="<img src=\"Images/computer_wins.png\" width=\"400px\" height=\"300px\" border-radius=\"20px\">";
    //alert("Current Stats. Win: " + user_win + ", loss: " + user_loss + ", tie: " + user_tie);
  } 
  
  
  
}