import { test, expect } from "@playwright/test";

test.describe("Blog Page", () => {
  test("Verify Recent post count and verify length of each list item", async ({
    page,
  }) => {
    //open blog page
    await page.goto("https://practice.sdetunicorns.com/blog/");

    //get recent post list #recent-posts-3 ul li
    const recentPosts = page.locator("#recent-posts-3 ul li");

    //loop through list and assert char length > 10
    for (const elem of await recentPosts.elementHandles()) {
      //console.log((await elem.textContent())?.trim().length);

      expect((await elem.textContent())?.trim().length).toBeGreaterThan(10);
    }

    //verify total length =5
    expect(await recentPosts.count()).toEqual(5);
  });
});
