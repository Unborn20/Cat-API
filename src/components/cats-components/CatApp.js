import React, { useEffect, useState } from 'react'
import usePagination from '../../hooks/usePagination'
import ListCats from './ListCats'
import Pagination from '../pagination/Pagination'

const CatApp = () => {
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState(3)
    const [order, setOrder] = useState('Desc')
    const [page, pagination, changePagination, setTotalPages] = usePagination([1,2,3,4,5,6,7])

    const handleInputLimit = (e) => {
        const limit = e.target.value
        setLimit(limit)
    }

    const handleInputOrder = (e) => {
        const order = e.target.value
        setOrder(order)
    }

    const getCats = async (limit = 3, page, order = 'Desc') => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`
        const options = {
            method: 'GET',
            headers: {
              'x-api-key': window.env.REACT_APP_CAT_KEY
            }
        }
        setCats([])
        try{
            const response = await fetch(url, options)
            const paginationLength = Number(response.headers.get('pagination-count'))
            setTotalPages(Math.floor(paginationLength / limit))            
            const cats = await response.json()
            setCats(cats)
        }catch(err){
            console.error(err)
        }
    }
    
    useEffect(() => {
        getCats(limit, page, order)
    }, [limit, page, order])

    return (
        <>
            <h1>
                Cat List
            </h1>
            <main>
                <form className="filters">
                    <select id="limit" className="input-filter m-2 text-center" onChange={handleInputLimit}>
                        <option value={3}>
                            3
                        </option>
                        <option value={6}>
                            6
                        </option>
                        <option value={9}>
                            9
                        </option>
                    </select>
                    <select id="order" className="input-filter m-2" onChange={handleInputOrder}>
                        <option value={'Desc'}>
                            Descendent
                        </option>
                        <option value={'Rand'}>
                            Random
                        </option>
                    </select>
                </form>
                <ListCats cats={cats} />
                <Pagination controlPagination={{pagination, changePagination}} />
            </main>
        </>
    )
}

export default CatApp
