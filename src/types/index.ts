import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
}

export interface SearchComicProps {
    comic: string;
    setComic: (comic: string) => void;
}

export interface CharacterProps {
    comics: {
        items: {
            name: string
        }
    }
    description: string;
    id: number;
    name: string;
    series: {
        items: {
            name: string
        }
    }
    thumbnail: {
        path: string,
        extension: string
    }
}

export interface CharacterCardProps {
    character: CharacterProps;
}

export interface DetailsProps{
    isOpen:boolean;
    closeModal: () => void;
    character: CharacterProps
}

export interface FilterProps{
    character: string;
}