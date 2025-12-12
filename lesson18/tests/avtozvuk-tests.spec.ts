import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { DiscountPage } from '../src/pages/discount.page';

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('https://avtozvuk.ua/');
});

test('Open Avtozvuk home page', async ({page}) => {
    const homePage = new HomePage(page);

    await expect(page).toHaveURL('https://avtozvuk.ua/ua');
    await expect(homePage.loginButton).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
});

test('Select Volvo brand', async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.selectBrandVolvo();
    await expect(page).toHaveURL('https://avtozvuk.ua/ua/cars/volvo/manhc2057hc');
});

test('Make subscribe with wrong data', async ({page}) => {
    const discountPage = new DiscountPage(page);
    const homePage = new HomePage(page);

    await homePage.openPromo();
    await expect(discountPage.subscibeTitle).toHaveText('Всі');
    await discountPage.fillNameInput();
    await discountPage.fillEmailInput();
    await expect(discountPage.subcsribeButton).toBeDisabled();

});
