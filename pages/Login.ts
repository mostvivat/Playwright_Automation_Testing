import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly errorMessage: Locator
  readonly successMessage: Locator

  constructor(page: Page, i18n?: string) {
    this.usernameInput = page.locator('[data-qa="login-email"]')
    this.passwordInput = page.locator('[data-qa="login-password"]')
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.successMessage = page.getByText('Logged in as')
    this.errorMessage = page.getByText('Your email or password is incorrect!')
  }

  //Action Methods
  async login({ username, password }: { username: string; password: string }) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  //Validation Methods
  async expectLoginSuccess() {
    await expect(this.successMessage).toBeVisible()
  }
  async expectLoginFailed() {
    await expect(this.errorMessage).toBeVisible()
    await expect(this.errorMessage).toHaveText(
      'Your email or password is incorrect!',
    )
  }
}
