import { IAnimalCharacteristics } from './abstractions/i-animal-characteristics';

export class Dog implements IAnimalCharacteristics {
    public species: string;
    public walking: boolean;
    public eating: boolean;
    public voice: string;
    public tailSwinging: boolean;
    public mood: boolean;

    public constructor(public readonly name: string) {
        this.species = 'dog';
        this.walking = true;
        this.eating = true;
        this.voice = 'bark-bark';
        this.tailSwinging = true;
        this.mood = true;
    }
    public makeSound(): string {
        return this.voice;
    }
    public runAroundTheAria(): void {
        if (this.walking && this.eating && this.tailSwinging) {
            console.log(`The ${this.species} is alerting by ${this.voice} and run around the farm.`);
        } else {
            console.log(`The ${this.species} is sleeping right now.`);
        }
    }
    public fetchStick(): void {
        if (this.mood && this.walking) {
            console.log(`The ${this.species} is fetching the stick!`);
        } else {
            console.log(`The ${this.species} cannot fetch the stick right now.`);
        }
    }
    public rest(): void {
        if (!this.walking) {
            console.log(`The ${this.species} is laying and resting now.`);
        }
    }
};

