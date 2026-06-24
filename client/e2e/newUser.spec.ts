import { test } from "@playwright/test";
import { HOMEPAGE_URL } from "./constants";

test.describe("New User page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(HOMEPAGE_URL);
  });

  test("Verify headers and inputs are visible", async ({ page }) => {
    // await verifyArrayByText(page, REQUIRED_DIR_ADD_UPDATE_LABELS);
  });
  test.skip("fill out form. Expect success result", async ({ page }) => {});
  test.skip("fill out partial information, expect error notification", async ({
    page,
  }) => {});
});
