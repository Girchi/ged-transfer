const Purpose = () => {
    return (
        <div className="flex flex-col gap-1.5">
            <div id="transfer-aim" className="flex items-center mt-6 cursor-pointer ">
                <img src="images/plus-icon.png" alt="" />
                <h3 className="font-medium text-sm ml-[7.33px] leading-4 text-lightGray ">
                    გადარიცხვის დანიშნულება
                </h3>
            </div>
            <textarea
                className="hidden "
                name="textarea"
                maxLength={300}
                defaultValue={""}
            />
        </div>
    );
}
 
export default Purpose;
