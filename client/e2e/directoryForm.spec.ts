import { test, expect } from "@playwright/test";
import { verifyWelcomeModalAndClose } from "./helpers/home";

import {
  DIRECTORY_FORM_URL,
  HOMEPAGE_URL,
  REQUIRED_DIRECTORY_FORM_BUTTONS,
} from "./constants";
import { verifyDirectoryFormHeadersAndInputs } from "./helpers/directoryForm";
import {
  userLogin,
  validateNavBarLinks,
  verifyArrayByRole,
} from "./helpers/utils";

test.describe("Directory Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOMEPAGE_URL);
    await verifyWelcomeModalAndClose(page);
  });

  test("Verify headers and inputs are visible", async ({ page }) => {
    // await verifyArrayByText(page, REQUIRED_DIR_ADD_UPDATE_LABELS);
    await page.getByRole("link", { name: "Login" }).click();
    await userLogin(page);
    await page.getByRole("link", { name: "Add" }).click();
    await page.waitForURL(DIRECTORY_FORM_URL);
    await validateNavBarLinks(page, true);

    await expect(
      page.getByRole("heading", { name: "Directory Form" }),
    ).toBeVisible();

    await expect(
      page.getByText(
        "Use this form to add or request the update of a solidarity entity or cooperative.",
      ),
    ).toBeVisible();
    await verifyDirectoryFormHeadersAndInputs(page);
    await expect(page.getByText("Type", { exact: true })).toHaveCount(2);
    expect(
      page.getByText("Is Phone to be public on the map?", { exact: true }),
    ).toHaveCount(2);
    expect(
      page.getByRole("textbox", { name: "Contact phone", exact: true }),
    ).toHaveCount(2);

    await verifyArrayByRole(page, "button", REQUIRED_DIRECTORY_FORM_BUTTONS);
  });
  test.skip("fill out directory form completly. Expect success result", async ({
    page,
  }) => {});
  test.skip("fill out partial information, expect error notification", async ({
    page,
  }) => {});
  test.skip("Add additional contact method and contact person. Success result", async ({
    page,
  }) => {});
});
