import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function Infantry(x, y) {
    this.movementRange = 4;
    Unit.call(this, x, y);
};

Infantry.prototype = Object.create(Unit.prototype);

Infantry.prototype.animate = function(tick, ctx, teamColor) {
    if (this.getAnimationState() == 'Idle') {
        if (tick <= 2) {
            animateFacingLeftFrameOne(ctx, teamColor, this.getX(), this.getY());
        }
        else if (tick <= 4) {
            animateFacingLeftFrameTwo(ctx, teamColor, this.getX(), this.getY());
        }
    }
}

function animateFacingLeftFrameOne(ctx, teamColor, x, y) {
    
    //Infantry Head
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 15);
    ctx.bezierCurveTo(x + 18, y + 15, x + 18, y + 23, x + 19, y + 25);
    ctx.bezierCurveTo(x + 20, y + 26, x + 25, y + 26, x + 34, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Eye
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 19, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Infantry Helmet
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 15);
    ctx.bezierCurveTo(x + 15, y + 15, x + 15, y + 5, x + 25, y + 5);
    ctx.bezierCurveTo(x + 27, y + 5, x + 37, y + 10, x + 35, y + 20);
    ctx.bezierCurveTo(x + 30, y + 20, x + 25, y + 20, x + 15, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();     

    //Infantry Rifle Stock
    ctx.fillStyle = Colors.brown;
    ctx.beginPath();
    ctx.arc(x + 33, y + 28, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();            

    //Infantry Shoe 1
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 42);
    ctx.lineTo(x + 28, y + 42.8);
    ctx.lineTo(x + 27, y + 44);
    ctx.lineTo(x + 34, y + 44);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Infantry Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 39);
    ctx.lineTo(x + 12, y + 39.8);
    ctx.lineTo(x + 11, y + 41);
    ctx.lineTo(x + 18, y + 41);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Infantry Pant
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 31, y + 32);
    //Leg 1
    ctx.bezierCurveTo(x + 27, y + 36, x + 37, y + 40, x + 34, y + 41);
    ctx.bezierCurveTo(x + 30, y + 43, x + 26, y + 38, x + 25, y + 35);
    //Leg 2
    ctx.bezierCurveTo(x + 23, y + 30, x + 17, y + 32, x + 19, y + 39);
    ctx.bezierCurveTo(x + 16, y + 40, x + 15, y + 39, x + 15, y + 35);
    ctx.bezierCurveTo(x + 16, y + 33, x + 19, y + 29, x + 19, y + 29);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Hand 1
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 25, y + 28, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Infantry Rifle
    ctx.fillStyle = Colors.brown;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 25);
    ctx.lineTo(x + 7, y + 25);
    ctx.lineTo(x + 7, y + 28);
    ctx.lineTo(x + 34, y + 28);
    ctx.lineTo(x + 34, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Hand 2
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 15, y + 28, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Infantry Arm Sleeve 1
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 20);
    ctx.bezierCurveTo(x + 35, y + 25, x + 40, y + 27, x + 30, y + 32);
    ctx.lineTo(x + 24, y + 28);
    ctx.bezierCurveTo(x + 34, y + 28, x + 34, y + 26, x + 29, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function animateFacingLeftFrameTwo(ctx, teamColor, x, y) {

    //Infantry Head
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 18);
    ctx.bezierCurveTo(x + 18, y + 18, x + 18, y + 26, x + 19, y + 28);
    ctx.bezierCurveTo(x + 20, y + 29, x + 25, y + 29, x + 34, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Eye
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 22, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Infantry Helmet
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 18);
    ctx.bezierCurveTo(x + 15, y + 18, x + 15, y + 8, x + 25, y + 8);
    ctx.bezierCurveTo(x + 27, y + 8, x + 37, y + 13, x + 35, y + 23);
    ctx.bezierCurveTo(x + 30, y + 23, x + 25, y + 23, x + 15, y + 18);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();     

    //Infantry Shoe 1
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 42);
    ctx.lineTo(x + 28, y + 42.8);
    ctx.lineTo(x + 27, y + 44);
    ctx.lineTo(x + 34, y + 44);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Infantry Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 39);
    ctx.lineTo(x + 12, y + 39.8);
    ctx.lineTo(x + 11, y + 41);
    ctx.lineTo(x + 18, y + 41);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Infantry Pant
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 31, y + 35);
    //Leg 1
    ctx.bezierCurveTo(x + 27, y + 39, x + 39, y + 40, x + 34, y + 41);
    ctx.bezierCurveTo(x + 30, y + 43, x + 26, y + 41, x + 25, y + 38);
    //Leg 2
    ctx.bezierCurveTo(x + 23, y + 33, x + 17, y + 35, x + 19, y + 39);
    ctx.bezierCurveTo(x + 16, y + 40, x + 15, y + 39, x + 15, y + 37);
    ctx.bezierCurveTo(x + 16, y + 36, x + 19, y + 32, x + 19, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Hand 1
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 27, y + 32, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Infantry Rifle
    ctx.fillStyle = Colors.brown;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 28);
    ctx.lineTo(x + 7, y + 28);
    ctx.lineTo(x + 7, y + 31);
    ctx.lineTo(x + 34, y + 31);
    ctx.lineTo(x + 34, y + 28);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Infantry Hand 2
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 15, y + 31, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Infantry Rifle Stock
    ctx.fillStyle = Colors.brown;
    ctx.beginPath();
    ctx.arc(x + 33, y + 31, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();            

    //Infantry Arm Sleeve 1
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 23);
    ctx.bezierCurveTo(x + 35, y + 28, x + 40, y + 30, x + 30, y + 35);
    ctx.lineTo(x + 24, y + 31);
    ctx.bezierCurveTo(x + 34, y + 31, x + 34, y + 29, x + 29, y + 26);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

