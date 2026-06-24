import { test, expect } from "@playwright/test";
import { HOMEPAGE_URL, SCREENSHOT_DIRECTORY } from "./constants";
import { verifyWelcomeModalAndClose } from "./helpers/home";
import { userLogin, validateNavBarLinks } from "./helpers/utils";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(HOMEPAGE_URL);
  });

  test("Validate Home page modal and landing", async ({ page }) => {
    await expect(page).toHaveScreenshot(
      `${SCREENSHOT_DIRECTORY}homePageModal.png`,
    );
    await verifyWelcomeModalAndClose(page);

    await validateNavBarLinks(page, false);

    await expect(page.getByRole("heading")).toContainText(
      "Chicago's Cooperative and Solidarity Map",
    );
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(`${SCREENSHOT_DIRECTORY}homePage.png`);
  });

  test("Navigate to (add) Directory Form", async ({ page }) => {
    await verifyWelcomeModalAndClose(page);
    await page.getByRole("link", { name: "Add" }).click();
    await expect(
      page.getByRole("heading", { name: "Login", exact: true }),
    ).toContainText("Login");

    await userLogin(page);
    await page.getByRole("link", { name: "Add" }).click();

    await expect(page).toHaveScreenshot(
      `${SCREENSHOT_DIRECTORY}directoryFormPage.png`,
    );
  });

  test("Navigate to Search", async ({ page }) => {
    await verifyWelcomeModalAndClose(page);
    await page.getByRole("link", { name: "Search" }).click();
    await expect(page).toHaveScreenshot(
      `${SCREENSHOT_DIRECTORY}SearchPage.png`,
    );
  });

  test("Navigate to Return", async ({ page }) => {
    await verifyWelcomeModalAndClose(page);
    await page.getByRole("link", { name: "Return" }).click();
    await page.getByRole("heading", {
      level: 2,
      name: "Mapping the cooperative and solidarity economies in Chicago",
    });

    // 2. Wait for the network requests to stop (lazy-loaded components/images)
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot(
      `${SCREENSHOT_DIRECTORY}ReturnPage.png`,
    );
  });

  test("Navigate to Login", async ({ page }) => {
    await verifyWelcomeModalAndClose(page);
    await page.getByRole("link", { name: "Login" }).click();
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Mapping the cooperative and solidarity economies in Chicago",
      }),
    ).toBeVisible();
    await expect(page).toHaveScreenshot(`${SCREENSHOT_DIRECTORY}Login.png`);
  });
});
