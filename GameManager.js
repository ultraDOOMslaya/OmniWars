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


    var myPublicAPI = {
        getSelectedCoords,
        getSelectedUnit,
        setSelectedUnit
    };

    return myPublicAPI;
})()