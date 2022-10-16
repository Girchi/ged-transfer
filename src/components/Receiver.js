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

    const searchUsers = (searchTerm) => {
        const term = searchTerm.trim();
        if(!term) {
            setList({});
            setProfilePictureList({});
            return;
        }
        const words = term.split(' ');
        let url = '';
        
        if( +term > 0 ) {
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
        } else if (term && words.length === 1) {
            url = 'https://www.girchi.com/jsonapi/user/user?' + new URLSearchParams({
                'include': 'user_picture',
                'filter[orGroup][group][conjunction]': 'OR',
                'filter[display][condition][path]': 'name',
                'filter[display][condition][memberOf]': 'orGroup',
                'filter[display][condition][operator]': 'CONTAINS',
                'filter[display][condition][value]': term,
                'filter[first][condition][path]': 'field_first_name',
                'filter[first][condition][memberOf]': 'orGroup',
                'filter[first][condition][operator]': 'STARTS_WITH',
                'filter[first][condition][value]': term,
                'filter[last][condition][path]': 'field_last_name',
                'filter[last][condition][memberOf]': 'orGroup',
                'filter[last][condition][operator]': 'STARTS_WITH',
                'filter[last][condition][value]': term,
            });
        } else if (words.length > 1) {
            url = 'https://www.girchi.com/jsonapi/user/user?' + new URLSearchParams({
                'include': 'user_picture',
                'filter[orGroupOne][group][conjunction]': 'OR',
                'filter[orGroupTwo][group][conjunction]': 'OR',
                'filter[firstOne][condition][path]': 'name',
                'filter[firstOne][condition][memberOf]': 'orGroupOne',
                'filter[firstOne][condition][operator]': 'CONTAINS',
                'filter[firstOne][condition][value]': words[0],
                'filter[firstTwo][condition][path]': 'field_first_name',
                'filter[firstTwo][condition][memberOf]': 'orGroupOne',
                'filter[firstTwo][condition][operator]': 'STARTS_WITH',
                'filter[firstTwo][condition][value]': words[0],
                'filter[lastOne][condition][path]': 'name',
                'filter[lastOne][condition][memberOf]': 'orGroupTwo',
                'filter[lastOne][condition][operator]': 'CONTAINS',
                'filter[lastOne][condition][value]': words[1],
                'filter[lastTwo][condition][path]': 'field_last_name',
                'filter[lastTwo][condition][memberOf]': 'orGroupTwo',
                'filter[lastTwo][condition][operator]': 'STARTS_WITH',
                'filter[lastTwo][condition][value]': words[1],
            });
        }

        if(url) {
            const retrieved = retrieve(url);
            retrieved.then(result=>{
                setList(result.data);
                setProfilePictureList(result.included);
            });
        }

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
