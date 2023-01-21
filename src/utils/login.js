import { checkTokenAndGetUserInfo } from '../utils/checkTokenAndGetUserInfo';
import { getAuthClient } from "./auth";
const auth = getAuthClient();

export function login(setLoggedIn) {
    auth.login();
    let waitingForToken = setInterval(()=>{
        if(auth.windowIsClosed()) {
            clearInterval(waitingForToken);
        }
        checkTokenAndGetUserInfo()
            .then(result => {
                setLoggedIn(result);
                clearInterval(waitingForToken);
            })
            .catch(err => {console.log(err)});
    }, 500);
}
