function getRoute(){
return localStorage.getItem("route") || "A";
}

function getCurrentNode(){
return parseInt(localStorage.getItem("currentNode")) || 0;
}

function advanceNode(){

let node = getCurrentNode();

localStorage.setItem("currentNode", node+1);

}