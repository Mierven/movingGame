document.addEventListener("DOMContentLoaded", function () {
    var player = document.getElementById("player");
    var enemy = document.getElementById("enemy");

    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 37) { // Left arrow key)
            movePlayer(-10);

        } else if (event.keyCode === 39) {// Right arrow key)
            movePlayer(10);
        }


    });

    function movePlayer(amount) {
        var currentPosition = parseInt(player.style.left) || 0;
        player.style.left = currentPosition + amount + "px";
        checkCollision();
    }
    function checkCollision(amount) {
        var playerRect = player.getBoundingClientRect();
        var enemyRect = enemy.getBoundingClientRect();

        if (playerRect.right >= enemyRect.left && playerRect.left <= enemyRect.right) {
            alert("Collision detected!");

        }
    }

});



