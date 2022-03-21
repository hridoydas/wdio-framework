describe ("Demo QA Site Test", ()=>{
    console.log("Demo QA site testing started===>")
    it("Nevigate to the site", async()=>{
        await browser.maximizeWindow();
        await browser.url("https://demoqa.com/");
        await browser.pause(5000);
    })
})