import { useEffect, useState } from "react";
import { retrieve } from "../utils/retrieve";
import { termToUrl } from "../utils/termToUrl";
import { ReactComponent as X } from "../images/x.svg";

const Search = ({setList, setProfilePictureList}) => {
    const [search, setSearch] = useState("");
    const [wait, setWait] = useState(false);
    
    useEffect(() => {
        const searchUsers = searchTerm => {
            const term = searchTerm.trim();
            if (!term) {
                setList({});
                setProfilePictureList({});
                return;
            }
            setWait(true);
            const url = termToUrl(term);
            if (url) {
                const retrieved = retrieve(url);
                retrieved.then(result => {
                    setList(result.data);
                    setProfilePictureList(result.included);
                    setWait(false);
                });
            }
        };

        const timeOutId = setTimeout(() => searchUsers(search), 500);
        return () => clearTimeout(timeOutId);
    }, [search, setList, setProfilePictureList, setWait]);

    return (
        <>
            { wait && <div className='fixed inset-0 z-40 cursor-wait'/>}
            <input
                className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid 
                border border-bgGray rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
                type="text"
                placeholder="სახელი-გვარი / პირადი ნომერი / მომხმარებლის ID"
                name="userName"
                required
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyPress={e => { e.key === 'Enter' && e.preventDefault() }}
            />
            { search && <X onClick={() => setSearch('')} className="absolute right-[42px] top-[120px] cursor-pointer"/> }
        </>
    );
}
 
export default Search;
