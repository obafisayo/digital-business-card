import React from 'react'
import QRCode from 'react-qr-code';

const QRcodeComponent = ({ text, link, size }) => {
  return (
    <div className="flex items-center flex-col gap-2">
        <div className='bg-white p-1'>
            <QRCode value={link} size={size} />
        </div>
        {text && <p>Scan QR Code</p>}
    </div>
  )
}

export default QRcodeComponent;
