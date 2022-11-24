export async function getCurrencyInfo() {
    try {
        const response =  await fetch('https://www.girchi.com/ged/currency/data');
        const data = await response.json();
        const last = data.data[data.data.length -1].tetri;
        const secondToLast = data.data[data.data.length -2].tetri;
        const change = last === secondToLast ? 0 : last > secondToLast ? 1 : -1;
        return {rate: +(last/100).toPrecision(8), change: change};
    }
    catch {
        return null;
    }
}
