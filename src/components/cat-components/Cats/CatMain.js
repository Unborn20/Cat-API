import React, { useState, useEffect, useCallback } from 'react'
import usePagination from '../../../hooks/usePagination'
import fetchCats from '../../../requests/fetchCats'
import CatFilters from './CatFiltersOrder'
import CatsList from './CatsList'
import Pagination from '../../pagination/Pagination'

const CatMain = () => {
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState(3)
    const [order, setOrder] = useState('Desc')
    const [
        page,
        pagination,
        prev,
        changePagination,
        setTotalPages
    ] = usePagination([1,2,3,4,5,6,7])

    const setFilter = useCallback((limit, order) => {
        setLimit(limit)
        setOrder(order)
    }, [setLimit, setOrder])

    const getCats = useCallback(async (limit, page, order) => {        
        setCats([])
        const [cats, totalPages] = await fetchCats(limit, page, order)
        setCats(cats)
        setTotalPages(totalPages)        
    }, [setCats, setTotalPages])

    useEffect(() => {
        getCats(limit, page, order)
    }, [
        getCats,
        limit,
        page,
        order
    ])

    return (
        <>
            <h1 className="text-center light-blue f-5">
                Cat List 😸
            </h1>
            <main >
                <CatFilters limit={limit} order={order} filters={setFilter}/>
                <CatsList cats={cats} />
                <Pagination controlPagination={{pagination, changePagination, prev}} />
            </main>
        </>
    )
}

export default CatMain