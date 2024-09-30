import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import EditCard from './editCard/EditCard';
import axios from 'axios';
import { URL } from '../../../routes/RoutesConstant';
import LoadingDiv from '../../../components/loadingDiv/LoadingDiv';

const FakeCardComponent = () => {
    const [person, setPerson] = useState({
        templateId: "2",
        name: "John Doe",
        title: "Software Engineer",
        company_name: "Tech Solutions Inc.",
        company_tagline: "Innovative Solutions for Tomorrow",
        telephone: "+1 (555) 123-4567",
        email: "john.doe@techsolutions.com",
        location: "San Francisco, CA",
        facebook_url: "https://www.facebook.com/johndoe",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
        twitter_url: "https://twitter.com/johndoe",
        website_url: "https://www.johndoe.com",
        address: "123 Tech Street, San Francisco, CA 94105"
    });
    const [isEditing, setIsEditing] = useState(false);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const url = URL;

    useEffect(() => {
        const fetchCardTemplate = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token')
                const response = await axios.post(`${url}/card/template/${person.templateId? person.templateId : 1}`, person, {
                    headers: {
                        Authorization: `Bearer ${token}`
                        // Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI3MjY0NDQ1fQ.Oru833uXDv5M7Ia61TKfV8MvZrBd_a2QeGU_vjQb2ho"}`
                    }
                });
                setCards([response.data]);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCardTemplate();
    }, [person, url]);

    const handleEdit = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    return (
        <div className='min-h-screen bg-sky-500 flex justify-center items-center py-10 px-4'>
            <div className='container max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
                    {isLoading ? (
                        <LoadingDiv />
                    ) : (
                        <>
                            {cards.map((card, index) => (
                                <div key={index} dangerouslySetInnerHTML={{ __html: card }} />
                            ))}
                        </>
                    )}
                </div>

                <button
                    className='fixed right-4 top-4 rounded-lg border px-4 py-2 bg-gray-500 text-white cursor-pointer hover:bg-black transition-colors duration-300'
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
                <AnimatePresence>
                    {isEditing && (
                        <EditCard
                            person={person}
                            setIsEditing={setIsEditing}
                            handleEdit={handleEdit}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FakeCardComponent;
