import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EditCard from './editCard/EditCard';
import Card1Front from '../../../assets/cards/card1/Front.png';
import Card1Back from '../../../assets/cards/card1/Back.png';
import SmallCard from './smallCard/SmallCard';
import LargeCard from './largeCard/LargeCard';
import A from "../../../assets/img/a.JPG";
import B from "../../../assets/img/b.JPG";
import C from "../../../assets/img/c.JPG";
import D from "../../../assets/img/d.png";
import E from "../../../assets/img/e.png";
import F from "../../../assets/img/f.png";
import G from "../../../assets/img/g.png";

const Cards = () => {
  const initialPerson = {
    firstname: 'Obafisayo',
    lastname: 'Abimbola',
    name: 'Obafisayo Abimbola',
    title: 'Software Engineer',
    location: 'LG, Nigeria',
    cardFront: Card1Front,
    cardBack: Card1Back,
    images: [A, B, C, D, E, F, G],
    experience: [
      { company: 'Tech Innovations', role: 'Lead Developer', duration: '3 years' },
      { company: 'Web Solutions', role: 'Software Engineer', duration: '2 years' },
    ],
    contact: ['000-123-456-7890', 'email@yourdomain.com', 'Your address goes here 125 Street, USA'],
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
    bio: 'Passionate software engineer with 5+ years of experience in building scalable web applications.',
  };

  const [person, setPerson] = useState(initialPerson);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleEdit = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className='sm:relative bg-sky-300 flex justify-center sm:py-20 max-sm:pt-10 max-sm:pb-20 items-center w-full'>
      <div className="flex max-md:flex-col justify-center gap-20 items-center">
        {/* First Card (With 3D Flip Effect) */}
        <SmallCard isFlipped={isFlipped}
          person={person}
          setIsFlipped={setIsFlipped}
        />

        {/* Second Card (More Data) */}
        <LargeCard person={person}
          setIsEditing={setIsEditing}
          setSelectedId={setSelectedId}
          isEditing={isEditing}
        />
      </div>

      <AnimatePresence>
        {isEditing && (
          <EditCard 
            person={person} 
            selectedId={selectedId} 
            setIsEditing={setIsEditing}
            handleEdit={handleEdit}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
