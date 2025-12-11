export class Cow {
    name;
    species;
    walking;
    eating;
    voice;
    mood;
    milkAmount;
    constructor(name) {
        this.name = name;
        this.species = 'cow';
        this.walking = true;
        this.eating = true;
        this.voice = 'moo';
        this.mood = true;
        this.milkAmount = 0;
    }
    makeSound() {
        return this.voice;
    }
    graze() {
        if (this.walking && this.eating) {
            console.log(`${this.name} the ${this.species} is happily grazing.`);
        }
        else {
            console.log(`${this.name} the ${this.species} cannot graze right now.`);
        }
    }
    toMilkCow() {
        this.milkAmount += 10;
        console.log(`${this.species} has been milked. Total milk: ${this.milkAmount} liters.`);
        return this.milkAmount;
    }
    extraMilkAmount(amount) {
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
    rest() {
        if (!this.walking) {
            console.log(`The ${this.species} is laying and resting now.`);
        }
    }
}
;
