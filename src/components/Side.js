import { useEffect, useState } from "react";
import { getCurrencyInfo } from "../utils/getCurrencyInfo";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Ged } from "../images/ged.svg";
import { ReactComponent as Copy } from "../images/copy.svg";
import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Qr } from "../images/qrcode.svg";
import { NumericFormat } from 'react-number-format';
import QrModal from "./QrModal";

const Side = ({loggedIn, showQr, setShowQr}) => {
    const [copied, setCopied] = useState({now: false, ever: false});
    const [currencyInfo, setCurrencyInfo] = useState(null);
    const data = loggedIn.data;
    let urlToCopy = '';
    if(data) {
        urlToCopy = 'https://wallet.girchi.com/?id=' + data.attributes.drupal_internal__uid;
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
        <div className={`${data ? 'h-[263px]' : 'h-[180px]'} flex flex-col p-7 gap-6 w-full max-w-[318px] bg-white rounded-lg shadow-big`}>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-bold text-xl leading-6 ">
                        { data && <NumericFormat value={data.attributes.field_ged} thousandSeparator=" " displayType="text" /> }
                    </h1>
                    <h3 className="font-medium text-sm leading-6 text-lightGray">
                        { data ? 'ჩემი ბალანსი' : 'ბალანსის სანახავად გაიარეთ ავტორიზაცია'}
                    </h3>
                </div>
                <div className="flex justify-center items-center p-4 gap-2.5 w-12 aspect-square bg-[#F2F6EC] rounded-lg text-[#1A8917]">
                    <Ged />
                </div>
            </div>
            <hr className="bg-bgGray" />
            <div className="flex gap-2">
                { currencyInfo && <div>
                    <p className="font-semibold text-sm leading-4 text-mainBlack">
                        1 GeD = {currencyInfo.rate}₾
                    </p>
                </div>}
                { currencyInfo && currencyInfo.change !== 0 &&
                    <Arrow className={ currencyInfo.change > 0 ? 'text-[#1A8917] self-center': 'text-red-600 scale-y-[-1] self-center'}/>
                }
            </div>
            { data && <div className="flex flex-col gap-1.5">
                <p className="font-medium text-xs leading-4 text-lightGray">
                    დაკოპირება
                </p>
                <div className="flex items-center gap-2">
                    <div onClick={handleClick} className="group cursor-pointer flex justify-between items-center
                        px-3 py-3.5 w-[80.1%] h-11 bg-white border border-bgGray rounded-md">
                        <p className="cursor-pointer overflow-hidden text-ellipsis h-4 font-medium text-sm 
                            leading-4 border-none outline-none text-lightGray">
                            { data && urlToCopy}
                        </p>
                        <div>
                            <span className={`${ !copied.now && 'invisible '} group-hover:visible absolute text-white
                                rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-2.5 -translate-y-9`}>
                                <p className="font-medium text-xs leading-5 text-whitebg-white ">
                                    { copied.now ? 'გადაკოპირდა' : 'გადაკოპირება'}
                                </p>
                                <span className=" absolute w-[8px] h-[8px] rotate-45 ml-[50%] translate-x-[-14px] bg-[#292d33e6]" />
                            </span>
                            { !copied.ever && <Copy className="w-5 h-5 cursor-pointer"/> }
                            { copied.ever && <Check className="w-[14px] h-[14px] mr-[3px]"/> }
                        </div>
                    </div>
                    <button onClick={() => setShowQr(true)} className="flex items-center justify-center w-11 aspect-square bg-[#F3F3F4] rounded-md">
                        <Qr />
                    </button>
                    { showQr && <QrModal urlToCopy={urlToCopy} setShowQr={setShowQr} />}
                </div>
            </div>}
        </div>
    );
}

export default Side;
