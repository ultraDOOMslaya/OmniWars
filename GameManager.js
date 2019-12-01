import { GameObject } from "./GameObject";
import { UnitTypes } from "./Units/UnitTypes";
import { Unit } from "./Unit";
import { Colors } from "./Colors";
import { Grid } from "./Grid";

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
                return Colors.focusColor;
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

                    if (b == 0) {
                        focusTiles.push({x: coords.x, y: coords.y});
                    }
                    else {
                        focusTiles.push({x: (coords.x - b), y: coords.y});
                        focusTiles.push({x: (coords.x + b), y: coords.y});
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
        if (isSelectedObjectUnit()) {
            if (!selectedObject.isExhausted()) {
                document.getElementById('step1Dialog').show();
            }
        }
    };

    var step1AfterMath = function(x, y) {
        selectedObject.moveTo(x, y);
        selectedObject.standBy();
        document.getElementById('step2Dialog').show();
    };

    var isSelectedObjectUnit = function() {
        if (selectedObject instanceof Unit) {
            return true;
        }
        return false;
    };

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
    };

    var commitUnit = function() {
        Grid.replacePositions(originalX, originalY, selectedObject);
        originalX = selectedObject.getX();
        originalY = selectedObject.getY();
        if (isSelectedObjectUnit()) {
            selectedObject.exhaustUnit();
        }
    };

    var combat = function(enemyUnit) {
        let damage = selectedObject.getAttackPower();
        if (enemyUnit.getUnitType() === UnitTypes.Air) {
            damage = selectedObject.getAirAttack();
        }
        
        damage = damage - enemyUnit.getDefense();

        if (enemyUnit.isArmored() && selectedObject.isTankBuster()) {
            damage = damage * 2;
        }

        let total = selectedObject.getHitPoints() * damage;
        return total;
    }

    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        getFocusZone,
        getZoneColor,
        setSelectedUnit,
        step1Initiate,
        step1AfterMath,
        isSelectedObjectUnit,
        putItBack,
        resetState,
        commitUnit,
        combat
    };

    return myPublicAPI;
})()