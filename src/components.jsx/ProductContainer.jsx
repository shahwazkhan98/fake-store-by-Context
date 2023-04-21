import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../context/product/ProductContext'
import { getData } from '../context/product/ProductAction'

const ProductContainer = () => {

    const { products , dispatch } = useContext(ProductContext)

    const fetchData = async () => {
        const data = await getData()
        dispatch({
            type : "GET_DATA",
            payload : data
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(!products){
        return(
            <h1>No Products Available</h1>
        )
    }

    return (
        <>
            <div className="container">

                <h1 className="all-products-title">
                    All Products
                </h1>

                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }

            </div>
        </>
    )
}

export default ProductContainer
