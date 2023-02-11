let myGuesses=[];
let randomNumber;
let popup=document.getElementById("popup");
let audio=new Audio('openSound.wav');
let eraud=new Audio('error.wav');
let innerValue=document.getElementById("inputBox");
let init=()=>{
    randomNumber=Math.floor(Math.random()*100);
    document.getElementById("gameArea").style.display="none";
}
let startGame=()=>{
    document.querySelector("#newButton").style.display="none";
    document.querySelector(".welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}
let easyAttempts=()=>{
    audio.play();
    maxguess=10;
    startGame();
}
let hardAttempt=()=>{
    audio.play();
    maxguess=5;
    startGame();
} 
let startNewGame=()=>{
    document.querySelector("#newButton").style.display="block";
    innerValue.setAttribute('disabled','true');
}
let pageReload=()=>{
    window.location.reload();
}
let compareGuess=()=>{
    let getNumber=Number(document.getElementById("inputBox").value);
    myGuesses=[...myGuesses,getNumber];
    document.getElementById("guesses").innerText=myGuesses;
    if(myGuesses.length<maxguess){
     if(getNumber>randomNumber){
        eraud.play();
          popup.innerText="guess is high🙁";
          innerValue.value="";
         
     }
    else if(getNumber<randomNumber){
        eraud.play();
       popup.innerText="guess is low🙁";
        innerValue.value=""; 
   }
   else{
    audio.play();
    popup.innerText="Hurray! it's correct😇";
    innerValue.value=""; 
   }
   document.getElementById("attempts").innerText=myGuesses.length;
}
else{
    if(getNumber>randomNumber){
        eraud.play();
        popup.innerText=`Oops You Loosed! the number was ${randomNumber}😔`;
        document.getElementById("attempts").innerText=myGuesses.length;
       startNewGame();
       
   }
  else if(getNumber<randomNumber){
     eraud.play();
     popup.innerText=`Oops You Loosed! the number was  ${randomNumber}😔`;
     document.getElementById("attempts").innerText=myGuesses.length;
     startNewGame();
 }
 else{
  popup.innerText="Hrray! it's correct😇";
  document.getElementById("attempts").innerText=myGuesses.length;
  startNewGame();
 }
}
}
