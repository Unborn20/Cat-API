import React, { useState, useEffect, useCallback } from 'react'

const CatImagesCarousel = ({ children }) => {
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0)

    const handlePrev = () => {
        if(current - 1 < 0) return setCurrent(images.length - 1)
        return setCurrent(current - 1)
    }

    const handleNext = () => {
        if(current + 1 > images.length - 1) return setCurrent(0)
        return setCurrent(current + 1)
    }

    const getImages = useCallback(() => {
        const images = children.map(({props}) => props)
        setImages(images)
    }, [children])
    
    useEffect(() => {
        getImages()
        return () => {
            setImages([])
            setCurrent(0)
        }
    }, [getImages])

    useEffect(() => {
        return
    }, [current])

    return (
        <>
            {!(images.length < 2) &&
                <>
                    <button onClick={handlePrev}>
                        Prev
                    </button>
                    <button onClick={handleNext}>
                        Next
                    </button>
                </>
            }
            <img
                src={images[current]?.src}
                alt={images[current]?.alt}
                width={200}
                height={100}
                draggable={false}
            />
        </>
    )
}

export default CatImagesCarousel