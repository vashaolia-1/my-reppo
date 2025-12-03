import { IAnimalCharacteristics } from './abstractions/i-animal-characteristics';
import { Cow } from './cow';
import { Dog } from './dog';
import { Goose } from './goose';

class Farm {
    public constructor(public readonly name: string) { }

    public milkSelling(cow: Cow): number {
        const milk = cow.toMilkCow();
        console.log(`Sold ${milk} liters of milk from ${cow.species} named ${cow.name}.`);
        return milk;
    }

    public dogGuarding(dog: Dog): void {
        dog.runAroundTheAria();
        console.log(`The dog named ${dog.name} is guarding the farm.`);
    }

    public gooseEggCollecting(goose: Goose): void {
        const eggs = goose.eggsLay();
        console.log(`Collected ${eggs} eggs from ${goose.species} named ${goose.name}.`);
    }
    public restAllAnimals(animals: IAnimalCharacteristics[]): void {
        animals.forEach((animal) => {
            if ('rest' in animal && typeof animal['rest'] === 'function') {
                (animal as IAnimalCharacteristics).rest();
            }
        });
    }
}
const farm = new Farm('Sunny Farm');

const zirochka = new Cow('Zirochka');
zirochka.graze();
zirochka.extraMilkAmount(5);
farm.milkSelling(zirochka);

const rex = new Dog('Rex');
rex.makeSound();
rex.runAroundTheAria();
farm.dogGuarding(rex);

const siryi = new Goose('Siryi');
siryi.graze();
siryi.morningAlert();
farm.gooseEggCollecting(siryi);

farm.milkSelling(zirochka);
farm.dogGuarding(rex);
farm.gooseEggCollecting(siryi);
console.log('Success farm day is completed.');

// Making all animals rest
console.log('\nMaking all animals rest now:\n');
farm.restAllAnimals([zirochka, rex, siryi]);

// Bad mood scenario
console.log('\nBad mood scenario:\n');
zirochka.mood = false;
rex.mood = false;
siryi.mood = false;

farm.milkSelling(zirochka);
farm.dogGuarding(rex);
farm.gooseEggCollecting(siryi);

