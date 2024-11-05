import { createContext, useContext, useEffect, useState } from "react";
import { fetchUserCardData } from "../api/cardApi";
import { cardBackground } from "../config/cardConfig";
import { fetchCardImageData } from "../api/imageApi";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cardLoading, setCardLoading] = useState(false);
    const [cardError, setCardError] = useState(null);
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        const loadCardData = async () => {
            setCardLoading(true);
            try {
                const token = localStorage.getItem('token');
                const data = await fetchUserCardData(token);
                let imageData = [];

                try {
                    const fetchedImageData = await fetchCardImageData(token, data.id);
                    if (Array.isArray(fetchedImageData) && fetchedImageData.length > 0) {
                        imageData = fetchedImageData;
                    }
                } catch (error) {
                    console.error("Error fetching image data", error);
                }

                const backgroundImageData = cardBackground[data.template_id - 1] || {};

                setCardData({
                    ...data,
                    ...backgroundImageData,
                    images: imageData
                });
            } catch (error) {
                console.error("Error fetching user's card data", error);
                setCardError("Failed to fetch user's card data");
            } finally {
                setCardLoading(false);
            }
        };

        loadCardData();
    }, []);

    const values = {
        cardLoading,
        cardError,
        cardData,
    };

    return (
        <CardContext.Provider value={values}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error("useCardContext must be used within a CardProvider");
    }
    return context;
};
