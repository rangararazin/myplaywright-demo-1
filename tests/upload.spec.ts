import { test, expect } from "@playwright/test";
import { TIMEOUT } from "node:dns";

import path from "node:path";

test.describe("Upload file ", () => {
  test("Verify upload functionality", async ({ page }) => {
    //go to url
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide test file path
    const filePath = path.join(__dirname, "../data/logotitle.png");

    //upload file
    await page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await page.locator("//input[@id='upload_1']").click();

    //assertion
    await expect(
      page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
    ).toContainText("uploaded successfully");
  });

  test("Verify upload functionality with hidden input field", async ({
    page,
  }) => {
    //go to url
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide test file path
    const filePath = path.join(__dirname, "../data/logotitle.png");

    //DOM Manipulation
    await page.evaluate(() => {
      const selector = document.querySelector("input#upfile_1");
      if (selector) {
        selector.className = "";
      }
    });

    //upload file
    await page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await page.locator("//input[@id='upload_1']").click();

    //assertion
    await expect(
      page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
    ).toContainText("uploaded successfully");
  });

  test("Verify upload functionality with force wait, not a good idea", async ({
    page,
  }) => {
    //go to url
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide test file path
    const filePath = path.join(__dirname, "../data/3mb-file.pdf");

    //upload file
    await page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await page.locator("//input[@id='upload_1']").click();

    //hardcoded wait
    await page.waitForTimeout(7000);

    //assertion
    await expect(
      page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
    ).toContainText("uploaded successfully");
  });

  test("Verify upload functionality with waitFor", async ({ page }) => {
    //go to url
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide test file path
    const filePath = path.join(__dirname, "../data/3mb-file.pdf");

    //upload file
    await page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await page.locator("//input[@id='upload_1']").click();

    //wait for condition
    await page
      .locator("//label[@id='wfu_messageblock_header_1_label_1']")
      .waitFor({ state: "visible", timeout: 12000 });

    //assertion
    await expect(
      page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
    ).toContainText("uploaded successfully");
  });

  test("Verify upload functionality with assertion wait", async ({ page }) => {
    //go to url
    await page.goto("https://practice.sdetunicorns.com/cart/");

    //provide test file path
    const filePath = path.join(__dirname, "../data/3mb-file.pdf");

    //upload file
    await page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await page.locator("//input[@id='upload_1']").click();

    //assertion
    await expect(
      page.locator("//label[@id='wfu_messageblock_header_1_label_1']")
    ).toContainText("uploaded successfully", { timeout: 10000 });
  });
});
