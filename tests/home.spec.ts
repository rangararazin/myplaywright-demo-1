import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
  let homePage: HomePage;

  test("Open HomePage and verify title", async ({ page }) => {
    homePage = new HomePage(page);
    //open homepage
    await page.goto("https://practice.sdetunicorns.com/");

    //verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Verify About page title", async ({ page }) => {
    //open about page
    await page.goto("https://practice.sdetunicorns.com/about/");

    //verify about page title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click Get Started button CSS Selector", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await page.goto("https://practice.sdetunicorns.com/");

    //click the button
    //await page.locator("#get-started").click();
    await homePage.getStartedBtn.click();
    //verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading test using Text Selector", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await page.goto("https://practice.sdetunicorns.com/");

    //find the text locator
    // const headingText = await page.locator(
    //   "text=Think different. Make different."
    // );
    const headingText = await homePage.headingText;

    //verify heading text
    await expect(headingText).toBeVisible();
  });

  test("Verify Home link is enable", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await page.goto("https://practice.sdetunicorns.com/");

    //find the home text
    //const homeText = page.locator("#zak-primary-menu >> text='Home'");
    //const homeText1 = page.locator("#zak-primary-menu:has-text('Home')");

    const homeText = homePage.homeLink1;
    const homeText1 = homePage.homeLink2;

    //verify home text
    await expect(homeText).toBeEnabled();
    await expect(homeText1).toBeEnabled();
  });

  test("Verify Search icon visible", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await page.goto("https://practice.sdetunicorns.com/");

    //find the search icon

    // const searchIcon = page.locator(
    //   '//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]'
    // );
    const searchIcon = homePage.searchIcon;

    //verify search icon visible
    await expect(searchIcon).toBeVisible();
  });

  test("Verify the text for nav links", async ({ page }) => {
    homePage = new HomePage(page);
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    //open url
    await page.goto("https://practice.sdetunicorns.com/");

    //find the all option on nav
    //const navLinks = page.locator("#zak-primary-menu li[id*=menu]");
    const navLinks = homePage.navLinks;

    //print out links
    for (const elem of await navLinks.elementHandles()) {
      console.log(await elem.textContent());
    }

    //verify text links under nav bar

    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
  });
});
