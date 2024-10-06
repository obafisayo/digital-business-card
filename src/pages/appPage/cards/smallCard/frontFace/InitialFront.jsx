import React, { useRef, useEffect } from 'react';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';

const isValidColor = (color) => {
    const option = new Option().style;
    option.color = color;
    return option.color !== '';
};

const isValidGradient = (gradient) => {
    return /^linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/.test(gradient);
};

const InitialFront = ({ person, html, removeFlip }) => {
    const frontRef = useRef(null);

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
            <div className={person.qrcodeClass}>
                <QRcodeComponent link={person.link} size={50} />
            </div>
        </div>
    );
};

export default InitialFront;
