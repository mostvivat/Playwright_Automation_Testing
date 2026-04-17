import { test, expect } from '@playwright/test'

const API_BASE = 'https://automationexercise.com/api'

const formData = {
  search_product: 'Tshirts',
}

test.describe('Product API Assignment Homework', () => {
  // API 3: GET : All Brands List
  test('Validate GET : All Brands List', async ({ request }) => {
    const response = await request.get(`${API_BASE}/brandsList`)
    const data = await response.json()
    console.log(data)

    expect(data.responseCode).toBe(200)
    expect(data).toHaveProperty('brands')
    expect(data.brands.length).toBeGreaterThan(0)
    expect(data.brands[0]).toHaveProperty('id')
    expect(data.brands[0]).toHaveProperty('brand')
    expect(data.brands.length).toEqual(34)
    expect(data.brands[0].brand).toEqual('Polo')
  })

  test('Validate POST : To Search Product', async ({ request }) => {
    const response = await request.post(`${API_BASE}/searchProduct`, {
      form: formData,
    })

    const data = await response.json()

    console.log(JSON.stringify(data, null, 2))

    expect(data.responseCode).toBe(200)
    expect(data).toHaveProperty('products')
    expect(data.products.length).toBeGreaterThan(0)

    const product = data.products[0]

    expect(product).toHaveProperty('category')
    expect(product.category.category).toBe('Tshirts')
  })

  test('Validate invalid request method for All Brands List', async ({
    request,
  }) => {
    const response = await request.delete(`${API_BASE}/brandsList`)
    const data = await response.json()
    console.log(data)

    expect(data.responseCode).toBe(405)
    expect(data.message).toEqual('This request method is not supported.')
  })

  // API 2: POST : To All Products List
  test('Validate POST : To All Products List', async ({ request }) => {
    const response = await request.post(`${API_BASE}/productsList`)

    const data = await response.json()
    console.log(data)
    expect(data.responseCode).toBe(405)
    expect(data.message).toEqual('This request method is not supported.')
  })
  // API 6: POST : To Search Product without search_product parameter
  test('Validate POST : To Search Product without search_product parameter', async ({
    request,
  }) => {
    const response = await request.post(`${API_BASE}/searchProduct`)

    const data = await response.json()

    console.log(JSON.stringify(data, null, 2))

    expect(data.responseCode).toBe(400)
    expect(data.message).toEqual(
      'Bad request, search_product parameter is missing in POST request.',
    )
  })
})
