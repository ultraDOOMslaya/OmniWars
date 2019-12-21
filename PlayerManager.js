import { GameObject } from "./GameObject";
import { Player } from "./Player";

export const PlayerManager = (function() {
    
    let players = new Array();
    let activePlayer = {};

    var endTurn = function() {
        if (activePlayer instanceof Player) {
            players.push(activePlayer);
            activePlayer = players.shift();
        }
        else {
            activePlayer = players.shift();
        }
        
    };

    var upKeep = function() {

    };

    var myPublicAPI = {
        endTurn,
        upKeep
    };

    return myPublicAPI;
})();