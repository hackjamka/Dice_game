
btn_hold.addEventListener("click", function(){
  if(gameOver==false){
  // Оноог хийх
  playerScore[activePLayer]+=roundScore;
  document.getElementById("score-"+activePLayer).innerHTML=playerScore[activePLayer];
  // Хэн нэгэн яласныг харуулах
  if(playerScore[activePLayer]>=100){
    // Хожсон үед гаргах style
    document.querySelector(".player-"+activePLayer+"-panel").classList.add("winner");
    // Хэн хожиж хожигдсоныг харуулах
    document.getElementById("name-"+activePLayer).innerHTML = "Winner";
    activePLayer===0 ? document.getElementById("name-1").innerHTML = "Lose"
                                   : document.getElementById("name-0").innerHTML = "Lose";
    // Ээлж солисоныг мэдэгдэх зүйлсийг арилгах
    document.querySelector(".player-"+activePLayer+"-panel").classList.remove("active");
    // Шоог алаг болгох
    dice_Iamge.style.display = "none";
    //Тоглоом дуусгах
    gameOver=true;  
     alert("Та дахиж тоглохыг хүсвэл new game дээр дарна уу?");
  }
  else{
  // Ээлж солих function
  eeljSolih();
  }
}
})