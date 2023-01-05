import React from 'react';
import {useParams} from "react-router-dom"
import products from "../assets/data/products"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/Ul/CommonSection"
import "../styles/productdetails.css"
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice'
import {  toast } from 'react-toastify';

const  ProductDetails = ({ item }) => {

    const dispatch = useDispatch()
    const addToCard = () => {
        dispatch(cartAction.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }))

    }


    const { id } = useParams();
    const product = products.find((item) => item.id === id)
    const {imgUrl, productName, price, description} = product

    return (
            <section className='ProductDetails padding-default'> 
                <img src={imgUrl} className="product-d-img" />
                <div className="product_details">
                    <h1 className='product__name'>{productName}</h1>
                    <h4 className="product__price">{price}$</h4>
                    <p>{description}</p>
                    
                    <span className='solid' onClick={addToCard}>
                        <i className="ri-shopping-cart-line"></i>
                        Buyurtma qilish
                    </span>
                </div>

            </section>

     );
}

export default ProductDetails;