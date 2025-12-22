import { After, Before } from '@cucumber/cucumber';
import { swaglabWorld } from '../worlds/swaglab.world.ts';

export function pageHook(): void {
    Before(async function(this: swaglabWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: swaglabWorld) {
        await this.page.close();
    });
}
