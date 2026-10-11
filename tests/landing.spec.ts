import { expect, test } from "@playwright/test";

test("renders the HackHeist identity", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Build something worth breaking.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page).toHaveTitle(/HackHeist.*GDG/);
});
