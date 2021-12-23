import React from 'react'
import './styles/cats.css'

const ListCats = (props) => {
    const { cats } = props
    return (
        <section className="container">
            <div className="items-container">
                {!cats.length 
                    ?
                        <p>Loading...</p>
                    :                    
                        cats.map((e, i) => {
                            return <img key={i} src={e.url} alt={`cats${i}`} width={160} height={160}/>
                        })
                }
            </div>
        </section>
    )
}

export default ListCats
