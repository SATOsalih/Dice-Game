
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;



if(random1===1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(random1===2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(random1===3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(random1===4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(random1===5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else if(random1===6){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}




if(random2===1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(random2===2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(random2===3){   
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(random2===4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(random2===5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else if(random2===6){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML ="🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="🚩 DRAW";
}
