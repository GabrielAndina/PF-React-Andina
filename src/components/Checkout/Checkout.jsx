import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { db } from '../../services/firebase'
import './Checkout.css'

const Checkout = () => {
    const[user, setUser]=useState({})
    const[validateEmail, setValidateEmail]= useState('')
    const[orderId, setOrderId]= useState('')
    const {cart, clear} = useContext(CartContext)
    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('Los campos son obligatorios.')
        }else{
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

            let order = {
                user,
                item: cart,
                total: totalAmount,
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
  return (
    <div>
        {orderId !== ''
        ?<div className='form-container'>
            <h2>¡Felicitaciones! Tu orden fue registrada con exito.</h2>
            <h5>Su id de registro es: {orderId}</h5>
        </div>
        :<div className='form-container'>
        <h2>Terminar compra</h2>
        <h5>Por favor llenar sus datos</h5>
        <form onSubmit={finalizarCompra}>
            <div>
                <label>Nombre Completo</label>
                <input type="text" onChange={datosComprador} placeholder='Nombre y Apellido' name='name' />
            </div>
            <div>
                <label>Número de telefono</label>
                <input type="number" onChange={datosComprador} placeholder='3816463984' name='phone' />
            </div>
            <div>
                <label>Direccion de email</label>
                <input type="email" onChange={datosComprador} placeholder='gab@gmail.com' name='mail' />
            </div>
            <div>
                <label>Repita su direccion de email</label>
                <input type="email" placeholder='gab@gmail.com' name='mail' onChange={(e)=>setValidateEmail(e.target.value)} />
            </div>
            <button type='submit' disabled={validateEmail !== user.mail}>Generar Orden</button>
        </form>
    </div>}
    </div>
  )
}

export default Checkout