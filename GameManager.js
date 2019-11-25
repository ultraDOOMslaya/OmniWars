import { GameObject } from "./GameObject";

export const GameManager = (function() {

    let selectedX = 0;
    let selectedY = 0;

    var getSelectedCoords = function() {
        var cords = {
            x: selectedX,
            y: selectedY
        };
        return cords;
    }

    var setSelectedUnit = function(ray) {
        console.log("unit is: {}", ray);
        selectedX = ray.x;
        selectedY = ray.y;
    };


    var myPublicAPI = {
        getSelectedCoords,
        setSelectedUnit
    };

    return myPublicAPI;
})()