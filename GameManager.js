import { GameObject } from "./GameObject";
import { Unit } from "./Unit";

export const GameManager = (function() {

    let selectedX = 0;
    let selectedY = 0;
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

    var setSelectedUnit = function(ray) {
        console.log("unit is: {}", ray.gameObject);
        selectedX = ray.x;
        selectedY = ray.y;
        selectedObject = ray.gameObject;
        console.log("instance of unit? {}", (selectedObject instanceof Unit));
    };

    var getFocusZone = function() {
        let focusTiles = new Array();
        if (selectedObject instanceof Unit) {
            let iterations = 0;
            let diamondOffset = 1;
            let movementRange = selectedObject.getMovementRange();
            let focusSize = selectedObject.getMovementRange() * 2;
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

    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        getFocusZone,
        setSelectedUnit
    };

    return myPublicAPI;
})()