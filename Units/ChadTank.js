import { CombatStats } from "../CombatStats";
import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function ChadTank(x, y, playerObject) {
    this.movementRange = CombatStats.chadTank.movementRange;
    this.attackRange = CombatStats.chadTank.attackRange;
    this.directCombat = CombatStats.chadTank.directCombat;
    this.armored = CombatStats.chadTank.armored;
    this.attackPower = CombatStats.chadTank.attackPower;
    this.airAttack = CombatStats.chadTank.airAttack;
    this.defense = CombatStats.chadTank.defense;
    this.tankBuster = CombatStats.chadTank.tankBuster;
    this.groundOnly = CombatStats.chadTank.groundOnly;
    this.unitType = CombatStats.chadTank.unitType;
    Unit.call(this, x, y, playerObject, this.directCombat, this.armored, this.movementRange, this.attackRange, animateFacingRightFrameOne, 
              animateFacingRightFrameTwo, this.attackPower, this.airAttack, this.defense, this.tankBuster, this.groundOnly, this.unitType);
};

ChadTank.prototype = Object.create(Unit.prototype);

function animateFacingRightFrameOne(ctx, teamColor, x, y) {
    ctx.fillStyle = teamColor;

    //Tank Barrel
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 17);
    ctx.lineTo(x + 40, y + 17);
    ctx.lineTo(x + 40, y + 27);
    ctx.lineTo(x + 30, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Tank head
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 37);
    ctx.lineTo(x + 10, y + 22);
    ctx.lineTo(x + 15, y + 17);
    ctx.lineTo(x + 30, y + 17);
    ctx.lineTo(x + 37, y + 27);
    ctx.lineTo(x + 37, y + 32);
    ctx.lineTo(x + 37, y + 37);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Tank Tread
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 25, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 35, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke();

    //Tank body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 27);
    ctx.lineTo(x + 25, y + 27);
    ctx.lineTo(x + 25, y + 30);
    ctx.lineTo(x + 35, y + 30);
    ctx.lineTo(x + 35, y + 33);
    ctx.lineTo(x + 45, y + 33);
    ctx.lineTo(x + 45, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.lineTo(x + 5, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function animateFacingRightFrameTwo(ctx, teamColor, x, y) {
    ctx.fillStyle = teamColor;

    //Tank Barrel
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 15);
    ctx.lineTo(x + 50, y + 15);
    ctx.lineTo(x + 50, y + 25);
    ctx.lineTo(x + 30, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Tank head
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 10, y + 20);
    ctx.lineTo(x + 15, y + 15);
    ctx.lineTo(x + 30, y + 15);
    ctx.lineTo(x + 37, y + 25);
    ctx.lineTo(x + 37, y + 30);
    ctx.lineTo(x + 37, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Tank Tread
    ctx.fillStyle = Colors.gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 25, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 35, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = Colors.black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke();

    //Tank body
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 25);
    ctx.lineTo(x + 25, y + 25);
    ctx.lineTo(x + 25, y + 28);
    ctx.lineTo(x + 35, y + 28);
    ctx.lineTo(x + 35, y + 31);
    ctx.lineTo(x + 45, y + 31);
    ctx.lineTo(x + 45, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.lineTo(x + 5, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}