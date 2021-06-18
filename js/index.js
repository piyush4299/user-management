import UserHandler from "./models/UserHandler.js";
import { DOMHandler } from "./views/DOMHandler.js";
import { setLoginForm, setSignUpForm, setWelcomePage } from "./views/FormViewHandler.js";
import { setDefaultMessage, setUserListDetails } from "./views/UserListHandler.js";

window.onload = function displayDefaultPage(){
    let userObject = UserHandler.isSessionStored();
    if(userObject){
        if(UserHandler.validateLoginUser(userObject)){
            setWelcomePage();
            let userList = UserHandler.manipulateUserList();
            setUserListDetails(userList,userObject.username);
        }
    }
    else{
        setLoginForm();
        setDefaultMessage();
    }
}

DOMHandler.formSection.addEventListener("click",function(event){
    if(event.target && event.target.id === 'redirectSignUp'){
        setSignUpForm();
    }

    if(event.target && event.target.id === 'redirectLogin'){
        setLoginForm();
    }
});

DOMHandler.listUsersSection.addEventListener("click",function(event){
    if(event.target && event.target.id === 'logoutBtn'){
        UserHandler.logoutSession();
        setLoginForm();
        setDefaultMessage();
    }

    if(event.target && event.target.id === 'clearUserStorage'){
        UserHandler.clearlocalStorage();
        alert("local Storage is cleared");
    }

});

DOMHandler.formSection.addEventListener("submit",function(event){

    if(event.target && event.target.id == "loginForm"){
        validateLoginForm(event.target);
    }

    if(event.target && event.target.id == "signupForm"){
        validateSignUpForm(event.target);
        setLoginForm();
    }

});

function validateLoginForm(event){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const validationObject = {
        'username': username,
        'password': password
    };

    if(UserHandler.validateLoginUser(validationObject)){
        alert("Successfully logged in");
        let userList = UserHandler.manipulateUserList();
        setUserListDetails(userList,validationObject.username);
        setWelcomePage();
    }
    else{
        alert("Create an account first");
    }

    event.reset();
}

function validateSignUpForm(event){
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let emailId = document.getElementById("emailId").value;

    let maleOption = document.getElementById("male");
    let femaleOption = document.getElementById("female");
    let gender;

    if(maleOption.checked){ 
        gender = maleOption.value;
    }
    else{
        gender = femaleOption.value;
    }
    
    let role = document.getElementById("role").value;
    const newUserObject = {
        'fname': fname,
        'lname': lname,
        'username': username,
        'password': password,
        'emailId': emailId,
        'gender': gender,
        'role': role
    };

    if(UserHandler.validateUserName(username)){
        UserHandler.addNewUser(newUserObject);
    }
    else{
        alert("Username already exists Please change it");
    }
    event.reset();
}