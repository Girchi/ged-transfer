import logo from '../images/logo.svg';
import qrCode from '../images/qrcode.svg';
import LoggedInUser from './LoggedInUser';
import LoginModal from './LoginModal';

const Header = ({loggedIn, setLoggedIn, modalIsOpen, setModalIsOpen, setShowQr}) => {

    return ( 
        <>
            <header className="w-full p-4 bg-white">
                <div className='max-w-[1344px] mx-auto flex items-center justify-between'>
                    <a href="https://www.girchi.com/" className='flex items-center gap-4'>
                        <img src={logo} alt="logo" />
                        <h1 className="font-bold text-2xl leading-[14px] text-mainGreen">გირჩი</h1>
                    </a>
                    <div className="flex gap-8">
                        <ul className="flex items-center gap-6 text-sm">
                            <li><a href="https://www.girchi.com/" >პოლიტიკოსები</a></li>
                            <li><a href="https://www.girchi.com/" >ანალიტიკა</a></li>
                            <li><a href="https://www.girchi.com/" >სიახლეები</a></li>
                            <li><a href="https://www.girchi.com/" >პროექტები</a></li>
                            <li><a href="https://www.girchi.com/" >გაზეთი</a></li>
                        </ul>
                        <div className="flex items-center gap-3">
                            { loggedIn && <LoggedInUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                            { !loggedIn && <button className="flex justify-center items-center bg-secondaryGreen rounded-[32px] cursor-pointer py-2 px-4">
                                <span onClick={() => setModalIsOpen(true)} className="font-medium text-sm leading-6 tracking-[0.02em] text-white">ავტორიზაცია</span>
                            </button>}
                            <button onClick={() => { loggedIn && setShowQr(true)}} className={`${!loggedIn && 'cursor-not-allowed'}
                                flex items-start p-[10.5px] w-10 aspect-square bg-primaryColor rounded-full`}>
                                <img src={qrCode} alt="qr code" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <LoginModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </>
    );
}
 
export default Header;
