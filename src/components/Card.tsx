"use client";

import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import { CharacterProps, CharacterCardProps } from '@/types';
import CustomButton from './CustomButton';
import Details from './Details';


const Card = ({ character }: CharacterCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card group">
            <div className='card__content'>
                <h2 className="card__content-title">
                    {character.name}
                </h2>
            </div>
            <div className='relative w-full h-72 my-1 object-contain'>
                <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} fill className='object-contain' />
            </div>
            <div className='relative flex w-full mt-2'>
                <div className='card__btn-container'>
                    <CustomButton
                        title="Show more"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <Details isOpen={isOpen} closeModal={() => setIsOpen(false)} character={character}/>
        </div>
    );
};

export default Card;