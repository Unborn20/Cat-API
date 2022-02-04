import React, { useState, useEffect, useCallback } from 'react'
import { EmptyStar, FillStar } from '../../icons'

const Rate = ({ rating }) => {
    const [rates, setRates] = useState([]);

    const fillStars = useCallback(() => {
        const rates = new Array(5)
        rates.fill(true, 0, rating)
        rates.fill(false, rating, rates.length)        
        setRates(rates)
    }, [rating])

    useEffect(() => {
        fillStars()
    }, [fillStars])

    return (
        <>
            {rates.map((e, i) => {
                if (e) return <FillStar key={i} style={{width: '18px', heigth: '18px'}}/>
                return <EmptyStar key={i} style={{width: '18px', heigth: '18px'}} />
            })
            }
        </>
    )
};

export default Rate;
