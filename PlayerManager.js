import { GameObject } from "./GameObject";
import { Player } from "./Player";

export const PlayerManager = (function() {
    
    let players = new Array();
    let activePlayer = {};

    var startTurn = function() {
        if (activePlayer instanceof Player) {
            players.push(activePlayer);
            activePlayer = players.shift();
        }
        else {
            activePlayer = players.shift();
        }
        
    };

    var myPublicAPI = {
        startTurn
    };

    return myPublicAPI;
})();