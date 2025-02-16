import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Main Tab Suite", () => {
  test("Hovering on Product tab shows dropdown", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.productDropdown).not.toBeVisible();
    await homePage.hoverOnProduct();
    await expect(homePage.productDropdown).toBeVisible();
  });

  test("Hovering on Solutions tab shows dropdown", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.solutionDropdown).not.toBeVisible();
    await homePage.hoverOnSolution();
    await expect(homePage.solutionDropdown).toBeVisible();
  });


});
