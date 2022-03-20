const MySettingsPage = require('./pages/mySettingsPage');
const chaiExpect = require("chai").expect;

describe("Should set my settings details", ()=>{

    it("Open My Settings pop up", async()=>{
        await MySettingsPage.myProfile.click();
        await MySettingsPage.mySettings.click();
        
    });

    it("Set Details and save", async()=>{
        await MySettingsPage.timezoneDropdown.click();
        await MySettingsPage.timezoneValue.click();
        await MySettingsPage.dateFormateDropdown.click();
        await MySettingsPage.dateFormateValue.click();
        await MySettingsPage.saveButton.click();
        await browser.pause(5000);
    })
})