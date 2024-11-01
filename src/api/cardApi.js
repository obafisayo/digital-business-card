import axios from "axios";
import { URL } from "../routes/RoutesConstant";
import { jwtDecode } from "jwt-decode";

export const fetchUserCardData = async (token) => {
    if (!token) throw new Error('No token found');
    
    const decodedToken = jwtDecode(token);
    const user_id = decodedToken.id;

    const response = await axios.get(`${URL}/card/user/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Failed to fetch user card data');
    }
};
