const Agree = () => {
    return (
        <div className="flex justify-between gap-[11px]">
            <div className="relative z-3">
                <i id="check" className="hidden z-1" />
                <input
                    className="z-3 flex items-center justify-center appearance-none w-[18px] h-[18px] border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer"
                    type="checkbox"
                    name="checkbox"
                    required
                />
            </div>
            <label className=" font-medium text-sm leading-4 text-lightGray">
                ვეთანხმები{" "}
                <a href="#">
                    <span className="text-[#4D73FA] cursor-pointer ">
                        გირჩის კონსტიტუციას
                    </span>
                </a>
            </label>
        </div>
    );
}
 
export default Agree;
