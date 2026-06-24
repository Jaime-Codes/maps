import { expect, Page } from "@playwright/test";
import { REQUIRED_DIRECTORY_FORM_LABELS } from "../constants";

export const verifyDirectoryFormHeadersAndInputs = async (page: Page) => {
  for (const item of REQUIRED_DIRECTORY_FORM_LABELS) {
    if (item.label) {
      await expect(page.getByLabel(item.label, { exact: true })).toBeVisible();
    } else if (item.role) {
      await expect(
        page.getByRole(item.role, { name: item.text, exact: true }),
      ).toBeVisible();
    } else {
      await expect(page.getByText(item.text, { exact: true })).toBeVisible();
    }
  }
};
