import { Page, Locator } from "@playwright/test";

class UploadComponent {
  private page: Page;
  setInputFiles: string;
  submitBtn: Locator;
  successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.setInputFiles = '//*[@id="upfile_1"]';
    this.submitBtn = page.locator("//input[@id='upload_1']");
    this.successMsg = page.locator(
      "//label[@id='wfu_messageblock_header_1_label_1']"
    );
  }

  async uploadFile(filePath: string) {
    //upload file
    await this.page.setInputFiles('//*[@id="upfile_1"]', filePath);

    //click upload
    await this.submitBtn.click();
  }
}

export default UploadComponent;
