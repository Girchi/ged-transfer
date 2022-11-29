import { ReactComponent as Gel } from "../images/gel.svg";
import { ReactComponent as Cart } from "../images/cart.svg";
import { NumericFormat } from 'react-number-format';

const DealType = ({dealType, setDealType, setPrice, boughtItem, setBoughtItem}) => {
    return (
        <div className="mt-6 flex flex-col gap-4">
            <h3 className="font-medium text-sm leading-4 text-lightGray">გადარიცხვის მიზანი</h3>
            <div className="flex p-1 gap-0.5 w-full h-10 bg-[#292d330a] rounded-lg">
                <div onClick={() => setDealType('გაყიდვა')} className={`flex justify-center items-center p-1 gap-2.5 
                    w-1/3 h-8 rounded-[4px] ${ dealType==='გაყიდვა' ? 'text-secondaryGreen bg-white' : 'text-lightGray' }`}>
                    <p className='font-medium text-sm leading-6 cursor-pointer'>გაყიდვა</p>
                </div>
                <div onClick={() => setDealType('ნივთის ყიდვა')} className={`flex justify-center items-center p-1 gap-2.5 
                    w-1/3 h-8 rounded-[4px] ${ dealType==='ნივთის ყიდვა' ? 'text-secondaryGreen bg-white' : 'text-lightGray' }`}>
                    <p className='font-medium text-sm leading-6 cursor-pointer'>ნივთის ყიდვა</p>
                </div>
                <div onClick={() => setDealType('გაჩუქება')} className={`flex justify-center items-center p-1 gap-2.5 
                    w-1/3 h-8 rounded-[4px] ${ dealType==='გაჩუქება' ? 'text-secondaryGreen bg-white' : 'text-lightGray' }`}>
                    <p className='font-medium text-sm leading-6 cursor-pointer'>გაჩუქება</p>
                </div>
            </div>
            { dealType==='გაყიდვა' && (
                <div className="relative">
                    <Gel className="absolute right-[14.21px] top-1/2 translate-y-[-50%]"/>
                    <NumericFormat
                        className="flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray rounded-md 
                        w-full h-11 box-border placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray"
                        thousandSeparator=" " 
                        placeholder="რამდენ ლარად გაყიდე? მაგ: 10 000 ₾"
                        name="price"
                        required
                        onValueChange={values => {setPrice(values.value)}}
                    />
                </div>
            )}
            { dealType === 'ნივთის ყიდვა' && (
                <div className="relative">
                    <Cart className="absolute right-[14.21px] top-1/2 translate-y-[-50%]"/>
                    <input
                        className="flex justify-between items-center p-2.5 gap-2 bg-white border-solid border-[1px] border-bgGray 
                        rounded-md w-full h-11 box-border placeholder:font-medium placeholder:text-sm placeholder:leading-4px placeholder:text-lightGray"
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
