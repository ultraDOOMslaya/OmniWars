import { GameObject } from "./GameObject";
import { Unit } from "./Unit";

export const GameManager = (function() {

    let selectedX = 0;
    let selectedY = 0;
    let selectedUnit = {};

    var getSelectedCoords = function() {
        var cords = {
            x: selectedX,
            y: selectedY
        };
        return cords;
    };

    var getSelectedUnit = function() {
        return selectedUnit;
    };

    var setSelectedUnit = function(ray) {
        console.log("unit is: {}", ray.gameObject);
        selectedX = ray.x;
        selectedY = ray.y;
        selectedUnit = ray.gameObject;
        console.log("instance of unit? {}", (selectedUnit instanceof Unit));
    };


    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        setSelectedUnit
    };

    return myPublicAPI;
})()