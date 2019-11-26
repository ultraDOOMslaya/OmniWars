import { GameObject } from "./GameObject";

export function Unit(x, y) {
    this.animationState = 'Idle';
    this.exhausted = false;
    this.movementRange = 3;
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

Unit.prototype.getAnimationState = function() {
    return this.animationState;
};

