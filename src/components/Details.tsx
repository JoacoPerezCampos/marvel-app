"use client";

import { DetailsProps } from '@/types';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getCharacterComics, getCharacterSeries } from '@/api/marvelAPI';

const Details = ({ isOpen, closeModal, character }: DetailsProps) => {
    const [comicNames, setComicNames] = useState<string[]>([]);
    const [seriesNames, setSeriesNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        if (isOpen) {
            const fetchComicsAndSeries = async () => {
                setLoading(true);

                try {
                    const comics = await getCharacterComics(character.id);
                    setComicNames(comics);

                    const series = await getCharacterSeries(character.id);
                    setSeriesNames(series);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchComicsAndSeries();
        }
    }, [isOpen, character.id]);

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-40' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom='opacity-0 scale-90'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-90'
                            >
                                <Dialog.Panel className="relative w-full max-w-[900] max-h-lg overflow-y-auto rounded-2xl p-6 bg-stone-400 text shadow-xsl transition-all">
                                    <button type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-transparent'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src="close-button.svg"
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>
                                    <div className='object-contain'>
                                        <div className='relative w-full h-[900] bg-pattern bg-cover rounded-lg'>
                                            <Image
                                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                                alt={character.name}
                                                className='object-contain p-12 rounded-2xl'
                                                fill
                                                priority />
                                        </div>
                                    </div>
                                    <div className='object-contain'>
                                        <h2 className='font-bold text-3xl capitalize mt-3'>{character.name}</h2>
                                        <div className='m-1'>
                                            <div className='p-3 justify-evenly w-full text-left'>
                                                <h3 className='font-bold text-xl capitalize mt-2'>Description:</h3>
                                                <p className='text-xl'>{character.description}</p>
                                                <h3 className='font-bold text-xl capitalize mt-2'>Comics</h3>
                                                {loading ? (
                                                    <p className='text-gray-500'> Loading comics...</p>
                                                ) : comicNames.length > 0 ? (
                                                    <ul className='list-disc ml-5 mt-2'>
                                                        {comicNames.map((name, index) => (
                                                            <li key={index} className='text-lg'>{name}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className='text-gray-500'>No comics available.</p>
                                                )}
                                                <h3 className='font-bold text-xl capitalize mt-2'>Series</h3>
                                                {loading ? (
                                                    <p className='text-gray-500'> Loading series...</p>
                                                ) : seriesNames.length > 0 ? (
                                                    <ul className='list-disc ml-5 mt-2'>
                                                        {seriesNames.map((name, index) => (
                                                            <li key={index} className='text-lg'>{name}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className='text-gray-500'>No series available.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>

                        </div>
                    </div>
                </Dialog>

            </Transition>
        </>
    );
};

export default Details;
