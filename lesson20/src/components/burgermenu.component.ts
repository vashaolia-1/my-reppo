import { Locator } from 'playwright';

export class BurgerMenuComponent {

    public get menuContainer(): Locator {
        return this.baseLocator.locator('div.primary_header');
    }

    public get allItemsLink(): Locator {
        return this.menuContainer.locator('#inventory_sidebar_link');
    }

    public get aboutLink(): Locator {
        return this.menuContainer.locator('#about_sidebar_link');
    }

    public get logoutLink(): Locator {
        return this.menuContainer.locator('#logout_sidebar_link');
    }

    public get resetAppStateLink(): Locator {
        return this.menuContainer.locator('#reset_sidebar_link');
    }

    public get closeMenuButton(): Locator {
        return this.menuContainer.locator('#react-burger-cross-btn');
    }

    public constructor(private readonly baseLocator: Locator) {}
}
