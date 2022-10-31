import { getAuthClient } from "./auth";
const auth = getAuthClient();

export async function checkTokenAndGetUserInfo() {
    const isLoggedIn = await auth.isLoggedIn();
    let uid = '';
    if(isLoggedIn) {
        const headers = new Headers({
            Accept: 'application/vnd.api+json',
        });
        try {
            const response =  await auth.fetchWithAuthentication('/jsonapi', {headers});
            const data = await response.json();
            uid = data.meta.links.me.meta.id;
            const baseUrl = process.env.REACT_APP_DRUPAL_DOMAIN;
            const res = await fetch(`${baseUrl}/jsonapi/user/user/${uid}/?include=user_picture`);
            const userData = await res.json();
            return userData;
        } catch(err) {
            console.log(err);
        }
    }
    return false;
}
