import React, { useEffect, useState } from "react";
import { RxCardStackPlus } from "react-icons/rx";
import CardLinks from "../links/CardLinks";
import CompanyInfo from "../companyInfo/CompanyInfo";
import WhatsappButton from "../../../../../components/secondaryButtons/WhatsappButton";
import { PiShareFat } from "react-icons/pi";
import Share from "../share/Share";
import Mediadisplay from "../../../../../components/mediadisplay/Mediadisplay";

const BackFace = ({ person, removeFlip }) => {
    const [shareClicked, setShareClicked] = useState(false);
    const [cardArray, setCardArray] = useState([]);

    useEffect(() => {
        const namesArray = person.images?.map(item => item.name) || [];
        setCardArray(namesArray);
    }, [person]);

    const isValidColor = (color) => {
        const option = new Option().style;
        option.color = color;
        return option.color !== "";
    };

    const isValidGradient = (gradient) => {
        return /^linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/.test(gradient);
    };

    const handleCancel = () => {
        setShareClicked(false);
    };

    let backgroundStyle = {};
    if (isValidGradient(person.cardFront)) {
        backgroundStyle = { backgroundImage: person.cardBack };
    } else if (isValidColor(person.cardFront)) {
        backgroundStyle = { backgroundColor: person.cardBack };
    } else {
        backgroundStyle = { backgroundImage: `url(${person.cardBack})` };
    }

    return (
        <div
            className={`${
                removeFlip
                    ? "relative"
                    : "absolute [transform:rotateY(180deg)] [backface-visibility:hidden]"
            } inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200`}
            style={{
                ...backgroundStyle,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex min-h-full flex-col p-4 justify-between">
                <div className="flex justify-between">
                    <CompanyInfo person={person} />
                    <div className="flex">
                        <div className="scale-90 rounded-full h-fit p-[6px] bg-transparent hover:bg-white hover:text-black">
                            <RxCardStackPlus size={20} />
                        </div>
                        <div
                            className="scale-90 rounded-full h-fit p-2 bg-transparent hover:bg-white hover:text-black"
                            onClick={() => setShareClicked(true)}
                        >
                            <PiShareFat size={18} />
                        </div>
                        {shareClicked && (
                            <Share link={person.link} handler={handleCancel} />
                        )}
                    </div>
                </div>
                <div>
                    {cardArray.length > 0 && (
                        <Mediadisplay arr={cardArray} handler={handleCancel} />
                    )}
                    <div className="flex justify-between items-end w-full mt-3">
                        <CardLinks socials={person.socials} />
                        <WhatsappButton
                            number={person.whatsapp_number}
                            title={"Send Message"}
                            message={"Can I get more information about your business and services"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackFace;
