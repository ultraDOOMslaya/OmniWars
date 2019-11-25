import { GameObject } from "./GameObject";

export function StaticObject(x, y) {
    console.log("staticObjects x and y: {} {}", x, y);

    GameObject.call(this, x, y, true);
};

StaticObject.prototype = Object.create(GameObject.prototype);