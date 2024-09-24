import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EditCard from './editCard/EditCard';
import SmallCard from './smallCard/SmallCard';
// import LargeCard from './largeCard/LargeCard';
import { initialPerson } from '../../../config/userConfig';
import CardLinks from './smallCard/links/CardLinks';

const Cards = () => {
  const [person, setPerson] = useState(initialPerson);
  const [isEditing, setIsEditing] = useState(false);
  // const [selectedId, setSelectedId] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleEdit = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className='sm:relative bg-sky-500 flex justify-center sm:py-20 max-sm:pt-10 max-sm:pb-20 items-center w-full'>
      <div className='container w-full'>
        <div className="flex max-md:flex-col gap-24 w-full ">
          <SmallCard isFlipped={isFlipped}
            person={person}
            setIsFlipped={setIsFlipped}
          />
          <div className="w-96 h-48 border">
            <h1 className="text-2xl text-white font-bold">{person.firstname + " " + person.lastname}</h1>
            <p className="text-white/90 text-md mt-1">{person.title}</p>
            <p className="text-white mt-5 text-lg">{person.bio}</p>
          </div>

          {/* <LargeCard person={person}
            setIsEditing={setIsEditing}
            setSelectedId={setSelectedId}
            isEditing={isEditing}
          /> */}
        </div>
        <CardLinks socials={person.socials} />
      </div>
      <div className='absolute right-4 top-4 m-auto rounded-lg border px-4 py-2 bg-gray-500 text-white cursor-pointer hover:bg-black'
        onClick={() => setIsEditing(true)}>
        Edit
      </div>
      <AnimatePresence>
        {isEditing && (
          <EditCard 
            person={person} 
            // selectedId={selectedId} 
            setIsEditing={setIsEditing}
            handleEdit={handleEdit}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
