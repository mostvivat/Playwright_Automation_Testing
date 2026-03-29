### Q1 — OOP + POM (Simplified)

จากไฟล์ `LoginPage.ts` ให้เติม method และ locator ที่หายไป เพื่อให้ test รันผ่าน

**1. Constructor**
เพิ่ม locator:

- login button
- error message
- success message

**2. goto()**

- เข้าเว็บไซต์
- ไปหน้า login (ถ้ามี)

**3. login(username, password)**

- กรอก username
- กรอก password
- กด login

**4. expectSuccess()**

- ตรวจสอบว่า login สำเร็จ

**5. expectError(message)**

- ตรวจสอบ error message ให้ตรงกับค่าที่ส่งมา

**6. Navigation**

- `goToProducts()` → ไปหน้า `/products`
- `goToCart()` → ไปหน้า `/view_cart`

**7. getCartCount()**

- คืนค่าจำนวนสินค้าใน cart (number)

---

### Q2 — UI Assertions (Simplified)

เขียน test โดยใช้ `pages.fixture.ts`

**Test 1: Homepage**

- เข้า `/`
- จำนวนสินค้า > 0

**Test 2: Search**

- ค้นหา `"tshirt"`
- URL ต้องมี `"search"`
- ผลลัพธ์ต้องมีสินค้า ≥ 1

**Test 3: Products Page**

- ไป `/products`
- ดึงชื่อสินค้าทั้งหมด
- จำนวน > 0
- ตัวแรกต้องไม่ใช่ empty

**Test 4: Soft Assertions (Homepage)**

- มี logo
- มี navigation bar
- มี slider (carousel)
- มีสินค้า > 0
