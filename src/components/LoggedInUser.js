import { getAuthClient } from "../utils/auth";
const auth = getAuthClient();

const LoggedInUser = ({loggedIn, setLoggedIn}) => {
    const data = loggedIn.data;
    let pic = 'https://www.girchi.com/sites/default/files/avatars/2022-09/_1009237373362919.jpg';
    if(loggedIn.included) {
        pic = 'https://www.girchi.com' + loggedIn.included[0].attributes.uri.url;
    }

    const handleClick = () => {
        auth.logout().then(() => {setLoggedIn(false)});
    }

    return (
        <div className="flex justify-between items-center p-4 gap-3 w-full h-12 rounded-full bg-[#F2F6EC]">
            <div className="flex gap-3">
                <img className=" h-6 w-6 rounded-full " src={pic} alt="user profile picture" />
                <h3 className="font-[500] text-[14px] leading-[24px] text-[#292D33] ">
                    { data.attributes.field_first_name } { data.attributes.field_last_name }
                    { !data.attributes.field_first_name && !data.attributes.field_last_name && data.attributes.name}
                </h3>
            </div>
            <button className="flex justify-center items-center bg-secondaryGreen rounded-[32px] cursor-pointer py-2 px-4 ">
                <span onClick={handleClick} className="font-medium text-sm leading-6 tracking-[0.02em] text-white">გასვლა</span>
            </button>
        </div>
    );
}

export default LoggedInUser;
