import { expect, Page } from "@playwright/test";
import { PlaywrightAriaRole, PlaywrightLabelRole } from "./helpers/types";

interface ScreenshotOptions {
  fullPage?: boolean;
  mask?: any[];
}
type DirectoryLabels = {
  text: string;
  role?: PlaywrightAriaRole;
  label?: PlaywrightLabelRole;
}[];

const { REACT_APP_PROXY, REACT_APP_TEST_USER, REACT_APP_TEST_PASSWORD } =
  process.env;

export const HOMEPAGE_URL = REACT_APP_PROXY || "";
export const DIRECTORY_FORM_URL = `${REACT_APP_PROXY}/directory-additions-updates`;
export const SCREENSHOT_DIRECTORY = "e2e/screenshots/";

export const USER_EMAIL = REACT_APP_TEST_USER || "";
export const USER_PASSWORD = REACT_APP_TEST_PASSWORD || "";

export const REQUIRED_DIRECTORY_FORM_BUTTONS = [
  "Add Contact Method",
  "Add Contact Person",
  "Send Addition/Update",
  "Cancel",
];
export const REQUIRED_DIRECTORY_FORM_LABELS: DirectoryLabels = [
  {
    text: "Cooperative/entity name",
    role: "textbox",
  },
  {
    text: "Street Address",
  },
  {
    text: "Address street",
    role: "textbox",
  },
  {
    text: "City",
  },
  {
    text: "Address city",
    role: "textbox",
  },
  {
    text: "State",
  },
  {
    text: "",
    label: "State",
  },
  {
    text: "Zip Code",
  },
  {
    text: "Zip code",
    role: "textbox",
  },
  {
    text: "County",
  },
  {
    text: "County",
    role: "textbox",
    label: "",
  },
  {
    text: "Country",
  },
  {
    text: "",
    label: "Country",
  },
  {
    text: "Is Address to be public on the map?",
  },
  {
    text: "Website or Social Media Page (separate multiple links with a comma)",
  },
  {
    text: "Website or social media pages",
    role: "textbox",
    label: "",
  },
  {
    text: "General Contact Phone Number",
  },
  {
    text: "Cooperative/Entity Contact First Name",
  },
  {
    text: "Contact first name",
    role: "textbox",
  },
  {
    text: "Cooperative/Entity Contact Last Name",
  },
  {
    text: "Contact last name",
    role: "textbox",
  },
  {
    text: "Is Contact name to be public on the map?",
  },
  {
    text: "Contact Person Contact Phone Number",
  },
  {
    text: "Entity types",
  },
  {
    text: "Scope of Service",
  },
  {
    text: "Add description tags here, separated by commas",
  },
  {
    text: "Enter tags",
    role: "textbox",
  },
  {
    text: "Entity Description (English)",
  },
  {
    text: "Enter entity description (English)",
    role: "textbox",
  },
  {
    text: "Entity Description (Other Language)",
  },
  {
    text: "Enter entity description (Other Language)",
    role: "textbox",
  },
  {
    text: "Please list your reason for submitting this request",
  },
];

//TODO verify if needed.
export const takeScreenshot = async (
  page: Page,
  fileName: string, // e.g., "homeModal.png"
  options: ScreenshotOptions = {},
) => {
  await page.screenshot({
    path: `${SCREENSHOT_DIRECTORY}${fileName}`,
    fullPage: options.fullPage ?? false,
    mask: options.mask ?? [],
  });
};
