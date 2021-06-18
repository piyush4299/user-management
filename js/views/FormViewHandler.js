import { DOMHandler } from "./DOMHandler.js";

export const setSignUpForm = () => {
    
    const signUpForm = `
        <h1 class="heading">SIGN UP</h1>
        <form id="signupForm" action="/" onsubmit="event.preventDefault();">
            
            <label for="firstName">First Name:</label><br>
            <input id="firstName" type="text" placeholder="First Name" required/><br>
            
            <label for="lastName">Last Name:</label><br>
            <input id="lastName" type="text" placeholder="Last Name" required/><br>
            
            <label for="emailId">Email id:</label><br>
            <input id="emailId" type="email" placeholder="Email id" required/><br>
            
            <label for="username">Username:</label><br>
            <input id="username" type="text" placeholder="Username" required/><br>
            
            <label for="password">Password:</label><br>
            <input type="password" id="password"  placeholder="Password" required/><br>
            
            <label for="gender">Gender:</label>
            <section id="gender">
                <input type="radio" id="male" name="gender" value="male" required/>
                <label for="male">Male</label><br>
                <input type="radio" id="female" name="gender" value="female" required/>
                <label for="female">Female</label><br>
            </section>

            <label for="role">Role:</label><br>
            <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="operations">Operations</option>
            <option value="sales">Sales</option>
            </select><br>

            <div class="footerForm">
                <input id="submitBtn" type="submit" value="SignUp"/>
                <button type="button" id="redirectLogin">Already a Member</button>
            </div>
        </form>
    `;
    DOMHandler.formSection.innerHTML = signUpForm;

}

export const setLoginForm = () => {

    const loginForm = `
        <h1 class="heading">LOGIN</h1>

        <form id="loginForm" action="/" onsubmit="event.preventDefault();">

            <label for="username">Username:</label><br>
            <input id="username" type="text" placeholder="Username" required/><br>
            
            <label for="password">Password:</label><br>
            <input type="password" id="password"  placeholder="Password" required/><br>

            <div class="footerForm">
                <input id="submitBtn" type="submit" value="Login"/>
                <button type="button" href="#" id="redirectSignUp">New Member</button>
            </div>
        </form>
    `;

    DOMHandler.formSection.innerHTML = loginForm;
    
} 

export const setWelcomePage = () => {
    const welcomeMessage = `
        <h1>WELCOME</h1>
    `;  

    DOMHandler.formSection.innerHTML = welcomeMessage; 
}
