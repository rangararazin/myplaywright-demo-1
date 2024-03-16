import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe("Contact", () => {
  let contactPage: ContactPage;
  test("Fill and verify contact form submission", async ({ page }) => {
    contactPage = new ContactPage(page);
    
    //open homepage
    await contactPage.navigate();
   

    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const msg = faker.lorem.paragraph(2);

    //input data on contact form and submit
    await contactPage.submitForm(name, email, phone, msg);

    //const submitMsg = await contactPage.submitMsg;

    //Verify submit success message appear
    await expect(contactPage.submitMsg).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
