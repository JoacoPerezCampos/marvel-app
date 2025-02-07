import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
}

export interface SearchComicProps{
    comic: string;
    setComic: (comic:string) => void;
}

export interface CharacterProps {
    comics: {
        items: {
            resourceURI: string,
            name: string
        }
    }
    description: string;
    id: number;
    name: string;
    series: object;
    thumbnail: {
        path: string,
        extension: string
    }
    
}