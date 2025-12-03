import { Cow } from 'src/cow';
import { expect } from 'chai';

describe('Cow Class Tests', () => {
    let cow: Cow;

    beforeEach(() => {
        cow = new Cow('Starlet');
        cow.species = 'cow';
        cow.extraMilkAmount(5);
        cow.milkAmount = 10;
        cow.walking = true;
        cow.eating = true;
        cow.mood = true;
    });

    describe('makeSound Method', () => {
        it('should return the correct sound', () => {
            const sound = cow.makeSound();
            expect(sound).to.equal('moo');
        });
    });

    describe('graze Method', () => {
        it('should log grazing message when walking and eating', () => {
            cow.walking = true;
            cow.eating = true;
            console.log(`${cow.name} the ${cow.species} is happily grazing.`);
        });

        it('should log cannot graze message when not walking or eating', () => {
            cow.walking = false;
            cow.eating = false;
            console.log(`${cow.name} the ${cow.species} cannot graze right now.`);
        });
    });

    describe('toMilkCow Method', () => {
        it('should return correct milk amount after milking the cow', () => {
            cow.milkAmount = 0;
            const milk = cow.toMilkCow();
            expect(milk).to.equal(10);
        });
    });

    describe('extraMilkAmount Method', () => {
        it('should increase milk amount correctly', () => {
            cow.extraMilkAmount(5);
            expect(cow['milkAmount']).to.equal(15);
        });

        it('should not increase milk amount when not in right condition', () => {
            cow.extraMilkAmount(0);
            expect(cow['milkAmount']).to.equal(10);
        });
    });

    describe('rest Method', () => {
        it('Cow should resting when not walking', () => {
            const walking = cow.walking;
            cow.walking = false;
            console.log(`The ${cow.species} is laying and resting now.`);
            expect(cow.walking).to.not.equal(walking);
        });
    });
});
