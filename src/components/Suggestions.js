import point from '../images/point.svg';
import picture from '../images/profile-picture.png'; // need another default picture

const Suggestions = (props) => {
    const list = props.list;
    const profilePictureList = props.profilePictureList;
    const checkPicture = id => {
        return 'https://www.girchi.com' + profilePictureList.filter(item => item.id===id)[0].attributes.uri.url;
    }

    return (
        <div className="relative">
            <div className=" absolute overflow-scroll overflow-x-hidden flex-col items-center p-1.5  w-full  max-h-[284px] bg-white border-solid border-[1px] border-[#F2F2F2] rounded-md " >
                { list && list.map(item => (
                    <div key={item.id} className="flex flex-row items-center px-[12px] py-[8px] gap-3 w-full min-h-[68px]  rounded-[4px] cursor-pointer ">
                        <img className="w-10 h-10" src={ item.relationships.user_picture.data ? checkPicture(item.relationships.user_picture.data.id) : picture } />
                        <div className="flex flex-col">
                            <h4 className="font-normal text-[14px] leading-6 text-[#292D33] ">
                                { item.attributes.field_first_name } { item.attributes.field_last_name }
                            </h4>
                            <div className="flex h-5 w-full justify-center items-center gap-1">
                            <p className="font-medium text-[12px] leading-6 text-lightGray ">
                                პ.ნ {item.attributes.field_personal_id ? item.attributes.field_personal_id.substr(0,4) : '****'}*******
                            </p>
                            <img src={point} alt="" />
                            <p className="font-medium text-[12px] leading-5 text-lightGray ">
                                ID: { item.attributes.drupal_internal__uid }
                            </p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}
 
export default Suggestions;