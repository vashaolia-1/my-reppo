import {Locator, Page} from 'playwright';

export class LoginPage {

    private page: Page;
    private url: string;

    public get goTo(): string {
        return this.url;
    }

    public get usernameInput(): Locator {
        return this.page.locator('#user-name');
    }

    public get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    public get loginButton(): Locator {
        return this.page.locator('#login-button');
    }

    public constructor(page: Page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/';
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.url);
    }

    public async logIn(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
