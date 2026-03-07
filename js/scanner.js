document.addEventListener("DOMContentLoaded", async () => {

const mindarThree = new window.MINDAR.IMAGE.MindARThree({

container: document.querySelector("#ar-container"),
imageTargetSrc: "markers/targets.mind"

});

const {renderer, scene, camera} = mindarThree;

const anchor = mindarThree.addAnchor(0);

let clueShown=false;

anchor.onTargetFound = () => {

if(clueShown) return;

clueShown=true;

const route = getRoute();

const nodeIndex = getCurrentNode();

const node = ROUTES[route][nodeIndex];

const riddle = riddles[node][route];

showSignalThenRiddle(riddle);

};

await mindarThree.start();

renderer.setAnimationLoop(()=>{

renderer.render(scene,camera);

});

});