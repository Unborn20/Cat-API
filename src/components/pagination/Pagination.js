import React from 'react'

const Pagination = ({ controlPagination }) => {
    const {pagination, changePagination} = controlPagination

    return (
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
    )
}

export default Pagination
