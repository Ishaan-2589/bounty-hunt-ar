document.addEventListener("DOMContentLoaded", async () => {
    // 1. Initialize MindAR with the container
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector("#ar-container"),
        imageTargetSrc: "markers/targets.mind",
    });

    const {renderer, scene, camera} = mindarThree;

    // 2. Setup the Marker Index Mapping for 10 markers
    const markerIndexMap = {
        "A":0, "B":1, "C":2, "D":3, "E":4, "G":5, "H":6, "I":7, "J":8, "F":9
    };

    // 3. Get the specific anchor for the user's current node
    const route = getRoute();
    const nodeIndex = getCurrentNode();
    const nodeKey = ROUTES[route][nodeIndex];
    const targetIndex = markerIndexMap[nodeKey];

    // Create the anchor for the specific marker the team is looking for
    const anchor = mindarThree.addAnchor(targetIndex);

    let clueShown = false;

    anchor.onTargetFound = () => {
        if (clueShown) return;
        clueShown = true;

        const riddle = riddles[nodeKey][route];
        
        // Show the UI box
        showSignalThenRiddle(riddle);

        // FORCED FOCUS FIX: Ensure the keyboard can trigger
        const inputField = document.getElementById("node-unlock-code");
        if(inputField) {
            inputField.style.pointerEvents = "auto"; 
            // We don't focus() here yet because the animation might still be playing
        }
    };

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
});