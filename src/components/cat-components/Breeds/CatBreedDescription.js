import React, { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Rate from '../../rating/Rate'

const CatBreedDescription = ({ breed }) => {
    const [detail, setDetail] = useState({})

    const options = {
        method: 'GET',
        headers: new Headers({
            'x-api-key': window.env.REACT_APP_CAT_KEY
        })
    }

    const { loading, data } = useFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=1`, options)
    useEffect(() => {
        if (data !== null) {
            setDetail(data[0].breeds[0])
        }
        return () => {
            setDetail({})
        }
    }, [data])

    return (
        <>
            {loading
                ?
                <p>Loading...</p>
                :
                <>
                    <article className="wrapper">
                        <p className="w-25">
                            {
                                detail.description
                            }
                        </p>
                        <p>
                            {
                                detail.temperament
                            }
                        </p>
                        <a href={detail.wikipedia_url} target='_blank' rel='noreferrer'>
                            Wikipedia Page
                        </a>
                    </article>
                    <section className="container">
                        <div className="self__container">
                            <p>Adaptability: <Rate rating={detail?.adaptability} /></p>
                            <p>Affection Level: <Rate rating={detail?.affection_level} /></p>
                            <p>Bidability: <Rate rating={detail?.bidability} /></p>
                            <p>Cat Friendly: <Rate rating={detail?.cat_friendly} /></p>
                            <p>Child Friendly: <Rate rating={detail?.child_friendly} /></p>
                            <p>Dog Friendly: <Rate rating={detail?.dog_friendly} /></p>
                            <p>Energy Level: <Rate rating={detail?.energy_level} /></p>
                            <p>Health Issues: <Rate rating={detail?.health_issues} /></p>
                            <p>Hypoallergenic: <Rate rating={detail?.hypoallergenic} /></p>
                            <p>Intelligence: <Rate rating={detail?.intelligence} /></p>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default CatBreedDescription
