import { useEffect } from "react";

const Receiver = (props) => {
    const receiver = props.receiver;
    const setReceiver = props.setReceiver;
    const setList = props.setList;
    const setProfilePictureList = props.setProfilePictureList;

    useEffect(() => {
        const timeOutId = setTimeout(() => searchUsers(receiver), 500);
        return () => clearTimeout(timeOutId);
    }, [receiver]);

    const searchUsers = (term) => {

        async function retrieve(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.error) {
                    console.log('Error retrieving data', data);
                    return false;
                }
                return data;
            }
            catch (err) {
                return console.log('API got an error', err);
            }
        }

        let url = '';
        if(typeof +term === 'number') {
            url = 'https://www.girchi.com/jsonapi/user/user?' + new URLSearchParams({
                'include': 'user_picture',
                'filter[orGroup][group][conjunction]': 'OR',
                'filter[first][condition][path]': 'drupal_internal__uid',
                'filter[first][condition][memberOf]': 'orGroup',
                'filter[first][condition][operator]': '=',
                'filter[first][condition][value]': term,
                'filter[last][condition][path]': 'field_personal_id',
                'filter[last][condition][memberOf]': 'orGroup',
                'filter[last][condition][operator]': '=',
                'filter[last][condition][value]': term,
            });
        } // add search by letters here

        if(url) {
            const retrieved = retrieve(url);
            retrieved.then(result=>{
                setList(result.data);
                setProfilePictureList(result.included);
            });
        }

    }

    return (
        <input
            className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray rounded-md 
                    h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
            type="text"
            placeholder="სახელი-გვარი / პირადი ნომერი / მომხმარებლის ID"
            name="userName"
            required
            value={receiver}
            onChange={e => setReceiver(e.target.value)}
        />
    );
}
 
export default Receiver;
