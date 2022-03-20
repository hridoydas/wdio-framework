class LoginPage{
    
    get loginEmail(){
        return $("._s_UserName");
    }

    get loginEmailNextButton(){
        return $("//button[contains(.,'Next')]");
    }

    get loginPassword(){
        return $("//input[@class='sign-in-box-input _s_Password']");
    }

    get loginButton(){
        return $("//button[@type='submit']");
    }
}

module.exports = new LoginPage();
// module.exports.LoginPage = LoginPage;
// export default class LoginPage();