document.addEventListener("DOMContentLoaded", function() {
    let player = document.getElementById("enemy")
    document.addEventListener("keydown", function(event){
        if (event.KeyCode === 37) (// Left arrow key)
        movePlayer(-10);
        