//Move to helper files
import { expect, Page } from "@playwright/test";

export const validateNavBarLinks = async (page: Page) => {
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Add" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Search" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Return" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Chicommons" })).toBeVisible();
};

export const verifyWelcomeModalAndClose = async (page: Page) => {
  await expect(page.getByText("Welcome!")).toBeVisible();
  await expect(page.getByRole("dialog")).toMatchAriaSnapshot(`
    - dialog:
      - text: Welcome!
      - button "Close"
      - text: "ChiCommons would like to acknowledge that we are on the traditional lands of the first people of present-day Illinois and Indiana: the Potawatomi, Peoria, Kaskaskia, Miami, Mascoutin, Mesquaki, Odawa, Piankashaw, Wea, Sauk, Kickapoo, Ojibwe, Delaware, Shawnee, and Chickasaw Nations. We share gratitude for the land itself and for the people of these Nations, past and present."
      - button "Close"
    `);
  await page
    .getByRole("button", { name: "Close" })
    .filter({ hasText: /^Close$/ })
    .click();
};
