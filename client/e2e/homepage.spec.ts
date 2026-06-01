import { test, expect } from "@playwright/test";
import { homepageURL, screenshotDir } from "./constants";
import {
  validateNavBarLinks,
  verifyWelcomeModalAndClose,
} from "./helpers/Home";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(homepageURL);
  });

  test("Validate Home page modal and landing", async ({ page }) => {
    await page.screenshot({ path: `${screenshotDir}homeModal.png` });
    await verifyWelcomeModalAndClose(page);

    await validateNavBarLinks(page);

    await expect(page.getByRole("heading")).toContainText(
      "Chicago's Cooperative and Solidarity Map",
    );
  });
  test.skip("Navigate to add", async ({ page }) => {
    await verifyWelcomeModalAndClose(page);
    await expect(page.getByRole("heading")).toContainText("Login");
  });
  test.skip("Navigate to Return", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/");
  });
  test.skip("Navigate to Login", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/");
  });
});
