import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
  let homePage: HomePage;

  test("Open HomePage and verify title", async ({ page }) => {
    homePage = new HomePage(page);
    //open homepage
    await homePage.navigate();

    //verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Verify About page title", async ({ page }) => {
    //open about page
    await page.goto("/about");

    //verify about page title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click Get Started button CSS Selector", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await homePage.navigate();
    //click the button
    await homePage.getStartedBtn.click();
    //verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading test using Text Selector", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await homePage.navigate();
    //find the text locator
    const headingText = await homePage.headingText;
    //verify heading text
    await expect(headingText).toBeVisible();
  });

  test("Verify Home link is enable", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await homePage.navigate();
    //find the home text
    const homeText = homePage.homeLink1;
    const homeText1 = homePage.homeLink2;
    //verify home text
    await expect(homeText).toBeEnabled();
    await expect(homeText1).toBeEnabled();
  });

  test("Verify Search icon visible", async ({ page }) => {
    homePage = new HomePage(page);
    //open url
    await homePage.navigate();
    //find the search icon
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
    await homePage.navigate();
    //verify text links under nav bar
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});
