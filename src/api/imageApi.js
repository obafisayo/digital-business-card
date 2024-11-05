import axios from "axios";
import { URL } from "../routes/RoutesConstant";

export const fetchCardImageData = async (token, card_id) => {
    if (!token) throw new Error('No token found');

    const response = await axios.get(`${URL}/image/card/${card_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch user card Image data');
    }
};
