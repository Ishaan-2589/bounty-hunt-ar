const KEY1 = "ALPHA";
const KEY2 = "VECTOR";
const KEY3 = "NEMESIS";

function checkKey1(){
  if(input1.value === KEY1){
     input2.disabled = false;
  }
}

function checkKey2(){
  if(input2.value === KEY2){
     input3.disabled = false;
  }
}

function checkKey3(){
  if(input3.value === KEY3){
     showVictory();
  }
}