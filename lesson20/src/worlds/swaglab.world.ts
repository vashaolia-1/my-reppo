import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { SwagPage } from '../pages/swag.page.ts';
import { LoginPage } from '../pages/login.page.ts';

export class swaglabWorld extends World {

    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();

    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public get globalContext(): Map<string, unknown> {
        return swaglabWorld.globalContext;
    }

    public get swagPage(): SwagPage {
        if (!this._swagPage) {
            this._swagPage = new SwagPage(this.page);
        }
        return this._swagPage;
    }

    public get browser(): Browser {
        return swaglabWorld.browser;
    }

    public get SwagPage(): SwagPage {
        if (!this._swagPage) {
            this._swagPage = new SwagPage(this.page);
        }
        return this._swagPage;
    }

    public get LoginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    private _swagPage: SwagPage | undefined;
    private _loginPage: LoginPage | undefined;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
