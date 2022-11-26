export function calculateTotal(amount, percent, min) {
    let fee = Math.floor(amount*percent/100);
    if(fee<min){
        fee = min;
    }

    return +amount + fee;
}
