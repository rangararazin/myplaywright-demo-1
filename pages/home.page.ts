import { Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  getStartedBtn: Locator;
  headingText: Locator;
  homeLink1: Locator;
  searchIcon: Locator;
  navLinks: Locator;
  homeLink2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("#get-started");
    this.headingText = page.locator("text=Think different. Make different.");
    this.homeLink1 = page.locator("#zak-primary-menu >> text='Home'");
    this.homeLink2 = page.locator("#zak-primary-menu:has-text('Home')");
    this.searchIcon = page.locator(
      '//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]'
    );
    this.navLinks = page.locator("#zak-primary-menu li[id*=menu]");
  }
}

export default HomePage;
