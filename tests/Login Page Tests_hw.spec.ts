import { test, expect } from '../fixtures/fixture_hw'

const ValidCredentials = {
  username: 'Vivat@gmail.com',
  password: 'password123',
}

const InvalidCredentials = {
  username: 'Invalid@gmail.com',
  password: 'wrongPassword',
}

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto()
  })

  test('TC-001 login successfully with valid credentials', async ({
    homePage,
    loginPage,
  }) => {
    await homePage.goToLogin()
    await loginPage.login(ValidCredentials)
    await loginPage.expectLoginSuccess()
  })

  test('TC-002 show error with invalid credentials', async ({
    homePage,
    loginPage,
  }) => {
    await homePage.goToLogin()
    await loginPage.login(InvalidCredentials)
    await loginPage.expectLoginFailed()
  })

  test('TC-003 navigate to products page', async ({ homePage, page }) => {
    await homePage.goToProducts()
    await expect(page).toHaveURL(/.*products/)
  })

  test('TC-004 navigate to cart page', async ({ homePage, page }) => {
    await homePage.goToCart()
    await expect(page).toHaveURL(/.*view_cart/)
  })

  test('TC-005 get cart count by product type', async ({
    homePage,
    productsPage,
    cartPage,
  }) => {
    await homePage.goToProducts()

    for (let i = 1; i <= 3; i++) {
      await productsPage.addProductToCart(i)
    }

    await homePage.goToCart()
    const count = await cartPage.getCartCount()

    expect(count).toBe(3)
  })

  test('TC-006 should get cart count by item', async ({
    homePage,
    productsPage,
    cartPage,
  }) => {
    await homePage.goToProducts()

    for (let i = 1; i <= 5; i++) {
      await productsPage.addProductToCart(1)
    }

    await homePage.goToCart()
    const count = await cartPage.getCartCountByProductType()

    expect(count).toBe(5)
  })

  test('TC-007 should get total quantity of all items', async ({
    homePage,
    productsPage,
    cartPage,
  }) => {
    await homePage.goToProducts()

    for (let i = 1; i <= 3; i++) {
      await productsPage.addProductWithQty(i, 3)
    }

    await homePage.goToCart()
    const totalQty = await cartPage.getTotalQty()

    expect(totalQty).toBe(9)
  })
  test.afterEach(async ({ page }) => {
    await page.close()
  })
})
