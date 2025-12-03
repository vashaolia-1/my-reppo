import { Cow } from './cow';
import { Dog } from './dog';
import { Goose } from './goose';
export class Farm {
    name;
    constructor(name) {
        this.name = name;
    }
    milkSelling(cow) {
        const milk = cow.toMilkCow();
        console.log(`Sold ${milk} liters of milk from ${cow.species} named ${cow.name}.`);
        return milk;
    }
    dogGuarding(dog) {
        dog.runAroundTheAria();
        console.log(`The dog named ${dog.name} is guarding the farm.`);
    }
    gooseEggCollecting(goose) {
        const eggs = goose.eggsLay();
        console.log(`Collected ${eggs} eggs from ${goose.species} named ${goose.name}.`);
        return eggs;
    }
    restAllAnimals(animals) {
        animals.forEach((animal) => {
            if ('rest' in animal && typeof animal['rest'] === 'function') {
                animal.rest();
            }
        });
    }
}
const farm = new Farm('Sunny Farm');
const starlet = new Cow('Starlet');
starlet.graze();
starlet.extraMilkAmount(5);
farm.milkSelling(starlet);
const rex = new Dog('Rex');
rex.makeSound();
rex.runAroundTheAria();
farm.dogGuarding(rex);
const grey = new Goose('Grey');
grey.graze();
grey.morningAlert();
farm.gooseEggCollecting(grey);
farm.milkSelling(starlet);
farm.dogGuarding(rex);
farm.gooseEggCollecting(grey);
console.log('Success farm day is completed.');
// Making all animals rest
console.log('\nMaking all animals rest now:\n');
farm.restAllAnimals([starlet, rex, grey]);
// Bad mood scenario
console.log('\nBad mood scenario:\n');
starlet.mood = false;
rex.mood = false;
grey.mood = false;
farm.milkSelling(starlet);
farm.dogGuarding(rex);
farm.gooseEggCollecting(grey);
