import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../../../../routes/RoutesConstant';

const StoriesCarousel = () => {
    const [users, setUsers] = useState([]);
    const [viewedStories, setViewedStories] = useState(new Set());
    const [currentStory, setCurrentStory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [storyContent, setStoryContent] = useState([]);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // Track the current story index

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
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleStoryClick = async (userId) => {
        setCurrentStory(userId);
        setLoading(true); // Start loading

        // Get user stories
        const userStories = users.find(user => user.id === userId)?.my_story || [];
        setStoryContent(userStories);
        
        // Mark the user as viewed only if all stories are viewed
        if (!viewedStories.has(userId)) {
            setViewedStories(prev => new Set(prev).add(userId));
        }

        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading time
        setLoading(false); // End loading
    };

    const handleNextStory = () => {
        if (currentStoryIndex < storyContent.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else {
            const userId = currentStory;
            setViewedStories(prev => {
                const updated = new Set(prev);
                updated.add(userId); // Mark as viewed when all stories are seen
                return updated;
            });
            closeStory();
        }
    };

    const closeStory = () => {
        setCurrentStory(null);
        setCurrentStoryIndex(0); // Reset the story index
        setStoryContent([]); // Clear story content
    };

    return (
        <div className="flex overflow-x-auto p-4 space-x-4">
            {users.map(user => (
                <div key={user.id} className="flex flex-col items-center">
                    <div
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
                    <p className="mt-2 text-center">{user.username}</p>
                </div>
            ))}
            {currentStory && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" onClick={closeStory}>
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold">{users.find(user => user.id === currentStory)?.username}'s Story</h2>
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <img src="/path/to/loading-image.gif" alt="Loading..." className="w-16 h-16" />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                {storyContent.length > 0 && (
                                    <img
                                        src={storyContent[currentStoryIndex]?.image}
                                        alt={`Story ${currentStoryIndex + 1}`}
                                        className="w-full h-auto rounded-lg mb-2"
                                        onLoad={handleNextStory} // Load next story on image load
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoriesCarousel;
