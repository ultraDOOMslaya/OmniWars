import { Building } from "../Building";
import { Colors } from "../Colors";

export function Factory(x, y, player) {
    Building.call(this, x, y, player, animateFactory);
};

Factory.prototype = Object.create(Building.prototype);

function animateFactory(ctx, x, y, windowColor, teamColor) {
    ctx.fillStyle = teamColor;

    //Building
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 40);
    ctx.lineTo(x + 10, y + 20);
    ctx.lineTo(x + 40, y + 20);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 10, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Roof
    ctx.beginPath();
    ctx.moveTo(x + 7, y + 20);
    ctx.lineTo(x + 10, y + 10);
    ctx.lineTo(x + 40, y + 10);
    ctx.lineTo(x + 43, y + 20);
    ctx.lineTo(x + 7, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Left Garage Door
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 15, y + 30);
    ctx.lineTo(x + 20, y + 30);
    ctx.lineTo(x + 20, y + 40);
    ctx.lineTo(x + 15, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Left Garage Door
    ctx.fillStyle = Colors.black;
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 40);
    ctx.lineTo(x + 30, y + 30);
    ctx.lineTo(x + 35, y + 30);
    ctx.lineTo(x + 35, y + 40);
    ctx.lineTo(x + 30, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = windowColor;
    ctx.beginPath();
    ctx.fillRect(x + 11, y + 23, 4, 4);
    ctx.fillRect(x + 18, y + 23, 4, 4);

    ctx.fillRect(x + 28, y + 23, 4, 4);
    ctx.fillRect(x + 35, y + 23, 4, 4); 
}