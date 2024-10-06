import React, { useState } from "react";
import { RxCardStackPlus } from "react-icons/rx";
import CardLinks from "../links/CardLinks";
import CompanyInfo from "../companyInfo/CompanyInfo";
import WhatsappButton from "../../../../../components/secondaryButtons/WhatsappButton";
import { PiShareFat } from "react-icons/pi";
import Share from "../share/Share";
import Mediadisplay from "../../../../../components/mediadisplay/Mediadisplay";

const isValidColor = (color) => {
  const option = new Option().style;
  option.color = color;
  return option.color !== "";
};

const isValidGradient = (gradient) => {
  return /^linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/.test(
    gradient
  );
};

const BackFace = ({ person, removeFlip }) => {
  const [shareClicked, setShareClicked] = useState(false);

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
          <Mediadisplay arr={person.images} handler={handleCancel} />
          <div className="flex justify-between items-end w-full mt-3">
            <CardLinks socials={person.socials} />
            <WhatsappButton
              link={person.socials.whatsapp}
              title={"Send Message"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackFace;
