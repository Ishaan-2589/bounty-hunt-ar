function showSignalThenRiddle(riddle){

const overlay = document.getElementById("signal-overlay");
const panel = document.getElementById("riddle-panel");
const text = document.getElementById("riddle-text");
const card = document.querySelector(".riddle-card");

overlay.classList.remove("hidden");

if(navigator.vibrate){
navigator.vibrate(120);
}

setTimeout(()=>{

overlay.classList.add("hidden");

text.innerText = riddle;

panel.classList.remove("hidden");

setTimeout(()=>{
card.classList.add("show");
},50);

},1000);

}