import React, { useState } from 'react';

const Information = ({ person, setPerson }) => {
    const [nicheInput, setNicheInput] = useState(person.niche);
    const [filteredNiches, setFilteredNiches] = useState([]);

    const niches = [
        'Technology',
        'Health',
        'Finance',
        'Education',
        'Travel',
        'Food',
        'Real Estate',
        'Fashion',
    ];

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email' && !validateEmail(value)) {
            return;
        }
        handleEdit(event);
    };

    const handleEdit = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    const handleNicheInputChange = (event) => {
        const value = event.target.value;
        setNicheInput(value);
        setFilteredNiches(niches.filter(niche => niche.toLowerCase().includes(value.toLowerCase())));
    };

    const handleNicheSelect = (niche) => {
        setNicheInput(niche);
        setFilteredNiches([]);
        setPerson({ ...person, niche });
    };

    return (
        <div>
            <h1 className="text-xl font-semibold mb-2">Personal</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor='firstname' className="block">Firstname</label>
                    <input id='firstname' type="text" name="firstname" value={person.firstname} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='lastname' className="block">Lastname</label>
                    <input id='lastname' type="text" name="lastname" value={person.lastname} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='title' className="block">Title</label>
                    <input id='title' type="text" name="title" value={person.title} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='tel' className="block">Telephone</label>
                    <input id='tel' type="tel" name="telephone" value={person.telephone} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='email' className="block">Email</label>
                    <input id='email' type="email" name="email" value={person.email} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='location' className="block">Location</label>
                    <input id='location' type="text" name="location" value={person.location} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor='bio' className="block">Bio</label>
                    <textarea id='bio' name="bio" value={person.bio} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
            </div>
            <h1 className="text-xl font-semibold mb-2">Business</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor='company' className="block">Company Name</label>
                    <input id='company' type="text" name="company_name" value={person.company_name} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='company_tagline' className="block">Company Tagline</label>
                    <input id='company_tagline' type="text" name="company_tagline" value={person.company_tagline} onChange={handleChange} className="border rounded p-1 w-full" />
                </div>
                <div>
                    <label htmlFor='niche' className="block">Niche</label>
                    <input
                        id='niche'
                        type="text"
                        name="niche"
                        value={nicheInput}
                        onChange={handleNicheInputChange}
                        className="border rounded p-1 w-full"
                    />
                    {filteredNiches.length > 0 && (
                        <ul className="border rounded mt-1 remove-scroll-bar-width max-h-40 overflow-y-auto">
                            {filteredNiches.map((niche, index) => (
                                <li
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => handleNicheSelect(niche)}
                                >
                                    {niche}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Information;
