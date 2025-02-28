import { test, expect } from '../../fixtures/fixtures';
import fs from 'fs';

// Read users.json dynamically
const users = JSON.parse(fs.readFileSync('data/users.json', 'utf-8'));

test.describe('Invalid Login Tests', () => {
  users.forEach(({ username, password }) => {
    test(`Login attempt with username: "${username}" and password: "${password}"`, async ({ loginPage }) => {
      await loginPage.navigate();
      await loginPage.login(username, password);

      const errorMessage = loginPage.page.locator('#errormsg'); // Adjust selector
      await expect(errorMessage).toBeVisible();
    });
  });
});
