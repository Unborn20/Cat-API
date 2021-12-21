import React, { useEffect, useState } from 'react'
import usePagination from '../hooks/usePagination'
import ListCats from './lists-cats/ListCats'
import Pagination from './pagination/Pagination'

const CatApp = () => {
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState(3)    
    const [page, pagination, changePagination, setTotalPages] = usePagination([1,2,3,4])

    const handleInputChange = (e) => {
        const limit = e.target.value
        setLimit(limit)
    }

    const getCats = async (limit = 3, page) => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Desc`
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
        getCats(limit, page)
    }, [limit, page])

    return (
        <>
            <h1>
                Cat List
            </h1>
            <main>
                <form>
                    <select id="limit" onChange={handleInputChange}>
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
                    <select id="order" onChange={handleInputChange}>
                        <option value={'Asc'}>
                            Ascendent
                        </option>
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
