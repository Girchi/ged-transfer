import { ReactComponent as Bin } from "../images/bin.svg";

const Chosen = (props) => {
    const item = props.chosen[0];
    const pic = props.chosen[1];
    const setChosen = props.setChosen;

    return (
        <div className="bg-[#292d330a] flex flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px]">
            <div className="flex gap-3 items-center">
                <img className="w-10 h-10 rounded-full" src={pic} alt=""/>
                <div className="flex flex-col ">
                    <h4 className="font-normal text-[14px] leading-6 text-[#292D33] " >
                        { item.attributes.field_first_name } { item.attributes.field_last_name }
                        { !item.attributes.field_first_name && !item.attributes.field_last_name && item.attributes.name}
                    </h4>
                    <div className="flex h-5 justify-center items-center gap-2 font-medium text-[12px] text-lightGray leading-6">
                        <p>პ.ნ {item.attributes.field_personal_id ? item.attributes.field_personal_id.substr(0,4) : '****'}*******</p>
                        <p className=" px-1 ">•</p>
                        <p>ID: { item.attributes.drupal_internal__uid }</p>
                    </div>
                </div>
            </div>
            <Bin onClick={() => setChosen(null)} className="cursor-pointer"/>
        </div>
    );
}
 
export default Chosen;
