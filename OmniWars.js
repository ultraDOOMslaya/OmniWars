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

    const redTeamColor = "#E50000";
    const hotPinkTeamColor = "#ff69b4";

    const size = Grid.getGridSize();
    const canvasWidth = 800;
    const canvasHeight = 600;

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

        let focusTiles = GameManager.getFocusZone();
        for (var tiles = 0; tiles < focusTiles.length; tiles++) {
            ctx.fillStyle = GameManager.getZoneColor();
            ctx.fillRect(( focusTiles[tiles].x * Grid.getDimension() ), ( focusTiles[tiles].y * Grid.getDimension()), 50, 50);
        }
        
        Grid.animateObjects(ticks, ctx, redTeamColor);

        /*infantry.animate(ticks, ctx, redTeamColor);
        tank.animate(ticks, ctx, redTeamColor);
        rocket.animate(ticks, ctx, redTeamColor);
        antiAir.animate(ticks, ctx, redTeamColor);
        missile.animate(ticks, ctx, redTeamColor);        
        mech.animate(ticks, ctx, hotPinkTeamColor);*/
        
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
    
    