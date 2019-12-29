import { GameObject } from "./GameObject";
import { Color } from "./Colors";

export function Player(playerId, credits, resources, army, teamColor, creditLabelId) {
    this.playerId = playerId;
    this.active = false;
    this.credits = credits;
    this.resources = resources;
    this.army = army;
    this.teamColor = teamColor;
    this.creditLabelId = creditLabelId;
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

Player.prototype.addCredits = function(creditsToAdd) {
    this.credits = this.credits + creditsToAdd;
};

Player.prototype.getTeamColor = function() {
    return this.teamColor;
};

Player.prototype.getPlayerId = function() {
    return this.playerId;
}

Player.prototype.setCreditLabel = function() {
    console.log("players credits: {}", this.credits);
    document.getElementById(this.creditLabelId).innerHTML = this.credits;
}
