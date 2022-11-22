import { useState } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";

const Purpose = ({ purpose, setPurpose }) => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="flex flex-col gap-1.5">
            <div onClick={() => setToggle(true)} className={`flex items-center mt-6 text-lightGray ${!toggle && 'cursor-pointer'}`}>
                { !toggle && <Plus className="mr-[7.33px]"/> }
                <h3 className="font-medium text-sm leading-4">
                    გადარიცხვის დანიშნულება
                </h3>
            </div>
            { toggle && <textarea
                autoFocus
                className=" h-[72px] flex flex-col justify-between items-center 
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
