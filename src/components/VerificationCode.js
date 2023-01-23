import { createRef, useRef } from "react";
import { ReactComponent as Refresh } from "../images/refresh-icon.svg";
import { createTransferRequest } from "../utils/createTransferRequest";

export default function VerificationCode({email, codeIsWrong, setCodeIsWrong, code, setCode, setWait, dataToSend, setTransferRequest, setTransferFinalized}) {
    const refs = useRef([]);

    const handleChange = (e, i) => {
        if (e.target.value >=100000 && e.target.value <= 999999) {
            setCode(e.target.value.split(''));
            refs.current[5].current.select();
        } else if (e.target.value >= 0 && e.target.value <= 9 && !e.target.value.includes(" ")) {
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
        }

        if(codeIsWrong) {
            setCodeIsWrong(false);
        }
    };

    const handleClick = () => {
        setWait(true);
        const retrieved = createTransferRequest(...dataToSend);
        retrieved.then(result=>{
            setTransferRequest(result);
            setCode(["", "", "", "", "", ""]);
            setCodeIsWrong(false);
            setWait(false);
        }).catch(err => {
            setTransferFinalized({error: err.message});
        });
    };

    return (
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
                            className={`${codeIsWrong ? 'border-[#E34338] ' : 'border-[#E0E2E7] '}
                            flex flex-col items-center text-center pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white 
                            border-[1px] border-solid rounded-[6px] font-bold text-base text-[#292D33] focus:placeholder:text-[#0000]`}
                            required
                            placeholder="_"
                            value={code[i]}
                            onChange={e => handleChange(e, i)}
                        />
                    );
                })}
            </div>
            {codeIsWrong && <div className="w-[300px] text-[#E34338] text-xs -mt-8 mx-auto">
                არასწორი კოდი. სცადეთ თავიდან
            </div>}
            {codeIsWrong && <h1 onClick={handleClick} className="cursor-pointer font-medium text-[14px] leading-6 text-[#292D33]">
                კოდის ხელახლა გამოგზავნა <Refresh className='inline-block ml-1'/>
            </h1>}
        </div>
    );
}
