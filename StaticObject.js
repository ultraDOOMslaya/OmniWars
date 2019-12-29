import { GameObject } from "./GameObject";

export function StaticObject(x, y, playerObject) {

    GameObject.call(this, x, y, playerObject, true);
};

StaticObject.prototype = Object.create(GameObject.prototype);