import React, { Fragment } from 'react'
import './styles/pagination.css'

const Pagination = ({ controlPagination }) => {
    const {pagination, prev, changePagination} = controlPagination

    return (
        <footer className="pagination-center mt-5">
            {
                pagination.map((element, index) => {
                    return (
                        <Fragment key={index}>
                            {prev === element 
                                ?
                                    <button className="button-selected" onClick={() => changePagination(element)}>
                                        {element}
                                    </button>
                                :
                                    <button className="buttons-pagination" onClick={() => changePagination(element)}>
                                        {element}
                                    </button>
                            }
                        </Fragment>
                    )
                })
            }
        </footer>
    )
}

export default Pagination
