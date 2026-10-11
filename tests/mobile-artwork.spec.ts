import { expect, test } from "@playwright/test";

for (const width of [360, 390, 430, 700]) {
  test(`mobile artwork stays fully visible and separate from copy at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    await page.locator(".hero-art").scrollIntoViewIfNeeded();
    await expect(page.locator(".hero-art img")).toBeVisible();
    await page
      .locator(".hero-art img")
      .evaluate(async (image: HTMLImageElement) => {
        await image.decode();
      });
    // Sample the full decorative drift cycle, including maximum rotation/translation.
    for (const time of [0, 7000, 14000, 21000, 28000]) {
      await page.locator(".ribbon-float").evaluate((el, time) => {
        for (const animation of el.getAnimations()) {
          animation.pause();
          animation.currentTime = time;
        }
      }, time);
      const geometry = await page.evaluate(() => {
        const box = (selector: string) => {
          const r = document.querySelector(selector)!.getBoundingClientRect();
          return { top: r.top, bottom: r.bottom, left: r.left, right: r.right };
        };
        return {
          frame: box(".hero-art"),
          image: box(".hero-art img"),
          facts: box(".hero-bottom"),
          copy: box(".hero-copy"),
        };
      });
      expect(geometry.image.top).toBeGreaterThanOrEqual(geometry.frame.top);
      expect(geometry.image.bottom).toBeLessThanOrEqual(geometry.frame.bottom);
      expect(geometry.image.left).toBeGreaterThanOrEqual(geometry.frame.left);
      expect(geometry.image.right).toBeLessThanOrEqual(geometry.frame.right);
      expect(geometry.image.top).toBeGreaterThan(geometry.copy.bottom);
      expect(geometry.frame.bottom + 16).toBeLessThanOrEqual(
        geometry.facts.top,
      );
    }
    await page.locator("#join").scrollIntoViewIfNeeded();
    await page
      .locator(".join-ribbon img")
      .evaluate(async (image: HTMLImageElement) => {
        await image.decode();
      });
    const join = await page.evaluate(() => {
      const box = (selector: string) => {
        const r = document.querySelector(selector)!.getBoundingClientRect();
        return { top: r.top, bottom: r.bottom, left: r.left, right: r.right };
      };
      return {
        section: box("#join"),
        image: box(".join-ribbon img"),
        copy: box(".join-copy"),
        footer: box("footer"),
      };
    });
    expect(join.image.top).toBeGreaterThanOrEqual(join.copy.bottom + 24);
    expect(join.image.bottom + 24).toBeLessThanOrEqual(join.section.bottom);
    expect(join.image.left).toBeGreaterThanOrEqual(join.section.left);
    expect(join.image.right).toBeLessThanOrEqual(join.section.right);
    expect(join.image.bottom).toBeLessThan(join.footer.top);
  });
}
