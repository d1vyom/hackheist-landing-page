import { expect, test } from "@playwright/test";

test("renders exactly five sections in order with required event content", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("main > section")).toHaveCount(5);
  expect(
    await page
      .locator("main > section")
      .evaluateAll((nodes) => nodes.map((node) => node.id)),
  ).toEqual(["hero", "about", "highlights", "event-details", "join"]);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  for (const title of ["Hackathon", "Workshop", "Tech Session", "Networking"]) {
    await expect(
      page.getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
  }
  for (const description of [
    "Build and showcase your ideas",
    "Learn practical development skills",
    "Learn from experienced developers",
    "Connect with students and the developer community",
  ]) {
    await expect(page.getByText(description, { exact: true })).toBeVisible();
  }
  await expect(page.locator("#event-details")).toContainText("HackHeist 2026");
  await expect(page.locator("#event-details")).toContainText("MIET");
  await expect(page.locator("#event-details")).toContainText("9:00 AM onwards");
  await expect(
    page.getByRole("heading", { name: "Ready to HackHeist?" }),
  ).toBeVisible();
});

test("both registration links reach the announced fallback", async ({
  page,
}) => {
  await page.goto("/");
  const links = page.getByRole("link", { name: "Register Now", exact: true });
  await expect(links).toHaveCount(2);
  for (let i = 0; i < 2; i++) {
    await page.goto("/");
    await expect(links.nth(i)).toHaveAttribute("href", "#event-details");
    await links.nth(i).click();
    await expect(page).toHaveURL(/#event-details$/);
    await expect(
      page.getByText("Registration link coming soon.", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Date to be announced", { exact: true }),
    ).toBeVisible();
  }
});

test("navigation reaches the named sections", async ({ page }) => {
  await page.goto("/");
  for (const [name, hash] of [
    ["About", "about"],
    ["Highlights", "highlights"],
    ["Event Details", "event-details"],
  ]) {
    await page
      .getByRole("navigation", { name: "Main" })
      .getByRole("link", { name, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`#${hash}$`));
    await expect(page.locator(`#${hash} h2`)).toBeVisible();
  }
});

test("essential content works without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("main > section")).toHaveCount(5);
  await expect(page.locator("#event-details")).toContainText("9:00 AM onwards");
  const links = page.getByRole("link", { name: "Register Now", exact: true });
  await expect(links).toHaveCount(2);
  await links.first().click();
  await expect(page).toHaveURL(/#event-details$/);
  await expect(
    page.getByText("Registration link coming soon.", { exact: true }),
  ).toBeVisible();
  await context.close();
});
