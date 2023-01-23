import logo from '../images/logo.svg';
import qrCode from '../images/qrcode.svg';
import LoggedInUser from './LoggedInUser';
import { login } from '../utils/login';

const Header = ({loggedIn, setLoggedIn, setShowQr}) => {

    return ( 
        <>
            <header className="h-[72px] flex flex-col justify-center p-4 bg-white shadow-big">
                <div className='w-full max-w-[1344px] mx-auto flex items-center justify-between'>
                    <a href="/" className='flex items-center gap-4'>
                        <img src={logo} alt="logo" />
                        <h1 className={`${loggedIn && 'hidden'} sm:block font-bold text-2xl leading-[14px] text-mainGreen`}>გირჩი</h1>
                    </a>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-3">
                            { loggedIn && <LoggedInUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                            { !loggedIn && <button className="flex justify-center items-center bg-secondaryGreen rounded-[32px] cursor-pointer py-2 px-4">
                                <span onClick={() => login(setLoggedIn)}  className="font-medium text-sm leading-6 tracking-[0.02em] text-white">ავტორიზაცია</span>
                            </button>}
                            <button onClick={() => { loggedIn && setShowQr(true)}} className={`${!loggedIn && 'cursor-not-allowed'}
                                flex items-start p-[10.5px] w-10 aspect-square bg-primaryColor rounded-full`}>
                                <img src={qrCode} alt="qr code" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;
