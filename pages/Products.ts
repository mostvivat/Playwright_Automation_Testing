import { Page, Locator, expect } from '@playwright/test'

export class ProductsPage {
  readonly page: Page
  readonly baseURL: string
  readonly searchInput: Locator
  readonly searchButton: Locator
  readonly productItems: Locator
  readonly confirmModal: Locator

  constructor(page: Page) {
    this.baseURL = 'https://automationexercise.com/products'
    this.page = page
    this.searchInput = page.locator('#search_product')
    this.searchButton = page.locator('#submit_search')
    this.productItems = page.locator('.features_items .col-sm-4')
    this.confirmModal = page.locator('[data-dismiss="modal"]')
  }
  // Action Methods
  async addProductToCart(productId: number) {
    await this.page
      .locator('.productinfo')
      .nth(productId - 1)
      .locator('a:has-text("Add to cart")')
      .click()
    await this.confirmModal.click()
  }
  async searchProduct(productName: string) {
    await this.searchInput.fill(productName)
    await this.searchButton.click()
  }

  //Validation Methods
  async getProductCount() {
    const countText = await this.productItems.count()
    return Number(countText)
  }

  async addProductWithQty(productID: number, qty: number) {
    for (let i = 0; i < qty; i++) {
      await this.addProductToCart(productID)

      // small buffer to avoid UI overlap issues
      await this.page.waitForTimeout(300)
    }
  }
  async getAllProductNames() {
    const productNames = await this.productItems
      .locator('.productinfo p')
      .allTextContents()
    return productNames
  }
}
