/* 
Тоглогчийн ээлжийг хадгалах хувисагч
Эхний гишүүн бол 0
хоёрдох гишүүн бол 1
*/
var activePLayer = 0;
//Цуглуулсан оноо
var playerScore = [0,0];
//Бөөгнүүлж байгаа оноо
var roundScore = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// id="score-0" нь нэгдүгээр тоглогчийн оноо

var score_0= document.getElementById("score-0");

//id="score-1" нь хоёрдугаар тоглогчийн оноо

var score_1 = document.getElementById("score-1");

//class="player-current-score" бүх тоглогчийн одоогийн оноо

var current_All = document.querySelector(".player-current-score");

// src="dice-5.png" alt="Dice" class="dice" шооны зургыг харуулах

var dice_Iamge = document.querySelector(".dice");

//class="btn-roll" Шоо хаяхад буух зураг солих button
var btn_roll = document.querySelector(".btn-roll");

//class="btn-hold" оноог шилжүүлэх button
var btn_hold = document.querySelector(".btn-hold");
//Тоглоомыг шинээр эхлүүлэх
var btn_new = document.querySelector(".btn-new");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Шоо хаяхад буух зураг ба round score ийг харуулан
btn_roll.addEventListener("click", function()
{
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
    //Одоогын оноог 0 болгох
    document.getElementById("current-"+activePLayer).innerHTML=roundScore;
    // Тоглогчийн ээлжийг солих
    activePLayer===0 ? activePLayer=1 : activePLayer=0;
    //Тоглогчид ээлжийн сольсоныг харуулах
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
})
// lass="btn-hold" Оноог нийт оноо луу хийх
btn_hold.addEventListener("click",function(){
  // Оноог хийх
  playerScore[activePLayer]+=roundScore;
  document.getElementById("score-"+activePLayer).innerHTML=playerScore[activePLayer];
  //Одоогын оноог 0 болгох
  roundScore=0;
  document.getElementById("current-"+activePLayer).innerHTML=roundScore;
  // Тоглогчийн ээлжийг солих
  activePLayer===1 ? activePLayer=0 : activePLayer=1;
  //Тоглогчид ээлжийн сольсоныг харуулах
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

})
// Шинээр эхлүүлэх
btn_new.addEventListener("click",function(){
  current_All.innerHTML=0;
  dice_Iamge.style.display = "none";
  playerScore = [0,0];
  activePLayer = 0;
  roundScore = 0;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  score_0.innerHTML=0;
  score_1.innerHTML=0;
})



