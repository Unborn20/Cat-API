const fetchCats = async (limit = 3, page = 1, order = 'Desc') => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`
    const options = {
        method: 'GET',
        headers: {
          'x-api-key': window.env.REACT_APP_CAT_KEY
        }
    }
    try{
        const response = await fetch(url, options)
        const cats = await response.json()
        const paginationLength = Number(response.headers.get('pagination-count'))
        const totalPages = Math.floor(paginationLength / limit)
        return [cats, totalPages]
    }catch(err){
        console.error(err)
    }
}

export default fetchCats
