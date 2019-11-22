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


export const myPrivateObject = (function () {
    var x = 5;
    var y = 6;
    
    var getX =  function() {
        return x;
    };

    var myPublicApi = {
        getX
    };

    return myPublicApi;
})()