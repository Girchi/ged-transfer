import { getAuthClient } from "./auth";
const auth = getAuthClient();

export async function finalizeTransfer(verificationCode) {
    const url = '/ged_transfer_verification';
    let formData = new URLSearchParams();
    formData.append('code', verificationCode);
    try {
        const response = await auth.fetchWithAuthentication(url, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: formData,
        });
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log('API got an error', err);
        return Promise.reject(new Error(`API error: ${err}`));
    }
}
