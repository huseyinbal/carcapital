import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dealsdev.carcapitalapps.com/auth/sign-in?callbackUrl=https%3A%2F%2Fdealsdev.carcapitalapps.com%2Fapplications');
  await page.goto('https://carcapitalapps.b2clogin.com/carcapitalapps.onmicrosoft.com/b2c_1_signin_v1/oauth2/v2.0/authorize?client_id=b2359216-8899-4336-81ae-ce84de69a479&scope=openid&response_type=code&redirect_uri=https%3A%2F%2Fdealsdev.carcapitalapps.com%2Fapi%2Fauth%2Fcallback%2Fazure-ad-b2c&state=4TECbObqbDpjjNemN4OT-u1t1ZghzZ1A5RMBkhie1NI');
  await expect(page.getByRole('heading')).toContainText('Sign in with your email address');
  await expect(page.getByPlaceholder('Email Address')).toBeEmpty();
  await expect(page.getByPlaceholder('Password')).toBeEmpty();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('devdealer2@carcapitalcorp.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('BLO5SiOWMcs02Wr0');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('https://dealsdev.carcapitalapps.com/applications')
  await expect(page.getByRole('list')).toContainText('Applications');
  await expect(page.getByRole('list')).toContainText('Inventory');
  await expect(page.getByRole('link', { name: 'Resources Resources' })).toContainText('Resources')
  await expect(page.getByRole('heading')).toContainText('Applications');
  await expect(page.getByRole('main')).toContainText('Filters');
  await expect(page.getByRole('button', { name: 'Filters Filters' })).toBeVisible();
  await expect(page.getByRole('button', { name: '+ Create Application' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Dealer 1003 ' })).toBeVisible();
  await expect(page.locator('.d-flex > div > div > .pointer')).toBeVisible();
  await expect(page.getByPlaceholder('Search')).toBeVisible();
  await expect(page.getByTestId('wrapper').locator('div').filter({ hasText: 'App #' }).nth(1)).toBeVisible();
  await expect(page.getByText('Rows per page')).toBeVisible();
  await page.getByRole('button', { name: '+ Create Application' }).click();
  await expect(page.locator('#application-form')).toContainText('First name');
  await expect(page.locator('#application-form')).toContainText('Middle initial');
  await expect(page.locator('#application-form')).toContainText('Last name');
  await expect(page.locator('#application-form')).toContainText('Suffix');
  await expect(page.locator('#application-form')).toContainText('Driver contact information');
  await expect(page.locator('#application-form')).toContainText('Email address');
  await expect(page.locator('#application-form')).toContainText('Social Security number');
  await expect(page.locator('#application-form')).toContainText('Date of birth');
  await expect(page.locator('#application-form')).toContainText('Street address');
  await expect(page.locator('#application-form')).toContainText('Suite/Apt. No.');
  await expect(page.locator('#application-form')).toContainText('City');
  await expect(page.locator('#application-form')).toContainText('State');
  await expect(page.locator('#application-form')).toContainText('Zip Code');
  await expect(page.locator('#application-form')).toContainText('County');
  await expect(page.locator('#application-form')).toContainText('Primary phone number');
  await expect(page.locator('#application-form')).toContainText('Secondary phone number');
  await expect(page.locator('#application-form')).toContainText('Residence information');
  await expect(page.locator('#application-form')).toContainText('Own or rent home');
  await expect(page.locator('#application-form')).toContainText('Years at residence');
  await expect(page.locator('#application-form')).toContainText('Months at residence');
  await expect(page.locator('#application-form')).toContainText('Residence payment');
  await expect(page.locator('#application-form')).toContainText('Valid ID type');
  await expect(page.locator('#application-form')).toContainText('Government ID address');
  await expect(page.locator('#application-form')).toContainText('Income type');
  await expect(page.locator('#application-form')).toContainText('Monthly amount');
  await expect(page.locator('#application-form')).toContainText('Down Payment and Trade-in');
  await expect(page.locator('#application-form')).toContainText('Down Payment and Trade-in');
  await expect(page.locator('#application-form')).toContainText('Down Payment');
  await expect(page.locator('#application-form')).toContainText('Trade-In Gross');
  await expect(page.locator('#application-form')).toContainText('Trade-In Gross');
  await expect(page.locator('#application-form')).toContainText('Trade-In Payoff');
  await expect(page.locator('#application-form')).toContainText('You certify that the information on the application and in any other application submitted to us, is true and complete. You understand that false statements may subject you to criminal penalties. This application will be reviewed by the dealer and other financial institutions. You further authorize the dealer and financial institutions to gather whatever credit and employment history each considers necessary and appropriate in evaluating this application and any other applications submitted in connection with the proposed transaction.');
  await expect(page.getByRole('main')).toContainText('Co-Buyer');
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('DONNA');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('GORBERA');
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('donna.gorbera@gmail.com');
  await page.getByPlaceholder('SSN').click();
  await page.getByPlaceholder('SSN').fill('666-50-9640_');
  await page.locator('#dob').fill('1968-03-24');
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('525 topaz way');
  await page.getByText('525 Topaz Way, Orlando, FL').click();
  await page.getByPlaceholder('Primary phone number').click();
  await page.getByPlaceholder('Primary phone number').fill('(407) 905-5058_');
  await page.locator('#yearsAtAddress').click();
  await page.locator('#yearsAtAddress').fill('10');
  await page.locator('#monthsAtAddress').selectOption('3');
  await page.locator('#monthlyHousingPayment').click();
  await page.locator('#monthlyHousingPayment').fill('1250');
  await page.locator('#validIDType').selectOption('ValidDrive');
  await page.locator('#governmentIDAddress').selectOption('SameStateAsAddress');
  await page.getByPlaceholder('Monthly amount').click();
  await page.getByPlaceholder('Monthly amount').fill('6999');
  await page.getByRole('button', { name: '+ Add' }).click();
  await page.locator('select[name="incomes\\.1\\.incomeType"]').selectOption('SelfEmployed');
  await page.locator('[id="incomes\\.1\\.monthlyIncomeAmount"]').click();
  await page.locator('[id="incomes\\.1\\.monthlyIncomeAmount"]').fill('1000');
  await page.locator('#cashDown').click();
  await page.locator('#cashDown').fill('3000');
  await page.locator('#grossTradeIn').click();
  await page.locator('#grossTradeIn').fill('2000');
  await page.locator('#payoffTradeIn').click();
  await page.locator('#payoffTradeIn').fill('2000');
  await page.getByText('Co-Buyer').click();
  await expect(page.locator('#application-form')).toContainText('Co-Buyer contact information');
  await page.getByText('Driver', { exact: true }).click();
  await page.getByText('Co-Buyer').click();
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('PAUL');
  await page.getByPlaceholder('First name').press('Tab');
  await page.getByPlaceholder('Middle initial').press('Tab');
  await page.getByPlaceholder('Last name').fill('BENDER');
  await page.getByPlaceholder('Last name').press('Tab');
  await page.locator('#coSuffix').press('Tab');
  await page.getByPlaceholder('Email address').fill('paul.bender@gmail.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('SSN').fill('666-35-2818_');
  await page.locator('#coDob').fill('1979-01-01');
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('5001 vermette cir');
  await page.getByText('Vermette Cir, Plainfield, IL 60586').click();
  await page.getByPlaceholder('Primary phone number').click();
  await page.getByPlaceholder('Primary phone number').fill('(815) 439-4536_');
  await page.locator('#coHousingStatus').selectOption('Own');
  await page.locator('#coYearsAtAddress').click();
  await page.locator('#coYearsAtAddress').fill('5');
  await page.locator('#coMonthsAtAddress').selectOption('9');
  await page.locator('#coMonthlyHousingPayment').click();
  await page.locator('#coMonthlyHousingPayment').click();
  await page.locator('#coMonthlyHousingPayment').fill('1100');
  await page.locator('#coValidIDType').selectOption('ValidDrive');
  await page.locator('#coGovernmentIDAddress').selectOption('SameStateAsAddress');
  await page.getByPlaceholder('Monthly amount').click();
  await page.getByPlaceholder('Monthly amount').fill('10000');
  await page.locator('#acceptAgreement').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(10000);
  await expect(page.getByRole('heading')).toContainText('Vehicle Selection');
  await expect(page.getByPlaceholder('Search')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Filters');
  await expect(page.getByRole('button', { name: 'Filters Filters' })).toBeVisible();
  await page.getByPlaceholder('Search').fill('Nissan Murano');
  await page.getByRole('radio').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(7000);
  await expect(page.getByRole('button', { name: ' Print Structure' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save Structure' })).toBeVisible();
  await expect(page.locator('#deal-structure-form')).toContainText('Cash Selling Price');
  await expect(page.locator('#deal-structure-form')).toContainText('Sales Tax');
  await expect(page.locator('#deal-structure-form')).toContainText('Sales Fees');
  await expect(page.locator('#deal-structure-form')).toContainText('Cash Down');
  await expect(page.locator('#deal-structure-form')).toContainText('Gross Trade-in');
  await expect(page.locator('#deal-structure-form')).toContainText('Trade-in Payoff');
  await expect(page.locator('#deal-structure-form')).toContainText('Financing');
  await expect(page.locator('#deal-structure-form')).toContainText('Term (Months)');
  await expect(page.locator('#deal-structure-form')).toContainText('First Payment Date');
  await expect(page.locator('#deal-structure-form')).toContainText('Interest Rate');
  await expect(page.locator('#deal-structure-form')).toContainText('Monthly Payment');
  await expect(page.locator('#deal-structure-form')).toContainText('Amount Financed');
  await page.getByRole('button', { name: 'Save Structure' }).click();
});