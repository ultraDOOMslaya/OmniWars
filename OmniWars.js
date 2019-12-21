    import { showCoords, Grid } from "./Grid.js";
    import { GameManager } from "./GameManager.js";
    import { PlayerManager } from "./PlayerManager.js";
    import { GameObject } from "./GameObject.js";
    import { Unit } from "./Unit.js";
    import { StaticObject } from "./StaticObject.js";
    import { Infantry } from "./Units/Infantry.js";
    import { Mech } from "./Units/Mech.js";
    import { Tank } from "./Units/Tank.js"
    import { Rocket } from "./Units/Rocket.js";
    import { AntiAir } from "./Units/AntiAir.js";
    import { Missile } from "./Units/Missile.js";
import { Colors } from "./Colors.js";

    const turfColor = "#ADFF2F";

    const redTeamColor = "#E50000";
    const hotPinkTeamColor = "#ff69b4";

    const size = Grid.getGridSize();
    const canvasWidth = 800;
    const canvasHeight = 600;

    const defaultLineWidth = 3;

    var canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var frameOne = true;
    var frameTwo = false;
    var ctx = canvas.getContext('2d');

    Grid.setDefaultTileSet();

    Grid.addGameObject(9, 4, new Infantry(9, 4));
    Grid.addGameObject(9, 6, new Tank(9, 6));
    Grid.addGameObject(8, 6, new Rocket(8, 6));
    Grid.addGameObject(7, 6, new AntiAir(7, 6));
    Grid.addGameObject(6, 6, new Missile(6, 6));
    Grid.addGameObject(9, 3, new Mech(9, 3));
    
    (function() {
        var step1Dialog = document.getElementById("step1Dialog"); 
        var moveButton = document.getElementById('selectMovement');
        var attackButton = document.getElementById('selectAttack');
        var cancelButton = document.getElementById('cancelStep1');

        moveButton.addEventListener('click', function() {
            step1Dialog.close();
            GameManager.getSelectedUnit().setMoving();  
        });

        attackButton.addEventListener('click', function() {
            step1Dialog.close();
            GameManager.getSelectedUnit().setAttacking();
        });

        cancelButton.addEventListener('click', function() {
            step1Dialog.close();
            GameManager.putItBack();
        });
    })();

    (function() {
        var step2Dialog = document.getElementById("step2Dialog"); 
        var attackButton = document.getElementById('selectAttack2');
        var waitButton = document.getElementById('selectWait');
        var cancelButton = document.getElementById('cancelStep2');

        attackButton.addEventListener('click', function() {
            step2Dialog.close();
            GameManager.getSelectedUnit().setAttacking();  
        });

        waitButton.addEventListener('click', function() {
            step2Dialog.close();
            GameManager.commitUnit();
        });

        cancelButton.addEventListener('click', function() {
            step2Dialog.close();
            GameManager.putItBack();
        });
    })();

<<<<<<< HEAD
    (function() {
        var endTurn = document.getElementById("EndTurn");

        endTurn.addEventListener('click', function() {
            PlayerManager.endTurn();
        });
    })();

    function cityFrameOne(x, y, windowColor) {
        ctx.fillStyle = Colors.industrialGray;

        //Middle Building
        ctx.beginPath();
        ctx.moveTo(x + 20, y + 40);
        ctx.lineTo(x + 15, y + 5);
        ctx.lineTo(x + 35, y + 5);
        ctx.lineTo(x + 30, y + 40);
        ctx.lineTo(x + 20, y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Right Building
        ctx.beginPath();
        ctx.moveTo(x + 40, y + 42);
        ctx.lineTo(x + 45, y + 12);
        ctx.lineTo(x + 25, y + 12);
        ctx.lineTo(x + 20, y + 42);
        ctx.lineTo(x + 40, y + 42);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = windowColor;
        ctx.beginPath();
        ctx.fillRect(x + 38, y + 18, 4, 4);
        ctx.fillRect(x + 30, y + 18, 4, 4);

        ctx.fillRect(x + 37, y + 28, 4, 4);
        ctx.fillRect(x + 29, y + 28, 4, 4);

        ctx.fillStyle = Colors.industrialGray;

        //Left Building
        ctx.beginPath();
        ctx.moveTo(x + 15, y + 45);
        ctx.lineTo(x + 10, y + 15);
        ctx.lineTo(x + 30, y + 15);
        ctx.lineTo(x + 30, y + 45);
        ctx.lineTo(x + 15, y + 45);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = windowColor;
        ctx.beginPath();
        ctx.fillRect(x + 13, y + 20, 4, 4);
        ctx.fillRect(x + 23, y + 20, 4, 4);

        ctx.fillRect(x + 14, y + 30, 4, 4);
        ctx.fillRect(x + 22, y + 30, 4, 4); 
    }
    
    function factoryFrameOne(x, y, windowColor) {
        ctx.fillStyle = Colors.industrialGray;

        //Building
        ctx.beginPath();
        ctx.moveTo(x + 10, y + 40);
        ctx.lineTo(x + 10, y + 20);
        ctx.lineTo(x + 40, y + 20);
        ctx.lineTo(x + 40, y + 40);
        ctx.lineTo(x + 10, y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Roof
        ctx.beginPath();
        ctx.moveTo(x + 7, y + 20);
        ctx.lineTo(x + 10, y + 10);
        ctx.lineTo(x + 40, y + 10);
        ctx.lineTo(x + 43, y + 20);
        ctx.lineTo(x + 7, y + 20);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Left Garage Door
        ctx.fillStyle = Colors.black;
        ctx.beginPath();
        ctx.moveTo(x + 15, y + 40);
        ctx.lineTo(x + 15, y + 30);
        ctx.lineTo(x + 20, y + 30);
        ctx.lineTo(x + 20, y + 40);
        ctx.lineTo(x + 15, y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //Left Garage Door
        ctx.fillStyle = Colors.black;
        ctx.beginPath();
        ctx.moveTo(x + 30, y + 40);
        ctx.lineTo(x + 30, y + 30);
        ctx.lineTo(x + 35, y + 30);
        ctx.lineTo(x + 35, y + 40);
        ctx.lineTo(x + 30, y + 40);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = windowColor;
        ctx.beginPath();
        ctx.fillRect(x + 11, y + 23, 4, 4);
        ctx.fillRect(x + 18, y + 23, 4, 4);

        ctx.fillRect(x + 28, y + 23, 4, 4);
        ctx.fillRect(x + 35, y + 23, 4, 4); 
    }
=======
    function animateAirPort(x, y) {
        ctx.fillStyle = 'grey';
        ctx.lineWidth = 1;
        ctx.strokeStyle = Colors.black;

        ctx.beginPath();
        ctx.moveTo(x + 20, y + 45);
        ctx.lineTo(x + 20, y + 35);
        ctx.lineTo(x + 5, y + 35);
        ctx.lineTo(x + 5, y + 15);
        ctx.lineTo(x + 15, y + 5);
        ctx.lineTo(x + 35, y + 5);
        ctx.lineTo(x + 45, y + 15);
        ctx.lineTo(x + 45, y + 35);
        ctx.lineTo(x + 35, y + 45);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.fillRect(x + 30, y + 20, 10, 20);
    };
>>>>>>> 2ef79936f89a7eb3f9f4c614d5bfd1983ece5dcb

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
        ctx.lineWidth = defaultLineWidth;

        let focusTiles = GameManager.getFocusZone();
        for (var tiles = 0; tiles < focusTiles.length; tiles++) {
            ctx.fillStyle = GameManager.getZoneColor();
            ctx.fillRect(( focusTiles[tiles].x * Grid.getDimension() ), ( focusTiles[tiles].y * Grid.getDimension()), 50, 50);
        }

        cityFrameOne(200, 200, Colors.black);
        cityFrameOne(200, 250, Colors.black);
        factoryFrameOne(100, 250, Colors.black);
        
        ctx.beginPath();
        
        animateAirPort(600, 400);

        Grid.animateObjects(ticks, ctx, redTeamColor);
        
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
    
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            GameManager.resetState();
        }
    };
    
    