function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var random_ennemie = Math.random() * 10;
  
    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
        if (random_ennemie > 5)
            ennemie1.accelerate(moveDistance);
        else
            ennemie1.decelerate(moveDistance);
    ennemie1.move();
    console.log(player1.life);
    controls.update();
}