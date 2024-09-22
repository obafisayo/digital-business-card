import React from 'react'
import { motion } from 'framer-motion';

const LargeCard = ({ setSelectedId, isEditing, setIsEditing, person }) => {
  return (
    <motion.div 
        layoutId="card2" 
        className={`p-4 w-72 border h-[500px] rounded-2xl bg-slate-300 shadow-lg ${isEditing? "hidden" : "flex"} flex-col cursor-pointer`}
        onClick={() => { setSelectedId("card2"); setIsEditing(true); }}
        >
        <h2 className="text-xl font-bold">{person.name}</h2>
        <p className="text-md">{person.title}</p>
        <p className="text-sm">{person.location}</p>
        <h3 className="text-lg font-semibold mt-4">Experience:</h3>
        <ul className="list-disc ml-5">
            {person.experience.map((job, index) => (
            <li key={index}>{`${job.role} at ${job.company} (${job.duration})`}</li>
            ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Skills:</h3>
        <p className="text-sm">{person.skills.join(', ')}</p>
        <h3 className="text-lg font-semibold mt-4">Bio:</h3>
        <p className="text-sm">{person.bio}</p>
    </motion.div>
  )
}

export default LargeCard;
