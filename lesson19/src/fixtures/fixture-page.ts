import { test as base } from '@playwright/test';
import { HomePage } from 'src/pages/home.page';

export const test = base.extend<{
    HomePage: HomePage;
}>({
    HomePage: async ({ page }, use) => {
        await use(new HomePage(page));
        await page.close();
    }
});
