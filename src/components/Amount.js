import { NumericFormat } from 'react-number-format';

const Amount = ({ amount, setAmount }) => {
    return (
        <NumericFormat
            className="flex w-full  p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray rounded-md  h-11 
            box-border flex-row placeholder:font-medium placeholder:text-sm placeholder:leading-4 placeholder:text-lightGray"
            thousandSeparator=" " 
            placeholder="შეიყვანე რაოდენობა. მაგ: 10 000 000"
            name="amount"
            required
            onValueChange={(values, sourceInfo) => {setAmount(values.value)}}
        />
    );
}
 
export default Amount;
