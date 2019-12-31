import { CombatStats } from "../CombatStats";
import { Unit } from "../Unit";
import { Colors } from "../Colors";

export function Tank(x, y, playerObject) {
    this.movementRange = CombatStats.tank.movementRange;
    this.attackRange = CombatStats.tank.attackRange;
    this.directCombat = CombatStats.tank.directCombat;
    this.armored = CombatStats.tank.armored;
    this.attackPower = CombatStats.tank.attackPower;
    this.airAttack = CombatStats.tank.airAttack;
    this.defense = CombatStats.tank.defense;
    this.tankBuster = CombatStats.tank.tankBuster;
    this.groundOnly = CombatStats.tank.groundOnly;
    this.unitType = CombatStats.tank.unitType;
    Unit.call(this, x, y, playerObject, this.directCombat, this.armored, this.movementRange, this.attackRange, animateFacingRightFrameOne, 
              animateFacingRightFrameTwo, this.attackPower, this.airAttack, this.defense, this.tankBuster, this.groundOnly, this.unitType);
};

Tank.prototype = Object.create(Unit.prototype);

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
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 24);
    ctx.lineTo(x + 38, y + 24);
    ctx.lineTo(x + 38, y + 28);
    ctx.lineTo(x + 26, y + 28);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

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
    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 26);
    ctx.lineTo(x + 36, y + 26);
    ctx.lineTo(x + 36, y + 30);
    ctx.lineTo(x + 26, y + 30);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

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