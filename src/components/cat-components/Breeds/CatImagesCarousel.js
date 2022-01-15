import React, { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'

const CatImagesCarousel = ({breed}) => {
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0)
    
    const options = {
        method: 'GET',
        headers: new Headers({
            'x-api-key': window.env.REACT_APP_CAT_KEY
        })
    }
    const { loading, data } = useFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=8`, options)

    const handlePrev = (e) => {
        if(current - 1 < 0){            
            return setCurrent(images.length - 1)
        }
        return setCurrent(prev => prev - 1)
    }

    const handleNext = (e) => {        
        if(current + 1 > images.length - 1){            
            return setCurrent(0)
        }
        return setCurrent(prev => prev + 1)
    }

    useEffect(() => {
        if(data !== null){            
            const images = data.map(breed => breed.url)            
            setImages(images)
        }
        return () => {
            setImages([])
        }
    }, [data])    

    useEffect(() => {
        return
    }, [current])

    return (
        <>
            {loading 
                ?
                    <p>Loading...</p>
                :
                    <>
                        <button onClick={handlePrev} >
                            Prev
                        </button>
                        <button onClick={handleNext} >
                            Next
                        </button>
                        <img src={images[current]} alt={'image' + current} width={200} height={100} draggable={false} />
                    </>
            }
        </>
    )
}

export default CatImagesCarousel