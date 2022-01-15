import React, { useCallback, useState } from 'react'
import CatBreedDescription from './CatBreedDescription'
import CatFiltersBreed from './CatFiltersBreed'
import CatImagesCarousel from './CatImagesCarousel'

const CatsByBreed = () => {
    const [breed, setBreed] = useState('beng')
    const setFilter = useCallback(async (breed) => {
        setBreed(breed)
    }, [setBreed])

    return (
        <>
            <h1 className="text-center light-blue f-5">
                Cats By Breed 😸
            </h1>
            <CatFiltersBreed breed={breed} filters={setFilter} />
            <CatImagesCarousel breed={breed} />
            <CatBreedDescription breed={breed} />
        </>
    )
}

export default CatsByBreed;