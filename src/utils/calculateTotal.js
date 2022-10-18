export function calculateTotal(amount, percent, min) {
    let fee = Math.ceil(amount*percent/100);
    if(fee<min){
        fee = min;
    }

    return +amount + fee;
}
