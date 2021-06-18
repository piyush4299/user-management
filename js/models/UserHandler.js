export default class UserHandler{
    static addNewUser = (userObject) => {
        let storedUserObjects = localStorage.getItem("userList");
        let userObjects;
        if(storedUserObjects){
            userObjects = JSON.parse(storedUserObjects);

            userObjects.push(window.btoa(JSON.stringify(userObject)));
        }
        else{
            userObjects = [];
            userObjects.push(window.btoa(JSON.stringify(userObject)));
        }

        localStorage.setItem("userList",JSON.stringify(userObjects));   
    }

    static validateUserName = (userName) => {
        let storedUserObjects = localStorage.getItem("userList");
        let stat = true;
        if(storedUserObjects){
            let userObjects = JSON.parse(storedUserObjects);

            userObjects.forEach((item) => {
                item = JSON.parse(window.atob(item));
                if(item.username === userName){
                    stat = false;
                    return false;
                }
            });
        }

        return stat;
    }

    static validateLoginUser = (userObject) => {
        let storedUserObjects = localStorage.getItem("userList");
        if(storedUserObjects){
            let userObjects = JSON.parse(storedUserObjects);

            let session = null;
            userObjects.forEach((item) => {
                console.log("item: ",item);
                item = JSON.parse(window.atob(item));
                if(item.username === userObject.username && userObject.password){
                    session = item;
                }
            });


            if(session){
                localStorage.setItem("session",window.btoa(JSON.stringify(session)));
            }
            else{
                return false;
            }
            
            return true;
        }
        else{
            return false;
        }
    }

    static isSessionStored = () => {
        let sessionStored = localStorage.getItem("session");
        console.log("session: ",sessionStored);
        if(sessionStored !== 'null' && sessionStored !== null){
            console.log("here");
            let validationUserObject = JSON.parse(window.atob(sessionStored));
            return validationUserObject;
        }
        else{
            return null;
        }
    }

    static logoutSession = () => {
        let sessionStored = localStorage.getItem("session");
        console.log("sessionStored");
        if(sessionStored){
            localStorage.setItem("session",null);
            alert("successful logout");
        }
        else{
            alert("there is no session maintained Please login first");
        }
    }

    static clearlocalStorage = () => {
        localStorage.clear();
    }

    static manipulateUserList = () => {
        let userList = [];
        let sessionStored = localStorage.getItem("session");
        if(sessionStored){
            let storedSession = JSON.parse(window.atob(sessionStored));
            let role = storedSession.role;

            let storedUserAccounts = JSON.parse(localStorage.getItem("userList"));

            console.log("role: ",role);
            storedUserAccounts.forEach((account) => {
                account = JSON.parse(window.atob(account));
                if(role !== "admin" && account.role === role){
                    userList.push(account);
                }

                if(role === "admin"){
                    userList.push(account);
                }
                
            });   
        }
        return userList;
    }
}