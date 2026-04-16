import { test as base } from '@playwright/test'
import { HomePage } from '../pages/Home'
import { LoginPage } from '../pages/Login'
import { ProductsPage } from '../pages/Products'
import { CartPage } from '../pages/Cart'

type Pages = {
  homePage: HomePage
  loginPage: LoginPage
  productsPage: ProductsPage
  cartPage: CartPage
}

export const test = base.extend<Pages>({  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page))
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  }
})

export { expect } from '@playwright/test'
 