import { Locator, expect } from '@playwright/test';

export class NavBarComponent {
    public get goHomepage(): Locator {
        return this.baseLocator.locator('header .ga-home-page');
    }

    public get catalogButton(): Locator {
        return this.baseLocator.locator('button[class*="header__button-catalog"]');
    }

    public get storeLocation(): Locator {
        return this.baseLocator.locator('.btn-white-header.btn-dropdown-style.header__button.header__button-address.ml-3');
    }

    public get shopingList(): Locator {
        return this.baseLocator.locator('#shoppingListRightMenu');
    }

    public get cartButton(): Locator {
        return this.baseLocator.locator('#shoppingCartRightMenuCont');
    }

    public get profileButton(): Locator {
        return this.baseLocator.locator('div.dropdown.profile-dropdown');
    }

    public get catalogCloseButton(): Locator {
        return this.baseLocator.locator('button[class*="header__button-catalog"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async navigateToHomepage(): Promise<void> {
        await this.goHomepage.click();
    }

    public async openCatalog(): Promise<void> {
        await this.catalogButton.click();
    }

    public async verifyCatalogButtonIsVisible(): Promise<void> {
        await expect(this.catalogButton).toBeVisible();
    }

    public async closeCatalog(): Promise<void> {
        await this.catalogCloseButton.click();
    }

    public async verifyNavBarIsVisible(): Promise<void> {
        await expect(this.baseLocator).toBeVisible();
    }
}
