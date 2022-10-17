import Agree from "./Agree";
import DealType from "./DealType";
import Purpose from "./Purpose";
import Quantity from "./Quantity";
import ToThirdStep from "./ToThirdStep";

const StepTwo = (props) => {
    const data = props.receiver[0];
    const pic = props.receiver[1];
    const setReceiver = props.setReceiver;

    return (
        <div className="page_2 w-full max-w-[546px] rounded-lg p-6 gap-6 flex flex-col bg-white">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold leading-6 text-mainBlack">გადარიცხვა</h1>
                <h2 className="font-medium tracking-[0.02em] text-lightGray">ნაბიჯი 2/3</h2>
            </div>
            <div className="flex justify-between items-center p-4 gap-3 w-full h-12 rounded-[6px] bg-[#292d330a] ">
                <div className="flex gap-3">
                <img className=" h-6 w-6 rounded-full " src={pic} alt="" />
                <h3 className="font-[500] text-[14px] leading-[24px] text-[#292D33] ">
                    { data.attributes.field_first_name } { data.attributes.field_last_name }
                </h3>
                </div>
                <svg onClick={() => setReceiver(null)} className=" cursor-pointer " width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41999 18.5789C1.13948 18.5784 0.872062 18.4601 0.682993 18.2529C0.490439 18.0474 0.394758 17.7694 0.419993 17.4889L0.664993 14.7949L11.983 3.48091L15.52 7.01691L4.20499 18.3299L1.51099 18.5749C1.47999 18.5779 1.44899 18.5789 1.41999 18.5789ZM16.226 6.30991L12.69 2.77391L14.811 0.652906C14.9986 0.465129 15.2531 0.359619 15.5185 0.359619C15.7839 0.359619 16.0384 0.465129 16.226 0.652906L18.347 2.77391C18.5348 2.96147 18.6403 3.216 18.6403 3.48141C18.6403 3.74681 18.5348 4.00134 18.347 4.18891L16.227 6.30891L16.226 6.30991Z" fill="#727A82"/>
                </svg>
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="font-medium flex justify-between  text-[12px] leading-[16px] text-[#292D33]" >
                    გადასარიცხი ჯედების რაოდენობა
                    <span>საკომისიო 1%</span>
                </label>
                <div className="relative">
                    <svg className="absolute right-[14.21px] top-1/2 translate-y-[-50%]" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.313 10.1765H8.47301L8.90301 12.5275H11.227V15.6505C10.495 15.9865 9.67801 16.1205 8.81701 16.1205C6.32301 16.1205 5.11801 14.8785 5.11801 11.2175C5.11801 7.75851 6.96801 6.31451 9.46301 6.31451C10.926 6.31451 11.872 6.65051 13.119 7.38951L15.27 5.64351C14.195 4.90451 12.904 4.33351 11.27 4.06451V0.874512H9.54801V3.89751H9.33301C8.64501 3.89751 7.95601 3.96451 7.31101 4.06451V0.874512H5.59101V4.50151C2.62301 5.50851 0.687012 7.79251 0.687012 11.2175C0.687012 14.8775 2.32201 17.2295 5.50501 18.1355V21.1255H7.22501V18.4715C7.74101 18.5385 8.30101 18.5715 8.86001 18.5715C9.07501 18.5715 9.24701 18.5715 9.46201 18.5385V21.1245H11.182V18.3705C12.645 18.1355 14.065 17.6995 15.312 17.0945V10.1765H15.313Z" fill="#727A82"/>
                    </svg>
                    <Quantity />
                </div>
                <label className=" font-medium text-xs leading-4 text-lightGray ">სულ ჩამოგეჭრება 10 000 000 GeD</label>
            </div>
            
            {/* <DealType /> */}

            {/* <Purpose /> */}

            <div className="w-full h-[1px] bg-bgGray mt-6" />
            <div className="flex items-center w-full h-10 justify-between">
                <Agree />
                <ToThirdStep />
            </div>
        </div>
    );
}
 
export default StepTwo;
