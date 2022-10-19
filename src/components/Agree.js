const Agree = (props) => {
    const agree = props.agree;
    const setAgree = props.setAgree;

    return (
        <div className="flex justify-between gap-[11px]">
            <div onClick={() => setAgree(!agree)} className="relative z-3 cursor-pointer">
                { !agree && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="16" height="16" rx="2" stroke="#727A82" strokeOpacity="0.32" strokeWidth="2"/>
                </svg>}
                { agree && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="3" fill="#1A8917"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7 6.3C12.3 5.9 11.7 5.9 11.3 6.3L8 9.6L6.7 8.3C6.3 7.9 5.7 7.9 5.3 8.3C4.9 8.7 4.9 9.3 5.3 9.7L7.3 11.7C7.5 11.9 7.7 12 8 12C8.3 12 8.5 11.9 8.7 11.7L12.7 7.7C13.1 7.3 13.1 6.7 12.7 6.3Z" fill="white"/>
                </svg>}
            </div>
            <label className=" font-medium text-sm leading-4 text-lightGray">
                ვეთანხმები <a className="text-[#4D73FA]" href="https://www.girchi.com/ge/media/news/girchis-konstitutsiis-shesakheb" target='_blank' >გირჩის კონსტიტუციას</a>
            </label>
        </div>
    );
}
 
export default Agree;
