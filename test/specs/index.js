const chaiExpect = require("chai").expect;
const LoginPage = require('./pages/loginPage');
const MySettingsPage = require('./pages/mySettingsPage');


describe("Marcombox automation", ()=>{
  console.log("Automation Started========>");
  
  it("Open URL and Check Title", async()=>{
      await browser.maximizeWindow();
      await browser.url('/');
       
      //asert title
      const title = await browser.getTitle();
      await chaiExpect(title).to.include("Brandshare DAM");
      // console.log("Title is verified");
  });

  it("Enter Credentials", async()=>{
      console.log("TC_01: Enter Credentials");
      await LoginPage.loginEmail.waitForDisplayed();
      await LoginPage.loginEmail.addValue("hridoy.das@wundermanthompson.com");
      await LoginPage.loginEmailNextButton.click();
      await browser.pause(5000);
      // await LoginPage.loginPassword.waitForDisplayed();
      await LoginPage.loginPassword.addValue("Test@@00");
      await browser.pause(5000);
      await LoginPage.loginButton.waitForDisplayed();
      await LoginPage.loginButton.click();
      await expect(browser).toHaveTitle("Automation | Brandshare DAM");
      
      await browser.pause(5000);
      // await browser.debug();
  })
})

describe("Should set my settings details", ()=>{

  it("Open My Settings pop up", async()=>{
      await MySettingsPage.myProfile.click();
      await MySettingsPage.mySettings.click();    
  });
  it("Set Details and save", async()=>{
      await browser.pause(2000);
      await MySettingsPage.timezoneDropdown.click();
      await MySettingsPage.timezoneValue.click();
      await MySettingsPage.dateFormateDropdown.click();
      await MySettingsPage.dateFormateValue.click();
      await MySettingsPage.saveButton.click();
      await browser.pause(5000);
      
  })
})
