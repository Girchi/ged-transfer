const Amount = ({ amount, setAmount }) => {

    const handleChange = e => {
        if (!(e.target.value >= 0) || e.target.value === " ") return;
        setAmount(e.target.value);
    }

    return (
        <input
            className="flex w-full  p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray rounded-md  h-11 
            box-border flex-row placeholder:font-medium placeholder:text-sm placeholder:leading-4 placeholder:text-lightGray "
            type="text"
            placeholder="შეიყვანე რაოდენობა. მაგ: 10 000 000"
            name="amount"
            required
            value={amount}
            onChange={e => handleChange(e)}
        />
    );
}
 
export default Amount;
