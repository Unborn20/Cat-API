import React from 'react'
import './styles/pagination.css'

const Pagination = ({ controlPagination }) => {
    const {pagination, changePagination} = controlPagination

    return (
        <footer className="pagination-center mt-5">
            {
                pagination.map((element, index) => {
                    return (
                        <button key={index} className="buttons-pagination" onClick={() => changePagination(element)}>
                            {element}
                        </button>
                    )
                })
            }
        </footer>
    )
}

export default Pagination
