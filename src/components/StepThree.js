import { useState } from "react";
import { finalizeTransfer } from "../utils/finalizeTransfer";
import { NumericFormat } from 'react-number-format';
import VerificationCode from "./VerificationCode";

export default function StepThree({ transferRequest, loggedIn, setTransferFinalized, dataToSend, setTransferRequest }) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [codeIsWrong, setCodeIsWrong] = useState(false);
    const [wait, setWait] = useState(false);
    const codeString = code[0] + code[1] + code[2] + code[3] + code[4] + code[5];
    const goodToGo = !codeIsWrong && codeString.length===6 && loggedIn;
    const { receiver, will_receive, total, email } = transferRequest.data;

    const sendCode = e => {
        e.preventDefault();
        if(!goodToGo) return;
        setWait(true);

        const res = finalizeTransfer(codeString);
        res.then(result => {
            setWait(false);
            if(result.error) {
                console.log(result);
                if(result.error === 'კოდი არასწორია') {
                    setCodeIsWrong(true);
                } else {
                    setTransferFinalized({"error": result.error});
                }
            }
            if(result.status === 'გადარიცხვა შესრულებულია') {
                setTransferFinalized('success');
            }
        });
        res.catch(err => {
            console.log(err);
            setTransferFinalized({"error": 'გადარიცხვის შესრულებისას მოხდა შეცდომა'});
        });
    }

    return (
        <div className="w-full max-w-[546px] rounded-lg p-6 gap-10 flex flex-col bg-white">
            { wait && <div className='fixed inset-0 z-50 cursor-wait'/>}
            <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-6 text-mainBlack">გადარიცხვა</h1>
                <h2 className="font-medium tracking-[0.02em] text-lightGray">ნაბიჯი 3/3</h2>
            </div>
            <div className="flex flex-col p-4 gap-4 bg-[#292d330a] rounded-md">
                <div className="flex flex-col gap-3">
                    <div className="flex w-full justify-between ">
                        <p className="font-medium text-sm leading-4 text-lightGray">მიმღები:</p>
                        <p className="font-medium text-sm leading-4 text-mainBlack">{receiver}</p>
                    </div>
                    <div className="flex w-full justify-between ">
                        <p className="font-medium text-sm leading-4 text-lightGray">დაერიცხება:</p>
                        <p className="font-medium text-sm leading-4 text-mainBlack">
                            <NumericFormat value={will_receive} thousandSeparator=" " displayType="text"/> GeD
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-bgGray" />
                <div className="flex w-full justify-between">
                    <p className="font-medium text-sm leading-4 text-lightGray">სულ ჩამოგეჭრება:</p>
                    <p className="font-medium text-sm leading-4 text-mainBlack">
                        <NumericFormat value={total} thousandSeparator=" " displayType="text"/> GeD
                    </p>
                </div>
            </div>
            <VerificationCode 
                email={email} codeIsWrong={codeIsWrong} setCodeIsWrong={setCodeIsWrong} 
                code={code} setCode={setCode} setWait={setWait} dataToSend={dataToSend}
                setTransferRequest={setTransferRequest} setTransferFinalized={setTransferFinalized}
            />
            <div className="w-full h-[1px] bg-bgGray "/>
            <div className="w-full flex justify-between items-center">
                <a href="/">
                    <h1 className="cursor-pointer font-medium text-[14px] leading-6 text-[#292D33]">
                        უკან დაბრუნება
                    </h1>
                </a>
                <button onClick={e => sendCode(e)} 
                    className={`${goodToGo ? 'bg-secondaryGreen text-white' : 'bg-[#727a8229] text-lightGray cursor-not-allowed'}  
                    flex flex-row justify-center items-center gap-[4px] w-[138px] h-[40px]  rounded-[32px]`}>
                    დადასტურება
                </button>
            </div>
        </div>
    );
}
