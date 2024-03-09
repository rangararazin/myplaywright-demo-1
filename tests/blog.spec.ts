import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe("Blog Page", () => {
  let blogPage: BlogPage
  test("Verify Recent post count and verify length of each list item", async ({
    page,
  }) => {
    blogPage = new BlogPage(page)
    //open blog page
    await blogPage.navigate()
    

    //loop through list and assert char length > 10
    for (const elem of await blogPage.recentPostsList.elementHandles()) {
      //console.log((await elem.textContent())?.trim().length);

      expect((await elem.textContent())!.trim().length).toBeGreaterThan(10);
    }

    //verify total length =5
    expect(await blogPage.recentPostsList.count()).toEqual(5);
  });
});
