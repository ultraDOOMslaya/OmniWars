import { GameObject } from "./GameObject";
import { Grid } from "./Grid";
import { Colors } from "./Colors";

export function Unit(x, y, directCombat, armored, movementRange, attackRange, animateIdleOne, animateIdleTwo, attackPower, airAttack, defense, tankBuster, groundOnly, unitType) {
    /* Unit States */
    this.animationState = 'Idle';
    this.exhausted = false;
    this.haste = true;
    this.moving = false;
    this.attacking = false;

    /* Unit Properties */
    this.movementRange = movementRange;
    this.attackRange = attackRange;
    this.animateIdleOne = animateIdleOne;
    this.animateIdleTwo = animateIdleTwo;
    this.directCombat = directCombat;
    this.armored = armored;
    this.attackPower = attackPower;
    this.airAttack = airAttack;
    this.defense = defense;
    this.tankBuster = tankBuster;
    this.groundOnly = groundOnly;
    this.unitType = unitType;
    this.hitPoints = 10;
    
    GameObject.call(this, x, y, false);
};

Unit.prototype = Object.create(GameObject.prototype);

GameObject.prototype.moveTo = function(x, y) {
    if (!this.isStatic()) {
        this.x = x;
        this.y = y;
    }
};

GameObject.prototype.getMovementRange = function() {
    return this.movementRange;
};

Unit.prototype.getAttackRange = function() {
    return this.attackRange;
};

Unit.prototype.getAttackPower = function() {
    return this.attackPower;
};

Unit.prototype.getAirAttack = function() {
    return this.airAttack;
};

Unit.prototype.getDefense = function() {
    return this.defense;
};

Unit.prototype.getGroundOnly = function() {
    return this.groundOnly;
};

Unit.prototype.getHitPoints = function() {
    return this.hitPoints;
};

Unit.prototype.getUnitType = function() {
    return this.unitType;
};

Unit.prototype.setHitPoints = function(hitPoints) {
    this.hitPoints = hitPoints;
};

GameObject.prototype.exhaustUnit = function() {
    this.exhausted = true;
};

GameObject.prototype.refreshUnit = function() {
    this.exhausted = false;
};

Unit.prototype.exhaust = function() {
    this.exhausted = true;
};

Unit.prototype.isExhausted = function() {
    return this.exhausted;
};

Unit.prototype.flush = function() {
    this.exhausted = false;
};

GameObject.prototype.hasHaste = function() {
    return this.hasHaste;
};

Unit.prototype.getAnimationState = function() {
    return this.animationState;
};

Unit.prototype.setMoving = function() {
    this.moving = true;
    this.attacking = false;
};

Unit.prototype.setAttacking = function() {
    this.moving = false;
    this.attacking = true;
};

Unit.prototype.standBy = function() {
    this.moving = false;
    this.attacking = false;
};

Unit.prototype.isMoving = function() {
    return this.moving;
};

Unit.prototype.isAttacking = function() {
    return this.attacking;
};

Unit.prototype.isAwaitingOrders = function() {
    if (this.isAttacking) {
        return false;
    }
    if (this.isMoving) {
        return false;
    }
    if (this.isExhausted) {
        return false;
    }
    return true;
};

Unit.prototype.isArmored = function() {
    return this.armored;
};

Unit.prototype.isTankBuster = function() {
    return this.tankBuster;
};

Unit.prototype.animate = function(tick, ctx, teamColor) {
    let baseColorPercentage = 0;
    if (this.isExhausted()) {
        baseColorPercentage = -35;
    }
    if (this.getAnimationState() == 'Idle') {
        if (tick <= 2) {
            this.animateIdleOne(ctx, Colors.colorMutator(teamColor, baseColorPercentage), (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()));
            renderHitPoints(ctx, Colors, this.getHitPoints(), (this.getX() * Grid.getDimension()) + 25, (this.getY() * Grid.getDimension()) + 43);
        }
        else if (tick <= 4) {
            this.animateIdleTwo(ctx, Colors.colorMutator(teamColor, baseColorPercentage), (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()));
            renderHitPoints(ctx, Colors, this.getHitPoints(), (this.getX() * Grid.getDimension()) + 25, (this.getY() * Grid.getDimension()) + 43 + 3);
        }
    }
}

function renderHitPoints(ctx, Colors, hitPoints, x, y) {
    if (hitPoints < 10) {
        ctx.font = "bold 15px Comic Sans MS";
        ctx.lineWidth = 3;
        ctx.strokeStyle = Colors.black;
        ctx.strokeText(hitPoints, x, y)
        ctx.fillStyle = Colors.white;
        ctx.fillText(hitPoints, x, y);
    }
}