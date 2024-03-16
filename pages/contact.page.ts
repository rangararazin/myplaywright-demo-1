import { Page, Locator } from "@playwright/test";

class ContactPage {
  page: Page;
  fName: Locator;
  emailAdd: Locator;
  phoneNumber: Locator;
  msgArea: Locator;
  submitBtn: Locator;
  submitMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fName = page.locator("//input[@id='evf-277-field_ys0GeZISRs-1']");
    this.emailAdd = page.locator("//input[@id='evf-277-field_LbH5NxasXM-2']");
    this.phoneNumber = page.locator(
      "//input[@id='evf-277-field_66FR384cge-3']"
    );
    this.msgArea = page.locator("//textarea[@id='evf-277-field_yhGx3FOwr2-4']");

    this.submitBtn = page.locator("//button[@id='evf-submit-277']");
    this.submitMsg = page.locator(
      'text="Thanks for contacting us! We will be in touch with you shortly"'
    );
  }

  async navigate() {
    await this.page.goto("/contact");
  }

  async submitForm(name: string, email: string, phone: string, msg: string) {
    await this.fName.fill(name);
    await this.emailAdd.fill(email);
    await this.phoneNumber.fill(phone);
    await this.msgArea.fill(msg);

    await this.submitBtn.click();
  }
}

export default ContactPage;
