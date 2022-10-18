const DealType = (props) => {
    const dealType = props.dealType;
    const setDealType = props.setDealType;
    const price = props.price;
    const setPrice = props.setPrice;
    const boughtItem = props.boughtItem;
    const setBoughtItem = props.setBoughtItem;

    return (
        <div className="mt-6 flex flex-col gap-4">
            <h3 className=" text-left font-medium text-sm leading-4 text-lightGray ">გადარიცხვის მიზანი</h3>
            <div className="flex p-1 gap-0.5 w-full h-10 bg-[#292d330a] rounded-lg ">
                <div onClick={() => setDealType('გაყიდვა')} className="flex justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className={`font-medium text-sm leading-6 cursor-pointer ${ dealType==='გაყიდვა' ? 'text-secondaryGreen' : 'text-lightGray' }`}>
                        გაყიდვა
                    </p>
                </div>
                <div onClick={() => setDealType('ნივთის ყიდვა')} className="flex justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className={`font-medium text-sm leading-6 cursor-pointer ${ dealType==='ნივთის ყიდვა' ? 'text-secondaryGreen' : 'text-lightGray' }`}>
                        ნივთის ყიდვა
                    </p>
                </div>
                <div onClick={() => setDealType('გაჩუქება')} className="flex justify-center items-center p-1 gap-2.5 w-1/3 h-8 bg-white rounded-[4px] ">
                    <p className={`font-medium text-sm leading-6 cursor-pointer ${ dealType==='გაჩუქება' ? 'text-secondaryGreen' : 'text-lightGray' }`}>
                        გაჩუქება
                    </p>
                </div>
            </div>
            { dealType==='გაყიდვა' && (
                <div className="relative">
                    <svg className="absolute right-[14.21px] top-1/2 translate-y-[-50%]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.996985 13.643H2.79699C1.95698 13.163 1.29698 12.503 0.816985 11.663C0.336985 10.823 0.0969849 9.82097 0.0969849 8.65697C0.0969849 7.14497 0.522985 5.83697 1.37498 4.73297C2.22698 3.61697 3.36099 2.85497 4.77699 2.44697V0.214966H6.19899V2.17697C6.55899 2.15297 6.83499 2.14097 7.02699 2.14097C7.20699 2.14097 7.47699 2.15297 7.83699 2.17697V0.214966H9.27699V2.46497C10.681 2.88497 11.803 3.67697 12.643 4.84097C13.483 5.99297 13.903 7.39697 13.903 9.05297H11.257C11.257 7.99697 11.083 7.12697 10.735 6.44297C10.399 5.74697 9.91299 5.22497 9.27699 4.87697V9.05297H7.83699V4.42697C7.58499 4.39097 7.31499 4.37297 7.02699 4.37297C6.75099 4.37297 6.47499 4.39097 6.19899 4.42697V9.05297H4.77699V4.85897C4.12899 5.20697 3.63099 5.71697 3.28299 6.38897C2.93499 7.06097 2.76099 7.90697 2.76099 8.92697C2.76099 9.83897 2.95299 10.637 3.33699 11.321C3.73299 11.993 4.28499 12.509 4.99299 12.869C5.70099 13.229 6.51098 13.409 7.42299 13.409H13.129V15.785H0.996985V13.643Z" fill="#727A82"/>
                    </svg>
                    <input
                        className=" flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray rounded-md 
                        w-full h-11 box-border placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray "
                        type="text"
                        placeholder="რამდენ ლარად გაყიდე? მაგ: 10 000 ₾"
                        name="price"
                        required
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
            )}
            { dealType === 'ნივთის ყიდვა' && (
                <div className=" relative " id="item-name">
                    <svg className="absolute right-[14.21px] top-1/2 translate-y-[-50%]" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1666 14C13.2499 14 12.5083 14.75 12.5083 15.6667C12.5083 16.5834 13.2499 17.3334 14.1666 17.3334C15.0833 17.3334 15.8333 16.5834 15.8333 15.6667C15.8333 14.75 15.0833 14 14.1666 14ZM5.83325 14C4.91658 14 4.17492 14.75 4.17492 15.6667C4.17492 16.5834 4.91658 17.3334 5.83325 17.3334C6.74992 17.3334 7.49992 16.5834 7.49992 15.6667C7.49992 14.75 6.74992 14 5.83325 14ZM5.83325 11.5L6.74992 9.83335H12.9583C13.5833 9.83335 14.1333 9.49169 14.4166 8.97502L18.0833 2.33335H4.34159L3.55825 0.666687H0.833252V2.33335H2.49992L5.49992 8.65835L3.01659 13.1667H15.8333V11.5H5.83325Z" fill="#727A82"/>
                    </svg>
                    <input
                        className=" flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray 
                        rounded-md w-full h-11 box-border   placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray "
                        type="text"
                        placeholder="ნივთის სახელი"
                        name="itemName"
                        value={boughtItem}
                        onChange={e => setBoughtItem(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}
 
export default DealType;
