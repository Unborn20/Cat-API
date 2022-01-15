import React, { useEffect } from 'react'
import { useForm } from '../../../hooks/useForm'
import useFetch from '../../../hooks/useFetch'

const CatFiltersBreed = ({breed, filters}) => {
    const options = {
        method: 'GET',
        headers: new Headers({
            'x-api-key': window.env.REACT_APP_CAT_KEY
        })
    }
    const { loading, data: breeds } = useFetch('https://api.thecatapi.com/v1/breeds', options)

    const [ values, handleInputChange ] = useForm({
        breed
    })
    const { breed: formBreed } = values
    
    useEffect(() => {        
        filters(formBreed)
        return () => {
            filters('beng')
        }
    }, [filters, formBreed])

    return (
        <form className="filters">
            <select name="breed" value={formBreed} className="input-filter m-2 text-center" onChange={handleInputChange}>
                {
                    !loading &&
                    breeds.map((e, i) => {
                        return (
                            <option key={i} value={e.id}>
                                {e.name}
                            </option>
                        )
                    })
                }
            </select>
        </form>
    )
}

export default CatFiltersBreed
