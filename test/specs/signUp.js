const chaiExpect = require("chai").expect;
const signUpPage = require("./pages/signUpPage");

var email = "hridoydas.wt@gmail.com";
var password = "Pass@@00";

function tenantName(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
const dy_folder_name = tenantName(3);
// console.log(dy_folder_name);


describe("Sign Up",()=>{
    console.log("Sign Up with google===========>");

    it("Open Sign Up URL", async()=>{
        await browser.maximizeWindow();
        await browser.url('/');
        //asert title
        const title = await browser.getTitle();
        console.log(title);
        // await chaiExpect(title).to.include("Brandshare DAM");
        // console.log("Title is verified");
    })

    it("Click on google button", async()=>{
        console.log("TC 01: Click on google button");
        await signUpPage.googleButton.click();
    })

    it("Enter Google Mail and Passaword", async()=>{
        console.log("TC 02: Enter new email");
        await browser.pause(2000);
        await signUpPage.googleMailField.addValue(email);
        await signUpPage.nextButton.click();
        console.log("TC 03: Enter Password");
        await signUpPage.googlePassword.addValue(password);
        await signUpPage.nextButton.click();
    })



    // it("Enter New Email", async()=>{
    //     console.log("TC 02: Enter new email");
        
    // })

    // it("Enter New Email", async()=>{
    //     console.log("TC 02: Enter new email");
    //     await signUpPage.googlePassword.addValue("Pass@@00");
    // })
})