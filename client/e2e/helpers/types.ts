import { Page } from "@playwright/test";

export type PlaywrightAriaRole = Parameters<Page["getByRole"]>[0];
export type PlaywrightLabelRole = Parameters<Page["getByLabel"]>[0];

export interface ScreenshotOptions {
  fullPage?: boolean;
  mask?: any[];
}
