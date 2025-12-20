import { browserHook } from './browser.hook.ts';
import { pageHook } from './page.hook.ts';
import { attachResultsHook } from './results.hook.ts';
import { globalContextHook } from './global-contex.hook.ts';
import { browserContextHook } from './contex.hook.ts';

globalContextHook();
browserHook();
browserContextHook();
pageHook();
attachResultsHook();
