import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
        }
    },[params.id, history])


    if(orderDetails.length === 0) return null;

    return (
        <div className="history-page">
            <h3>Payment ID:   {orderDetails.paymentID}</h3>
            <h3>Name: {orderDetails.name}</h3>
            <h3>Address: {orderDetails.address}</h3>
            <h3>Total: ${orderDetails.total}</h3>
            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>  
                            <td>{item.title}</td>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price * item.quantity}</td>
                            
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default OrderDetails