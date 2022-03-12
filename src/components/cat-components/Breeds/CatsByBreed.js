import React, { useState, useEffect, useCallback } from 'react'
import useFetch from '../../../hooks/useFetch'
import CatBreedDescription from './CatBreedDescription'
import CatFiltersBreed from './CatFiltersBreed'
import Carousel from '../../carousel/Carousel'
import './styles/breed.css'

const CatsByBreed = () => {
    const [breed, setBreed] = useState('beng')
    const [images, setImages] = useState([])
    const setFilter = useCallback(async (breed) => {
        setBreed(breed)
    }, [setBreed])
    const options = {
        method: 'GET',
        headers: new Headers({
            'x-api-key': window.env.REACT_APP_CAT_KEY
        })
    }
    const { loading, data } = useFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=8`, options)  

    useEffect(() => {
        if(data) {
            const images = data.map(breed => breed.url)
            setImages(images)
        }
        return () => setImages([])
    }, [data])

    return (
        <>
            <h1 className="text-center light-blue f-5">
                Cats By Breed 😸
            </h1>
            <CatFiltersBreed breed={breed} filters={setFilter} />
            {loading
                ?
                    <p>Loading...</p>
                :
                    <Carousel>
                        {
                            images.map((url, i) => {
                                return <img key={i} src={url} alt={'image' + i} />
                            })
                        }
                    </Carousel>
            }
            <CatBreedDescription breed={breed} />
        </>
    )
}

export default CatsByBreed