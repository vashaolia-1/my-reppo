import { beforeEach, expect } from '@jest/globals';
import { Cow } from 'src/cow';
import { Goose } from 'src/goose';
describe('Unit tests for index.ts', () => {
    let cow;
    let goose;
    beforeEach(() => {
        cow = new Cow('Starlet');
        goose = new Goose('Grey');
    });
    describe('milkSelling Method', () => {
        test('should return correct milk amount after selling milk', () => {
            expect(cow.toMilkCow).toBe(10);
        });
    });
    describe('eggsCollectingMethod', () => {
        test('should return correct eggs amount', () => {
            expect(goose.eggsLay).toBe(3);
        });
    });
    describe('lowEggsProduction', () => {
        test('return zero eggs amount due to bad mood', () => {
            goose.mood = false;
            expect(goose.zeroEggs).toEqual(0);
        });
    });
});
