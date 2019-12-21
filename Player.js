import { GameObject } from "./GameObject";
import { Color } from "./Colors";

export function Player(credits, resources, army, teamColor) {
    this.active = false;
    this.credits = credits;
    this.resources = resources;
    this.army = army;
    this.teamColor = teamColor
}

Player.prototype.setActive = function() {
    this.active = !this.active;
};

Player.prototype.isActive = function() {
    return this.active;
};

Player.prototype.getCredits = function() {
    return this.credits;
};

Player.prototype.getTeamColor = function() {
    return this.teamColor;
};


