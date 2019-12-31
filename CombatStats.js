import { UnitTypes } from "./Units/UnitTypes";

export const CombatStats = (function() {

    var infantry = {
        movementRange: 3,
        attackRange: 1,
        directCombat: true,
        armored: false,
        attackPower: 4,
        airAttack: 1,
        defense: 0,
        tankBuster: false,
        groundOnly: false,
        unitType: UnitTypes.Ground,
        cost: 1000
    };

    var mech = {
        movementRange: 2,
        attackRange: 1,
        directCombat: true,
        armored: false,
        attackPower: 3,
        airAttack: 1,
        defense: 0,
        tankBuster: true,
        groundOnly: false,
        unitType: UnitTypes.Ground,
        cost: 3000,
    };

    var antiAir = {
        movementRange: 5,
        attackRange: 1,
        directCombat: true,
        armored: true,
        attackPower: 3,
        airAttack: 8,
        defense: 1,
        tankBuster: false,
        groundOnly: false,
        unitType: UnitTypes.Ground,
        cost: 4000
    };

    var missile = {
        movementRange: 4,
        attackRange: 3,
        directCombat: false,
        armored: true,
        attackPower: 5,
        airAttack: 10,
        defense: 0,
        tankBuster: false,
        groundOnly: false,
        unitType: UnitTypes.Ground,
        cost: 6000
    };

    var rocket = {
        movementRange: 4,
        attackRange: 5,
        directCombat: false,
        armored: true,
        attackPower: 7,
        airAttack: 0,
        defense: 0,
        tankBuster: false,
        groundOnly: true,
        unitType: UnitTypes.Ground,
        cost: 15000
    };

    var tank = {
        movementRange: 4,
        attackRange: 1,
        directCombat: true,
        armored: true,
        attackPower: 4,
        airAttack: 2,
        defense: 2,
        tankBuster: true,
        groundOnly: true,
        unitType: UnitTypes.Ground,
        cost: 8000
    };
    
    var chadTank = {
        movementRange: 5,
        attackRange: 1,
        directCombat: true,
        armored: true,
        attackPower: 6,
        airAttack: 2,
        defense: 3,
        tankBuster: true,
        groundOnly: true,
        unitType: UnitTypes.Ground,
        cost: 16000
    };

    var myPublicAPI = {
        infantry,
        mech,
        antiAir,
        missile,
        rocket,
        tank,
        chadTank
    };

    return myPublicAPI;
})();