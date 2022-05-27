class SignUp{
    
    get googleButton(){
        return $("//div[@class='_s_provider provider google']");
    }

    get googleLanguageDropdown(){
        return $("(//div[@jsname='wQNmvb'])[1]");
    }

    

    get googleMailField(){
        return $("(//input[@id='identifierId'])");
    }

    get nextButton(){
        return $("(//span[@jsname='V67aGc'])[2]");
    }

    get googlePassword(){
        return $("//div[@class='whsOnd zHQkBf']");
    }

}

module.exports = new SignUp();