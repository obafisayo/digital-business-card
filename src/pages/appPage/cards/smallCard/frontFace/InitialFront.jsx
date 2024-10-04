import React, { useRef, useEffect } from 'react';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';

const InitialFront = ({ person, html, removeFlip }) => {
    const frontRef = useRef(null);

    useEffect(() => {
        if (frontRef.current) {
            frontRef.current.innerHTML = html;
        }
    }, [html]);

    return (
        <div 
            className={`${removeFlip? "" : "absolute [backface-visibility:hidden]"} inset-0 h-full w-full rounded-xl`}
            style={{
                backgroundImage: `url(${person.cardFront})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div ref={frontRef}></div>
            <div className={person.qrcodeClass}>
                <QRcodeComponent link={person.link} size={50} />
            </div>
        </div>
    );
}

export default InitialFront;
