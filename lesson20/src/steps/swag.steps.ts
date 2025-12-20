import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { swaglabWorld } from '../worlds/swaglab.world.ts';

Given('The user is on the login page', async function (this: swaglabWorld) {
    await this.swagPage.navigate();
});

When('The user fills in with username and password with next data',
    async function (this: swaglabWorld, dataTable) {
        const data = dataTable.rowsHash();
        const username = data['username'];
        const password = data['password'];
        await this.swagPage.usernameInput.fill(username);
        await this.swagPage.passwordInput.fill(password);
    }
);

When('The user clicks the login button', async function (this: swaglabWorld) {
    await this.swagPage.clickLoginButton();
});

Then('The user should see the products page', async function (this: swaglabWorld) {
    expect(await this.swagPage.isProductsPageVisible()).to.be.true;
});

Then('The user should see an error message "Epic sadface: Sorry, this user has been locked out."', async function (this: swaglabWorld) {
    const errorMessage = await this.swagPage.getErrorMessage();
    expect(errorMessage).to.equal('Epic sadface: Sorry, this user has been locked out.');
});

When('The user opens the burger menu', async function (this: swaglabWorld) {
    await this.swagPage.openBurgerMenu();
});

When('The user clicks the logout button', async function (this: swaglabWorld) {
    await this.swagPage.clickLogoutButton();
});

Then('The burger menu should contain the following items:', async function (this: swaglabWorld, dataTable) {
    const expectedItems = dataTable.raw().flat();
    const actualItems = await this.swagPage.getBurgerMenuItems();
    expect(actualItems).to.have.members(expectedItems);
    await this.swagPage.clickLogoutButton();
});

Then('The user should see the login page', async function (this: swaglabWorld) {
    expect(await this.swagPage.isLoginPageVisible()).to.be.true;
});

When('The user adds the first product to the cart', async function (this: swaglabWorld) {
    await this.swagPage.addFirstProductToCart();
});

When('The user goes to the cart', async function (this: swaglabWorld) {
    await this.swagPage.goToCart();
});

Then('The user should see the product in the cart', async function (this: swaglabWorld) {
    expect(await this.swagPage.isProductInCart()).to.be.true;
});

