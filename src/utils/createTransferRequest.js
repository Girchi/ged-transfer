import { getAuthClient } from "./auth";
const auth = getAuthClient();

export async function createTransferRequest(receiverId, amount, dealType, price, boughtItem, purpose) {
    const url = '/user/1/ged';
    let formData = new URLSearchParams();
    formData.append('receiver', receiverId);
    formData.append('amount', amount);
    formData.append('dealType', dealType);
    if(price && dealType === 'გაყიდვა') {
        formData.append('price', price);
    }
    if(boughtItem && dealType === 'ნივთის ყიდვა') {
        formData.append('boughtItem', boughtItem);
    }
    if(purpose) {
        formData.append('purpose', purpose);
    }

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
        if (data.error) {
            console.log('Error', data);
            return Promise.reject(new Error(`Error: ${data.error}`));
        }
        return data;
    }
    catch (err) {
        console.log('API got an error', err);
        return Promise.reject(new Error(`API error: ${err}`));
    }
}
