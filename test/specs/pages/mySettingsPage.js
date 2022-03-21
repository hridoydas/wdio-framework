class MySettings{

    get myProfile(){
        return $("._s_user-name");
    }

    get mySettings(){
        return $("._s_MySettings");
    }
    get timezoneDropdown(){
        return $("//select[@id='UserRegionalSettings_TimeZone']");
    }

    get timezoneValue(){
        return $("//option[@value='Asia/Dhaka']");
    }
    
    get dateFormateDropdown(){
        return $("#UserRegionalSettings_DateFormat");
    }

    get dateFormateValue(){
        return $("//option[@value='dd/mm/yy']");
    }

    get saveButton(){
        return $("//button[contains(.,'Save')]");
    }
}

module.exports = new MySettings();