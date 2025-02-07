import { CharacterProps } from "@/types";
import axios from "axios";

const baseUrl = 'https://gateway.marvel.com/v1/public';
const ts = "1";
const publicKey = "c0072e6deb6cab617e37ac5f3a525c68";
const hash = "066c111cf28616b5e0ea6ec82e8b13b7";



export const getCharacters = async (query = "", offset = 0) => {
    try {
        const response = await axios.get(`${baseUrl}/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        console.log('Api response:', response.data)
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
        return response.data.data.results.map((series: any) => series.name);
    } catch (error) {
        const e = error as Error;
        console.error('Error fetching series:', e.message);
        throw error;
    }
    
};