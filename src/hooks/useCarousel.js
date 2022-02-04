import { useState, useEffect, useCallback } from 'react'

const useCarousel = (elements) => {
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
        const images = elements.map(({props}) => props)
        setImages(images)
    }, [elements])
    
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

    return [
        current,
        images,
        handlePrev,
        handleNext
    ]
}

export default useCarousel
