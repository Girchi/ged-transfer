const Suggestions = () => {
    return (
        <div id="matchList-div" className="relative">
            <div
                className=" absolute overflow-scroll overflow-x-hidden hidden flex-col items-center p-1.5  w-full  max-h-[284px] bg-white 
                        border-solid border-[1px] border-[#F2F2F2] rounded-md "
                id="match-list"
            >
            </div>
        </div>
    );
}
 
export default Suggestions;