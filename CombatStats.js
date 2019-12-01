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
        unitType: UnitTypes.Ground
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
        unitType: UnitTypes.Ground
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
        unitType: UnitTypes.Ground
    };

    var missile = {
        movementRange: 4,
        attackRange: 1,
        directCombat: false,
        armored: true,
        attackPower: 0,
        airAttack: 10,
        defense: 0,
        tankBuster: false,
        groundOnly: false,
        unitType: UnitTypes.Ground
    };

    var rocket = {
        movementRange: 4,
        attackRange: 5,
        directCombat: false,
        armored: true,
        attackPower: 9,
        airAttack: 0,
        defense: 0,
        tankBuster: false,
        groundOnly: true,
        unitType: UnitTypes.Ground
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
        unitType: UnitTypes.Ground
    };

    var myPublicAPI = {
        infantry,
        mech,
        antiAir,
        missile,
        rocket,
        tank
    };

    return myPublicAPI;
})();