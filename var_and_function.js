/*
 VAR
*/
// Тоглогчийн ээлжийг хадгалах хувисагч .Эхний гишүүн бол 0 .Хоёрдох гишүүн бол 1
var activePLayer = 0;
//Цуглуулсан оноо
var playerScore = [0,0];
//Бөөгнүүлж байгаа оноо
var roundScore = 0;
//Тоглоом дуусан эсэх
var gameOver = false;
// Хэд хүрвэл хожихыг хэлнэ
var winner_number = document.getElementById("winner_number");
console.log(winner_number)
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
/*
FUNCTION
 */
function eeljSolih(){
    //Одоогын оноог 0 болгох
    roundScore=0;
    document.getElementById("current-"+activePLayer).innerHTML=roundScore;
    // Тоглогчийн ээлжийг солих
    activePLayer===1 ? activePLayer=0 : activePLayer=1;
    activePLayerChanged();
}
function activePLayerChanged(){
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
function btn_winner_score()
{
  document.querySelector(".winner_score").style.display="none";
}


