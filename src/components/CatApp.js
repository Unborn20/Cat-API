import React, { useEffect, useState } from 'react'

const CatApp = () => {
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState(3)
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState([1,2,3,4])

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
    
    useEffect(() => {
        getCats(limit, page)
    }, [limit, page])

    return (
        <div>
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
                </form>
                {!cats.length 
                    ?
                        <p>Loading...</p>
                    :                    
                        cats.map((e, i) => {
                            return <img key={i} src={e.url} alt={`cats${i}`} width={160} height={160}/>
                        })
                }
                <footer>
                    {
                        pagination.map((element, index) => {
                            return (
                                <button key={index} onClick={() => changePagination(element)}>
                                    {element}
                                </button>
                            )
                        })
                    }
                </footer>
            </main>
        </div>
    )
}

export default CatApp
