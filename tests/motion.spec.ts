import { expect, test } from "@playwright/test";

test("visitors can pause and resume decorative motion", async ({ page }) => {
  await page.goto("/");
  const pause = page.getByRole("button", { name: "Pause animations", exact: true });
  await expect(pause).toBeVisible();
  await pause.click();
  await expect(page.getByRole("button", { name: "Resume animations", exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.getAnimations().filter(a => a.playState === "running" && a.effect instanceof KeyframeEffect && (a.effect.target as Element)?.closest("[data-decorative-motion]")).length)).toBe(0);
  await page.getByRole("button", { name: "Resume animations", exact: true }).click();
  await expect(pause).toBeVisible();
});

test("edition and community labels remain readable", async ({ page }) => {
  await page.goto("/");
  for (const label of [page.locator(".eyebrow"), page.locator(".hero-fact strong").first(), page.getByText("GDG Community", { exact: true })]) {
    await expect(label).toBeVisible();
    expect(await label.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(18);
  }
});
