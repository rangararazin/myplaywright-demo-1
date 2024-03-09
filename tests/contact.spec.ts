import { test, expect } from "@playwright/test";

test.describe("Contact", () => {
  test("Fill and verify contact form submission", async ({ page }) => {
    //open homepage
    await page.goto("https://practice.sdetunicorns.com/");
    const name = "Testname";
    const email = "testetf1212ysnrug@yopmail.com";
    const phone = "7878787878";
    const msg = "hello there messages";

    await page
      .locator("//li[@id='menu-item-493']//a[contains(text(),'Contact')]")
      .click();

    //verify title of contact page
    await expect(page).toHaveTitle("Contact – Practice E-Commerce Site");

    //input data on contact form
    await page.locator("//input[@id='evf-277-field_ys0GeZISRs-1']").fill(name);
    await page.locator("//input[@id='evf-277-field_LbH5NxasXM-2']").fill(email);
    await page.locator("//input[@id='evf-277-field_66FR384cge-3']").fill(phone);
    await page
      .locator("//textarea[@id='evf-277-field_yhGx3FOwr2-4']")
      .fill(msg);

    //click on submit button
    await page.locator("//button[@id='evf-submit-277']").click();

    const submitMsg = await page.locator(
      'text="Thanks for contacting us! We will be in touch with you shortly"'
    );

    //Verify submit success message appear
    await expect(submitMsg).toBeVisible();
  });
});
