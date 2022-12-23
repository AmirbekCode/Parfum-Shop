import React from 'react';
import '../../styles/productcard.css'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/slices/cartSlice'
import {  toast } from 'react-toastify';
function ProductCard({ item }) {
    const dispatch = useDispatch()
    const addToCard = () => {
        dispatch(cartAction.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }))
        toast.success('Buyurtmangiz qabul qilindi')
    }



    return (
        <div className="product-item">
            <div className="product-img">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="product__info">
                <h3 className='product_name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span>{item.category}</span>
                <div className="product-card_bottom">
                    <span className="price">{item.price} so'm</span>
                    <span className='buy__item' onClick={addToCard}>
                        <i className="ri-shopping-cart-line" ></i>
                    </span>
                </div>
            </div>

        </div>

    );
}

export default ProductCard;