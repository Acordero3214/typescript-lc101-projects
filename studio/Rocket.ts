import {Payload} from './Payload';
import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let totalMassKg = 0;
        for(let i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    }
    currentMass(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): boolean {
        let retVal;

        if(this.currentMass() + item.massKg <= this.totalCapacityKg) {
            retVal = true;
        }
        else {
            retVal = false;
        }
        return retVal;
    }
    addCargo(cargo: Cargo): boolean {
        let retVal;

        if(this.canAdd(cargo) === true) {
            retVal = true;
            this.cargoItems.push(cargo);
        }
        else {
            retVal = false;
        }
        return retVal;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        let retVal;
        
        if(this.canAdd(astronaut) === true) {
            retVal = true;
            this.astronauts.push(astronaut);
        }
        else {
            retVal = false;
        }
        return retVal;
    }
}