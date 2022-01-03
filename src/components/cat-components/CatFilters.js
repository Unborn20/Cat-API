import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

const CatFilters = React.memo(({ limit, order, filters }) => {    
    const [values, handleInputChange] = useForm({
        limit,
        order
    })
    const { limit: formLimit, order: formOrder } = values

    useEffect(() => {
        filters(formLimit, formOrder)
        return () => {
            filters(3, 'Desc')
        }
    }, [filters, formLimit, formOrder])

    return (
        <form className="filters">
            <select name="limit" value={formLimit} className="input-filter m-2 text-center" onChange={handleInputChange}>
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
            <select name="order" value={formOrder} className="input-filter m-2" onChange={handleInputChange}>
                <option value={'Desc'}>
                    Descendent
                </option>
                <option value={'Rand'}>
                    Random
                </option>
            </select>
        </form>
    )
})

export default CatFilters
