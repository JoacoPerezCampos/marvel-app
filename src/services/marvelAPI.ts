import axios from "axios";

const baseUrl = 'https://gateway.marvel.com/v1/public';
const ts = "1";
const publicKey="c0072e6deb6cab617e37ac5f3a525c68";
const hash = "066c111cf28616b5e0ea6ec82e8b13b7";

export const getCharacters = async (query = "", offset = 0) => {
    try {
        const response = await axios.get(`${baseUrl}/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        console.log('Api response:', response.data)
        return response.data.data.results;
    } catch (error) {
        if (axios.isAxiosError(error)){
            console.error('Error fetching characters:', error.response?.data || error.message);
        } else {
          console.error('Unexpected error:', error);
        }
        throw error;
    }
}; 

