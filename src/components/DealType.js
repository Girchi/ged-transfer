const DealType = () => {
    return (
        <div className="mt-6 flex flex-col gap-4">
            <h3 className="font-medium text-sm leading-4 text-lightGray ">გადარიცხვის მიზანი</h3>
            <div className="flex p-1 gap-0.5 w-full h-10 bg-[#292d330a] rounded-lg ">
                <div className="flex  justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className="font-medium text-sm leading-6 text-secondaryGreen cursor-pointer ">გაყიდვა</p>
                </div>
                <div className="flex  justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className="font-medium text-sm leading-6 text-lightGray cursor-pointer " >ნივთის ყიდვა</p>
                </div>
                <div className="flex  justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className="font-medium text-sm leading-6 text-lightGray cursor-pointer " >გაჩუქება</p>
                </div>
            </div>
            <div id="price" className="relative">
                <img
                    className="absolute right-[14.21px] top-1/2 translate-y-[-50%]"
                    src="images/gel-icon.png"
                    alt=""
                />
                <input 
                    className=" flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray rounded-md 
                    w-full h-11 box-border   placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray "
                    type="text"
                    placeholder="რამდენ ლარად გაყიდე? მაგ: 10 000 ₾"
                    name="price"
                    required
                />
            </div>
            <div className=" hidden" id="item-name">
                <img
                    className="absolute right-[14.21px] top-1/2 translate-y-[-50%]"
                    src="images/buy-icon.png"
                    alt=""
                />
                <input
                    className=" flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray 
                    rounded-md w-full h-11 box-border   placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray "
                    type="text"
                    placeholder="ნივთის სახელი"
                    name="itemName"
                />
            </div>
        </div>
    );
}
 
export default DealType;
