import { StaticObject } from "../StaticObject";
import { Colors } from "../Colors";
import { Grid } from "../Grid";

export function Sea(x, y) {
    this.animate_x = x;
    this.animate_y = y;
    StaticObject.call(this, x, y);
};

Sea.prototype = Object.create(StaticObject.prototype);

Sea.prototype.animate = function(ticks, ctx) {
    ctx.fillStyle = Colors.seaColor;
    ctx.fillRect((this.animate_x * Grid.getDimension()), (this.animate_y * Grid.getDimension()), 50, 50);
}
