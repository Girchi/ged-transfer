import success from '../images/ok.svg';
import { useEffect, useState } from 'react';
import { getAuthClient } from "../utils/auth";
const auth = getAuthClient();

export default function Success() {
    const [wait, setWait] = useState(true);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('drupal-oauth-token'));
        auth.refreshToken(token.refresh_token);
        setWait(false);
    }, []);

    return (
        <div className="w-full max-w-[546px] rounded-lg p-6 gap-10 flex flex-col bg-white">
            { wait && <div className='fixed inset-0 z-50 cursor-wait'/>}
            <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-6 text-mainBlack">გადარიცხვა</h1>
            </div>
            <div className=" self-center -mb-4 ">
                <img src={success} alt="" />
            </div>
            <p className="font-medium text-sm leading-4 text-lightGray w-full">
                გილოცავ! გადარიცხვა წარმატებით დასრულდა. შეგიძლია, შენი გადარიცხვების ისტორია ნახო
            </p>
            <div className="w-full h-[1px] bg-bgGray "/>
            <div className="w-full flex justify-between items-center">
                <a href="/">
                    <h1 className="cursor-pointer font-medium text-[14px] leading-6 text-[#292D33]">
                        მთავარ გვერდზე გადასვლა
                    </h1>
                </a>
                <a href="/"
                    className=" bg-secondaryGreen text-white 
                    flex flex-row justify-center items-center gap-[4px] w-[138px] h-[40px] rounded-[32px]">
                    დასრულება
                </a>
            </div>
        </div>
    )
}
