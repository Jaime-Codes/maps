import { expect, Page } from "@playwright/test";
import { PlaywrightAriaRole } from "./types";

const searchFormLabels: {
  roleType: PlaywrightAriaRole;
  name: string;
  exact?: boolean;
}[] = [
  {
    roleType: "textbox",
    name: "Name",
  },
  {
    roleType: "listbox",
    name: "CoOp Type",
  },
  {
    roleType: "textbox",
    name: "street",
  },
  {
    roleType: "textbox",
    name: "City",
  },
  {
    roleType: "textbox",
    name: "Postal Code",
  },
  {
    roleType: "textbox",
    name: "County",
  },
  {
    roleType: "combobox",
    name: "State",
  },
  {
    roleType: "combobox",
    name: "Enabled",
  },
];

export const validateSearchFormLabels = async (page: Page) => {
  for (const item of searchFormLabels) {
    await expect(
      page.getByLabel(item.name, { exact: item?.exact ?? false }),
    ).toBeVisible();
    await expect(
      page.getByRole(item.roleType, { name: item.name }),
    ).toBeVisible();
  }
};
