import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function Missile(x, y) {
    this.movementRange = 5;
    Unit.call(this, x, y, animateFacingRightFrameOne, animateFacingRightFrameTwo);
};

Missile.prototype = Object.create(Unit.prototype);

function animateFacingRightFrameOne(ctx, teamColor, x, y) {
    //Anti-Air Tread
    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Missile Body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 25);
    ctx.lineTo(x + 30, y + 25);
    ctx.lineTo(x + 35, y + 25);
    ctx.lineTo(x + 40, y + 30);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Window
    ctx.fillStyle = Colors.skyBlue;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 30);
    ctx.lineTo(x + 38, y + 30);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 40, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Missile Turret
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 25);
    ctx.lineTo(x + 15, y + 10);
    ctx.lineTo(x + 20, y + 13);
    ctx.lineTo(x + 20, y + 25);
    ctx.lineTo(x + 15, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Missile Head Eye
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.arc(x + 34, y + 13, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Missile
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.moveTo(x + 7, y + 21);
    ctx.lineTo(x + 35, y + 15);
    ctx.lineTo(x + 33, y + 11);
    ctx.lineTo(x + 5, y + 17);
    ctx.lineTo(x + 7, y + 21);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function animateFacingRightFrameTwo(ctx, teamColor, x, y) {
    //Anti-Air Tread
    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Missile Body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 27);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 35, y + 27);
    ctx.lineTo(x + 40, y + 32);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Window
    ctx.fillStyle = Colors.skyBlue;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 32);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 38, y + 34);
    ctx.lineTo(x + 40, y + 34);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Missile Turret
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 27);
    ctx.lineTo(x + 15, y + 12);
    ctx.lineTo(x + 20, y + 15);
    ctx.lineTo(x + 20, y + 27);
    ctx.lineTo(x + 15, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Eye
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.arc(x + 36, y + 18, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Missile
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 20);
    ctx.lineTo(x + 35, y + 20);
    ctx.lineTo(x + 35, y + 16);
    ctx.lineTo(x + 5, y + 16);
    ctx.lineTo(x + 5, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Missile Detail
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 20);
    ctx.lineTo(x + 20, y + 20);
    ctx.lineTo(x + 20, y + 16);
    ctx.lineTo(x + 15, y + 16);
    ctx.lineTo(x + 15, y + 20);
    
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}