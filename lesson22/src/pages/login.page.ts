import { Locator, Page } from '@playwright/test';

export class loginPage {
    private readonly _url = 'https://avtozvuk.ua/';

    public get loginButton(): Locator {
        return this.page.locator('.auth-menu__item [href="/ua/login"]');
    }

    public get phoneNumberInput(): Locator {
        return this.page.locator('input#v-0-0');
    }

    public get nextButton(): Locator {
        return this.page.locator('div[class="login-widget"] button');
    }

    public get registerButton(): Locator {
        return this.page.locator('a.user-form__link');
    }

    public constructor(private readonly page: Page) {}

    public async fillPhoneInput(): Promise<void> {
        await this.phoneNumberInput.fill('1234567890');
    }

    public async clickOnNext(): Promise<void> {
        await this.nextButton.click({ force: true });
    }
};
