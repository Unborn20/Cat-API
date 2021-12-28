import React,{useEffect} from 'react'

const CatsByBreed = () => {
    useEffect(() => {
        console.log('Cats By Breed')
        return () => {
            console.log('Cats By Breed return')
        }
    }, [])
    return (
        <h1 className="text-center light-blue f-5">
            Cats By Breed 😸
        </h1>
    )
}
export default CatsByBreed;