import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { generateHtmlString } from '../../../../../config/userConfig';
import QRcodeComponent from '../../../../../components/qrcode/QRcodeComponent';

const InitialFront = ({ person, html }) => {
    const frontRef = useRef(null);

    useEffect(() => {
        if (frontRef.current) {
            // Generate HTML string for the front face based on the person prop
            // frontRef.current.innerHTML = generateHtmlString(person);
            frontRef.current.innerHTML = html;
        }
    }, [html]);

    return (
        <motion.div 
            className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]"
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
        </motion.div>
    );
}

export default InitialFront;