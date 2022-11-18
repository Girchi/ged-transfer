const Suggestions = (props) => {
    const noPicture = 'https://www.girchi.com/sites/default/files/avatars/2022-09/_1009237373362919.jpg';
    const list = props.list;
    const profilePictureList = props.profilePictureList;
    const setChosen = props.setChosen;
    const setList = props.setList;
    const setProfilePictureList = props.setProfilePictureList;
    const checkPicture = id => {
        const filtered = profilePictureList.filter(item => item.id===id)[0];
        if(filtered) {
            return 'https://www.girchi.com' + filtered.attributes.uri.url;
        } else {
            return noPicture;
        }
    }

    const handleClick = (item, pic) => {
        setChosen([item, pic]);
        setList(null);
        setProfilePictureList(null);
    }

    return (
        <div className="relative">
            <div className="absolute overflow-scroll overflow-x-hidden flex-col items-center p-1.5 w-full
                max-h-[284px] bg-white border-solid border-[1px] border-[#F2F2F2] rounded-md">
                { list && list.map(item => {
                    const pic = item.relationships && item.relationships.user_picture.data ? checkPicture(item.relationships.user_picture.data.id) : noPicture;
                    return (
                        <div onClick={()=>handleClick(item, pic)} key={item.id} className="flex flex-row items-center 
                            px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer hover:bg-[#292d330a]">
                            <img className="w-10 h-10 rounded-full" src={ pic } />
                            <div className="flex flex-col">
                                <h4 className="font-normal text-[14px] leading-6 text-[#292D33]">
                                    { item.attributes.field_first_name } { item.attributes.field_last_name }
                                    { !item.attributes.field_first_name && !item.attributes.field_last_name && item.attributes.name}
                                </h4>
                                <div className="flex h-5 w-full justify-center items-center gap-1 font-medium text-[12px] leading-6 text-lightGray">
                                    <p>პ.ნ {item.attributes.field_personal_id ? item.attributes.field_personal_id.substr(0,4) : '****'}*******</p>
                                    <p className="px-1">•</p>
                                    <p>ID: { item.attributes.drupal_internal__uid }</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Suggestions;
