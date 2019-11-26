    import { showCoords, Grid } from "./Grid.js";
    import { GameManager } from "./GameManager.js"
    import { GameObject } from "./GameObject.js";
    import { Unit } from "./Unit.js";
    import { StaticObject } from "./StaticObject.js";
    import { Infantry } from "./Units/Infantry.js";
    import { Mech } from "./Units/Mech.js";
    import { Tank } from "./Units/Tank.js"
    import { Rocket } from "./Units/Rocket.js";
    import { AntiAir } from "./Units/AntiAir.js";
    import { Missile } from "./Units/Missile.js";

    const turfColor = "#ADFF2F";
    const focusColor = "#0000FF";

    const redTeamColor = "#E50000";
    const hotPinkTeamColor = "#ff69b4";

    const canvasWidth = 800;
    const canvasHeight = 600;

    var tank = new Tank(450, 300);
    var rocket = new Rocket(400, 300);
    var antiAir = new AntiAir(350, 300);
    var missile = new Missile(300, 300);
    var infantry = new Infantry(450, 200);
    var mech = new Mech(450, 150);
    

    var canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var frameOne = true;
    var frameTwo = false;
    var ctx = canvas.getContext('2d');

    Grid.setDefaultTileSet();
    Grid.setGameObjectPosition(450, 300, tank);
    Grid.setGameObjectPosition(400, 300, rocket);
    Grid.setGameObjectPosition(350, 300, antiAir);
    Grid.setGameObjectPosition(300, 300, missile);
    Grid.setGameObjectPosition(450, 200, infantry);
    Grid.setGameObjectPosition(450, 150, mech);


    let ticks = 0;
    function draw() {
        ticks = ticks + 1;
        if (ticks > 4) {
            ticks = 1;
        }

        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        ctx.fillStyle = turfColor;
        ctx.fillRect(0, 0, 800, 600);
        ctx.lineWidth = 3;

        let focusTiles = new Array();
        if (GameManager.getSelectedUnit() instanceof GameObject) {
            let iterations = 0;
            let focusUnit = GameManager.getSelectedUnit();
            let diamondOffset = 1;
            let diamondHalfLength = GameManager.getSelectedUnit().getMovementRange();
            let focusSize = GameManager.getSelectedUnit().getMovementRange() * 2;
            let startCoords = {
                start_x: focusUnit.getX(),
                start_y: focusUnit.getY()
            };

            for (var a = 0; a <= focusSize; a++) {
                for (var b = 0; b <= iterations; b++) {
                    let coords = {
                        x: startCoords.start_x,
                        y: ( startCoords.start_y + ((diamondHalfLength - a) * Grid.getDimension()) )
                    }

                    if (b == 0) {
                        focusTiles.push({x: coords.x, y: coords.y});
                    }
                    else {
                        focusTiles.push({x: (coords.x - (b * Grid.getDimension())), y: coords.y});
                        focusTiles.push({x: (coords.x + (b * Grid.getDimension())), y: coords.y});
                    }
                }
                iterations = iterations + diamondOffset;
                if(iterations === diamondHalfLength) {
                    diamondOffset = diamondOffset * -1;
                }   
            }
        }

        
        for (var tiles = 0; tiles < focusTiles.length; tiles++) {
            ctx.fillStyle = focusColor;
            ctx.fillRect(focusTiles[tiles].x, focusTiles[tiles].y, 50, 50);
        }
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(300, 300, 200, 200);

        /*for (tile in focusTiles) {

        }*/

        tank.animate(ticks, ctx, redTeamColor);
        rocket.animate(ticks, ctx, redTeamColor);
        antiAir.animate(ticks, ctx, redTeamColor);
        missile.animate(ticks, ctx, redTeamColor);
        infantry.animate(ticks, ctx, redTeamColor);
        mech.animate(ticks, ctx, hotPinkTeamColor);
        
        
        Grid.cursorTick(ctx, ticks);

        



        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }
    
    setInterval(function() {
        draw();
        drawOnLoad();
    }, 250);
    
    //draw();

    //ctx.fillRect(10, 10, 100, 100);
    
    function drawOnLoad() {
        for(var x=0.5;x<canvasWidth;x+=50) {
            ctx.moveTo(x,0);
            ctx.lineTo(x,canvasHeight);
        }
        for(var y=0.5; y<canvasHeight; y+=50) {
            ctx.moveTo(0,y);
            ctx.lineTo(canvasWidth,y);
        }
        ctx.strokeStyle='grey';
        ctx.stroke();
    }
    document.getElementById("canvas").addEventListener("click", Grid.showCoords);
    document.getElementById("canvas").addEventListener("mousedown", Grid.clicked, false);
    