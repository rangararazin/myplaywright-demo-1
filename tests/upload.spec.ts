import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";

import path from "node:path";

test.describe("Upload file", () => {
  let cartPage: CartPage;
  test("Verify upload functionality", async ({ page }) => {
    cartPage = new CartPage(page);
    //go to url
    await cartPage.navigate();

    //provide test file path
    const filePath = path.join(__dirname, "../data/logotitle.png");

    //upload file
    cartPage.uploadComponent().uploadFile(filePath);

    //assertion
    await expect(cartPage.uploadComponent().successMsg).toContainText(
      "uploaded successfully"
    );
  });

  //   test("Verify upload functionality with hidden input field", async ({
  //     page,
  //   }) => {
  //     //go to url
  //     await page.goto("https://practice.sdetunicorns.com/cart/");

  //     //provide test file path
  //     const filePath = path.join(__dirname, "../data/logotitle.png");

  //     //DOM Manipulation
  //     await page.evaluate(() => {
  //       const selector = document.querySelector("input#upfile_1");
  //       if (selector) {
  //         selector.className = "";
  //       }
  //     });

  //     //upload file
  //     await page.setInputFiles('//*[@id="upfile_1"]', filePath);

  //     //click upload
  //     await page.locator("//input[@id='upload_1']").click();

  //     //assertion
  //     await expect(
  //       page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
  //     ).toContainText("uploaded successfully");
  //   });

//   test("Verify upload functionality with force wait, not a good idea", async ({
//     page,
//   }) => {
//     cartPage = new CartPage(page);
//     //go to url
//     await cartPage.navigate();

//     //provide test file path
//     const filePath = path.join(__dirname, "../data/3mb-file.pdf");

//     //upload file
//     cartPage.uploadComponent().uploadFile(filePath);

//     //hardcoded wait
//     await page.waitForTimeout(7000);

//     //assertion
//     await expect(cartPage.uploadComponent().successMsg).toContainText(
//       "uploaded successfully"
//     );
//   });

//   test("Verify upload functionality with waitFor", async ({ page }) => {
//     cartPage = new CartPage(page);
//     //go to url
//     await cartPage.navigate();
//     //provide test file path
//     const filePath = path.join(__dirname, "../data/3mb-file.pdf");

//     //upload file
//     cartPage.uploadComponent().uploadFile(filePath);

//     //wait for condition
//     await cartPage
//       .uploadComponent()
//       .successMsg.waitFor({ state: "visible", timeout: 12000 });

//     //assertion
//     await expect(cartPage.uploadComponent().successMsg).toContainText(
//       "uploaded successfully"
//     );
//   });

//   test("Verify upload functionality with assertion wait", async ({ page }) => {
//     cartPage = new CartPage(page);
//     //go to url
//     await cartPage.navigate();
//     //provide test file path
//     const filePath = path.join(__dirname, "../data/3mb-file.pdf");

//     //upload file
//     cartPage.uploadComponent().uploadFile(filePath);

//     //assertion
//     await expect(cartPage.uploadComponent().successMsg).toContainText(
//       "uploaded successfully",
//       { timeout: 10000 }
//     );
//   });
});
