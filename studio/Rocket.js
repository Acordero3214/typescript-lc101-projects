"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMassKg = 0;
        for (var i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    };
    Rocket.prototype.currentMass = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        var retVal;
        if (this.currentMass() + item.massKg <= this.totalCapacityKg) {
            retVal = true;
        }
        else {
            retVal = false;
        }
        return retVal;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var retVal;
        if (this.canAdd(cargo) === true) {
            retVal = true;
            this.cargoItems.push(cargo);
        }
        else {
            retVal = false;
        }
        return retVal;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var retVal;
        if (this.canAdd(astronaut) === true) {
            retVal = true;
            this.astronauts.push(astronaut);
        }
        else {
            retVal = false;
        }
        return retVal;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
