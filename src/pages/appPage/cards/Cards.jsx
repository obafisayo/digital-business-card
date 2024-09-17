import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cards = () => {
  // Initial person data
  const initialPerson = {
    name: 'Obafisayo Abimbola',
    title: 'Software Engineer',
    location: 'LG, Nigeria',
    experience: [
      { company: 'Tech Innovations', role: 'Lead Developer', duration: '3 years' },
      { company: 'Web Solutions', role: 'Software Engineer', duration: '2 years' },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
    bio: 'Passionate software engineer with 5+ years of experience in building scalable web applications.',
  };

  const [person, setPerson] = useState(initialPerson);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleEdit = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-sky-300 flex justify-center sm:py-20 py-10 items-center'>
      <div className="flex max-sm:flex-col justify-center gap-20 items-center">
        {/* First Card (Less Data) */}
        <motion.div 
          layoutId="card1" 
          className="p-4 sm:w-96 w-80 shadow-lg border rounded-2xl bg-slate-300 h-64 flex flex-col justify-between cursor-pointer"
          onClick={() => { setSelectedId("card1"); setIsEditing(true); }}
        >
          <h2 className="text-xl font-bold">{person.name}</h2>
          <p className="text-md">{person.title}</p>
          <p className="text-sm">{person.location}</p>
        </motion.div>

        {/* Second Card (More Data) */}
        <motion.div 
          layoutId="card2" 
          className="p-4 w-72 border h-[500px] rounded-2xl bg-slate-300 shadow-lg flex flex-col cursor-pointer"
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
      </div>

      <AnimatePresence>
        {isEditing && (
          <motion.div 
            layoutId={selectedId} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 border rounded-2xl bg-slate-200 shadow-lg w-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h2 className="text-xl font-bold">Edit Details</h2>
            <div className="mt-4">
              <label className="block">Name:</label>
              <input 
                type="text" 
                name="name" 
                value={person.name} 
                onChange={handleEdit} 
                className="border rounded p-1 w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">Title:</label>
              <input 
                type="text" 
                name="title" 
                value={person.title} 
                onChange={handleEdit} 
                className="border rounded p-1 w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">Location:</label>
              <input 
                type="text" 
                name="location" 
                value={person.location} 
                onChange={handleEdit} 
                className="border rounded p-1 w-full"
              />
            </div>
            {/* Preview Area */}
            <div className="mt-6 p-4 bg-white rounded border shadow">
              <h3 className="text-lg font-semibold">Preview</h3>
              <p><strong>Name:</strong> {person.name}</p>
              <p><strong>Title:</strong> {person.title}</p>
              <p><strong>Location:</strong> {person.location}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                className="bg-blue-500 text-white rounded p-2 mr-2"
                onClick={() => setIsEditing(false)}
              >
                Save
              </button>
              <button 
                className="bg-red-500 text-white rounded p-2"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
