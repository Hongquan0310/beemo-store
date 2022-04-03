import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import cartempty from './icon/cart.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
   

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])
    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
   
    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }
    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }
    
    const [Payment, setPayment] = useState({
        address:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setPayment({...Payment, [name]:value})
    }

    const paymentSubmit = async e =>{
        e.preventDefault()
        const {paymentID, address} = Payment;
        await axios.post('/api/payment', {total,cart, address}, {
            headers: {Authorization: token}
        })
        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0) 
    return (
        <div>
            <h1 style={{textAlign: "center",margin:"35px"}}>You are not select the product.</h1>
            <img style={{display: "block",margin: "0 auto"}} src={cartempty}  width="250" alt=''></img>
            <h1 style={{textAlign: "center",margin:"35px"}}>Cart Empty</h1>
            <a style={{display: "block",margin: "0 auto"} }className="submit" href="/"><span className="btn1">BACK</span></a>
        </div>
        
     )    
     return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }
            <form onSubmit={paymentSubmit}>
                <div className='box-detail'>
            
                <h2>Payment methods</h2>
                <div className="row1">
                    <input style={{textAlign:"left",margin: "10px "}} type="radio" defaultChecked value="COD" name="Paymentmethods"/>Cash On Delivery
                </div>
                <h2>Address</h2>
                <input style={{width:" 100%",margin: "10px "}} type="text" name="address" value={Payment.address} required placeholder="Address" onChange={onChangeInput}/>
                </div>
                <div onSubmit={paymentSubmit} className="total">
                    <h2>Total: $ {total}</h2>
                    <button  type="submit">payment</button>
                </div>
            </form>
            
        </div>
)
   
    
}

export default Cart