import { useEffect, useState } from "react";
import { retrieve } from "../utils/retrieve";
import { termToUrl } from "../utils/termToUrl";

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
            />
            { search && <svg onClick={() => setSearch('')} className="absolute right-[42px] top-[120px] cursor-pointer" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="#292D33"/>
            </svg>}
        </>
    );
}
 
export default Search;
