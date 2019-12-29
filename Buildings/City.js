import { Building } from "../Building";
import { Colors } from "../Colors";

export function City(x, y, player) {
    Building.call(this, x, y, player, animateCity);
};

City.prototype = Object.create(Building.prototype);

function animateCity(ctx, x, y, windowColor, teamColor) {
    ctx.fillStyle = teamColor;

    //Middle Building
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 40);
    ctx.lineTo(x + 15, y + 5);
    ctx.lineTo(x + 35, y + 5);
    ctx.lineTo(x + 30, y + 40);
    ctx.lineTo(x + 20, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Right Building
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 42);
    ctx.lineTo(x + 45, y + 12);
    ctx.lineTo(x + 25, y + 12);
    ctx.lineTo(x + 20, y + 42);
    ctx.lineTo(x + 40, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = windowColor;
    ctx.beginPath();
    ctx.fillRect(x + 38, y + 18, 4, 4);
    ctx.fillRect(x + 30, y + 18, 4, 4);

    ctx.fillRect(x + 37, y + 28, 4, 4);
    ctx.fillRect(x + 29, y + 28, 4, 4);

    ctx.fillStyle = teamColor;

    //Left Building
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 45);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x + 30, y + 15);
    ctx.lineTo(x + 30, y + 45);
    ctx.lineTo(x + 15, y + 45);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = windowColor;
    ctx.beginPath();
    ctx.fillRect(x + 13, y + 20, 4, 4);
    ctx.fillRect(x + 23, y + 20, 4, 4);

    ctx.fillRect(x + 14, y + 30, 4, 4);
    ctx.fillRect(x + 22, y + 30, 4, 4); 
}