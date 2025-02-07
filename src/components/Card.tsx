"use client";

import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import { CharacterProps } from '@/types';
import CustomButton from './CustomButton';

interface CharacterCardProps {
    character: CharacterProps;
}

const Card = ({ character }: CharacterCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card group">
            <div className='card__content'>
                <h2 className="card__content-title">
                    {character.name}
                </h2>
            </div>
            <div className='relative w-full h-40 mx-auto my-3 object-contain'>
                <Image style={{ objectFit: 'cover' }} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} width={300} height={250} />
                <div className='card__btn-container'>
                    <CustomButton
                        title="Show more"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

        </div>
    );
};

export default Card;