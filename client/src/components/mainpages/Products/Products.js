import React, {useContext, useState} from 'react'
import ProductItem from '../utils/productItem/ProductItem'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import Filters from './Filters'
import axios from 'axios'
import LoadMore from './LoadMore'
function Products() {
    const state = useContext(GlobalState)
    const [products,setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback,setCallback]=state.productsAPI.callback
    const[loading,setloading]=useState(false)
    const deleteProduct = async(id,public_id)=>{
            try {
                setloading(true)
                const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
                const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setloading(false)
            } catch (err) {
                alert(err.response.data.msg)
            }
    }
    
    if(loading) return  <Loading/>
    return (
        <>
            <Filters/>
            <div className="products">
                {
                    products.map(product => {
                    return <ProductItem key={product._id} product={product} isAdmin={isAdmin} deleteProduct={deleteProduct} />
                    })
                }
                
            </div>
            <LoadMore/>
            {products.length === 0 && <Loading />}
        </>
    )
}

export default Products