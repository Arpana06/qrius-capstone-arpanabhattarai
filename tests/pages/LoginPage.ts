import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#loginEmail');
    this.passwordInput = page.locator('#loginPassword');
    this.submitButton = page.locator('form button[type="submit"]');
  }

  async open() {
    await this.page.goto('/');
    await this.page.locator('#loginBtn').click();
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }
}