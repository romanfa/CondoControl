import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productTab: Locator;
  readonly productDropdown: Locator;
  readonly solutionTab: Locator;
  readonly solutionDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    // Adjust these locators to match actual elements
    this.productTab = page.locator('a.mega-menu-link[href="/product"]');
    this.productDropdown = page.locator('text=Announcements');
    this.solutionTab = page.locator('a.mega-menu-link[href="/solutions"]', { hasText: /^Solutions$/ });
    this.solutionDropdown = page.locator('text=Solutions overview');
    
  }

  async goto() {
    await this.page.goto('/');
  }

  async hoverOnProduct() {
    await this.productTab.hover();
  }
  async hoverOnSolution() {
    await this.solutionTab.hover();
  }
}