export async function retrieve(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.error) {
            console.log('Error retrieving data', data);
            return false;
        }
        return data;
    }
    catch (err) {
        return console.log('API got an error', err);
    }
}
