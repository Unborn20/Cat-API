import React from 'react'
import useCarousel from '../../hooks/useCarousel'
import './styles/carousel.css'

const Carousel = ({ children }) => {
    const [
        current,
        images,
        handlePrev,
        handleNext
    ] = useCarousel(children)

    return (
        <main className="container">
            <section className='container w-35'>
                {!(images.length < 2) &&                    
                    <div className="button-container">
                        <button onClick={handlePrev}>
                            Prev
                        </button>                    
                    </div>                    
                }
                <img
                    src={images[current]?.src}
                    alt={images[current]?.alt}
                    width={400}
                    height={300}
                    draggable={false}
                />
                {!(images.length < 2) &&                    
                    <div className="button-container">                    
                        <button onClick={handleNext}>
                            Next
                        </button> 
                    </div>                    
                }
            </section>
        </main>
    )
}

export default Carousel