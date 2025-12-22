import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { swaglabWorld as SwaglabWorld } from '../worlds/swaglab.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        SwaglabWorld.browser = await chromium.launch({ headless: false });
    });


    AfterAll(async function() {
        await SwaglabWorld.browser.close();
    });
}
