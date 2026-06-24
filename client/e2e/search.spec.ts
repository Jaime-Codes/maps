import { test, expect } from "@playwright/test";
import { HOMEPAGE_URL } from "./constants";
import { validateSearchFormLabels } from "./helpers/Search";
import { validateNavBarLinks } from "./helpers/utils";

test.describe("Search page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(`${HOMEPAGE_URL}search`);
  });

  test("Verify headers and inputs are visible", async ({ page }) => {
    await validateNavBarLinks(page, false);
    await validateSearchFormLabels(page);
    await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
  });
  test.skip("fill out form. Expect success result", async ({ page }) => {});
  test.skip("fill out partial information, expect error notification", async ({
    page,
  }) => {});
});
