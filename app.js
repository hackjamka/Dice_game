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

// id="current-0" нэгдүгээр тоглогчийн одоогийн оноо

var current_0 = document.getElementById("current-0");

// id="current-1" хоёрдугаар тоглогчийн одоогийн оноо

var current_1 = document.getElementById("current-1");
// src="dice-5.png" alt="Dice" class="dice" шооны зургыг харуулах

var dice_Iamge = document.querySelector(".dice");

//class="btn-roll" Шоо хаяхад буух зураг солих button
var btn_roll = document.querySelector(".btn-roll");

//class="btn-hold" оноог шилжүүлэх button
var btn_hold = document.querySelector(".btn-hold");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Анхны төрөх буюу бүх зүйл 0 байна
score_0.innerHTML=0;
score_1.innerHTML=0;
current_All.innerHTML=0;
dice_Iamge.style.display = "none";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Шоо хаяхад буух зураг ба round score ийг харуулан
btn_roll.addEventListener("click", function()
{
  var dice_Number = Math.floor(Math.random()*6)+1;
  dice_Iamge.style.display = "block";
  dice_Iamge.src="dice-"+dice_Number+".png";
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Одоо би тоглогчийн байрыг сольж оноог олгох болно
  if(activePLayer==0)
  {
  if(dice_Number==1){roundScore =0; current_0.innerHTML =roundScore; activePLayer=1;}
  else{roundScore+=dice_Number; current_0.innerHTML=roundScore;}
  }
  else
  {
    if(dice_Number==1){roundScore =0; current_1.innerHTML =roundScore; activePLayer=0;}
    else{roundScore+=dice_Number; current_1.innerHTML=roundScore;}
  }
  // Оноог нийлүүлэх
  btn_hold.addEventListener("click", function(){
    if(activePLayer==0){playerScore[0]+=roundScore; score_0.innerHTML= playerScore[0]; current_0.innerHTML=0; activePLayer=1; roundScore=0;}
    else{playerScore[1]+=roundScore; score_1.innerHTML = playerScore[1]; current_1.innerHTML=0; activePLayer=0; roundScore=0;}
  })
})
if(playerScore[0]>=100) alert("Нэгдүгээр тоглогч хожлоо");
if(playerScore[1]>=100) alert("Хоёрдугаар тоглогч хожлоо");



