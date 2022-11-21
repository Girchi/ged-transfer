import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { checkTokenAndGetUserInfo } from '../utils/checkTokenAndGetUserInfo';
import { emailToUsername } from '../utils/emailToUsername';
import { getAuthClient } from "../utils/auth";
const auth = getAuthClient();

export default function LoginModal({modalIsOpen, setModalIsOpen, setLoggedIn}) {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [wait, setWait] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        setWait(true);
        let username = usernameOrEmail;
        if(usernameOrEmail.indexOf('@') !== -1) {
            username = await emailToUsername(usernameOrEmail)
                .catch(err => {setError(err)});
        }
        if(username && password) {
            auth.login(username, password).then(() => {
                checkTokenAndGetUserInfo().then(result => {
                    setLoggedIn(result);
                    setModalIsOpen(false);
                    setUsernameOrEmail('');
                    setPassword('');
                    setError(false);
                    setWait(false);
                })
            })
            .catch(err => {
                if(err.message === 'Error retrieving OAuth token: invalid_credentials') {
                    setError('არასწორი სახელი/მეილი ან პაროლი');
                    setWait(false);
                } else {
                    setError('მოხდა შეცდომა');
                    setWait(false);
                }
            });
        }
    };

    if(!modalIsOpen) return null;
    return ReactDom.createPortal(
        <>
            <div className='fixed inset-0 bg-[#000A] z-30'/>
            { wait && <div className='fixed inset-0 z-50 cursor-wait'/>}
            <div className='fixed inset-2/4 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-40 w-full h-full max-w-[546px] max-h-[340px] rounded-lg mb-8'>
                <form className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold leading-6 text-mainBlack">ავტორიზაცია</h1>
                    <input
                        className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray 
                        rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
                        type="text"
                        placeholder="მომხმარებლის სახელი / მეილი"
                        name="username"
                        required
                        value={usernameOrEmail}
                        onChange={e => setUsernameOrEmail(e.target.value)}
                    />
                    <input
                        className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray 
                        rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
                        type="password"
                        placeholder="პაროლი"
                        name="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    { error && <div className='text-red-500 text-sm absolute top-52'> 
                        {error}
                    </div> }
                    <div className="w-full h-[1px] bg-bgGray mt-6"/>
                    <div className='flex items-center w-full h-10 justify-between'>
                        <div onClick={() => setModalIsOpen(false)} className=" font-medium text-sm leading-4 text-lightGray cursor-pointer" >დახურვა</div>
                        <button onClick={e => handleClick(e)} className='flex justify-center ml-auto items-center 
                            py-2 px-4 gap-1 w-[111px] h-10 rounded-[32px] bg-secondaryGreen text-white cursor-pointer'>
                            <p className=" font-medium text-sm leading-6 tracking-[0.02em]">ავტორიზაცია</p>
                        </button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}
