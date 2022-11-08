import { useEffect, useState } from "react";
import { getCurrencyInfo } from "../utils/getCurrencyInfo";

const Side = ({loggedIn}) => {
    const [copied, setCopied] = useState({now: false, ever: false});
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const data = loggedIn.data;
    let urlToCopy = '';
    if(data) {
        urlToCopy = 'http://localhost:3000/?id=' + data.attributes.drupal_internal__uid;
    }

    useEffect(() => {
        getCurrencyInfo().then(result => {setCurrencyInfo(result)});
    }, []);

    const handleClick = () => {
        navigator.clipboard.writeText(urlToCopy);
        setCopied({now: true, ever: true});
        setTimeout(() => {
            setCopied({now: false, ever: true});
        }, 1500);
    }

    return (
        <div className={`${data ? 'h-[263px]' : 'h-[180px]'} flex flex-col p-7 gap-6 w-full max-w-[318px] bg-white rounded-lg`}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-xl leading-6 ">
                        { data && data.attributes.field_ged }
                    </h1>
                    <h3 className="font-medium text-sm leading-6 text-lightGray">
                        { data ? 'ჩემი ბალანსი' : 'ბალანსის სანახავად გაიარეთ ავტორიზაცია'}
                    </h3>
                </div>
                <div className="flex justify-center items-center p-4 gap-2.5 w-12 aspect-square bg-[#F2F6EC] rounded-lg">
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.313 10.1765H8.47301L8.90301 12.5275H11.227V15.6505C10.495 15.9865 9.67801 16.1205 8.81701 16.1205C6.32301 16.1205 5.11801 14.8785 5.11801 11.2175C5.11801 7.75851 6.96801 6.31451 9.46301 6.31451C10.926 6.31451 11.872 6.65051 13.119 7.38951L15.27 5.64351C14.195 4.90451 12.904 4.33351 11.27 4.06451V0.874512H9.54801V3.89751H9.33301C8.64501 3.89751 7.95601 3.96451 7.31101 4.06451V0.874512H5.59101V4.50151C2.62301 5.50851 0.687012 7.79251 0.687012 11.2175C0.687012 14.8775 2.32201 17.2295 5.50501 18.1355V21.1255H7.22501V18.4715C7.74101 18.5385 8.30101 18.5715 8.86001 18.5715C9.07501 18.5715 9.24701 18.5715 9.46201 18.5385V21.1245H11.182V18.3705C12.645 18.1355 14.065 17.6995 15.312 17.0945V10.1765H15.313Z" fill="#1A8917"/>
                    </svg>
                </div>
            </div>
            <hr className="bg-bgGray" />
            <div className="flex gap-2">
                { currencyInfo && <div>
                    <p className="font-semibold text-sm leading-4 text-mainBlack">
                        1 GeD = {currencyInfo.rate}₾
                    </p>
                </div>}
                { currencyInfo && currencyInfo.change !== 0 && <svg className= { currencyInfo.change > 0 ? 'text-[#1A8917] self-center': 'text-red-600 scale-y-[-1] self-center'}  width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83314 7.01167C9.98939 7.16796 10.2013 7.25579 10.4223 7.25583H10.9106C11.1316 7.25579 11.3436 7.16796 11.4998 7.01167L15.4223 3.08917L17.3331 5V0H12.3331L14.244 1.91083L10.6665 5.48833L8.16648 2.98833C8.01023 2.83204 7.79831 2.74421 7.57731 2.74417H7.08898C6.86798 2.74421 6.65605 2.83204 6.49981 2.98833L0.910645 8.5775L2.08898 9.75583L7.33314 4.51167L9.83314 7.01167Z" fill="currentColor"/>
                </svg>}
            </div>
            { data && <div className="flex flex-col gap-1.5">
                <p className="font-medium text-xs leading-4 text-lightGray">
                    დაკოპირება
                </p>
                <div className="flex items-center gap-2">
                    <div onClick={handleClick} className="group cursor-pointer flex justify-between items-center px-3 py-3.5 w-[80.1%] h-11 bg-white border border-bgGray rounded-md">
                        <p className="cursor-pointer overflow-hidden text-ellipsis h-4 font-medium text-sm leading-4 border-none outline-none text-lightGray">
                            { data && urlToCopy}
                        </p>
                        <div>
                            <span className={`${ !copied.now && 'invisible '} group-hover:visible absolute text-white rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-2.5 -translate-y-9`}>
                                <p className="font-medium text-xs leading-5 text-whitebg-white ">
                                    { copied.now ? 'გადაკოპირდა' : 'გადაკოპირება'}
                                </p>
                                <span className=" absolute w-[8px] h-[8px] rotate-45 ml-[50%] translate-x-[-14px] bg-[#292d33e6]" />
                            </span>
                            { !copied.ever && <svg className="w-5 h-5 cursor-pointer " width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 20.9999H2.00019C1.46427 21.0186 0.944666 20.8138 0.56548 20.4347C0.186295 20.0555 -0.0184319 19.5359 0.000191672 18.9999V8.99995C-0.0184319 8.46402 0.186295 7.94442 0.56548 7.56524C0.944666 7.18605 1.46427 6.98132 2.00019 6.99995H6.00019V2.99995C5.98157 2.46402 6.1863 1.94442 6.56548 1.56524C6.94467 1.18605 7.46427 0.981324 8.00019 0.999948H18.0002C18.5361 0.981324 19.0557 1.18605 19.4349 1.56524C19.8141 1.94442 20.0188 2.46402 20.0002 2.99995V12.9999C20.0185 13.5358 19.8137 14.0552 19.4346 14.4343C19.0555 14.8134 18.536 15.0183 18.0002 14.9999H14.0002V18.9999C14.0185 19.5358 13.8137 20.0552 13.4346 20.4343C13.0555 20.8134 12.536 21.0183 12.0002 20.9999ZM2.00019 8.99995V18.9999H12.0002V14.9999H8.00019C7.46435 15.0183 6.94493 14.8134 6.56581 14.4343C6.18669 14.0552 5.98187 13.5358 6.00019 12.9999V8.99995H2.00019ZM8.00019 2.99995V12.9999H18.0002V2.99995H8.00019Z" fill="#292D33"/>
                            </svg>}
                            { copied.ever && <svg className="w-[14px] h-[14px] mr-[3px] cursor-pointer" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 14H0V12H14V14ZM5 9.42L1 5.42L2.41 4.01L5 6.59L11.59 0L13 1.42L5 9.42Z" fill="#1A8917"/>
                            </svg>}
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-11 aspect-square bg-[#F3F3F4] rounded-md">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 18H10V16H12V18ZM10 11H8V16H10V11ZM18 9H16V13H18V9ZM16 7H14V9H16V7ZM4 9H2V11H4V9ZM2 7H0V9H2V7ZM9 2H11V0H9V2ZM1.5 1.5V4.5H4.5V1.5H1.5ZM6 6H0V0H6V6ZM1.5 13.5V16.5H4.5V13.5H1.5ZM6 18H0V12H6V18ZM13.5 1.5V4.5H16.5V1.5H13.5ZM18 6H12V0H18V6ZM16 16V13H12V15H14V18H18V16H16ZM14 9H10V11H14V9ZM10 7H4V9H6V11H8V9H10V7ZM11 6V4H9V2H7V6H11ZM3.75 2.25H2.25V3.75H3.75V2.25ZM3.75 14.25H2.25V15.75H3.75V14.25ZM15.75 2.25H14.25V3.75H15.75V2.25Z" fill="#292D33"/>
                        </svg>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Side;
