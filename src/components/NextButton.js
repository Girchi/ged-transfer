const NextButton = ({ goodToGo, handleClick }) => {
    let bgColor = "bg-[#727a8229]";
    let txtColor = "text-lightGray";
    let cursor = "cursor-not-allowed";

    if (goodToGo) {
        bgColor = "bg-secondaryGreen";
        txtColor = "text-white";
        cursor = "cursor-pointer";
    }

    return (
        <div onClick={handleClick} className={
            `flex justify-center ml-auto items-center py-2 px-4 gap-1 w-[111px] h-10 
            rounded-[32px] ${bgColor} ${txtColor} ${cursor}`
        }>
            <p className=" font-medium text-sm leading-6 tracking-[0.02em]">შემდეგი</p>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.09424 6.00003L2.08507 0.991699L0.906738 2.17003L4.74007 6.00337L0.906738 9.83087L2.08507 11.0092L7.09424 6.00003Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default NextButton;
