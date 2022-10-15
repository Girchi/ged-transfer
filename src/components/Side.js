const Side = () => {
    return (
        <div className="flex flex-col p-7 gap-6 w-full h-[263px] max-w-[318px] bg-white rounded-lg">
        <div className="banalsi1 flex items-center justify-between">
            <div>
            <h1 className="font-bols text-xl leading-6 " id="id">
                150 780 060
            </h1>
            <h3 className="font-medium text-sm leading-6 text-lightGray">
                შენი ბალანსი
            </h3>
            </div>
            <div className="flex justify-center items-center p-4 gap-2.5 w-12 aspect-square bg-[#F2F6EC] rounded-lg">
            <img className="" src="images/ged-icon-green.png" alt="" />
            </div>
        </div>
        <hr className="bg-bgGray" />
        <div className="flex gap-2">
            <div>
            <p className="font-semibold text-sm leading-4 text-mainBlack">
                1 GeD = 32₾
            </p>
            </div>
            <img src="images/coolicon2.png" alt="" />
        </div>
        <div className="flex flex-col gap-1.5">
            <p className="font-medium text-xs leading-4 text-lightGray">
            გადააკოპირე და გაუზიარე სხვას
            </p>
            <div className="flex items-center gap-2">
            <div
                id="copytext-div"
                className="group cursor-pointer flex justify-between items-center px-3 py-3.5  w-[80.1%] h-11 bg-white 
                        border border-bgGray rounded-md"
            >
                <p
                className="cursor-pointer overflow-hidden text-ellipsis h-4 font-medium text-sm leading-4 border-none outline-none text-lightGray"
                id="copyedtext"
                >
                https://userId.com/s...
                </p>
                <div className="">
                <span
                    id="span"
                    className="invisible group-hover:visible  absolute text-white  rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-2.5 -translate-y-9"
                >
                    <p
                    id="copytext"
                    className="font-medium text-xs leading-5 text-whitebg-white "
                    >
                    გადაკოპირება
                    </p>
                    <span className=" absolute  w-[8px] h-[8px] rotate-45 ml-[50%]  translate-x-[-14px] bg-[#292d33e6]" />
                </span>
                <img
                    id="copytext-icon"
                    className="w-5 h-5 cursor-pointer "
                    src="images/copyicon.png"
                    alt=""
                />
                <img
                    id="checkmark-icon"
                    className="w-[14px] h-[14px] mr-[3px] cursor-pointer hidden"
                    src="images/check-mark.png"
                    alt=""
                />
                </div>
            </div>
            <div className="flex items-center justify-center w-11 aspect-square bg-[#F3F3F4] rounded-md">
                <img src="./images/QR-code.png" />
            </div>
            </div>
        </div>
        </div>

    );
}
 
export default Side;