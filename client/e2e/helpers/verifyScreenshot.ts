import { Page, expect } from "@playwright/test";
//TODO verify that this is needed/ensure it works
interface ScreenshotOptions {
  fullPage?: boolean;
  mask?: any[];
}

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
