document.addEventListener("DOMContentLoaded", function () {
    var player = document.getElementById("player");
    var enemy = document.getElementById("enemy");

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 37) { // Left arrow key)
            movePlayer(-10);

        } else if (event.keyCode === 39) // Right arrow key)
            movePlayer(10);


    });

    function movePlayer(amount) {
        var currentPosition = parseInt(player.style.left);
        player.style.left = currentPosition + amount + "px";
        checkCollision();
    }
    function movePlayer(amount) {
        var playerRect = player.getBoundingClientRect();
        var enemyrRect = enemy.getBoundingClientRect();

        if (playerRect.right >= enemyRect.left && playerRect.left <= enemyRect.right) {
            alert("Collision detected!");

        }
    }

});



