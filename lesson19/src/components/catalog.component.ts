import { expect, Locator } from '@playwright/test';

export class CatalogComponent {

    public get catalogOpenedList(): Locator {
        return this.baseLocator.locator('ul[class="menu__level-one"]');
    }

    public get catalogSecondList(): Locator {
        return this.baseLocator.locator('ul[class="menu__level-two"]');
    }

    private getSingleMenuItem(menuItem: string): Locator {
        return this.baseLocator.locator('ul.menu__level-one li', { hasText: menuItem });
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async verifyCatalogOpenedListIsVisible(): Promise<void> {
        await expect(this.catalogOpenedList).toBeVisible();
    }

    public async verifyCatalogSecondListIsVisible(): Promise<void> {
        await expect(this.catalogSecondList).toBeVisible();
    }

    public async getMenuItems(): Promise<string[]> {
        return this.catalogOpenedList.locator('li.menu__level-one-item').allTextContents();
    }

    public async selectMenuItem(menuItem: string): Promise<void> {
        const item = this.getSingleMenuItem(menuItem);
        await item.isVisible();
        await item.click();
    }

}
