import { DOMHandler } from "./DOMHandler.js";

export const setUserListDetails = (userList,username) => {
    let userListDetail = `
        <div id="loginInfo">
            <p id="basicInfo">Logged in User: ${ username }</p>
            <button id="logoutBtn">LOGOUT</button>
        </div>
    `;
    userList.forEach((account) => {

        userListDetail += `
            <ul id="userList">
                <li id="listItem"><span>${account.fname} ${account.lname}</span><span>${account.gender}</span> <span>${account.username}</span><span>${account.role}</span></li>
            </ul>
        `;

        DOMHandler.listUsersSection.innerHTML = userListDetail;

    });
        
}

export const setDefaultMessage = ()=> {
    const defaultMessage = `
        <div id="defaultContent">
            <h2 id="defaultMsg">Once logged in you can see other users created over here</h2>
            <button id="clearUserStorage">CLEAR STORE</button>
        </div>
    `;

    DOMHandler.listUsersSection.innerHTML = defaultMessage;
}



