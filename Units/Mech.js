import { CombatStats } from "../CombatStats";
import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function Mech(x, y) {
    this.movementRange = CombatStats.mech.movementRange;
    this.attackRange = CombatStats.mech.attackRange;
    this.directCombat = CombatStats.mech.directCombat;
    this.armored = CombatStats.mech.armored;
    this.attackPower = CombatStats.mech.attackPower;
    this.airAttack = CombatStats.mech.airAttack;
    this.defense = CombatStats.mech.defense;
    this.tankBuster = CombatStats.mech.tankBuster;
    this.groundOnly = CombatStats.mech.groundOnly;
    this.unitType = CombatStats.mech.unitType;
    Unit.call(this, x, y, this.directCombat, this.armored, this.movementRange, this.attackRange, animateFacingLeftFrameOne, 
              animateFacingLeftFrameTwo, this.attackPower, this.airAttack, this.defense, this.tankBuster, this.groundOnly, this.unitType);
};

Mech.prototype = Object.create(Unit.prototype);

function animateFacingLeftFrameOne(ctx, teamColor, x, y) {
            
    //Mech Bazzuka
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 12);
    ctx.lineTo(x + 43, y + 12);
    ctx.lineTo(x + 43, y + 22);
    ctx.lineTo(x + 8, y + 22);
    ctx.lineTo(x + 8, y + 12);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Bazzuka Handle
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 22);
    ctx.lineTo(x + 12, y + 32);
    ctx.lineTo(x + 14, y + 32);
    ctx.lineTo(x + 14, y + 22);
    ctx.lineTo(x + 12, y + 22);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Head
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 15);
    ctx.bezierCurveTo(x + 18, y + 15, x + 18, y + 23, x + 19, y + 25);
    ctx.bezierCurveTo(x + 20, y + 26, x + 25, y + 26, x + 34, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Eye
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 19, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Mech Helmet
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 15);
    ctx.bezierCurveTo(x + 15, y + 15, x + 15, y + 5, x + 25, y + 5);
    ctx.bezierCurveTo(x + 27, y + 5, x + 37, y + 10, x + 35, y + 20);
    ctx.bezierCurveTo(x + 30, y + 20, x + 25, y + 20, x + 15, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 36.5, y + 38);
    ctx.lineTo(x + 36.5, y + 45);
    ctx.lineTo(x + 38.5, y + 45);
    ctx.lineTo(x + 38.5, y + 38);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Mech leg 2
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 27, y + 35);
    ctx.lineTo(x + 30, y + 42);
    ctx.lineTo(x + 37, y + 41);
    ctx.lineTo(x + 37, y + 38);
    ctx.lineTo(x + 33, y + 39);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Torso
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 23);
    ctx.bezierCurveTo(x + 35, y + 33, x + 34, y + 36, x + 33, y + 37);
    ctx.bezierCurveTo(x + 33, y + 39, x + 28, y + 38, x + 24, y + 38);
    ctx.lineTo(x + 24, y + 42);
    ctx.lineTo(x + 21, y + 42);
    ctx.lineTo(x + 22, y + 34);
    ctx.lineTo(x + 30, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 24, y + 42);
    ctx.lineTo(x + 18, y + 42.8);
    ctx.lineTo(x + 17, y + 44);
    ctx.lineTo(x + 24, y + 44);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Mech Hand 1
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 13, y + 28, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Mech Arm Sleeve 1
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 23);
    ctx.bezierCurveTo(x + 33, y + 28, x + 14, y + 40, x + 15, y + 30);
    ctx.lineTo(x + 15, y + 28);
    ctx.bezierCurveTo(x + 25, y + 30, x + 25, y + 30, x + 27, y + 26);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}



function animateFacingLeftFrameTwo(ctx, teamColor, x, y) {
    
    //Mech Bazzuka
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 15);
    ctx.lineTo(x + 43, y + 15);
    ctx.lineTo(x + 43, y + 25);
    ctx.lineTo(x + 8, y + 25);
    ctx.lineTo(x + 8, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Bazzuka Handle
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 25);
    ctx.lineTo(x + 12, y + 35);
    ctx.lineTo(x + 14, y + 35);
    ctx.lineTo(x + 14, y + 25);
    ctx.lineTo(x + 12, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Head
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 18);
    ctx.bezierCurveTo(x + 18, y + 18, x + 18, y + 26, x + 19, y + 28);
    ctx.bezierCurveTo(x + 20, y + 29, x + 25, y + 29, x + 34, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Eye
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 22, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();  

    //Mech Helmet
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 18);
    ctx.bezierCurveTo(x + 15, y + 18, x + 15, y + 8, x + 25, y + 8);
    ctx.bezierCurveTo(x + 27, y + 8, x + 37, y + 13, x + 35, y + 23);
    ctx.bezierCurveTo(x + 30, y + 23, x + 25, y + 23, x + 15, y + 18);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 36.5, y + 38);
    ctx.lineTo(x + 36.5, y + 45);
    ctx.lineTo(x + 38.5, y + 45);
    ctx.lineTo(x + 38.5, y + 38);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Mech leg 2
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 27, y + 35);
    ctx.lineTo(x + 30, y + 43);
    ctx.lineTo(x + 37, y + 41);
    ctx.lineTo(x + 37, y + 38);
    ctx.lineTo(x + 33, y + 39);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Torso
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 26);
    ctx.bezierCurveTo(x + 35, y + 34, x + 33, y + 37, x + 33, y + 38);
    ctx.bezierCurveTo(x + 33, y + 41, x + 28, y + 38, x + 24, y + 38);
    ctx.lineTo(x + 24, y + 42);
    ctx.lineTo(x + 21, y + 42);
    ctx.lineTo(x + 21, y + 34);
    ctx.lineTo(x + 30, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Mech Shoe 2
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 24, y + 42);
    ctx.lineTo(x + 18, y + 42.8);
    ctx.lineTo(x + 17, y + 44);
    ctx.lineTo(x + 24, y + 44);
    ctx.closePath()
    ctx.stroke();
    ctx.fill();

    //Mech Hand 1
    ctx.fillStyle = Colors.skin;
    ctx.beginPath();
    ctx.arc(x + 13, y + 31, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //Mech Arm Sleeve 1
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 26);
    ctx.bezierCurveTo(x + 33, y + 31, x + 14, y + 40, x + 15, y + 33);
    ctx.lineTo(x + 15, y + 31);
    ctx.bezierCurveTo(x + 25, y + 33, x + 25, y + 30, x + 27, y + 29);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}