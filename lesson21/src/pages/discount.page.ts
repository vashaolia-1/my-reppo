import { Locator, Page} from '@playwright/test';

export class DiscountPage {

    public get subscibeTitle(): Locator {
        return this.page.locator('h1.oes-h1');
    }

    public get nameInput(): Locator {
        return this.page.locator('.subscribe-block__form-col #field-user-name');
    }

    public get emailInput(): Locator {
        return this.page.locator('#field-user-email');
    }

    public get subcsribeButton(): Locator {
        return this.page.locator('#subscribe-rules-agree-1');
    }

    public constructor(private readonly page: Page) {}

    public async clickOnSubscribe(): Promise<void> {
        await this.subcsribeButton.click();
    }

    public async fillNameInput(): Promise<void> {
        await this.nameInput.fill('Ivan');
    }

    public async fillEmailInput(): Promise<void> {
        await this.emailInput.fill('ivantest@gmail.com');
    }

};
