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
    for (var i = 0; i < GridSquareContainer.length; ++i) {
        GridSquareContainer[i] = new Array(y);
    }
    
    var getX = function() {
        return x;
    };

    var setGameObjectPosition = function(gridX, gridY, gameObject) {
        let x = gridX / dimension;
        let y = gridY / dimension;
        GridSquareContainer[x][y] = gameObject;
    };

    var showCoords = function(event) {
        let gridX = event.clientX - 10;
        let gridY = event.clientY - 10;
        let x = Math.floor(gridX / dimension);
        let y = Math.floor(gridY / dimension);
        let gameObject = GridSquareContainer[x][y];
        var coords = "X coordinates: " + x + ", Y coordinates: " + y + ", game object: " + gameObject;
        document.getElementById('showCoords').innerHTML = coords;
    };

    var myPublicApi = {
        getX,
        setGameObjectPosition,
        showCoords
    };

    
    return myPublicApi;
})()