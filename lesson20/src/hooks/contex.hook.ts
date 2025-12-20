import { After, Before } from '@cucumber/cucumber';
import { swaglabWorld } from '../worlds/swaglab.world.ts';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';

export function browserContextHook(): void {
    Before(async function(this: swaglabWorld, { pickle }) {
        const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/London',
            viewport: { width: 1280, height: 1024 }
        };
        if (fs.existsSync('./cookie.json')) {
            browserOptions.storageState = './cookie.json';
        }
        this.context = await swaglabWorld.browser.newContext(browserOptions);
    });

    After(async function(this: swaglabWorld) {
        await this.context.close();
    });
}
