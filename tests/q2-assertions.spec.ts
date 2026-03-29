import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Home'
import { ProductsPage } from '../pages/Products'
// import { CartPage } from '../pages/Cart'

test.describe('UI Assertion Tests', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.goto()
  })
  test('TC-001: Item must be visible in home page > 0', async ({ page }) => {
    const homePage = new HomePage(page)
    const CountProducts = await homePage.getProductCount()
    expect(CountProducts).toBeGreaterThan(0)
    //console.log(CountProducts)
  })
  test('TC-002: Search item via "T-Shirt"', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)

    await homePage.goToProducts()
    await productsPage.searchProduct('T-Shirt')
    const countSearchResults = await productsPage.getProductCount()
    await expect(page).toHaveURL(/.*search/)
    expect(countSearchResults).toBeGreaterThan(1)
    // console.log(countSearchResults)
  })
  test('TC-003: System displays All product name', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)

    await homePage.goToProducts()
    const productNames = await productsPage.getAllProductNames()

    expect(productNames.length).toBeGreaterThan(0)
    expect(productNames[0]).not.toBeNull()

    console.log(productNames.length)
    console.log(productNames)
  })
  test('TC-004:Soft Assertion for validate all component in homepage', async ({
    page,
  }) => {
    const homePage = new HomePage(page)

    await expect.soft(homePage.homePageLogo).toBeVisible()
    await expect.soft(homePage.navBar).toBeVisible()
    await expect.soft(homePage.carouselBar).toBeVisible()
    const countProducts = await homePage.getProductCount()
    expect.soft(countProducts).toBeGreaterThan(0)
    // console.log(countProducts)
  })

  //closed browser
  // test.afterEach(async ({ page }) => {
  //   await page.close()
  // })
})
