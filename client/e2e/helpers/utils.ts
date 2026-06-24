import { expect, Page } from "@playwright/test";
import {
  PlaywrightAriaRole,
  PlaywrightLabelRole,
  ScreenshotOptions,
} from "./types";
import { HOMEPAGE_URL, USER_EMAIL, USER_PASSWORD } from "../constants";

export const verifyArrayByText = async (
  page: Page,
  textArray: PlaywrightLabelRole[],
) => {
  for (const label of textArray) {
    await expect(page.getByText(label)).toBeVisible();
  }
};

export const verifyArrayByRole = async (
  page: Page,
  role: PlaywrightAriaRole,
  textArray: string[],
) => {
  for (const itemName of textArray) {
    await expect(page.getByRole(role, { name: itemName })).toBeVisible();
  }
};

export const userLogin = async (page: Page) => {
  const usernameLabel = page.getByRole("textbox", { name: "Username" });
  const passwordInput = page.getByRole("textbox", { name: "Password" });
  await usernameLabel.click();
  await usernameLabel.pressSequentially(USER_EMAIL, { delay: 100 });
  await passwordInput.click();
  await passwordInput.pressSequentially(USER_PASSWORD, { delay: 100 });
  await page.getByRole("button", { name: "Login" }).click();
  //Login component currently redirects to homepage
  await page.waitForURL(HOMEPAGE_URL);
};

export const validateNavBarLinks = async (
  page: Page,
  isUserLoggedIn: boolean,
) => {
  const userLoggedInLabel = isUserLoggedIn ? "Logout" : "Login";
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Add" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Search" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Return" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: userLoggedInLabel }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Chicommons" })).toBeVisible();
};

export const verifyScreenshot = async (
  page: Page,
  fileName: string,
  options: ScreenshotOptions = {},
) => {
  await expect(page).toHaveScreenshot(fileName, {
    fullPage: options.fullPage ?? false,
    mask: options.mask ?? [],
    maxDiffPixelRatio: 0.05,
  });
};
