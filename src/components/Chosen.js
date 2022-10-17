const Chosen = (props) => {
    const item = props.chosen[0];
    const pic = props.chosen[1];
    const setChosen = props.setChosen;

    return (
        <div className="bg-[#292d330a] flex flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px]">
            <div className="flex gap-3">
                <img className="w-10 h-10 rounded-full" src={pic} />
                <div className="flex flex-col ">
                    <h4 className="font-normal text-[14px] leading-6 text-[#292D33] " >
                        { item.attributes.field_first_name } { item.attributes.field_last_name }
                    </h4>
                    <div className="flex h-5 justify-center items-center gap-2 font-medium text-[12px] text-lightGray leading-6">
                        <p>პ.ნ {item.attributes.field_personal_id ? item.attributes.field_personal_id.substr(0,4) : '****'}*******</p>
                        <p className=" px-1 ">•</p>
                        <p>ID: { item.attributes.drupal_internal__uid }</p>
                    </div>
                </div>
            </div>
            <svg onClick={() => setChosen(null)} className=" cursor-pointer " width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6Z" fill="#727A82"/>
            </svg>
        </div>
    );
}
 
export default Chosen;
