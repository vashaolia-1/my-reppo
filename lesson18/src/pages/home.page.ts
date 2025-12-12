import { Locator, Page } from '@playwright/test';

export class HomePage {

    public get loginButton(): Locator {
        return this.page.locator('.auth-menu__item [href="/ua/login"]');
    }

    public get searchField(): Locator {
        return this.page.locator('input.search-form__input');
    }

    public get searchButton(): Locator {
        return this.page.locator('.header__search [type="submit"]');
    }

    public get promoLink(): Locator {
        return this.page.locator('.user-menu [href="/ua/promos"]');
    }

    public get brandVolvo(): Locator {
        return this.page.locator('.autoselection-manufacturers div:nth-child(51)');
    }

    public constructor(private readonly page: Page) {}

    public async goToLoginPage(): Promise<void> {
        await this.loginButton.click({ force: true });
    }

    public async selectBrandVolvo(): Promise<void> {
        await this.brandVolvo.click({ force: true });
    }

    public async openPromo(): Promise<void> {
        await this.promoLink.click({ force: true });
    }

};

