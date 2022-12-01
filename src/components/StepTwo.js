import Agree from "./Agree";
import DealType from "./DealType";
import Purpose from "./Purpose";
import Amount from "./Amount";
import NextButton from "./NextButton";
import { calculateTotal } from "../utils/calculateTotal";
import { useState } from "react";
import { createTransferRequest } from "../utils/createTransferRequest";
import { ReactComponent as Edit } from "../images/edit.svg";
import { ReactComponent as Ged } from "../images/ged.svg";
import { NumericFormat } from 'react-number-format';

const StepTwo = ({loggedIn, data, pic, setReceiver, percentage, amount, setAmount, setModalIsOpen, setTransferRequest, setTransferFinalized, setDataToSend}) => {
    const [dealType, setDealType] = useState('გაყიდვა');
    const [price, setPrice] = useState('');
    const [boughtItem, setBoughtItem] = useState('');
    const [purpose, setPurpose] = useState('');
    const [agree, setAgree] = useState(true);
    const [wait, setWait] = useState(false);
    const total = calculateTotal(amount, percentage.percentage, +percentage.minimum);
    let goodToGo = amount>0 && agree && ( !loggedIn || (
        total<=loggedIn.data.attributes.field_ged && loggedIn.data.attributes.drupal_internal__uid !== data.attributes.drupal_internal__uid
    ));

    const handleClick = () => {
        if(!goodToGo) return;
        if(!loggedIn) {
            setModalIsOpen(true);
            return;
        }
        setWait(true);
        setDataToSend([data.attributes.drupal_internal__uid, amount, dealType, price, boughtItem, purpose]);
        const retrieved = createTransferRequest(data.attributes.drupal_internal__uid, amount, dealType, price, boughtItem, purpose);
        retrieved.then(result=>{
            setTransferRequest(result);
        }).catch(err => {
            setTransferFinalized({error: err.message});
        });
    }
    
    return (
        <div className="page_2 w-full max-w-[546px] rounded-lg p-6 gap-6 flex flex-col bg-white">
            { wait && <div className='fixed inset-0 z-50 cursor-wait'/>}
            <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-6 text-mainBlack">გადარიცხვა</h1>
                <h2 className="font-medium tracking-[0.02em] text-lightGray">ნაბიჯი 2/3</h2>
            </div>
            <div className="flex justify-between items-center p-4 gap-3 w-full h-12 rounded-[6px] bg-[#292d330a] ">
                <div className="flex gap-3">
                    <img className="h-6 w-6 rounded-full" src={pic} alt="receiver" />
                    <h3 className="font-[500] text-[14px] leading-[24px] text-[#292D33]">
                        { data.attributes.field_first_name } { data.attributes.field_last_name }
                        { !data.attributes.field_first_name && !data.attributes.field_last_name && data.attributes.name}
                    </h3>
                </div>
                <Edit onClick={() => setReceiver(null)} className="cursor-pointer"/>
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="font-medium flex justify-between gap-10 text-[12px] leading-[16px] text-[#292D33]" >
                    გადასარიცხი ჯედების რაოდენობა
                    <span className="text-right">საკომისიო {percentage.percentage}% (მინიმუმ {percentage.minimum} GeD)</span>
                </label>
                <div className="relative">
                    <Ged className="absolute right-[14.21px] top-1/2 translate-y-[-50%] text-[#727A82]"/>
                    <Amount amount={amount} setAmount={setAmount} />
                </div>
                {amount>0 && (!loggedIn || total<=loggedIn.data.attributes.field_ged) && <label className="font-medium text-xs leading-4 text-lightGray">
                    სულ ჩამოგეჭრება {total} GeD
                </label>}
                {amount>0 && loggedIn && total>loggedIn.data.attributes.field_ged && <label className=" font-medium text-xs leading-4 text-[#E34338]">
                    ამ ტრანზაქციისთვის საჭიროა <NumericFormat value={total} thousandSeparator=" " displayType="text" /> GeD
                </label>}
            </div>
            <DealType dealType={dealType} setDealType={setDealType} setPrice={setPrice} boughtItem={boughtItem} setBoughtItem={setBoughtItem} />
            <Purpose purpose={purpose} setPurpose={setPurpose} />
            <div className="w-full h-[1px] bg-bgGray mt-6" />
            <div className="flex items-center w-full h-10 justify-between">
                <Agree agree={agree} setAgree={setAgree} />
                <NextButton handleClick={handleClick} goodToGo={goodToGo} />
            </div>
        </div>
    );
}
 
export default StepTwo;
