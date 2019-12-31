    import { showCoords, Grid } from "./Grid.js";
    import { GameManager } from "./GameManager.js";
    import { PlayerManager } from "./PlayerManager.js";
    import { Player } from "./Player.js";
    import { GameObject } from "./GameObject.js";
    import { Unit } from "./Unit.js";
    import { StaticObject } from "./StaticObject.js";
    import { Infantry } from "./Units/Infantry.js";
    import { Mech } from "./Units/Mech.js";
    import { Tank } from "./Units/Tank.js"
    import { ChadTank } from "./Units/ChadTank.js"
    import { Rocket } from "./Units/Rocket.js";
    import { AntiAir } from "./Units/AntiAir.js";
    import { Missile } from "./Units/Missile.js";
    import { Colors } from "./Colors.js";
    import { City } from "./Buildings/City.js";
    import { Factory } from "./Buildings/Factory.js";
import { Sea } from "./StaticObjects/Sea.js";


    const turfColor = "#ADFF2F";

    const redTeamColor = "#E50000";
    const hotPinkTeamColor = "#ff69b4";

    var player1 = new Player("player1", 0, null, null, Colors.redTeamColor, "player1CreditValue");
    var player2 = new Player("player2", 0, null, null, Colors.hotPinkTeamColor, "player2CreditValue");
    PlayerManager.addPlayer(player1);
    PlayerManager.addPlayer(player2);

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
    
    Grid.addGameObject(9, 2, new City(9, 2, player1));
    Grid.addGameObject(4, 4, new City(4, 4, player1));
    Grid.addGameObject(4, 5, new City(4, 5, player1));
    Grid.addGameObject(4, 6, new City(4, 6, player1));
    Grid.addGameObject(2, 4, new Factory(2, 4, null));
    Grid.addGameObject(2, 5, new Factory(2, 5, player1));
    Grid.addGameObject(3, 7, new Factory(3, 7, player2));

    //edges top/botom
    Grid.addGameObject(2, 2, new Sea(3, 0));
    Grid.addGameObject(2, 2, new Sea(4, 0));
    Grid.addGameObject(2, 2, new Sea(5, 0));
    Grid.addGameObject(2, 2, new Sea(6, 0));

    Grid.addGameObject(2, 2, new Sea(3, 11));
    Grid.addGameObject(2, 2, new Sea(4, 11));
    Grid.addGameObject(2, 2, new Sea(5, 11));
    Grid.addGameObject(2, 2, new Sea(6, 11));

    //edges top/botom
    Grid.addGameObject(2, 2, new Sea(12, 0));
    Grid.addGameObject(2, 2, new Sea(11, 0));
    Grid.addGameObject(2, 2, new Sea(10, 0));
    Grid.addGameObject(2, 2, new Sea(9, 0));
    
    Grid.addGameObject(2, 2, new Sea(12, 11));
    Grid.addGameObject(2, 2, new Sea(11, 11));
    Grid.addGameObject(2, 2, new Sea(10, 11));
    Grid.addGameObject(2, 2, new Sea(9, 11));


    //island edge top
    Grid.addGameObject(2, 2, new Sea(1, 2));
    Grid.addGameObject(2, 2, new Sea(2, 2));
    Grid.addGameObject(2, 2, new Sea(3, 2));
    Grid.addGameObject(2, 2, new Sea(4, 2));
    Grid.addGameObject(2, 2, new Sea(5, 2));

    Grid.addGameObject(2, 2, new Sea(12, 2));
    Grid.addGameObject(2, 2, new Sea(11, 2));
    Grid.addGameObject(2, 2, new Sea(10, 2));

    //island edge bottom
    Grid.addGameObject(2, 2, new Sea(14, 9));
    Grid.addGameObject(2, 2, new Sea(13, 9));
    Grid.addGameObject(2, 2, new Sea(12, 9));
    Grid.addGameObject(2, 2, new Sea(11, 9));
    Grid.addGameObject(2, 2, new Sea(10, 9));

    Grid.addGameObject(2, 2, new Sea(5, 9));
    Grid.addGameObject(2, 2, new Sea(4, 9));
    Grid.addGameObject(2, 2, new Sea(3, 9));
    
    //left base moat block
    Grid.addGameObject(2, 2, new Sea(1, 3));
    Grid.addGameObject(2, 2, new Sea(1, 4));
    Grid.addGameObject(2, 2, new Sea(1, 5));
    Grid.addGameObject(2, 2, new Sea(1, 6));
    Grid.addGameObject(2, 2, new Sea(1, 7));
    Grid.addGameObject(2, 2, new Sea(2, 3));
    Grid.addGameObject(2, 2, new Sea(2, 4));
    Grid.addGameObject(2, 2, new Sea(2, 5));
    Grid.addGameObject(2, 2, new Sea(2, 6));
    Grid.addGameObject(2, 2, new Sea(2, 7));

    //right base moat block
    Grid.addGameObject(2, 2, new Sea(14, 8));
    Grid.addGameObject(2, 2, new Sea(14, 7));
    Grid.addGameObject(2, 2, new Sea(14, 6));
    Grid.addGameObject(2, 2, new Sea(14, 5));
    Grid.addGameObject(2, 2, new Sea(14, 4));
    Grid.addGameObject(2, 2, new Sea(13, 4));
    Grid.addGameObject(2, 2, new Sea(13, 5));
    Grid.addGameObject(2, 2, new Sea(13, 6));
    Grid.addGameObject(2, 2, new Sea(13, 7));
    Grid.addGameObject(2, 2, new Sea(13, 8));
    
    //top center moat island block
    Grid.addGameObject(2, 2, new Sea(3, 3));
    Grid.addGameObject(2, 2, new Sea(4, 3));
    Grid.addGameObject(2, 2, new Sea(5, 3));
    Grid.addGameObject(2, 2, new Sea(6, 3));
    Grid.addGameObject(2, 2, new Sea(7, 3));
    Grid.addGameObject(2, 2, new Sea(8, 3));
    Grid.addGameObject(2, 2, new Sea(9, 3));
    Grid.addGameObject(2, 2, new Sea(10, 3));
    Grid.addGameObject(2, 2, new Sea(3, 4));
    Grid.addGameObject(2, 2, new Sea(4, 4));
    Grid.addGameObject(2, 2, new Sea(5, 4));
    Grid.addGameObject(2, 2, new Sea(6, 4));
    Grid.addGameObject(2, 2, new Sea(7, 4));
    Grid.addGameObject(2, 2, new Sea(8, 4));


    //top center moat island block
    Grid.addGameObject(2, 2, new Sea(12, 8));
    Grid.addGameObject(2, 2, new Sea(11, 8));
    Grid.addGameObject(2, 2, new Sea(5, 8));
    Grid.addGameObject(2, 2, new Sea(6, 8));
    Grid.addGameObject(2, 2, new Sea(7, 8));
    Grid.addGameObject(2, 2, new Sea(8, 8));
    Grid.addGameObject(2, 2, new Sea(9, 8));
    Grid.addGameObject(2, 2, new Sea(10, 8));
    Grid.addGameObject(2, 2, new Sea(12, 7));
    Grid.addGameObject(2, 2, new Sea(11, 7));
    
    Grid.addGameObject(2, 2, new Sea(7, 7));
    Grid.addGameObject(2, 2, new Sea(8, 7));
    Grid.addGameObject(2, 2, new Sea(9, 7));
    Grid.addGameObject(2, 2, new Sea(10, 7));


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

    (function() {
        var step2Dialog = document.getElementById("step2DialogInfantry"); 
        var attackButton = document.getElementById('selectAttackInfantry');
        var captureButton = document.getElementById('selectCapture');
        var waitButton = document.getElementById('selectWaitInfantry');
        var cancelButton = document.getElementById('cancelStep2Infantry');

        attackButton.addEventListener('click', function() {
            step2Dialog.close();
            GameManager.getSelectedUnit().setAttacking();  
        });

        captureButton.addEventListener('click', function() {
            step2Dialog.close();
            GameManager.captureBuilding();
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

    (function() {
        var endTurn = document.getElementById("EndTurn");

        endTurn.addEventListener('click', function() {
            PlayerManager.endTurn();
        });
    })();
    
    (function() {
        var purchaseInfantry = document.getElementById("purchaseInfantry");
        var purchaseMech = document.getElementById("purchaseMech");
        var purchaseRecon = document.getElementById("purchaseRecon");
        var purchaseArtillery = document.getElementById("purchaseArtillery");
        var purchaseTank = document.getElementById("purchaseTank");
        var purchaseRocket = document.getElementById("purchaseRocket");
        var purchaseChadTank = document.getElementById("purchaseChadTank");

        purchaseInfantry.addEventListener('click', function() {
            PlayerManager.purchase("Infantry");
        });

        purchaseMech.addEventListener('click', function() {
            PlayerManager.purchase("Mech");
        });
        
        purchaseRecon.addEventListener('click', function() {
            PlayerManager.purchase("Recon");
        });

        purchaseArtillery.addEventListener('click', function() {
            PlayerManager.purchase("Artillery");
        });

        purchaseTank.addEventListener('click', function() {
            PlayerManager.purchase("Tank");
        });

        purchaseRocket.addEventListener('click', function() {
            PlayerManager.purchase("Rocket");
        });

        purchaseChadTank.addEventListener('click', function() {
            PlayerManager.purchase("ChadTank");
        });
    })();

    /*
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
*/
    PlayerManager.turnOne();

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
        
        ctx.beginPath();

        Grid.animateObjects(ticks, ctx, redTeamColor);
        
        Grid.cursorTick(ctx, ticks);

        

        /* Heart */
        /*
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
        */
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
    
    