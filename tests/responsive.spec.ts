import { expect, test } from "@playwright/test";

for (const width of [360, 390, 768, 1024, 1366, 1920]) {
  test(`layout remains usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    for (const link of await page.locator("a").all()) {
      const target = await link.boundingBox();
      expect(target!.width).toBeGreaterThanOrEqual(44);
      expect(target!.height).toBeGreaterThanOrEqual(44);
    }
    const links = page.getByRole("link", { name: "Register Now", exact: true });
    await expect(links).toHaveCount(2);
    for (const link of await links.all()) {
      await link.scrollIntoViewIfNeeded();
      await expect(link).toBeInViewport();
      const box = await link.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width);
      const overlaps = await link.evaluate((el) => {
        const a = el.getBoundingClientRect();
        const container = el.closest("section")!;
        return [...container.querySelectorAll("h1,h2,p")].some((other) => {
          const b = other.getBoundingClientRect();
          return (
            a.left < b.right &&
            a.right > b.left &&
            a.top < b.bottom &&
            a.bottom > b.top
          );
        });
      });
      expect(overlaps).toBe(false);
    }
  });
}

test("enlarged text retains content and usable actions", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const link of await page
    .getByRole("link", { name: "Register Now", exact: true })
    .all()) {
    await link.scrollIntoViewIfNeeded();
    await expect(link).toBeInViewport();
  }
});

test("reduced motion disables animation and smooth scrolling", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect(
    await page.evaluate(
      () =>
        document.getAnimations().filter((a) => a.playState === "running")
          .length,
    ),
  ).toBe(0);
  expect(
    await page
      .locator("[data-decorative-motion]")
      .evaluateAll((nodes) =>
        nodes.every((el) => getComputedStyle(el).animationName === "none"),
      ),
  ).toBe(true);
});
