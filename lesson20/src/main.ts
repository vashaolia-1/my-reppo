import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { swaglabWorld } from './worlds/swaglab.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(swaglabWorld);
