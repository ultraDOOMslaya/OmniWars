import { GameObject } from "./GameObject";
import { Player } from "./Player";
import { Colors } from "./Colors";
import { Grid } from "./Grid";

export const PlayerManager = (function() {
    
    let players = new Array();
    let activePlayer = {};
    let creditMultiplyer = 1000;

    var turnOne = function() {
        activePlayer = players.shift();
        upKeep();
    };

    var endTurn = function() {
        if (activePlayer instanceof Player) {
            players.push(activePlayer);
            activePlayer = players.shift();
        }
        else {
            activePlayer = players.shift();
        }
        upKeep();
    };

    var upKeep = function() {
        let creditsToAdd = Grid.playerBuildings(activePlayer);
        let activaePlayerUnits = Grid.getPlayerUnits(activePlayer);

        creditsToAdd = creditsToAdd * creditMultiplyer;
        activePlayer.addCredits(creditsToAdd);
        activePlayer.setCreditLabel();
        refreshActivePlayerUnits(activaePlayerUnits);        

    };

    var addPlayer = function(player) {
        players.push(player);
    }

    var doesControl = function(playerId) {
        console.log("player id: {}", playerId);
        console.log("activeplayer: {}", playerId);
        if (activePlayer.getPlayerId() === playerId) {
            return true;
        }
        return false;
    };

    function refreshActivePlayerUnits(units) {
        console.log(units);
        for (var x = 0; x < units.length; x++) {
            console.log(units[x]);
            units[x].refreshUnit();
        }
    }

    var myPublicAPI = {
        turnOne,
        endTurn,
        upKeep,
        addPlayer,
        doesControl
    };

    return myPublicAPI;
})();