import { Page, Locator, expect } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly baseURL: string
  readonly cartItems: Locator

  constructor(page: Page) {
    this.baseURL = 'https://automationexercise.com/view_cart'
    this.page = page
    this.cartItems = page.locator('.cart_info tbody tr')
  }
  async getCartCount() {
    const countText = await this.page.locator('.cart_info tbody tr').count()
    return Number(countText)
  }
  async getCartCountByProductType() {
    const Quantity = await this.page
      .locator('.cart_quantity button')
      .allTextContents()
    return Number(Quantity)
  }
  async getTotalQty() {
    const quantities = await this.page
      .locator('.cart_info tbody tr .cart_quantity button')
      .allTextContents()
    // console.log(quantities)
    let total = 0
    for (let i = 0; i < quantities.length; i++) {
      total += Number(quantities[i])
    }
    console.log(total)
    return total
  }
}
