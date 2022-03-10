
btn_roll.addEventListener("click", function()
{
  if(gameOver==false){
  //Таамгаар тоо сонгох
  var dice_Number = Math.floor(Math.random()*6)+1;
  dice_Iamge.style.display = "block";
  dice_Iamge.src="dice-"+dice_Number+".png";
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Шооны буусан нүд 1 ээс өөр тоо байвал одоогийн оноо нэмнэ
  if(dice_Number!==1){
    //Оноог нэмэх
    roundScore+=dice_Number;
    //Оноог тоглогчийн одоогийн оноо луу нэмнэ
    document.getElementById("current-"+activePLayer).innerHTML=roundScore;
  }else{
    //Оноог 0 болгон
    roundScore=0;
   // Ээлж солих function
   eeljSolih();
  }
  }
})