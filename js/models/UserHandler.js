export default class UserHandler{
    static addNewUser = (userObject) => {
        let storedUserObjects = localStorage.getItem("userList");
        let userObjects;
        if(storedUserObjects){
            userObjects = JSON.parse(storedUserObjects);

            userObjects.push(userObject);
        }
        else{
            userObjects = [];
            userObjects.push(userObject);
        }

        localStorage.setItem("userList",JSON.stringify(userObjects));   
    }

    static validateUserName = (userName) => {
        let storedUserObjects = localStorage.getItem("userList");
        let stat = true;
        if(storedUserObjects){
            let userObjects = JSON.parse(storedUserObjects);

            userObjects.forEach((item) => {
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
                if(item.username === userObject.username && userObject.password){
                    session = item;
                }
            });


            if(session){
                localStorage.setItem("session",JSON.stringify(session));
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
        if(sessionStored !== undefined || sessionStored !== null){
            let validationUserObject = JSON.parse(sessionStored);
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
            let storedSession = JSON.parse(sessionStored);
            let role = storedSession.role;

            let storedUserAccounts = JSON.parse(localStorage.getItem("userList"));

            console.log("role: ",role);
            storedUserAccounts.forEach((account) => {
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