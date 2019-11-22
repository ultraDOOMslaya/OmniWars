// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCoords = showCoords;
exports.test = test;

function showCoords(event) {
  var x = event.clientX - 10;
  var y = event.clientY - 10;
  var coords = "X coordinates: " + x + ", Y coordinates: " + y;
  document.getElementById('showCoords').innerHTML = coords;
}

function test() {}
},{}],"OmniWars.js":[function(require,module,exports) {
"use strict";

var _Grid = require("./Grid.js");

var turfColor = "#ADFF2F";
var beachColor = "#ffbca4";
var redTeamColor = "#E50000";
var hotPinkTeamColor = "#ff69b4";
var gainsborough = "#dfcdfc";
var black = "#000000";
var brown = "#964b00";
var skin = "#ffdbac";
var skyBlue = "#87ceeb";
var canvasWidth = 800;
var canvasHeight = 600;
var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var frameOne = true;
var frameTwo = false;
var ctx = canvas.getContext('2d');

function draw() {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = turfColor;
  ctx.fillRect(0, 0, 800, 600);
  ctx.lineWidth = 3;
  ctx.fillStyle = hotPinkTeamColor;

  if (frameOne) {
    tankFacingRightFrameOne(450, 300, redTeamColor);
    rocketFacingRightFrameOne(400, 300, redTeamColor);
    antiAirFacingRightFrameOne(350, 300, redTeamColor);
    missileFacingRightFrameOne(300, 300, redTeamColor);
    infantryFacingLeftFrameOne(450, 200, redTeamColor);
    mechFacingLeftFrameOne(450, 150, hotPinkTeamColor);
    frameOne = false;
    frameTwo = true;
  } else {
    tankFacingRightFrameTwo(450, 300, redTeamColor);
    rocketFacingRightFrameTwo(400, 300, redTeamColor);
    antiAirFacingRightFrameTwo(350, 300, redTeamColor);
    missileFacingRightFrameTwo(300, 300, redTeamColor);
    infantryFacingLeftFrameTwo(450, 200, redTeamColor);
    mechFacingLeftFrameTwo(450, 150, hotPinkTeamColor);
    frameOne = true;
    frameTwo = false;
  }

  function mechFacingLeftFrameOne(x, y, teamColor) {
    //Mech Bazzuka
    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 12);
    ctx.lineTo(x + 43, y + 12);
    ctx.lineTo(x + 43, y + 22);
    ctx.lineTo(x + 8, y + 22);
    ctx.lineTo(x + 8, y + 12);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Bazzuka Handle

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 22);
    ctx.lineTo(x + 12, y + 32);
    ctx.lineTo(x + 14, y + 32);
    ctx.lineTo(x + 14, y + 22);
    ctx.lineTo(x + 12, y + 22);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Head

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 15);
    ctx.bezierCurveTo(x + 18, y + 15, x + 18, y + 23, x + 19, y + 25);
    ctx.bezierCurveTo(x + 20, y + 26, x + 25, y + 26, x + 34, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Eye

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 19, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Mech Helmet

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 15);
    ctx.bezierCurveTo(x + 15, y + 15, x + 15, y + 5, x + 25, y + 5);
    ctx.bezierCurveTo(x + 27, y + 5, x + 37, y + 10, x + 35, y + 20);
    ctx.bezierCurveTo(x + 30, y + 20, x + 25, y + 20, x + 15, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 36.5, y + 38);
    ctx.lineTo(x + 36.5, y + 45);
    ctx.lineTo(x + 38.5, y + 45);
    ctx.lineTo(x + 38.5, y + 38);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech leg 2

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 27, y + 35);
    ctx.lineTo(x + 30, y + 42);
    ctx.lineTo(x + 37, y + 41);
    ctx.lineTo(x + 37, y + 38);
    ctx.lineTo(x + 33, y + 39);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Torso

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 23);
    ctx.bezierCurveTo(x + 35, y + 33, x + 34, y + 36, x + 33, y + 37);
    ctx.bezierCurveTo(x + 33, y + 39, x + 28, y + 38, x + 24, y + 38);
    ctx.lineTo(x + 24, y + 42);
    ctx.lineTo(x + 21, y + 42);
    ctx.lineTo(x + 22, y + 34);
    ctx.lineTo(x + 30, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 24, y + 42);
    ctx.lineTo(x + 18, y + 42.8);
    ctx.lineTo(x + 17, y + 44);
    ctx.lineTo(x + 24, y + 44);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Hand 1

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 13, y + 28, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Mech Arm Sleeve 1

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 23);
    ctx.bezierCurveTo(x + 33, y + 28, x + 14, y + 40, x + 15, y + 30);
    ctx.lineTo(x + 15, y + 28);
    ctx.bezierCurveTo(x + 25, y + 30, x + 25, y + 30, x + 27, y + 26);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function mechFacingLeftFrameTwo(x, y, teamColor) {
    //Mech Bazzuka
    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 15);
    ctx.lineTo(x + 43, y + 15);
    ctx.lineTo(x + 43, y + 25);
    ctx.lineTo(x + 8, y + 25);
    ctx.lineTo(x + 8, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Bazzuka Handle

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 12, y + 25);
    ctx.lineTo(x + 12, y + 35);
    ctx.lineTo(x + 14, y + 35);
    ctx.lineTo(x + 14, y + 25);
    ctx.lineTo(x + 12, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Head

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 18);
    ctx.bezierCurveTo(x + 18, y + 18, x + 18, y + 26, x + 19, y + 28);
    ctx.bezierCurveTo(x + 20, y + 29, x + 25, y + 29, x + 34, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Eye

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 22, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Mech Helmet

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 18);
    ctx.bezierCurveTo(x + 15, y + 18, x + 15, y + 8, x + 25, y + 8);
    ctx.bezierCurveTo(x + 27, y + 8, x + 37, y + 13, x + 35, y + 23);
    ctx.bezierCurveTo(x + 30, y + 23, x + 25, y + 23, x + 15, y + 18);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 36.5, y + 38);
    ctx.lineTo(x + 36.5, y + 45);
    ctx.lineTo(x + 38.5, y + 45);
    ctx.lineTo(x + 38.5, y + 38);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech leg 2

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 27, y + 35);
    ctx.lineTo(x + 30, y + 43);
    ctx.lineTo(x + 37, y + 41);
    ctx.lineTo(x + 37, y + 38);
    ctx.lineTo(x + 33, y + 39);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Torso

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 26);
    ctx.bezierCurveTo(x + 35, y + 34, x + 33, y + 37, x + 33, y + 38);
    ctx.bezierCurveTo(x + 33, y + 41, x + 28, y + 38, x + 24, y + 38);
    ctx.lineTo(x + 24, y + 42);
    ctx.lineTo(x + 21, y + 42);
    ctx.lineTo(x + 21, y + 34);
    ctx.lineTo(x + 30, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 24, y + 42);
    ctx.lineTo(x + 18, y + 42.8);
    ctx.lineTo(x + 17, y + 44);
    ctx.lineTo(x + 24, y + 44);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Hand 1

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 13, y + 31, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Mech Arm Sleeve 1

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 32, y + 26);
    ctx.bezierCurveTo(x + 33, y + 31, x + 14, y + 40, x + 15, y + 33);
    ctx.lineTo(x + 15, y + 31);
    ctx.bezierCurveTo(x + 25, y + 33, x + 25, y + 30, x + 27, y + 29);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function infantryFacingLeftFrameOne(x, y, teamColor) {
    //Infantry Head
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 15);
    ctx.bezierCurveTo(x + 18, y + 15, x + 18, y + 23, x + 19, y + 25);
    ctx.bezierCurveTo(x + 20, y + 26, x + 25, y + 26, x + 34, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Eye

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 19, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Helmet

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 15);
    ctx.bezierCurveTo(x + 15, y + 15, x + 15, y + 5, x + 25, y + 5);
    ctx.bezierCurveTo(x + 27, y + 5, x + 37, y + 10, x + 35, y + 20);
    ctx.bezierCurveTo(x + 30, y + 20, x + 25, y + 20, x + 15, y + 15);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Rifle Stock

    ctx.fillStyle = brown;
    ctx.beginPath();
    ctx.arc(x + 33, y + 28, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Shoe 1

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 42);
    ctx.lineTo(x + 28, y + 42.8);
    ctx.lineTo(x + 27, y + 44);
    ctx.lineTo(x + 34, y + 44);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 39);
    ctx.lineTo(x + 12, y + 39.8);
    ctx.lineTo(x + 11, y + 41);
    ctx.lineTo(x + 18, y + 41);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Pant

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 31, y + 32); //Leg 1

    ctx.bezierCurveTo(x + 27, y + 36, x + 37, y + 40, x + 34, y + 41);
    ctx.bezierCurveTo(x + 30, y + 43, x + 26, y + 38, x + 25, y + 35); //Leg 2

    ctx.bezierCurveTo(x + 23, y + 30, x + 17, y + 32, x + 19, y + 39);
    ctx.bezierCurveTo(x + 16, y + 40, x + 15, y + 39, x + 15, y + 35);
    ctx.bezierCurveTo(x + 16, y + 33, x + 19, y + 29, x + 19, y + 29);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Hand 1

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 25, y + 28, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Rifle

    ctx.fillStyle = brown;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 25);
    ctx.lineTo(x + 7, y + 25);
    ctx.lineTo(x + 7, y + 28);
    ctx.lineTo(x + 34, y + 28);
    ctx.lineTo(x + 34, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Hand 2

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 15, y + 28, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Arm Sleeve 1

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 20);
    ctx.bezierCurveTo(x + 35, y + 25, x + 40, y + 27, x + 30, y + 32);
    ctx.lineTo(x + 24, y + 28);
    ctx.bezierCurveTo(x + 34, y + 28, x + 34, y + 26, x + 29, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function infantryFacingLeftFrameTwo(x, y, teamColor) {
    //Infantry Head
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 18);
    ctx.bezierCurveTo(x + 18, y + 18, x + 18, y + 26, x + 19, y + 28);
    ctx.bezierCurveTo(x + 20, y + 29, x + 25, y + 29, x + 34, y + 23);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Eye

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.arc(x + 23, y + 22, 1.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Helmet

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 18);
    ctx.bezierCurveTo(x + 15, y + 18, x + 15, y + 8, x + 25, y + 8);
    ctx.bezierCurveTo(x + 27, y + 8, x + 37, y + 13, x + 35, y + 23);
    ctx.bezierCurveTo(x + 30, y + 23, x + 25, y + 23, x + 15, y + 18);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Shoe 1

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 42);
    ctx.lineTo(x + 28, y + 42.8);
    ctx.lineTo(x + 27, y + 44);
    ctx.lineTo(x + 34, y + 44);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Shoe 2

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 18, y + 39);
    ctx.lineTo(x + 12, y + 39.8);
    ctx.lineTo(x + 11, y + 41);
    ctx.lineTo(x + 18, y + 41);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Pant

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 31, y + 35); //Leg 1

    ctx.bezierCurveTo(x + 27, y + 39, x + 39, y + 40, x + 34, y + 41);
    ctx.bezierCurveTo(x + 30, y + 43, x + 26, y + 41, x + 25, y + 38); //Leg 2

    ctx.bezierCurveTo(x + 23, y + 33, x + 17, y + 35, x + 19, y + 39);
    ctx.bezierCurveTo(x + 16, y + 40, x + 15, y + 39, x + 15, y + 37);
    ctx.bezierCurveTo(x + 16, y + 36, x + 19, y + 32, x + 19, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Hand 1

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 27, y + 32, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Rifle

    ctx.fillStyle = brown;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 28);
    ctx.lineTo(x + 7, y + 28);
    ctx.lineTo(x + 7, y + 31);
    ctx.lineTo(x + 34, y + 31);
    ctx.lineTo(x + 34, y + 28);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Infantry Hand 2

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(x + 15, y + 31, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Rifle Stock

    ctx.fillStyle = brown;
    ctx.beginPath();
    ctx.arc(x + 33, y + 31, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Infantry Arm Sleeve 1

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 34, y + 23);
    ctx.bezierCurveTo(x + 35, y + 28, x + 40, y + 30, x + 30, y + 35);
    ctx.lineTo(x + 24, y + 31);
    ctx.bezierCurveTo(x + 34, y + 31, x + 34, y + 29, x + 29, y + 26);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function tankFacingRightFrameOne(x, y, teamColor) {
    ctx.fillStyle = teamColor; //Tank Barrel

    ctx.beginPath();
    ctx.moveTo(x + 30, y + 17);
    ctx.lineTo(x + 40, y + 17);
    ctx.lineTo(x + 40, y + 27);
    ctx.lineTo(x + 30, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Tank head

    ctx.beginPath();
    ctx.moveTo(x + 10, y + 37);
    ctx.lineTo(x + 10, y + 22);
    ctx.lineTo(x + 15, y + 17);
    ctx.lineTo(x + 30, y + 17);
    ctx.lineTo(x + 37, y + 27);
    ctx.lineTo(x + 37, y + 32);
    ctx.lineTo(x + 37, y + 37);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Tank Tread

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 25, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 35, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke(); //Tank body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 27);
    ctx.lineTo(x + 25, y + 27);
    ctx.lineTo(x + 25, y + 30);
    ctx.lineTo(x + 35, y + 30);
    ctx.lineTo(x + 35, y + 33);
    ctx.lineTo(x + 45, y + 33);
    ctx.lineTo(x + 45, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.lineTo(x + 5, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function tankFacingRightFrameTwo(x, y, teamColor) {
    ctx.fillStyle = teamColor; //Tank Barrel

    ctx.beginPath();
    ctx.moveTo(x + 30, y + 15);
    ctx.lineTo(x + 50, y + 15);
    ctx.lineTo(x + 50, y + 25);
    ctx.lineTo(x + 30, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Tank head

    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 10, y + 20);
    ctx.lineTo(x + 15, y + 15);
    ctx.lineTo(x + 30, y + 15);
    ctx.lineTo(x + 37, y + 25);
    ctx.lineTo(x + 37, y + 30);
    ctx.lineTo(x + 37, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Tank Tread

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 25, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 35, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke(); //Tank body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 25);
    ctx.lineTo(x + 25, y + 25);
    ctx.lineTo(x + 25, y + 28);
    ctx.lineTo(x + 35, y + 28);
    ctx.lineTo(x + 35, y + 31);
    ctx.lineTo(x + 45, y + 31);
    ctx.lineTo(x + 45, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.lineTo(x + 5, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function rocketFacingRightFrameOne(x, y, teamColor) {
    ctx.fillStyle = teamColor; //Tank Tread

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 30, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke(); //Rocket body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 35);
    ctx.lineTo(x + 30, y + 35);
    ctx.lineTo(x + 30, y + 25);
    ctx.lineTo(x + 35, y + 25);
    ctx.lineTo(x + 40, y + 30);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Window

    ctx.fillStyle = skyBlue;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 30);
    ctx.lineTo(x + 38, y + 30);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 40, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Rocket Cannon

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 33);
    ctx.lineTo(x + 35, y + 20);
    ctx.lineTo(x + 25, y + 10);
    ctx.lineTo(x + 0, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function rocketFacingRightFrameTwo(x, y, teamColor) {
    ctx.fillStyle = teamColor; //Rocket Tires

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 15, y + 40, 5, 0, 2 * Math.PI);
    ctx.arc(x + 30, y + 40, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = black;
    ctx.moveTo(x + 15, y + 40);
    ctx.lineTo(x + 35, y + 40);
    ctx.stroke(); //Rocket body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 37);
    ctx.lineTo(x + 30, y + 37);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 35, y + 27);
    ctx.lineTo(x + 40, y + 32);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Window

    ctx.fillStyle = black;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 32);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 38, y + 34);
    ctx.lineTo(x + 40, y + 34);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Rocket Cannon

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 35, y + 22);
    ctx.lineTo(x + 25, y + 12);
    ctx.lineTo(x + 0, y + 27);
    ctx.lineTo(x + 10, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function antiAirFacingRightFrameOne(x, y, teamColor) {
    //Anti-Air Tread
    ctx.fillStyle = black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Anti-Air Cannon 1

    ctx.fillStyle = black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 22);
    ctx.lineTo(x + 38, y + 11);
    ctx.stroke(); //Anti-Air Cannon 2

    ctx.fillStyle = black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 29, y + 24);
    ctx.lineTo(x + 40, y + 14);
    ctx.stroke(); //Anti-Air Head

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 35);
    ctx.lineTo(x + 10, y + 25);
    ctx.lineTo(x + 12, y + 23);
    ctx.lineTo(x + 28, y + 23);
    ctx.lineTo(x + 30, y + 25);
    ctx.lineTo(x + 30, y + 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Anti-Air body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 30);
    ctx.lineTo(x + 15, y + 30);
    ctx.lineTo(x + 20, y + 35);
    ctx.lineTo(x + 40, y + 35);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function antiAirFacingRightFrameTwo(x, y, teamColor) {
    //Anti-Air Tread
    ctx.fillStyle = black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Anti-Air Cannon 1

    ctx.fillStyle = black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 26, y + 26);
    ctx.lineTo(x + 45, y + 26);
    ctx.stroke(); //Anti-Air Cannon 2

    ctx.fillStyle = black;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 29, y + 30);
    ctx.lineTo(x + 45, y + 30);
    ctx.stroke(); //Anti-Air Head

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 37);
    ctx.lineTo(x + 10, y + 27);
    ctx.lineTo(x + 12, y + 25);
    ctx.lineTo(x + 28, y + 25);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 30, y + 37);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Anti-Air body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 32);
    ctx.lineTo(x + 15, y + 32);
    ctx.lineTo(x + 20, y + 37);
    ctx.lineTo(x + 40, y + 37);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function missileFacingRightFrameOne(x, y, teamColor) {
    //Anti-Air Tread
    ctx.fillStyle = black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Missile Body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 25);
    ctx.lineTo(x + 30, y + 25);
    ctx.lineTo(x + 35, y + 25);
    ctx.lineTo(x + 40, y + 30);
    ctx.lineTo(x + 40, y + 40);
    ctx.lineTo(x + 5, y + 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Window

    ctx.fillStyle = skyBlue;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 30);
    ctx.lineTo(x + 38, y + 30);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 40, y + 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Missile Turret

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 25);
    ctx.lineTo(x + 15, y + 10);
    ctx.lineTo(x + 20, y + 13);
    ctx.lineTo(x + 20, y + 25);
    ctx.lineTo(x + 15, y + 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Missile Head Eye

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.arc(x + 34, y + 13, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Missile

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.moveTo(x + 7, y + 21);
    ctx.lineTo(x + 35, y + 15);
    ctx.lineTo(x + 33, y + 11);
    ctx.lineTo(x + 5, y + 17);
    ctx.lineTo(x + 7, y + 21);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  function missileFacingRightFrameTwo(x, y, teamColor) {
    //Anti-Air Tread
    ctx.fillStyle = black;
    ctx.moveTo(x + 10, y + 46);
    ctx.lineTo(x + 34, y + 46);
    ctx.stroke();
    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.arc(x + 10, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 18, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 26, y + 43, 3, 0, 2 * Math.PI);
    ctx.arc(x + 34, y + 43, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Missile Body

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 27);
    ctx.lineTo(x + 30, y + 27);
    ctx.lineTo(x + 35, y + 27);
    ctx.lineTo(x + 40, y + 32);
    ctx.lineTo(x + 40, y + 42);
    ctx.lineTo(x + 5, y + 42);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Window

    ctx.fillStyle = skyBlue;
    ctx.beginPath();
    ctx.moveTo(x + 40, y + 32);
    ctx.lineTo(x + 38, y + 32);
    ctx.lineTo(x + 38, y + 34);
    ctx.lineTo(x + 40, y + 34);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Missile Turret

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 27);
    ctx.lineTo(x + 15, y + 12);
    ctx.lineTo(x + 20, y + 15);
    ctx.lineTo(x + 20, y + 27);
    ctx.lineTo(x + 15, y + 27);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Mech Eye

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.arc(x + 36, y + 18, 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill(); //Missile

    ctx.fillStyle = gainsborough;
    ctx.beginPath();
    ctx.moveTo(x + 5, y + 20);
    ctx.lineTo(x + 35, y + 20);
    ctx.lineTo(x + 35, y + 16);
    ctx.lineTo(x + 5, y + 16);
    ctx.lineTo(x + 5, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill(); //Missile Detail

    ctx.fillStyle = teamColor;
    ctx.beginPath();
    ctx.moveTo(x + 15, y + 20);
    ctx.lineTo(x + 20, y + 20);
    ctx.lineTo(x + 20, y + 16);
    ctx.lineTo(x + 15, y + 16);
    ctx.lineTo(x + 15, y + 20);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

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

setInterval(function () {
  draw();
  drawOnLoad();
}, 500); //draw();
//ctx.fillRect(10, 10, 100, 100);

function drawOnLoad() {
  for (var x = 0.5; x < canvasWidth; x += 50) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
  }

  for (var y = 0.5; y < canvasHeight; y += 50) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
  }

  ctx.strokeStyle = 'grey';
  ctx.stroke();
}

document.getElementById("canvas").addEventListener("click", _Grid.showCoords);
},{"./Grid.js":"Grid.js"}],"../../../Users/BenMaakestad/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58067" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/BenMaakestad/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","OmniWars.js"], null)
//# sourceMappingURL=/OmniWars.01d49d15.js.map