import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import EditCard from './editCard/EditCard';
import Card1Front from '../../../assets/cards/card1/Front.png';
import Card1Back from '../../../assets/cards/card1/Back.png';
// import Card2Front from '../../../assets/cards/card2/Front.png';
// import Card2Back from '../../../assets/cards/card2/Back.png';
import SmallCard from './smallCard/SmallCard';
import LargeCard from './largeCard/LargeCard';
import Logo from "../../../assets/static/Logo.png";

const Cards = () => {
  const initialPerson = {
    firstname: 'Obafisayo',
    lastname: 'Abimbola',
    name: 'Obafisayo Abimbola',
    title: 'Software Engineer',
    link: 'https://obafisayo-portfolio.netlify.app/',
    location: 'LG, Nigeria',
    cardFront: Card1Front,
    cardBack: Card1Back,
    images: [
      "idyfyg0uog5yhi8xamyr",
      "m83bazamitfm9hvrkbem",
      "l5mmi1atyze57eejersj",
      "c8ssxp7ozfwgxywrka6f",
      "oidgqkss5lwmu5psbctt",
      "grant-whitty-vkr8QBzCIdc-unsplash_j0wlxn",
      "Screenshot_2024-06-20_164858_jwxwdw",
    ],
    company: {
      title: "Apex Cards",
      tagLine: "Future of custom cards",
      companyLogo: Logo,
    },
    socials: {
      facebook: "https://facebook.com/",
      whatsapp: "https://web.whatsapp.com/",
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/",
      website: "https://website.com/",
      twitter: "https://x.com/",
    },
    experience: [
      { company: 'Tech Innovations', role: 'Lead Developer', duration: '3 years' },
      { company: 'Web Solutions', role: 'Software Engineer', duration: '2 years' },
    ],
    contact: {
      telephone: "000-123-456-7890",
      email: "email@yourdomain.com",
      address: "Your address goes here 125 Street, USA",
    },
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
