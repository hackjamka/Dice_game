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

var current_All=document.querySelector(".player-current-score");

// id="current-0" нэгдүгээр тоглогчийн одоогийн оноо

var current_0 = document.getElementById("current-0");

// id="current-1" хоёрдугаар тоглогчийн одоогийн оноо

var current_1 = document.getElementById("current-1");
// src="dice-5.png" alt="Dice" class="dice"

var dice_Iamge = document.querySelector(".dice");

//class="btn-roll" Шоо хаяхад буух зураг солих button
var btn_roll = document.querySelector(".btn-roll");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Анхны төрөх буюу бүх зүйл 0 байна
score_0.textContent=0;
score_1.textContent=0;
current_All.textContent=0;
dice_Iamge.style.display = "none";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Шоо хаяхад буух зураг
btn_roll.addEventListener("click", function()
{
  var dice_Number = Math.floor(Math.random()*6)+1;
  dice_Iamge.style.display = "block";
  dice_Iamge.src="dice-"+dice_Number+".png";
})


