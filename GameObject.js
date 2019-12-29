export function GameObject(x, y, playerObject, isStaticObject) {
    this.owner = playerObject;
    this.x = x;
    this.y = y;
    this.isStaticObject = isStaticObject;
};

GameObject.prototype.getOwner = function() {
    return this.owner;
};

GameObject.prototype.getX = function() {
    return this.x;
};

GameObject.prototype.getY = function() {
    return this.y;
};

GameObject.prototype.isStatic = function() {
    return this.isStaticObject;
};
 
/*
export const GameObject = {
    init: function(x, y, isStatic) {
        this.x = x;
        this.y = y;
        this.isStatic = isStatic;
    },
    getX: function() {
        return "I am " + this.me;
    },
    getY: function() {
        return this.y;
    },
    isStatic: function() {
        return this.isStatic;
    }
};
*/