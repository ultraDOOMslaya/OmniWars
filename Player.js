import { GameObject } from "./GameObject";

export function Player(credits, resources, army) {
    this.active = false;
    this.credits = credits;
    this.resources = resources;
    this.army = army;
}

Player.prototype.setActive = function() {
    this.active = !this.active;
}

Player.prototype.isActive = function() {
    return this.active;
}

Player.prototype.getCredits = function() {
    return this.credits;
}


