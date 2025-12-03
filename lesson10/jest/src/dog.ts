export class Dog {
    name;
    species;
    walking;
    eating;
    voice;
    tailSwinging;
    mood;
    constructor(name) {
        this.name = name;
        this.species = 'dog';
        this.walking = true;
        this.eating = true;
        this.voice = 'bark-bark';
        this.tailSwinging = true;
        this.mood = true;
    }
    makeSound() {
        return this.voice;
    }
    runAroundTheAria() {
        if (this.walking && this.eating && this.tailSwinging) {
            console.log(`The ${this.species} is alerting by ${this.voice} and run around the farm.`);
        }
        else {
            console.log(`The ${this.species} is sleeping right now.`);
        }
    }
    fetchStick() {
        if (this.mood && this.walking) {
            console.log(`The ${this.species} is fetching the stick!`);
        }
        else {
            console.log(`The ${this.species} cannot fetch the stick right now.`);
        }
    }
    rest() {
        if (!this.walking) {
            console.log(`The ${this.species} is laying and resting now.`);
        }
    }
}
;
