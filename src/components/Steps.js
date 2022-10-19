import { useEffect, useState } from "react";
import { idToUrl } from "../utils/idToUrl";
import { retrieve } from "../utils/retrieve";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Steps = () => {
    const [receiver, setReceiver] = useState(null);
    const [percentage, setPercentage] = useState(1);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = +queryParams.get('id');
        if(id>0) {
            const url = idToUrl(id);
            retrieve(url).then(result=>{
                if(result.data[0]) {
                    const data = result.data[0];
                    let pic = 'https://www.girchi.com/sites/default/files/avatars/2022-09/_1009237373362919.jpg';
                    if(result.included) {
                        pic = 'https://www.girchi.com' + result.included[0].attributes.uri.url;
                    }
                    setReceiver([data, pic]);
                }
            });
        }
    }, []);

    return (
        <form className=" relative w-full max-w-[546px] rounded-lg flex flex-col bg-white mb-8">
            { !receiver && <StepOne setReceiver={setReceiver} />}
            { receiver && <StepTwo receiver={receiver} setReceiver={setReceiver} percentage={percentage} amount={amount} setAmount={setAmount} /> }
        </form>
    );
}
 
export default Steps;
