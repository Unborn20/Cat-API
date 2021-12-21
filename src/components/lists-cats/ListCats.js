import React from 'react'

const ListCats = (props) => {
    const { cats } = props
    return (
        <>
            {!cats.length 
                ?
                    <p>Loading...</p>
                :                    
                    cats.map((e, i) => {
                        return <img key={i} src={e.url} alt={`cats${i}`} width={160} height={160}/>
                    })
            }
        </>
    )
}

export default ListCats
