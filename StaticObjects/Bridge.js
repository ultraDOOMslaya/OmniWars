import { StaticObject } from "../StaticObject";
import { Colors } from "../Colors";
import { Grid } from "../Grid";

export function Bridge(x, y) {
    this.animate_x = x;
    this.animate_y = y;
    StaticObject.call(this, x, y);
};

Bridge.prototype = Object.create(StaticObject.prototype);

Bridge.prototype.animate = function(ticks, ctx) {
    ctx.fillStyle = Colors.gray;
    ctx.fillRect((this.animate_x * Grid.getDimension()), (this.animate_y * Grid.getDimension()), 50, 50);
}
