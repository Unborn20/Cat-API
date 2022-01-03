import React from 'react'
import useFetch from '../../hooks/useFetch';

const CatsByBreed = () => {
    const options = {
        method: 'GET',
        headers: new Headers({
            'x-api-key': window.env.REACT_APP_CAT_KEY            
        })
    }        
    const { loading, data } = useFetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng', options)

    return (
        <>
            <h1 className="text-center light-blue f-5">
                Cats By Breed 😸
            </h1>
            {loading
                ? 
                    <p>Loading...</p>
                :
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
            }

        </>
    )
}
export default CatsByBreed;