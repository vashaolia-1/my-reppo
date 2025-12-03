import { Cow } from './cow';

export class Goose extends Cow {
    public species: string;
    public walking: boolean;
    public eating: boolean;
    public voice: string;
    public mood: boolean;
    public tailSwinging: boolean;
    public eggsLaid: number;

    public constructor(public readonly name: string) {
        super(name);
        this.species = 'goose';
        this.walking = true;
        this.eating = true;
        this.voice = 'quack-quack';
        this.mood = true;
        this.tailSwinging = true;
        this.eggsLaid = 0;
    }
    public makeSound(): string {
        return this.voice;
    }
    public graze(): void {
        super.graze();
        if (this.walking && this.eating) {
            console.log(`The ${this.species} is happily grazing.`);
        } else {
            console.log(`The ${this.species} cannot graze right now.`);
        }
    }
    public morningAlert(): void {
        if (this.walking && this.tailSwinging) {
            console.log(`The ${this.species} is alerting the farm with a loud ${this.voice}!`);
        }
    }
    private badMoodBehavior(): void {
        if (!this.mood) {
            this.walking = false;
            this.eating = false;
            this.tailSwinging = false;
            console.log(`The ${this.species} is in a bad mood and is not active.`);
        }
    }
    public lowEggsProduction(): void {
        this.badMoodBehavior();
        if (!this.mood) {
            console.log(`The ${this.species} is not laying many eggs due to bad mood.`);
        }
    }
    public rest(): void {
        super.rest();
        if (!this.walking) {
            console.log(`The ${this.species} is seating and resting now.`);
        }
    }
    public eggsLay(): number {
        this.eggsLaid += 3;
        console.log(`${this.species} has laid eggs. Total eggs: ${this.eggsLaid}.`);
        return this.eggsLaid;
        }
    };
    

