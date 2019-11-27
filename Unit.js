import { GameObject } from "./GameObject";
import { Grid } from "./Grid";

export function Unit(x, y, animateIdleOne, animateIdleTwo) {
    this.animationState = 'Idle';
    this.exhausted = false;
    this.haste = true;
    this.movementRange = 3;
    this.animateIdleOne = animateIdleOne;
    this.animateIdleTwo = animateIdleTwo;
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

GameObject.prototype.exhaustUnit = function() {
    this.exhausted = true;
};

GameObject.prototype.refreshUnit = function() {
    this.exhausted = false;
};

GameObject.prototype.isExhausted = function() {
    return this.exhausted;
};

GameObject.prototype.hasHaste = function() {
    return this.hasHaste;
};

Unit.prototype.getAnimationState = function() {
    return this.animationState;
};

Unit.prototype.animate = function(tick, ctx, teamColor) {
    if (this.getAnimationState() == 'Idle') {
        if (tick <= 2) {
            this.animateIdleOne(ctx, teamColor, (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()));
        }
        else if (tick <= 4) {
            this.animateIdleTwo(ctx, teamColor, (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()));
        }
    }
}