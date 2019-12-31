import { StaticObject } from "./StaticObject";
import { Player } from "./Player";
import { Grid } from "./Grid";
import { Colors } from "./Colors";

export function Building(x, y, playerObject, animateBuilding) {
    this.animateBuilding = animateBuilding;
    StaticObject.call(this, x, y, playerObject);
    
};

Building.prototype = Object.create(StaticObject.prototype);

Building.prototype.setOwner = function(newOwner) {
    console.log("new ownership: {}", newOwner);
    this.owner = newOwner;
};

Building.prototype.animate = function(tick, ctx) {
    if (this.owner instanceof Player) {
        var windowColor;
        if (tick == 1) {
            windowColor = "#F9A602";
        }
        else if (tick == 2) {
            windowColor = "#FFD300";
        }
        else if (tick == 3) {
            windowColor = "#FADA5E";
        }
        else if (tick == 4) {
            windowColor = "#F8DE7E";
        }
        this.animateBuilding(ctx, (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()), windowColor, this.owner.teamColor);
    }
    else {
        this.animateBuilding(ctx, (this.getX() * Grid.getDimension()), (this.getY() * Grid.getDimension()), Colors.black, Colors.industrialGray);
    }
};