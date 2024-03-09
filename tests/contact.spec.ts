import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";

test.describe("Contact", () => {
  let contactPage: ContactPage;
  test("Fill and verify contact form submission", async ({ page }) => {
    contactPage = new ContactPage(page);
    //open homepage
    await contactPage.navigate();

    const name = "Testname";
    const email = "testetf1212ysnrug@yopmail.com";
    const phone = "7878787878";
    const msg = "hello there messages";

    //input data on contact form
    await contactPage.fName.fill(name);
    await contactPage.emailAdd.fill(email);
    await contactPage.phoneNumber.fill(phone);
    await contactPage.msg.fill(msg);

    //click on submit button
    await contactPage.clickSubmitBtn();

    const submitMsg = await contactPage.submitMsg;

    //Verify submit success message appear
    await expect(submitMsg).toBeVisible();
  });
});
