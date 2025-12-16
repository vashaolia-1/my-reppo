import { Page, Locator, expect } from '@playwright/test';
import { CatalogComponent } from '../components/catalog.component';
import { NavBarComponent } from '../components/navigationbar.component';

export class HomePage {

    public NavBarComponent: NavBarComponent;
    public CatalogComponent: CatalogComponent;

    public get searchInput(): Locator {
        return this.page.locator('#homePageSearch');
    }

    public get searchButton(): Locator {
        return this.page.locator('#homeSearchAllBtn');
    }

    public get onboardingItems(): Locator {
        return this.page.locator('col-12 home__onboarding-container');
    }

    public get marketingBanner(): Locator {
        return this.page.locator('div.marketing-image-container');
    }

    public constructor(private readonly page: Page) {
        this.NavBarComponent = new NavBarComponent(this.page.locator('nav[class="navbar navbar-light header__navbar"]'));
        this.CatalogComponent = new CatalogComponent(this.page.locator('nav div[class="menu__container large"]'));
    }

    public async verifySearchTopIsVisible(): Promise<void> {
        await expect(this.searchInput).toBeVisible();
    }

    public async openStoreLocation(): Promise<void> {
        await this.NavBarComponent.storeLocation.click();
    }

    public async openShopingList(): Promise<void> {
        await this.NavBarComponent.shopingList.click();
    }

    public async openCart(): Promise<void> {
        await this.NavBarComponent.cartButton.click();
    }

    public async openProfile(): Promise<void> {
        await this.NavBarComponent.profileButton.click();
    }

    public async verifyOnboardingItemsAreVisible(): Promise<void> {
        await expect(this.onboardingItems).toBeVisible();
    }

    public async verifyMarketingBannerIsVisible(): Promise<void> {
        await expect(this.marketingBanner).toBeVisible();
    }
}
