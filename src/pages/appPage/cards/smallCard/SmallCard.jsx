import React from 'react';
import { motion } from 'framer-motion';
import FrontFace from './frontFace/FrontFace';
import BackFace from './backFace/BackFace';

const SmallCard = ({ person, setIsFlipped, isFlipped }) => {
  return (
	<div className="h-56 w-96 [perspective:1000px]">
	    <motion.div 
            className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
            onClick={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
	    >
            <FrontFace person={person} />
            <BackFace person={person} />
        </motion.div>
	</div>
  );
};

export default SmallCard;
