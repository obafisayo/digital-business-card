import React from 'react'
import { motion } from 'framer-motion';

const EditCard = ({selectedId, person, handleEdit, setIsEditing}) => {
  return (
    <motion.div 
        layoutId={selectedId} 
        className="absolute m-6 md:m-auto top-12 sm:top-8 max-sm:bottom-0 md:left-0 md:right-0 transform -translate-x-1/2 -translate-y-1/2 p-8
            sm:rounded-2xl bg-slate-200 shadow-lg w-[90%] h-fit max-sm:h-fit max-sm:w-full"
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
        <div className="mt-6 p-4 bg-white rounded border shadow">
            <h3 className="text-lg font-semibold">Preview</h3>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Title:</strong> {person.title}</p>
            <p><strong>Location:</strong> {person.location}</p>
        </div>
        <div className="mt-6 p-4 bg-white rounded border shadow">
            <h3 className="text-lg font-semibold">Preview</h3>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Title:</strong> {person.title}</p>
            <p><strong>Location:</strong> {person.location}</p>
        </div>
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
  )
}

export default EditCard;
