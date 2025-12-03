import { Cow } from './cow';
export class Goose extends Cow {
    name;
    species;
    walking;
    eating;
    voice;
    mood;
    tailSwinging;
    eggsLaid;
    zeroEggs;
    constructor(name) {
        super(name);
        this.name = name;
        this.species = 'goose';
        this.walking = true;
        this.eating = true;
        this.voice = 'quack-quack';
        this.mood = true;
        this.tailSwinging = true;
        this.eggsLaid = 0;
        this.zeroEggs = 0;
    }
    makeSound() {
        return this.voice;
    }
    graze() {
        super.graze();
        if (this.walking && this.eating) {
            console.log(`The ${this.species} is happily grazing.`);
        }
        else {
            console.log(`The ${this.species} cannot graze right now.`);
        }
    }
    morningAlert() {
        if (this.walking && this.tailSwinging) {
            console.log(`The ${this.species} is alerting the farm with a loud ${this.voice}!`);
        }
    }
    badMoodBehavior() {
        if (!this.mood) {
            this.walking = false;
            this.eating = false;
            this.tailSwinging = false;
            console.log(`The ${this.species} is in a bad mood and is not active.`);
        }
    }
    lowEggsProduction() {
        this.badMoodBehavior;
        if (!this.mood) {
            console.log(`The ${this.species} is laying ${this.zeroEggs} eggs due to bad mood.`);
        }
    }
    rest() {
        super.rest();
        if (!this.walking) {
            console.log(`The ${this.species} is seating and resting now.`);
        }
    }
    eggsLay() {
        this.eggsLaid += 3;
        console.log(`${this.species} has laid eggs. Total eggs: ${this.eggsLaid}.`);
        return this.eggsLaid;
    }
}
