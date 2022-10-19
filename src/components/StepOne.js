import { useState } from "react";
import Chosen from "./Chosen";
import NextButton from "./NextButton";
import Search from "./Search";
import Suggestions from "./Suggestions";

const StepOne = (props) => {
    const setReceiver=props.setReceiver;
    const [search, setSearch] = useState('');
    const [list, setList] = useState(null);
    const [profilePictureList, setProfilePictureList] = useState(null);
    const [chosen, setChosen] = useState(null);

    const handleClick = () => {
        if(chosen) {
            setReceiver(chosen);
        }
    }

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
                        <Search search={search} setSearch={setSearch} setList={setList} setProfilePictureList={setProfilePictureList} />
                    </div>
                    { list && list.length>0 && <Suggestions 
                        list={list} setList={setList} setChosen={setChosen}
                        profilePictureList={profilePictureList} setProfilePictureList={setProfilePictureList} 
                    /> }
                </div>
                { chosen && <Chosen chosen={chosen} setChosen={setChosen} /> }
            </div>
            <div className="w-full h-[1px] bg-bgGray mt-6" />
            <NextButton handleClick={handleClick} goodToGo={chosen} />
        </div>
    );
}

export default StepOne;
