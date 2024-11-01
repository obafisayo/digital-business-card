import React, { useRef, useEffect, useState } from 'react';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';


const InitialFront = ({ person, html, removeFlip }) => {
    const frontRef = useRef(null);
    const [qrlink, setQrlink] = useState("http://localhost:3000/app/cards")
    
    const isValidColor = (color) => {
        const option = new Option().style;
        option.color = color;
        return option.color !== '';
    };
    
    const isValidGradient = (gradient) => {
        return /^linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/.test(gradient);
    };
    useEffect(() => {
        if (person.link) {
            setQrlink(person.link)
        }
    }, [person])
    useEffect(() => {
        if (frontRef.current) {
            frontRef.current.innerHTML = html;
        }
    }, [html]);

    let backgroundStyle = {};
    if (isValidGradient(person.cardFront)) {
        backgroundStyle = { backgroundImage: person.cardFront };
    } else if (isValidColor(person.cardFront)) {
        backgroundStyle = { backgroundColor: person.cardFront };
    } else {
        backgroundStyle = { backgroundImage: `url(${person.cardFront})` };
    }

    return (
        <div 
            className={`${removeFlip ? "" : "absolute [backface-visibility:hidden]"} inset-0 h-full w-full rounded-xl`}
            style={{
                ...backgroundStyle,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div ref={frontRef}></div>
            {person.qrcodeClass && <div className={person.qrcodeClass}>
                <QRcodeComponent link={qrlink} size={50} />
            </div>}
        </div>
    );
};

export default InitialFront;
