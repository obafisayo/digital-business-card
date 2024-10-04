import React from 'react';

const Information = ({ person, setPerson }) => {
    const validateEmail = (email) => {
        // Simple regex for basic email validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // If the field is email, validate it
        if (name === 'email' && !validateEmail(value)) {
        return; // Do not change the value if the email is invalid
        }

        // Call the original handleEdit function for other fields
        handleEdit(event);
    };

    const handleEdit = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
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
        </div>
        </div>
    );
}

export default Information;
