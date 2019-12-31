import { GameObject } from "./GameObject";
import { Player } from "./Player";
import { Colors } from "./Colors";
import { Grid } from "./Grid";
import { CombatStats } from "./CombatStats";
import { Unit } from "./Unit";
import { GameManager } from "./GameManager";

import { Infantry } from "./Units/Infantry.js";
import { Mech } from "./Units/Mech.js";
import { Tank } from "./Units/Tank.js";
import { Rocket } from "./Units/Rocket.js";
import { AntiAir } from "./Units/AntiAir.js";
import { Missile } from "./Units/Missile.js";

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

    var getActivePlayer = function() {
        return activePlayer;
    };

    var addPlayer = function(player) {
        players.push(player);
    };

    var purchase = function(unitName) {
        let x = GameManager.getSelectedCoords().x;
        let y = GameManager.getSelectedCoords().y;

        switch(unitName) {
            case "Infantry":
                createUnit(new Infantry(x, y, activePlayer), CombatStats.infantry.cost);
                break;
            case "Mech":
                createUnit(new Mech(x, y, activePlayer), CombatStats.mech.cost);
                break;
            case "Recon":
                createUnit(new AntiAir(x, y, activePlayer), CombatStats.antiAir.cost);
                break;
            case "Artillery":
                createUnit(new Missile(x, y, activePlayer), CombatStats.missile.cost);
                break;
            case "Tank":
                createUnit(new Tank(x, y, activePlayer), CombatStats.tank.cost);
                break;
            case "Rocket":
                createUnit(new Rocket(x, y, activePlayer), CombatStats.rocket.cost);
                break;
            case "ChadTank":
                createUnit(new ChadTank(x, y, activePlayer), CombatStats.chadTank.cost);
                break;
        }
    };

    var doesControl = function(playerId) {
        if (activePlayer.getPlayerId() === playerId) {
            return true;
        }
        return false;
    };

    function refreshActivePlayerUnits(units) {
        for (var x = 0; x < units.length; x++) {
            units[x].refreshUnit();
        }
    }

    function createUnit(unit, cost) {
        var factoryDialog = document.getElementById("factoryDialog");
        if (cost > activePlayer.getCredits()) {
            document.getElementById('showCoords').innerHTML = "Insufficient funds.";
        }
        else {
            activePlayer.subtractCredits(cost);
            activePlayer.setCreditLabel();
            Grid.addGameObject(unit.getX(), unit.getY(), unit);
            unit.exhaustUnit();
            document.getElementById('showCoords').innerHTML = "Purchase complete.";
            factoryDialog.close();
        }
        
    }

    var myPublicAPI = {
        turnOne,
        endTurn,
        upKeep,
        addPlayer,
        getActivePlayer,
        purchase,
        doesControl
    };

    return myPublicAPI;
})();