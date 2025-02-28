import { Page } from "@playwright/test";

const loginUrl = process.env.LOGIN_URL as string;
export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto(loginUrl);
  }

  async login(username: string, password: string) {
    await this.page.fill("#Username", username);
    await this.page.fill("#Password", password);
    await this.clickLoginButton();
  }

  async clickLoginButton() {
    await this.page.click("#loginBtn");
  }
}
