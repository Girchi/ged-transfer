const Chosen = () => {
    return (
        <div
            id="choosen-div"
            className="bg-[#292d330a] flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer hidden"
        >
            <div className="flex gap-3">
                <img className="w-10 h-10" src="images/profile-picture.png" />
                <div className="flex flex-col ">
                    <h4
                    id="chose"
                    className="font-normal text-[14px] leading-6 text-[#292D33] "
                    />
                    <div className="flex  h-5  justify-center items-center gap-1">
                        <p className="font-medium text-[12px] leading-6 text-lightGray ">
                            პ.ნ 4000535645
                        </p>
                        <img src="images/point.svg" alt="" />
                        <p className="font-medium text-[12px] leading-5 text-lightGray ">
                            ID: 433281
                        </p>
                    </div>
                </div>
            </div>
            <img id="remove_button" src="images/bin.png" alt="" />
        </div>
    );
}
 
export default Chosen;