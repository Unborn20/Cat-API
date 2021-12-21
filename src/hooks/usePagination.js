import {useState} from 'react'

const usePagination = (initialState = [1,2,3,4]) => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pagination, setPagination] = useState(initialState)

    const changePagination = (current) => {        
        if(current >= 1 && current <= totalPages){            
            const items = pagination
            const prev = items[0]
            const next = items[items.length - 1]
            const prevItems = items

            switch(current){
                case prev:
                    items.forEach((e, i) => {                        
                        if(current === 1) return setPagination([...prevItems])
                        return items[i] = e - 1
                    })
                    break
                case next:                    
                    items.forEach((e, i) => {                        
                        if(current === totalPages) return setPagination([...prevItems])
                        return items[i] = e + 1
                    })
                    break
                default:
                    break
            }
            
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
