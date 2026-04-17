import { Page, Locator, expect } from '@playwright/test'

export class HomePage {
  // Step 2: Declare locators as typed class properties
  readonly page: Page
  readonly baseURL: string
  readonly homePageLogo: Locator
  readonly navBar: Locator
  readonly carouselBar: Locator
  readonly productItems: Locator

  // Step 3: Initialize all locators in the constructor
  constructor(page: Page, i18n?: string) {
    this.page = page
    this.baseURL = 'https://automationexercise.com'
    this.homePageLogo = page.getByRole('img', {
      name: 'Website for automation practice',
    })
    this.navBar = page.locator('.navbar-nav')
    this.carouselBar = page.locator('#slider-carousel')
    this.productItems = page.locator('.features_items .col-sm-4')
  }

  // Step 4: Router Methods
  async goto() {
    await this.page.goto(this.baseURL)
  }
  async goToProducts() {
    await this.page.goto(this.baseURL)
    await this.page.locator('[href="/products"]').click()
    await expect(this.page).toHaveURL(/.*products/)
  }
  async goToCart() {
    await this.page.goto(this.baseURL)
    await this.page.getByRole('link', { name: 'Cart' }).click()
    await expect(this.page).toHaveURL(/.*view_cart/)
  }
  async goToLogin() {
    await this.page.locator('[href="/login"]').click()
    await expect(this.page).toHaveURL(/.*login/)
  }

  //Validation Methods
  async getProductCount() {
    const countText = await this.productItems.count()
    return Number(countText)
  }
}
