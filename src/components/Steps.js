import { useEffect, useState } from "react";
import { idToUrl } from "../utils/idToUrl";
import { retrieve } from "../utils/retrieve";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Steps = ({loggedIn, setModalIsOpen}) => {
    const [receiver, setReceiver] = useState(null);
    const [percentage, setPercentage] = useState(1);
    const [amount, setAmount] = useState('');
    const [transferRequest, setTransferRequest] = useState(null);

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
            { receiver && !transferRequest && <StepTwo 
                loggedIn={loggedIn} data={receiver[0]} pic={receiver[1]} setReceiver={setReceiver} 
                percentage={percentage} amount={amount} setAmount={setAmount} setModalIsOpen={setModalIsOpen}
                setTransferRequest={setTransferRequest}
            /> }
            { transferRequest && <StepThree transferRequest={transferRequest} />}
        </form>
    );
}
 
export default Steps;
