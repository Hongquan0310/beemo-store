import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import logo from './icon/Beemo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Header() {
    const state=useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const logoutUser = async () =>{
        await axios.get('/user/logout') 
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }
    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">Order History</Link></li>
                <li><Link to="/" onClick={logoutUser} >Logout</Link></li> 
            </>
        )
        //onClick={logoutUser}
    }

    return (
        <header>
           <div className="menu">
                <img src={Menu} alt="" width="30"/>
           </div>
           <div className="logo">
                 <Link to="/"><img src={logo} width="400"></img></Link>  
           </div>
           <ul>
                
                <li> <Link to="/">{isAdmin ? 'Product-Admin' : 'Watches'}</Link></li>
                <li> <Link to="/ourworld">{isAdmin ? 'OUR WORLD-admin' : 'OUR WORLD'}</Link></li>
                {isAdmin && adminRouter()}

                    {
                        isLogged ? loggedRouter() : <li><Link to="/login">Login/Register</Link></li>
                    }
               <li>
                   <img src={Close} width="30" className="menu"></img>
               </li>
           </ul>
           {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
        </header>
    )
}
export default Header