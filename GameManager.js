import { GameObject } from "./GameObject";

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
        console.log("unit is: {}", ray);
        selectedX = ray.x;
        selectedY = ray.y;
        var selectedUnit = ray.gameObject;
    };


    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        setSelectedUnit
    };

    return myPublicAPI;
})()