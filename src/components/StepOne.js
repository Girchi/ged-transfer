import { useState } from "react";
import Chosen from "./Chosen";
import Receiver from "./Receiver";
import Suggestions from "./Suggestions";

const StepOne = () => {
    
    const [receiver, setReceiver] = useState('');
    const [list, setList] = useState(null);

    return ( 
        <div className="relative w-full max-w-[546px] rounded-lg p-6 gap-6 flex flex-col bg-white">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-6 text-mainBlack">გადარიცხვა</h1>
                <h2 className="font-medium tracking-[0.02em] text-lightGray">ნაბიჯი 1/3</h2>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <div className="flex flex-col gap-1.5">
                        <label className="font-medium text-xs leading-4  text-mainBlack">მიმღები</label>
                        <Receiver receiver={receiver} setReceiver={setReceiver} setList={setList} />
                    </div>
                    <Suggestions list={list} />
                </div>
                <Chosen />
            </div>
            <div className="w-full h-[1px] bg-bgGray mt-6" >
            </div>
            <div className="cursor-pointer flex justify-center ml-auto items-center py-2 px-4 gap-1 w-[111px] h-10 bg-[#727a8229] rounded-[32px]">
                <p className="text-lightGray font-medium text-sm leading-6 tracking-[0.02em]">შემდეგი</p>
                <i
                    id="next-icon"
                    className="fa-solid fa-chevron-right text-lightGray text-[10px] font-bold "
                />
            </div>
        </div>
    );
}
 
export default StepOne;