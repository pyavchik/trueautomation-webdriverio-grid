describe('TrueAutomation.IO page', ()=> {
    it('should set email to email field', ()=> {
        browser.url('https://trueautomation.io');
        browser.click('a.login-btn');
        browser.waitForExist('div.sign-up-container > a');
        browser.click('div.sign-up-container > a');
        browser.waitForExist('input[name="email"]');
        browser.setValue('input[name="email"]', 'your@gmail.com');
    });
});
