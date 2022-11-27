import React from 'react';
import ReactDom from 'react-dom';
import QRCode from "react-qr-code";

export default function QrModal({urlToCopy, setShowQr}) {
    return ReactDom.createPortal(
        <>
            <div className='fixed inset-0 bg-[#000A] z-30'/>
            <div className='fixed inset-2/4 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-40 w-full h-full max-w-[320px] max-h-[420px] rounded-lg mb-8'>
                <div className="flex flex-col gap-6">
                    <div className='mx-auto'>
                        <QRCode value={urlToCopy} />
                    </div>
                    <div className="w-full h-[1px] bg-bgGray mt-2"/>
                    <button onClick={() => setShowQr(false)} className='mx-auto
                        py-2 px-4 gap-1 w-[111px] h-10 rounded-[32px] bg-secondaryGreen text-white cursor-pointer'>
                        <p className=" font-medium text-sm leading-6 tracking-[0.02em]">დახურვა</p>
                    </button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
