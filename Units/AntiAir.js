import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function AntiAir(x, y) {
    this.movementRange = 7;
    Unit.call(this, x, y);
};

AntiAir.prototype = Object.create(Unit.prototype);

AntiAir.prototype.animate = function(tick, ctx, teamColor) {
    if (this.getAnimationState() == 'Idle') {
        if (tick <= 2) {
            animateFacingRightFrameOne(ctx, teamColor, this.getX(), this.getY());
        }
        else if (tick <= 4) {
            animateFacingRightFrameTwo(ctx, teamColor, this.getX(), this.getY());
        }
    }
}

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
    
    //Anti-Air Cannon 1
    ctx.fillStyle = Colors.black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 22);
    ctx.lineTo(x + 38, y + 11);
    ctx.stroke();

    //Anti-Air Cannon 2
    ctx.fillStyle = Colors.black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 29, y + 24);
    ctx.lineTo(x + 40, y + 14);
    ctx.stroke();

    //Anti-Air Head
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 10, y + 25);
    ctx.lineTo(x + 12, y + 23);
    ctx.lineTo(x + 28, y + 23);
    ctx.lineTo(x + 30, y + 25);
    ctx.lineTo(x + 30, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Anti-Air body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 30);
    ctx.lineTo(x + 15, y + 30);
    ctx.lineTo(x + 20, y + 35);
    ctx.lineTo(x + 40, y + 35);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 5, y + 40);
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
    
    //Anti-Air Cannon 1
    ctx.fillStyle = Colors.black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 26);
    ctx.lineTo(x + 45, y + 26);
    ctx.stroke();

    //Anti-Air Cannon 2
    ctx.fillStyle = Colors.black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 29, y + 30);
    ctx.lineTo(x + 45, y + 30);
    ctx.stroke();

    //Anti-Air Head
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 37);
    ctx.lineTo(x + 10, y + 27);
    ctx.lineTo(x + 12, y + 25);
    ctx.lineTo(x + 28, y + 25);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 30, y + 37);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Anti-Air body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 32);
    ctx.lineTo(x + 15, y + 32);
    ctx.lineTo(x + 20, y + 37);
    ctx.lineTo(x + 40, y + 37);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}