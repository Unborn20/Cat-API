import React from 'react'
import '../styles/cats.css'

const CatsList = (props) => {
    const { cats } = props
    
    return (
        <section className="container">
                {!cats.length
                    ?
                        <p className="text-center">Loading...</p>
                    :
                        <div className="items-container">
                            {
                                cats.map((e, i) => {
                                    return <img key={i} src={e.url} alt={`cats${i}`} width={160} height={160} draggable={false}/>
                                })
                            }
                        </div>
                }
        </section>
    )
}

export default CatsList