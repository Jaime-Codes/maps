import { Page } from "@playwright/test";

//TODO update
export const homepageURL = "http://localhost:3000/";
export const screenshotDir = "e2e/screenshots/";

interface ScreenshotOptions {
  fullPage?: boolean;
  mask?: any[];
}
//TODO
export const takeScreenshot = async (
  page: Page,
  fileName: string, // e.g., "homeModal.png"
  options: ScreenshotOptions = {},
) => {
  await page.screenshot({
    path: `${screenshotDir}${fileName}`,
    fullPage: options.fullPage ?? false,
    mask: options.mask ?? [],
  });
};
