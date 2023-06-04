function START (){
let a=confirm("SHALL WE PLAY STONE ,PAPER,SCISSOR");
let bolice=document.getElementById("save");

if(a){
let choice=prompt("please enter stone,paper,scissor")
  if(choice)
  {
  let c=choice.trim().toLocaleLowerCase();
  if(c==="stone"||c==="paper"||c==="scissor")
  {
  let ran=Math.floor(Math.random()*3+1);
  let val=
  ran===1?"stone":ran===2?"paper":"scissor";
  let result=c===ran?"Tie game!!!":
  c==="stone" && val=="paper"?`player:${c}\n computer:${val}\n computer wins!`:
  
  c==="paper" && val=="scissor"?`player:${c}\n computer:${val}\n computer wins!`:
  c==="scissor" && val=="stone"?`player:${c}\n computer:${val}\n computer wins!`:
`player:${c}\n computer:${val}\n player wins`;;
alert(result);



let again=confirm("Play Again");
again?location.reload():alert("okay thanks for playing");
  }
  else{
    alert("please enter stone or paper or scissor correctly")
  }
  }
  else{
alert ("I guess you changed your mind.Maybe next time")
  }
}
else{
alert("okay may be next time")

}
}