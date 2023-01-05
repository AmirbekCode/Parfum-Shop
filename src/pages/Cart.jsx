import React from 'react';
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css'
import {cartAction} from "../redux/slices/cartSlice"
import {useSelector, useDispatch} from "react-redux"
import Services from '.'

function Cart() {

    const cartItems = useSelector((state)=> state.cart.cartItems);


    return ( 
        <div>
            <Helmet title="Cart">
                <section className='padding-default tableCart'>
                    {
                        cartItems.length===0 ? <h2 className='nothing'>Siz hech narsa buyurtma qilmadingiz !</h2>:
                        <table>
                            <thead>
                            <tr>
                                <th>Rasm</th>
                                <th>Nomi</th>
                                <th>Narxi</th>
                                <th>Soni</th>
                            </tr>                        
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, index)=> (
                                    <tr >
                                        <td><img src={item.imgUrl} className="tdimg"/></td>
                                        <td className='product-name-c'>{item.productName}</td>
                                        <td>{item.price}.000.so'm</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                    ))                                
                                }

                            </tbody>                        
                        </table>
               
                    }
                    <section className='checkoutList'>
                        <h3>Umumiy Summa</h3>
                    </section>                     
                </section>
            </Helmet>
        </div>
     );
}

// const Tr = ({item}) => {
//     return  <tr >
//     <td><img src={item.imgUrl} className="tdimg"/></td>
//     <td className='product-name-c'>{item.productName}</td>
//     <td>{item.price}.000.so'm</td>
//     <td>{item.quantity}</td>
//     <td><i class="fa-solid fa-trash"></i></td>                                
// </tr>
// }

export default Cart;