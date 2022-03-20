class MySettings{

    get myProfile(){
        return $("._s_user-name");
    }

    get mySettings(){
        return $("._s_MySettings");
    }
    get timezoneDropdown(){
        return ("#UserRegionalSettings_TimeZone");
    }

    get timezoneValue(){
        return ("//option[@value='Asia/Dhaka']");
    }
    
    get dateFormateDropdown(){
        return ("#UserRegionalSettings_DateFormat");
    }

    get dateFormateValue(){
        return $("//option[@value='dd/mm/yy']");
    }

    get saveButton(){
        return $(".btn btn-primary _s_primary _s_Save");
    }
}

module.exports = new MySettings();