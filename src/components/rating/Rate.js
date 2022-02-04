import React, { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'

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
                if (e) return <FontAwesomeIcon key={i} icon={fasFaStar} />
                return <FontAwesomeIcon key={i} icon={farFaStar} />
            })
            }
        </>
    )
};

export default Rate;
