import { useState ,useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet'
import HeroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
import ProductList from '../components/Ul/ProductList'
import products from '../assets/data/products'
import '../styles/home.css'
const Home = () => {
    // const [data , setData] = useState(products)
    const [ trendingProducts , setTrendingProducts] = useState([])
    const [ wirlessProducts ,  setWirlessProducts] = useState([])
    const [ mobileProducts ,  setMobileProducts] = useState([])
    const [ saleProducts ,  setSaleProducts] = useState([])

    useEffect(() =>{
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
    return(
        <Helmet title="Asosiy">
            <section className='Hero padding-default'>
                <div className="hero-content">
                    <p className="hero-subtitle">Topdagi mahsulotlar</p>
                    <h2>Bizning mahsulotlarni sotib olish orqali keyingi mahsulotga 10%lik chegirma oling</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur  Aut, eum. Incidunt, cum error blanditiis nisi dolorum sed sint laboriosam voluptatibus quo ipsam ad, veritatis repellat recusandae ea?</p>
                    <button className='buy-btn'><Link to="shop"> Ko'rish</Link> </button>
                </div>
                <div className='hero-img'>
                    <img src={HeroImg} />
                </div>
            </section>
            <div className='Services padding-default'>
               <Services/> 
            </div>
            <section className='trending-products padding-default'>
                <h2 className="section-title">Mashhur Tovarlar</h2>
                <ProductList data={trendingProducts}/>
            </section>
            <section className='padding-default arrival__products'>
            <h2 className="section-title">Telefonlar</h2>
            <div className='arrival-products'>
                <ProductList data={mobileProducts}/>
            </div>     
            
            </section>
        </Helmet>
        
    )

}

export default Home;