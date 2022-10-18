import { useState } from "react";

const Purpose = (props) => {
    const [toggle, setToggle] = useState(false);
    const purpose = props.purpose;
    const setPurpose = props.setPurpose;
    
    return (
        <div className="flex flex-col gap-1.5">
            <div onClick={() => setToggle(true)} className="flex items-center mt-6 cursor-pointer text-lightGray ">
                { !toggle && <svg className=" mr-[7.33px]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.66671 5.66671V9.66671H4.33337V5.66671H0.333374V4.33337H4.33337V0.333374H5.66671V4.33337H9.66671V5.66671H5.66671Z" fill="currentColor"/>
                </svg>}
                <h3 className="font-medium text-sm leading-4">
                    გადარიცხვის დანიშნულება
                </h3>
            </div>
            { toggle && <textarea
                className=" w-[490px] h-[72px] flex flex-col justify-between items-center 
                pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] rounded-[6px]"
                name="purpose"
                maxLength={300}
                value={purpose}
                onChange={e => setPurpose(e.target.value)}
            />}
        </div>
    );
}

export default Purpose;
