import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackFace from './backFace/BackFace';
import InitialFront from './frontFace/InitialFront';

const SmallCard = ({ person, html, removeFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (removeFlip) {
    return (
      <div className="h-56 w-96">
        <InitialFront person={person} html={html} removeFlip={removeFlip} />
        <div className="h-2"></div>
        <BackFace person={person} removeFlip={removeFlip} />
      </div>
    );
  }

  return (
    <div className="h-56 w-96 [perspective:1000px]">
      <motion.div 
        className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
        onClick={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <InitialFront person={person} html={html} />
        <BackFace person={person} />
      </motion.div>
    </div>
  );
};

export default SmallCard;
