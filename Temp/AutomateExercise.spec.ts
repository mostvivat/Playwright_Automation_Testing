// import { test, expect } from '@playwright/test'
// import { describe } from 'node:test'

// // Test Data
// const BASE_URL = 'https://automationexercise.com'
// const userName = 'Most Test'
// const validEmail = 'Most@example.com'
// const InvalidEmail = 'Most888@example.com'
// const InvalidPassword = 'password999'
// const validPassword = 'password123'
// const firstName = 'Vivat'
// const lastName = 'Test'
// const company = 'Vivat Enterprises'

// test.describe('Login to Automation Exercise', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(BASE_URL)
//     await expect(page).toHaveTitle('Automation Exercise')
//   })

//   test('TC001 - Sign Up Account', async ({ page }) => {
//     await page.goto(`${BASE_URL}/login`)

//     const userNameInput = page.locator('input[data-qa="signup-name"]')
//     const emailInput = page.locator('input[data-qa="signup-email"]')
//     const signupButton = page.locator('button[data-qa="signup-button"]')

//     await userNameInput.fill(userName)
//     await emailInput.fill(validEmail)
//     await signupButton.click()

//     expect(
//       page.locator('h2:has-text("Enter Account Information")'),
//     ).toBeVisible()
//     await expect(page).toHaveURL(`${BASE_URL}/signup`)

//     // Account Information
//     const titleMr = page.locator('input#id_gender1')
//     const passwordInput = page.locator('input[data-qa="password"]')
//     const daySelect = page.locator('select[data-qa="days"]')
//     const monthSelect = page.locator('select[data-qa="months"]')
//     const yearSelect = page.locator('select[data-qa="years"]')
//     const newsletterCheckbox = page.locator('input#newsletter')
//     const offersCheckbox = page.locator('input#optin')
//     const createAccountButton = page.locator('button[data-qa="create-account"]')
//     // Address Information
//     const firstNameInput = page.locator('input[data-qa="first_name"]')
//     const lastNameInput = page.locator('input[data-qa="last_name"]')
//     const companyInput = page.locator('input[data-qa="company"]')
//     const addressInput = page.locator('input[data-qa="address"]')
//     const address2Input = page.locator('input[data-qa="address2"]')
//     const countrySelect = page.locator('select[data-qa="country"]')
//     const stateInput = page.locator('input[data-qa="state"]')
//     const cityInput = page.locator('input[data-qa="city"]')
//     const zipcodeInput = page.locator('input[data-qa="zipcode"]')
//     const mobileNumberInput = page.locator('input[data-qa="mobile_number"]')

//     await titleMr.check()
//     await passwordInput.fill(validPassword)
//     await daySelect.selectOption('10')
//     await monthSelect.selectOption('5')
//     await yearSelect.selectOption('1990')
//     await newsletterCheckbox.check()
//     await offersCheckbox.check()
//     await createAccountButton.click()
//     await firstNameInput.fill(firstName)
//     await lastNameInput.fill(lastName)
//     await companyInput.fill(company)
//     await addressInput.fill('123 Main St')
//     await address2Input.fill('Apt 4B')
//     await countrySelect.selectOption('United States')
//     await stateInput.fill('California')
//     await cityInput.fill('Los Angeles')
//     await zipcodeInput.fill('90001')
//     await mobileNumberInput.fill('1234567890')
//     await createAccountButton.click()

//     const accountCreatedMessage = page.locator(
//       'h2:has-text("Account Created!")',
//     )
//     await expect(accountCreatedMessage).toBeVisible()
//   })

//   test('TC002 - Login with valid credentials', async ({ page }) => {
//     await page.goto(`${BASE_URL}/login`)

//     const emailInput = page.locator('input[data-qa="login-email"]')
//     const passwordInput = page.locator('input[data-qa="login-password"]')
//     const loginButton = page.locator('button[data-qa="login-button"]')
//     const loggedInUser = page.locator('a:has-text("Logged in as")')

//     await emailInput.fill(validEmail)
//     await passwordInput.fill(validPassword)
//     await loginButton.click()
//     await expect(loggedInUser).toBeVisible()
//   })
//   test('TC003 - Login with invalid credentials', async ({ page }) => {
//     await page.goto(`${BASE_URL}/login`)

//     const emailInput = page.locator('input[data-qa="login-email"]')
//     const passwordInput = page.locator('input[data-qa="login-password"]')
//     const loginButton = page.locator('button[data-qa="login-button"]')
//     const errorMessage = page.locator(
//       'p:has-text("Your email or password is incorrect!")',
//     )

//     await emailInput.fill(InvalidEmail)
//     await passwordInput.fill(InvalidPassword)
//     await loginButton.click()
//     await expect(errorMessage).toBeVisible()
//   })
// })
