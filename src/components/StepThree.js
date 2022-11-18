import { createRef, useEffect, useRef, useState } from "react";
import { finalizeTransfer } from "../utils/finalizeTransfer";

export default function StepThree({ transferRequest, loggedIn, setTransferFinalized }) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [codeIsWrong, setCodeIsWrong] = useState(false);
    const codeString = code[0] + code[1] + code[2] + code[3] + code[4] + code[5];
    const goodToGo = !codeIsWrong && codeString.length===6 && loggedIn;
    const refs = useRef([]);
    const { receiver, will_receive, total, email } = transferRequest.data;

    const handleChange = (e, i) => {
        if (!(e.target.value >= 0 && e.target.value <= 9) || e.target.value === " ") return;
        setCode(prev => {
            const changed = [...prev];
            changed[i] = e.target.value;
            return changed;
        });

        if (e.target.value) {
            if (i < 5) {
                refs.current[i + 1].current.select();
            }
        } else if (i > 0) {
            refs.current[i - 1].current.select();
        }
    };

    const sendCode = e => {
        e.preventDefault();
        if(!goodToGo) return;

        const res = finalizeTransfer(codeString);
        res.then(result => {
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

    useEffect(() => {
        if(codeIsWrong) {
            setCodeIsWrong(false);
        }
    }, [code])

    return (
        <div className="w-full max-w-[546px] rounded-lg p-6 gap-10 flex flex-col bg-white">
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
                        <p className="font-medium text-sm leading-4 text-mainBlack">{will_receive} GeD</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-bgGray" />
                <div className="flex w-full justify-between">
                    <p className="font-medium text-sm leading-4 text-lightGray">სულ ჩამოგეჭრება:</p>
                    <p className="font-medium text-sm leading-4 text-mainBlack">{total} GeD</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-10">
                <p className="font-medium text-sm leading-4 text-lightGray w-full">
                    გადარიცხვის დასასრულებლად ჩაწერეთ მეილზე {email} გამოგზავნილი ექვსნიშა კოდი
                </p>
                <div className="flex gap-3 w-full justify-center">
                    {code.map((el, i) => {
                        refs.current[i] = createRef();
                        return (
                            <input
                                ref={refs.current[i]}
                                key={i}
                                type="text"
                                maxLength="1"
                                className={`${codeIsWrong ? 'border-[#E34338] ' : 'border-[#E0E2E7] '}
                                flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white 
                                border-[1px] border-solid rounded-[6px] font-bold text-base text-[#292D33]`}
                                required
                                placeholder="_"
                                value={code[i]}
                                onChange={e => handleChange(e, i)}
                            />
                        );
                    })}
                </div>
                {codeIsWrong && <div className=" text-[#E34338] text-xs -mt-8 ">
                    არასწორი კოდი. სცადეთ თავიდან
                </div>}
            </div>
            <div className="w-full h-[1px] bg-bgGray "/>
            <div className="w-full flex justify-between items-center">
                <h1 id="goBack" className="cursor-pointer font-medium text-[14px] leading-6 text-[#292D33]">
                    უკან დაბრუნება
                </h1>
                <button onClick={e => sendCode(e)} 
                    className={`${goodToGo? ' bg-secondaryGreen text-white ' : 'bg-[#727a8229] text-lightGray'}  
                    flex flex-row justify-center items-center gap-[4px] w-[138px] h-[40px]  rounded-[32px]`}>
                    დადასტურება
                </button>
            </div>
        </div>
    );
}
