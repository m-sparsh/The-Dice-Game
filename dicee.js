var finalNo1=Math.floor(Math.random()*6) +1;
var finalNo2=Math.floor(Math.random()*6) +1;
if(finalNo1==1)
   document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
  else   if(finalNo1==2)
      document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
    else if(finalNo1==3)
         document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
        else if(finalNo1==4)
            document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
          else if(finalNo1==5)
               document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
            else
                  document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");

if(finalNo2==2)
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
else if(finalNo2==2)
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
else if(finalNo2==3)
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
else if(finalNo2==4)
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
else if(finalNo2==5)
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
else
      document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");


if(finalNo1>finalNo2){
  document.querySelector("h1").textContent="🚩Player 1 wins!!";
}
else if (finalNo2>finalNo1) {
  document.querySelector("h1").textContent="🚩Player 2 wins!!";
}
else {
  document.querySelector("h1").textContent="🎌Match draws!!";
}
