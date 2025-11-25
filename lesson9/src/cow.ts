import { IAnimalCharacteristics } from './abstractions/i-animal-characteristics.js';

export class Cow implements IAnimalCharacteristics {
    public species: string;
    public walking: boolean;
    public eating: boolean;
    public voice: string;
    public mood: boolean;
    public milkAmount: number;

    public constructor(public readonly name: string) {
        this.species = 'cow';
        this.walking = true;
        this.eating = true;
        this.voice = 'moo';
        this.mood = true;
        this.milkAmount = 0;
    }
    public makeSound(): string {
        return this.voice;
    }
    public graze(): void {
        if (this.walking && this.eating) {
            console.log(`${this.name} the ${this.species} is happily grazing.`);
        } else {
            console.log(`${this.name} the ${this.species} cannot graze right now.`);
        }
    }
    public toMilkCow(): number {
        this.milkAmount += 10;
        console.log(`${this.species} has been milked. Total milk: ${this.milkAmount} liters.`);
        return this.milkAmount;
    }
    public extraMilkAmount(amount: number): number {
        if (this.walking === true && this.mood === true) {
            this.milkAmount += amount;
            console.log(`The ${this.species} is in a good mood! Extra milk collected. Total milk: ${this.milkAmount} liters.`);
            return this.milkAmount;
        }
        if (this.walking === false || this.mood === false) {
            console.log(`The ${this.species} is not in the right condition for extra milking.`);
            return this.milkAmount;
        }
        return this.milkAmount;
    }
    public rest(): void {
        if (!this.walking) {
            console.log(`The ${this.species} is laying and resting now.`);
        }
    }
};

