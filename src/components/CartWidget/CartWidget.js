import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
    <img src= 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png' alt='icono de carrito' width={50} height={50} />
    { totalQuantity }
   </Link>
  )
}

export default CartWidget