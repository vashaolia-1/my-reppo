import { test } from 'src/fixtures/fixture-page';
import { expect } from '@playwright/test';

test.describe('Tabletki Page Tests', () => {
    test('Verify Tabletki Page Elements', async ({ page, HomePage }) => {

        await page.goto('https://tabletki.ua/');
        await HomePage.searchInput.isVisible();
        await HomePage.NavBarComponent.verifyNavBarIsVisible();
        await HomePage.marketingBanner.isVisible();
        await HomePage.onboardingItems.isVisible();
    });
    test('Navigate to Catalog from Tabletki Page', async ({ page, HomePage }) => {

        await page.goto('https://tabletki.ua/');
        await HomePage.NavBarComponent.openCatalog();
        await expect(HomePage.CatalogComponent.catalogOpenedList).toBeVisible();
        await expect(HomePage.NavBarComponent.catalogButton).toBeVisible();
    });
    test('Select Category from Catalog on Tabletki Page', async ({ page, HomePage }) => {

        await page.goto('https://tabletki.ua/');
        await HomePage.NavBarComponent.openCatalog();
        await HomePage.CatalogComponent.selectMenuItem('Краса та догляд');
        await expect(page).toHaveURL('https://tabletki.ua/uk/category/35/');
    });
    test('Close Catalog on Tabletki Page', async ({ page, HomePage }) => {

        await page.goto('https://tabletki.ua/');
        await HomePage.NavBarComponent.openCatalog();
        await HomePage.NavBarComponent.closeCatalog();
        await expect(HomePage.CatalogComponent.catalogOpenedList).not.toBeVisible();
    });
});
