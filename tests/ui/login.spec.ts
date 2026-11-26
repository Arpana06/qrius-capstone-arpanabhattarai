import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('job seeker logs in and sees the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.enterEmail('ram@gmail.com');
  await loginPage.enterPassword('Test@123');
  await loginPage.submit();

  await expect(dashboardPage.heading).toHaveText('Dashboard - Ram Maharjan');
});