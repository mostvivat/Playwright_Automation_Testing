import { test, expect } from '../../fixtures/fixture_hw'

test.describe('UI Assertion Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto()
  })
  test('TC-001: Item must be visible in home page > 0', async ({
    homePage,
  }) => {
    const CountProducts = await homePage.getProductCount()
    expect(CountProducts).toBeGreaterThan(0)
    //console.log(CountProducts)
  })
  test('TC-002: Search item via "T-Shirt"', async ({
    homePage,
    productsPage,
    page,
  }) => {
    await homePage.goToProducts()
    await productsPage.searchProduct('T-Shirt')
    const countSearchResults = await productsPage.getProductCount()
    await expect(page).toHaveURL(/.*search/)
    expect(countSearchResults).toBeGreaterThan(1)
    // console.log(countSearchResults)
  })
  test('TC-003: System displays All product name', async ({
    homePage,
    productsPage,
  }) => {
    await homePage.goToProducts()
    const productNames = await productsPage.getAllProductNames()

    expect(productNames.length).toBeGreaterThan(0)
    expect(productNames[0]).not.toBeNull()

    console.log(productNames.length)
    console.log(productNames)
  })
  test('TC-004:Soft Assertion for validate all component in homepage', async ({
    homePage,
  }) => {
    await expect.soft(homePage.homePageLogo).toBeVisible()
    await expect.soft(homePage.navBar).toBeVisible()
    await expect.soft(homePage.carouselBar).toBeVisible()
    const countProducts = await homePage.getProductCount()
    expect.soft(countProducts).toBeGreaterThan(0)
    // console.log(countProducts)
  })

  //closed browser
  test.afterEach(async ({ page }) => {
    await page.close()
  })
})
