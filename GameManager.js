import { GameObject } from "./GameObject";
import { UnitTypes } from "./Units/UnitTypes";
import { Unit } from "./Unit";
import { Colors } from "./Colors";
import { Grid } from "./Grid";
import { Building } from "./Building";
import { Factory } from "./Buildings/Factory";
import { PlayerManager } from "./PlayerManager";

export const GameManager = (function() {

    let originalX = 0;
    let originalY = 0;
    let selectedObject = {};

    var getSelectedCoords = function() {
        if (selectedObject instanceof GameObject) {
            var cords = {
                x: selectedObject.getX(),
                y: selectedObject.getY()
            };
            return cords;
        }
        return {x: 0, y: 0};
    };

    var getSelectedUnit = function() {
        return selectedObject;
    };

    var getZoneColor = function() {
        if (selectedObject instanceof Unit) {
            if (selectedObject.isMoving()) {
                return Colors.skyBlue;
            }
            else if (selectedObject.isAttacking()){
                return Colors.attackColor;
            }
        }
        return;
    }

    var setSelectedUnit = function(ray) {
        putItBack();
        originalX = ray.x;
        originalY = ray.y;
        selectedObject = ray.gameObject;
    };

    var getFocusZone = function() {
        let movementRange;
        let focusSize;
        let focusTiles = new Array();
        if (selectedObject instanceof Unit) {
            if (selectedObject.isMoving()) {
                movementRange = selectedObject.getMovementRange();
                focusSize = selectedObject.getMovementRange() * 2;
            }
            else if (selectedObject.isAttacking()){
                movementRange = selectedObject.getAttackRange();
                focusSize = selectedObject.getAttackRange() * 2;
            }
            else {
                return focusTiles;
            }

            let iterations = 0;
            let diamondOffset = 1;
            
            let startCoords = {
                start_x: selectedObject.getX(),
                start_y: selectedObject.getY()
            };

            for (var a = 0; a <= focusSize; a++) {
                for (var b = 0; b <= iterations; b++) {
                    let coords = {
                        x: startCoords.start_x,
                        y: ( startCoords.start_y + (movementRange - a))
                    }

                    if (selectedObject.isMoving()) {
                        if (b == 0) {
                            if (!Grid.isImpassable(coords.x, coords.y)) {
                                focusTiles.push({x: coords.x, y: coords.y});
                            }
                        }
                        else {
                            if (!Grid.isImpassable((coords.x - b), coords.y)) {
                                focusTiles.push({x: (coords.x - b), y: coords.y});
                            }
                            if (!Grid.isImpassable((coords.x + b), coords.y)) {
                                focusTiles.push({x: (coords.x + b), y: coords.y});
                            }
                        }
                    }
                    else {
                        if (b == 0) {
                            focusTiles.push({x: coords.x, y: coords.y});
                        }
                        else {
                            focusTiles.push({x: (coords.x - b), y: coords.y});
                            focusTiles.push({x: (coords.x + b), y: coords.y});
                        }
                    }
                    
                }
                iterations = iterations + diamondOffset;
                if(iterations === movementRange) {
                    diamondOffset = diamondOffset * -1;
                }   
            }
        }
        return focusTiles;
    };

    var step1Initiate = function() {
        if (!checkOwnership()) {
            return;
        }
        
        if (isSelectedObjectUnit()) {
            if (!selectedObject.isExhausted()) {
                document.getElementById('step1Dialog').show();
            }
        }
    };

    var launchBuildingDialog = function() {
        if (!checkOwnership()) {
            return;
        }

        if (selectedObject instanceof Factory) {
            document.getElementById('factoryDialog').show();
        }
    };

    var captureBuilding = function() {
        let coords = getSelectedCoords();
        var buildingToCapture = Grid.getBuilding(coords.x, coords.y);
        buildingToCapture.setOwner(PlayerManager.getActivePlayer());
        commitUnit();
    };

    var step1AfterMath = function(x, y) {
        selectedObject.moveTo(x, y);
        selectedObject.standBy();
        if (Grid.isCapturable(x, y)) {
            console.log("capturable");
            document.getElementById('step2DialogInfantry').show();   
        }
        else {
            document.getElementById('step2Dialog').show();
        }
    };

    var step2AfterMath = function(enemyUnit) {
        commitUnit();
        dealDamage(enemyUnit);
        selectedObject.standBy();
        
    }

    var isSelectedObjectUnit = function() {
        if (selectedObject instanceof Unit) {
            return true;
        }
        return false;
    };

    var isSelectedObjectBuilding = function() {
        if (selectedObject instanceof Building) {
            return true;
        }
        return false;
    }

    var putItBack = function() {
        if (isSelectedObjectUnit()) {
            selectedObject.moveTo(originalX, originalY);
            selectedObject.standBy();
        }
    };

    var resetState = function() {
        putItBack();
        document.getElementById("step1Dialog").close();
        document.getElementById("step2Dialog").close();
        document.getElementById("factoryDialog").close();
    };

    var commitUnit = function() {
        Grid.replacePositions(originalX, originalY, selectedObject);
        originalX = selectedObject.getX();
        originalY = selectedObject.getY();
        if (isSelectedObjectUnit()) {
            selectedObject.exhaustUnit();
        }
    };

    var commitUnitBeforeAttack = function() {
        Grid.replacePositions(originalX, originalY, selectedObject);
        originalX = selectedObject.getX();
        originalY = selectedObject.getY();
    }

    var combat = function(attacker, enemyUnit) {
        let damage = attacker.getAttackPower();
        if (enemyUnit.getUnitType() === UnitTypes.Air) {
            damage = attacker.getAirAttack();
        }
        
        damage = damage - enemyUnit.getDefense();

        if (enemyUnit.isArmored() && attacker.isTankBuster()) {
            damage = damage * 2;
        }

        let total = attacker.getHitPoints() * damage;

        return total;
    };

    var dealDamage = function(enemyUnit) {
        let attackerDamage = Math.floor(combat(selectedObject, enemyUnit) / 10);
        let attackerModifier = Math.floor(Math.random() * 2);  // returns a random integer from 0 to 1
        attackerDamage = attackerDamage + attackerModifier;
        enemyUnit.takeDamage(attackerDamage);

        var distanceX = Math.abs(selectedObject.getX() - enemyUnit.getX());
        var distanceY = Math.abs(selectedObject.getY() - enemyUnit.getY());

        if (!enemyUnit.isRanged() && (distanceX <= 1 && distanceY <= 1)) {
            let defenderDamage = Math.floor(combat(enemyUnit, selectedObject) / 10);
            let defenderModifier = Math.floor(Math.random() * 2) + 1;  // returns a random integer from 0 to 2 (defender equalizer)
            defenderDamage = defenderDamage + defenderModifier;
            selectedObject.takeDamage(defenderDamage);
        }
    };

    function checkOwnership() {
        if (PlayerManager.doesControl(selectedObject.getOwner().getPlayerId())) {
            return true;
        }
        return false;
    }

    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        getFocusZone,
        getZoneColor,
        setSelectedUnit,
        step1Initiate,
        step1AfterMath,
        step2AfterMath,
        commitUnitBeforeAttack,
        launchBuildingDialog,
        captureBuilding,
        isSelectedObjectUnit,
        isSelectedObjectBuilding,
        putItBack,
        resetState,
        commitUnit,
        combat,
        dealDamage
    };

    return myPublicAPI;
})()