import { CombatStats } from "../CombatStats";
import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function Rocket(x, y, playerObject) {
    this.movementRange = CombatStats.rocket.movementRange;
    this.attackRange = CombatStats.rocket.attackRange;
    this.directCombat = CombatStats.rocket.directCombat;
    this.armored = CombatStats.rocket.armored;
    this.attackPower = CombatStats.rocket.attackPower;
    this.airAttack = CombatStats.rocket.airAttack;
    this.defense = CombatStats.rocket.defense;
    this.tankBuster = CombatStats.rocket.tankBuster;
    this.groundOnly = CombatStats.rocket.groundOnly;
    this.unitType = CombatStats.rocket.unitType;
    Unit.call(this, x, y, playerObject, this.directCombat, this.armored, this.movementRange, this.attackRange, animateFacingRightFrameOne, 
              animateFacingRightFrameTwo, this.attackPower, this.airAttack, this.defense, this.tankBuster, this.groundOnly, this.unitType);
};

Rocket.prototype = Object.create(Unit.prototype);

function animateFacingRightFrameOne(ctx, teamColor, x, y) {
    ctx.fillStyle = teamColor;

    //Tank Tread
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 30, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke();

    //Rocket body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 35);
    ctx.lineTo(x + 30, y + 35);
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

    //Rocket Cannon
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 33);
    ctx.lineTo(x + 35, y + 20);
    ctx.lineTo(x + 25, y + 10);
    ctx.lineTo(x + 0, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function animateFacingRightFrameTwo(ctx, teamColor, x, y) {
    ctx.fillStyle = teamColor;

    //Rocket Tires
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 30, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke();

    //Rocket body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 37);
    ctx.lineTo(x + 30, y + 37);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 35, y + 27);
    ctx.lineTo(x + 40, y + 32);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Window
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 32);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 38, y + 34);
    ctx.lineTo(x + 40, y + 34);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Rocket Cannon
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 35, y + 22);
    ctx.lineTo(x + 25, y + 12);
    ctx.lineTo(x + 0, y + 27);
    ctx.lineTo(x + 10, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}