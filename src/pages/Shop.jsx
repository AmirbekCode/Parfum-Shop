
import React,{useState} from 'react';
import CommonSection from '../components/Ul/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import ProductList from '../components/Ul/ProductList'
import "../styles/shop.css"
import products from "../assets/data/products"

const str = null;

const result = typeof str === 'string' ? str.toLowerCase() : '';

console.log(result); // 👉️ ""


function Shop() {

    const [productsData , setProductsData] = useState(products)

    const handleSearch = e=> {
        const searchTerm = e.target.value 

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    return (
            <Helmet title="Do'kon" >
                <div className="padding-default">
                <CommonSection title="Products"/>  
                <section>
                    <div className="search-box">
                        <span className='icon-box'>                        
                        <input type="text" placeholder='Atirlarni qidirish...' className='searchbar' onChange={ handleSearch } />
                        <i className="fa-solid fa-search"></i>
                        </span>
                    </div>    
                </section>
                <section>
                    {
                        productsData.length === 0 ? (
                        <h1 className="noneword">Hech narsa topilmadi !</h1>
                        ):(
                        <ProductList data={productsData} className="products-shop"/>
                    )}    
                </section>
                </div>
            </Helmet>

     );
}

export default Shop;