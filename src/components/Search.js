import { useEffect } from "react";
import { retrieve } from "../utils/retrieve";
import { termToUrl } from "../utils/termToUrl";

const Search = (props) => {
    const search = props.search;
    const setSearch = props.setSearch;
    const setList = props.setList;
    const setProfilePictureList = props.setProfilePictureList;

    useEffect(() => {
        const timeOutId = setTimeout(() => searchUsers(search), 500);
        return () => clearTimeout(timeOutId);
    }, [search]);

    const searchUsers = (searchTerm) => {
        const term = searchTerm.trim();
        if(!term) {
            setList({});
            setProfilePictureList({});
            return;
        }
        const url = termToUrl(term);
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
            className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray 
            rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
            type="text"
            placeholder="სახელი-გვარი / პირადი ნომერი / მომხმარებლის ID"
            name="userName"
            required
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}
 
export default Search;
