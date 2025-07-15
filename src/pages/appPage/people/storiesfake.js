import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../../../../routes/RoutesConstant';

const StoriesCarousel = () => {
    const stories = [
        {
            user_id: 1,
            my_story: [
                {
                    image: "",
                    like_count: 21,
                },
                {
                    image: "",
                    like_count: 5,
                },
                {
                    image: "",
                    like_count: 19,
                },
            ]
        },
        {
            user_id: 1,
            my_story: [
                {
                    image: "",
                    like_count: 23,
                },
                {
                    image: "",
                    like_count: 2,
                },
            ]
        },
        {
            user_id: 1,
            my_story: [
                {
                    image: "",
                    like_count: 5,
                },
            ]
        },
        {
            user_id: 1,
            my_story: [
                {
                    image: "",
                    like_count: 0,
                },
                {
                    image: "",
                    like_count: 1,
                },
            ]
        },
    ]
    const [users, setUsers] = useState([]);
    const [viewedStories, setViewedStories] = useState(new Set());
    const [currentStory, setCurrentStory] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('No token found');

                const response = await axios.get(`${URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setUsers(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleStoryClick = (userId) => {
        if (!viewedStories.has(userId)) {
            setViewedStories(prev => new Set(prev).add(userId));
        }
        setCurrentStory(userId);
    };

    const closeStory = () => {
        setCurrentStory(null);
    };

    return (
        <div className="flex overflow-x-auto p-4 space-x-4">
            {users.map(user => (
                <div className=''>
                    <div
                        key={user.id}
                        className={`relative cursor-pointer group w-fit`}
                        onClick={() => handleStoryClick(user.id)}
                    >
                        <div className={`absolute inset-0 rounded-full border-2 transition-opacity ${viewedStories.has(user.id) ? 'opacity-0' : 'opacity-100 ring ring-primary'}`}></div>
                        <img
                            className="w-24 h-24 rounded-full"
                            src={user.image}
                            alt={user.username}
                        />
                    </div>
                    <div className="relative rounded-full w-[104px] h-[104px] overflow-hidden z-10 flex flex-col items-center justify-center shadow-lg"
                        key={user.id}
                        onClick={() => handleStoryClick(user.id)}
                    >
                        <div className={`flex justify-center items-center w-fit absolute top-1 left-1 bg-white bg-opacity-95 backdrop-blur-lg rounded-full overflow-hidden outline outline-2 outline-white z-20`}>
                            <img
                                className="w-24 h-24 rounded-full flex justify-center items-center"
                                src={user.image}
                                alt={user.username}
                            />
                        </div>
                        <div className="absolute z-10 top-1/2 left-1/2 w-[100px] h-[100px] bg-primary rounded-full opacity-100 blur-[12px] animate-blob-bounce" />
                    </div>
                    <p className="mt-2 text-center">{user.username}</p>
                </div>
            ))}
            {currentStory && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" onClick={closeStory}>
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold">{users.find(user => user.id === currentStory).username}'s Story</h2>
                        {/* Display the story content here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoriesCarousel;
