import { useState, useEffect, useRef, useCallback } from 'react'

const initialState = {
    loading: true,
    error: null,
    data: null
}

const useFetch = (url, options) => {
    const {
        method,
        header
    } = options
    const isMounted = useRef(true);
    const [state, setState] = useState(initialState)

    useEffect( () => {
        return () => {
            isMounted.current = false
        }
    }, [])

    const fetchData = useCallback(async() => {
        try{
            if(isMounted){
                const response = await fetch(url, {
                    method,
                    header
                })
                const data = await response.json()
                setState({
                    loading: false,
                    data,
                    error: null
                });
            }
        }catch(error) {
            console.error(error)
        }
        return () => setState(initialState)
    }, [
        url,
        method,
        header
    ])

    useEffect(fetchData, [fetchData])

    return state
}

export default useFetch