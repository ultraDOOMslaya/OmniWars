import { StaticObject } from "../StaticObject";

export function Turf(x, y) {
    
    StaticObject.call(this, x, y);
};

Turf.prototype = Object.create(StaticObject.prototype);