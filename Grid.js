import { GameManager } from "./GameManager";
import { StaticObject } from "./StaticObject";
import { Turf } from "./StaticObjects/Turf";
import { Sea } from "./StaticObjects/Sea";
import { Unit } from "./Unit";
import { Building } from "./Building";
import { GameObject } from "./GameObject";
import { PlayerManager } from "./PlayerManager";
import { Infantry } from "./Units/Infantry";
import { Mech } from "./Units/Mech";

export function showCoords(event) {
    var x = event.clientX - 10;
    var y = event.clientY - 10;
    var coords = "X coordinates: " + x + ", Y coordinates: " + y;
    document.getElementById('showCoords').innerHTML = coords;
}

export const myObject = {
    x : 5,
    y : 6,
    
    myObjectFunction: function() {
        // do something
    },
};


export const Grid = (function() {
    var GridWidth = 800;
    var GridHeight = 600;
    var dimension = 50;

    var x = GridWidth / dimension;
    var y = GridHeight / dimension;

    var GridSquareContainer = new Array(x);
    for (var a = 0; a < GridSquareContainer.length; ++a) {
        GridSquareContainer[a] = new Array(GridSquareContainer.length);
        for (var b = 0; b < GridSquareContainer[a].length; ++b) {
            GridSquareContainer[a][b] = new Array(0);
        }
    }
    
    var setDefaultTileSet = function() {
        for (var a = 0; a < GridSquareContainer.length; ++a) {
            for (var b = 0; b < GridSquareContainer[a].length; ++b) {
                let x = a * dimension;
                let y = b * dimension;
                var turf = new Turf(x, y);
                GridSquareContainer[a][b].push(turf);
            }
        }
    };

    var getDimension = function() {
        return dimension;
    };

    var getGridX = function(x) {
        return x * dimension;
    };

    var getGridY = function(y) {
        return y * dimension;   
    };

    var getGridSize = function() {
        var size = {
            width: GridWidth / dimension,
            height: GridHeight / dimension
        };
        return size;
    }

    var addGameObject = function(gridX, gridY, gameObject) {
        let x = gridX;
        let y = gridY;
        
        if (typeof GridSquareContainer[x][y] !== 'undefined') {
            GridSquareContainer[x][y].push(gameObject);
        }
    };

    var setGameObjectPosition = function(gridX, gridY, gameObject) {
        let x = gridX / dimension;
        let y = gridY / dimension;
        
        if (typeof GridSquareContainer[x][y] !== 'undefined') {
            GridSquareContainer[x][y].push(gameObject);
        }
    };

    var animateObjects = function(ticks, ctx, teamColor) {
        for (let a = 0; a < GridSquareContainer.length - 1; ++a) {
            for (let b = 0; b < GridSquareContainer[a].length - 1; ++b) {
                for (let c = 0; c < GridSquareContainer[a][b].length; ++c) {
                    if (GridSquareContainer[a][b][c] instanceof Building || GridSquareContainer[a][b][c] instanceof Unit || GridSquareContainer[a][b][c] instanceof Sea) {
                        GridSquareContainer[a][b][c].animate(ticks, ctx);
                    }
                }
            }
        }
    };

    var isImpassable = function(x, y) {
        var impassable = false;
        
        //boundaries
        if (typeof GridSquareContainer[x] === 'undefined') {
            return impassable;
        }

        if (typeof GridSquareContainer[x][y] === 'undefined') {
            return impassable;
        }

        for (let z = 0; z < GridSquareContainer[x][y].length; ++z) {

            if (GridSquareContainer[x][y][z] instanceof Unit) {
                impassable = true;
            }
            if (GridSquareContainer[x][y][z] instanceof Sea) {
                impassable = true;
            }
        }
        return impassable;
    }

    var isCapturable = function(x, y) {
        var impassable = false;
        for (let z = 0; z < GridSquareContainer[x][y].length; ++z) {
            if (GridSquareContainer[x][y][z] instanceof Building //&& 
                //PlayerManager.activePlayer.getPlayerId() != GridSquareContainer[x][y][z].getOwner().getPlayerId()
                && (GameManager.getSelectedUnit() instanceof Infantry || GameManager.getSelectedUnit() instanceof Mech)) {
                impassable = true;
            }
        }
        return impassable;
    };

    var getBuilding = function(x, y) {
        for (let z = 0; z < GridSquareContainer[x][y].length; ++z) {
            if (GridSquareContainer[x][y][z] instanceof Building) {
                return GridSquareContainer[x][y][z];
            }
        }
        return null;
    };

    var deleteObject = function(gameObject) {
        GridSquareContainer[gameObject.getX()][gameObject.getY()].pop();
    };

    function clicked(e) {
        switch (e.button) {
            case 0:
              showCoords(e);
              break;
            case 1:
              // middle mouse button
              break;
            default:
              rightClickToMove(e);
        }
    }

    var showCoords = function(event) {
        let gridX = event.clientX - 10;
        let gridY = event.clientY - 10;
        let x = Math.floor(gridX / dimension);
        let y = Math.floor(gridY / dimension);
        let gameObject = GridSquareContainer[x][y][GridSquareContainer[x][y].length - 1];
        
        var cords = {
            x: x,
            y: y,
            gameObject: gameObject
        };

        if (GameManager.isSelectedObjectUnit() && GameManager.getSelectedUnit().isAttacking()) {

            // Need to check if tile clicked is in the fire zone and has an enemy
            let dmgPercentage = GameManager.combat(GameManager.getSelectedUnit(), gameObject);
            var coords = "Damage to inflict: " + dmgPercentage;
            document.getElementById('showCoords').innerHTML = coords;
        }
        else {
            GameManager.setSelectedUnit(cords);
            if (GameManager.isSelectedObjectUnit()) {
                GameManager.step1Initiate();
            }
            else if (GameManager.isSelectedObjectBuilding()) {
                GameManager.launchBuildingDialog();
            }
            
            var coords = "X coordinates: " + x + ", Y coordinates: " + y + ", game object: " + JSON.stringify(gameObject);
            document.getElementById('showCoords').innerHTML = coords;
        }
    };

    var rightClickToMove = function(event) {
        console.log("fire");
        let gridX = event.clientX - 10;
        let gridY = event.clientY - 10;
        let x = Math.floor(gridX / dimension);
        let y = Math.floor(gridY / dimension);
        let validTile = false;
        let gameObject = GridSquareContainer[x][y][GridSquareContainer[x][y].length - 1];
        const tile = {x: x, y: y};
        const zones = GameManager.getFocusZone();

        for (var a = 0; a < zones.length; a++) {
            if (zones[a].x === tile.x && zones[a].y === tile.y) {
                validTile = true;
            }
        }

        if (GameManager.isSelectedObjectUnit() && GameManager.getSelectedUnit().isAttacking()) {
            GameManager.step2AfterMath(gameObject);  
        }
        else {
            //Move the selectedUnit
            if (validTile) {
                GameManager.step1AfterMath(x, y);
            
                var coords = "X coordinates: " + x + ", Y coordinates: " + y;
                document.getElementById('showCoords').innerHTML = coords;
            }
        }
    };

    var replacePositions = function(originalX, originalY, gameObject) {
        GridSquareContainer[originalX][originalY].pop();
        GridSquareContainer[gameObject.getX()][gameObject.getY()].push(gameObject);
    };

    var playerBuildings = function(player) {
        let total = 0;
        for (let a = 0; a < GridSquareContainer.length - 1; ++a) {
            for (let b = 0; b < GridSquareContainer[a].length - 1; ++b) {
                if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1] instanceof Building) {
                    if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1].getOwner() != null) {
                        if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1].getOwner().getPlayerId() === player.getPlayerId()) {
                            total++;
                        }
                    }
                }
                else if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1] instanceof Unit &&
                         GridSquareContainer[a][b][GridSquareContainer[a][b].length - 2] instanceof Building) {
                    if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 2].getOwner() != null) {
                        if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 2].getOwner().getPlayerId() === player.getPlayerId()) {
                            total++;
                        }
                    }
                }
            }
        }
        return total;
    };

    var getPlayerUnits = function(player) {
        var playerUnits = new Array();
        for (let a = 0; a < GridSquareContainer.length - 1; ++a) {
            for (let b = 0; b < GridSquareContainer[a].length - 1; ++b) {
                if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1] instanceof Unit) {
                    if (GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1].getOwner().getPlayerId() === player.getPlayerId()) {
                        playerUnits.push(GridSquareContainer[a][b][GridSquareContainer[a][b].length - 1]);
                    }
                }
            }
        }
        return playerUnits;
    };

    var cursorTick = function(ctx, offset) {
        let x = GameManager.getSelectedCoords().x * dimension;
        let y = GameManager.getSelectedCoords().y * dimension;

        const gray = "#dcdcdc";
        //cursor selector
        //top left corner
        let x_tl = x + offset;
        let y_tl = y + offset;
        ctx.fillStyle = gray;
        ctx.beginPath();
        ctx.moveTo(x_tl, y_tl);
        ctx.lineTo(x_tl + 10, y_tl);
        ctx.lineTo(x_tl, y_tl + 10);
        ctx.lineTo(x_tl, y_tl);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //top right corner
        let x_tr = x + Grid.getDimension() - offset;
        let y_tr = y + offset;
        ctx.fillStyle = gray;
        ctx.beginPath();
        ctx.moveTo(x_tr, y_tr);
        ctx.lineTo(x_tr - 10, y_tr);
        ctx.lineTo(x_tr, y_tr + 10);
        ctx.lineTo(x_tr, y_tr);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //bottom right corner
        let x_br = x + Grid.getDimension() - offset;
        let y_br = y + Grid.getDimension() - offset;
        ctx.fillStyle = gray;
        ctx.beginPath();
        ctx.moveTo(x_br, y_br);
        ctx.lineTo(x_br - 10, y_br);
        ctx.lineTo(x_br, y_br - 10);
        ctx.lineTo(x_br, y_br);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //bottom left corner
        let x_bl = x + offset;
        let y_bl = y + Grid.getDimension() - offset;
        ctx.fillStyle = gray;
        ctx.beginPath();
        ctx.moveTo(x_bl, y_bl);
        ctx.lineTo(x_bl + 10, y_bl);
        ctx.lineTo(x_bl, y_bl - 10);
        ctx.lineTo(x_bl, y_bl);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };

    var myPublicApi = {
        getDimension,
        getGridX,
        getGridY,
        getGridSize,
        getPlayerUnits,
        addGameObject,
        deleteObject,
        setGameObjectPosition,
        setDefaultTileSet,
        animateObjects,
        clicked,
        showCoords,
        isImpassable,
        isCapturable,
        getBuilding,
        rightClickToMove,
        replacePositions,
        playerBuildings,
        cursorTick
    };

    
    return myPublicApi;
})()