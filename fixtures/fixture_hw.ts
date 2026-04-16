import { test as base, BrowserContext, Route } from '@playwright/test'
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
  },
})

export async function blockAds(context: BrowserContext) {
  await context.route('**/*', (route: Route) => {
    const url = route.request().url()

    if (
      url.includes('googlesyndication.com') ||
      url.includes('doubleclick.net') ||
      url.includes('googleadservices.com')
    ) {
      return route.abort()
    }

    return route.continue()
  })
}
export { expect } from '@playwright/test'
