// import LoginPage from '../pages/loginPage';
const LoginPage = require('./pages/loginPage');

describe("Marcombox automation", ()=>{
  console.log("Automation Started");
  
  it("Open URL and Check Title", async()=>{
      await browser.maximizeWindow();
      await browser.url('/');
       
      //asert title
      // await expect(browser).toHaveTitle("Log in - Automation | Brandshare DAM");
      // console.log("Title is verified");
  });

  it("Enter Credentials", async()=>{
      console.log("TC_01: Enter Credentials");
      await LoginPage.loginEmail.waitForDisplayed();
      await LoginPage.loginEmail.addValue("hridoy.das@wundermanthompson.com");
      await LoginPage.loginEmailNextButton.click();
      await LoginPage.loginPassword.addvalue("Test@@00");
      await LoginPage.loginButton.click();
      await browser.pause(5000);
      await expect(browser).toHaveTitle("Automation | Brandshare DAM");

  })
})