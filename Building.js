import { StaticObject } from "./StaticObject";
import { Player } from "./Player";

export function Building(x, y, playerObject) {

    StaticObject.call(this, x, y);
    this.owner = playerObject;
};

Building.prototype = Object.create(StaticObject.prototype);

Building.prototype.getOwner = function() {
    return this.owner;
};

Building.prototype.setOwner = function(newOwner) {
    this.owner = newOwner;
};

Building.prototype.animate = function(tick, ctx) {
    if (this.owner instanceof Player) {
        
    }
};