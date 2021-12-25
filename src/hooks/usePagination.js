import { useState } from 'react'

const usePagination = (initialState = [1,2,3,4]) => {
    const [page, setPage] = useState(1)
    const [prev, setPrev] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pagination, setPagination] = useState(initialState)

    const changePagination = (current) => {
        if(current >= 1 && current <= totalPages){            
            const items = pagination
            const lengtPagination = items.length - 1

            if(prev > current){
                items.forEach((e, i) => {                    
                    return items[i] = e - 1
                })
            }
            
            if(items.includes(0)){
                items.shift()
                items.push(items[lengtPagination - 1] + 1)
            }
            
            if(prev < current){
                items.forEach((e, i) => {
                    return items[i] = e + 1
                })
            }

            if(items.includes(totalPages + 1)){
                items.pop()
                items.unshift(items[0] - 1)
            }

            setPrev(current)
            setPage(current)
            setPagination([...items])
            return
        }
    }

    return [
        page,
        pagination,
        changePagination,
        setTotalPages
    ]
}

export default usePagination