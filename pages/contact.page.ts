import { Page, Locator } from "@playwright/test";

class ContactPage {
  page: Page;
  fName: Locator;
  emailAdd: Locator;
  phoneNumber: Locator;
  msg: Locator;
  submitBtn: Locator;
  submitMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fName = page.locator("//input[@id='evf-277-field_ys0GeZISRs-1']");
    this.emailAdd = page.locator("//input[@id='evf-277-field_LbH5NxasXM-2']");
    this.phoneNumber = page.locator(
      "//input[@id='evf-277-field_66FR384cge-3']"
    );
    this.msg = page.locator("//textarea[@id='evf-277-field_yhGx3FOwr2-4']");
    this.submitBtn = page.locator("//button[@id='evf-submit-277']");
    this.submitMsg = page.locator(
      'text="Thanks for contacting us! We will be in touch with you shortly"'
    );
  }

  async navigate() {
    await this.page.goto("https://practice.sdetunicorns.com/contact/");
  }

  clickSubmitBtn() {
    return this.submitBtn.click();
  }
}

export default ContactPage;
