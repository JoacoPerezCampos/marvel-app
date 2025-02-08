import { CharacterProps, FilterProps } from "@/types";
import axios from "axios";

const baseUrl = 'https://gateway.marvel.com/v1/public';
const ts = "1";
const publicKey = "c0072e6deb6cab617e37ac5f3a525c68";
const hash = "066c111cf28616b5e0ea6ec82e8b13b7";



export const getCharacters = async (filter: FilterProps, limit = 20, offset = 0 ) => {
    const { character } = filter;
    try {
        const baseParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

        const url = character && character.trim() !== ""
            ? `${baseUrl}/characters?${baseParams}&nameStartsWith=${character.toLowerCase()}`
            : `${baseUrl}/characters?${baseParams}`;

        const response = await axios.get(url);
        console.log('API Response:', response.data);
        return response.data.data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching characters:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};
export const getCharacterComics = async (characterId: number) => {
    try {
        const response = await axios.get(`${baseUrl}/characters/${characterId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        console.log(`Comics for character ${characterId}:`, response.data);
        return response.data.data.results.map((comic: any) => comic.title);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Error fetching comics for character ${characterId}:`, error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
            return [];
        }
    }
};

export const getCharacterSeries = async (characterId: number) => {
    try {
        const response = await axios.get(`${baseUrl}/characters/${characterId}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        console.log('Series response:', response.data);
        return response.data.data.results.map((series: any) => series.title);
    } catch (error) {
        const e = error as Error;
        console.error('Error fetching series:', e.message);
        throw error;
    }

};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  
  export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);
  
    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());
  
    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };