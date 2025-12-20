import { Locator, Page } from 'playwright';

export class SwagPage {
    private page: Page;
    private url: string;

    public get goTo(): string {
        return this.url;
    }

    public get appLogo(): Locator {
        return this.page.locator('div.app_logo');
    }

    public get menuButton(): Locator {
        return this.page.locator('#react-burger-menu-btn');
    }

    public get productPageList(): Locator {
        return this.page.locator('div.inventory_list');
    }

    public get productItem(): Locator {
        return this.page.locator('div.inventory_item #item_4_img_link');
    }

    public get cartButton(): Locator {
        return this.page.locator('#shopping_cart_container');
    }

    public get sortButton(): Locator {
        return this.page.locator('select.product_sort_container ');
    }

    public get burgerMenuItems(): Locator {
        return this.page.locator('nav.bm-item-list a');
    }

    public constructor(page: Page) {
        this.page = page;
        this.url = 'https://www.saucedemo.com/';
    }

    public async navigate(): Promise<void> {
        await this.page.goto(this.url);
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

    public async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    public async isProductsPageVisible(): Promise<boolean> {
        return await this.productPageList.isVisible();
    }

    public async openBurgerMenu(): Promise<void> {
        await this.menuButton.click();
    }

    public async clickLogoutButton(): Promise<void> {
        const logoutButton = this.page.locator('#logout_sidebar_link');
        await logoutButton.click();
    }

    public async isLoginPageVisible(): Promise<boolean> {
        return await this.loginButton.isVisible();
    }

    public async getErrorMessage(): Promise<string> {
        const errorMessage = this.page.locator('h3[data-test="error"]');
        return await errorMessage.textContent() || '';
    }

    public async getBurgerMenuItems(): Promise<string[]> {
        const itemsCount = await this.burgerMenuItems.count();
        const items: string[] = [];
        for (let i = 0; i < itemsCount; i++) {
            const itemText = await this.burgerMenuItems.nth(i).textContent();
            if (itemText) {
                items.push(itemText.trim());
            }
        }
        return items;
    }

    public async addFirstProductToCart(): Promise<void> {
        const addToCartButton = this.page.locator('button.btn_inventory').first();
        await addToCartButton.click();
    }

    public async goToCart(): Promise<void> {
        await this.cartButton.click();
    }

    public async isProductInCart(): Promise<boolean> {
        const cartItem = this.page.locator('div.cart_item');
        return await cartItem.isVisible();
    }
}
