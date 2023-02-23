import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet'
import HeroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
import ProductList from '../components/Ul/ProductList'
import IndividualIntervalsExample from '../components/Carausel/Carausel';
import products from '../assets/data/products'
import Vector from '../assets/images/Vector.svg'
import '../styles/home.css'
const Home = () => {
    // const [data , setData] = useState(products)
    const [trendingProducts, setTrendingProducts] = useState([])
    const [wirlessProducts, setWirlessProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])

    const [productsData, setProductsData] = useState(products)

    const handleSearch = e => {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    useEffect(() => {
        const filtrredProducts = products.filter(
            item => item.category === "chair"
        );

        const filtrredTrendingProducts = products.filter(
            item => item.category === "chair"
        );

        const filtrredWirelessProducts = products.filter(
            item => item.category === "wireless"
        );
        const filtrredMobileProducts = products.filter(
            item => item.category === "mobile"
        );

        const filtrredSaleProducts = products.filter(
            item => item.category === "sofa"
        );
        setTrendingProducts(filtrredTrendingProducts);
        setWirlessProducts(filtrredWirelessProducts);
        setMobileProducts(filtrredMobileProducts);
        setSaleProducts(filtrredSaleProducts);

    }, []);
    return (
        <Helmet title="Asosiy">
            {/* <section className='Hero padding-default'>
                <div className="hero-content">
                    <p className="hero-subtitle">Topdagi mahsulotlar</p>
                    <h2>Bizning mahsulotlarni sotib olish orqali keyingi mahsulotga 10%lik chegirma oling</h2>
                    <button className='buy-btn'><Link to="shop"> Ko'rish</Link> </button>
                </div>

            </section> */}
            <div className="Hero">
                <IndividualIntervalsExample />
            </div>
            <div className='Services padding-default'>
            </div>
            <section className='trending-products padding-default'>
                <h2 className="section-title"><span>Распродажа</span>  <img src={Vector} /></h2>
                <ProductList data={trendingProducts} />
            </section>
            <div className="Hero">
                <IndividualIntervalsExample />
            </div>
            <section className='padding-default arrival__products'>
                <h2 className="section-title"> <span>Любимые ароматы</span> <img src={Vector} /></h2>
                <div className='arrival-products'>
                    <ProductList data={mobileProducts} />
                </div>
                <div>

                </div>
            </section>
        </Helmet>

    )

}

export default Home;