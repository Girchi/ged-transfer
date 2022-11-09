export async function emailToUsername(email) {
    const baseUrl = 'https://www.girchi.com';
    const url = baseUrl 
        + '/jsonapi/user/user?filter[email][condition][path]=mail&filter[email][condition][operator]==&filter[email][condition][value]=' 
        + email;
        
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(!data.data[0]) {
            return Promise.reject('მომხმარებელი ასეთი მეილით ვერ მოიძებნა');
        }
        const username = data.data[0].attributes.name;
        return username;
    }
    catch {
        return Promise.reject('მოხდა შეცდომა');
    }
}
