btn_new.addEventListener("click",function(){
    current_All.innerHTML=0;
    dice_Iamge.style.display = "none";
    playerScore = [0,0];
    activePLayer = 0;
    roundScore = 0;
    document.querySelector(".player-0-panel").classList.add("active");
    score_0.innerHTML=0;
    score_1.innerHTML=0;
    gameOver=false
    document.getElementById("name-1").innerHTML = "Player 2";
    document.getElementById("name-0").innerHTML = "Player 1";
    document.querySelector(".winner_score").style.display="block";
    winner_number.value=0;
  })