import { BeforeAll } from '@cucumber/cucumber';
import { swaglabWorld } from '../worlds/swaglab.world.ts';

export function globalContextHook(): void {
    BeforeAll(function() {
        swaglabWorld.globalContext = new Map();
    });
}
