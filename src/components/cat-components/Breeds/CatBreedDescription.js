import React, {useState, useEffect} from 'react'
import useFetch from '../../../hooks/useFetch'

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
        if(data !== null){
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
                        <p>
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
                    </>
            }
        </>
    )
}

export default CatBreedDescription
