import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import Logo from '../../assets/images/logotip.png'
import products from "../../assets/data/products"
const nav__link = [
  {
    path: "/",
    display: 'Asosiy'
  },
  {
    path: "shop",
    display: 'Do`kon'
  },
  {
    path: "Cart",
    display: 'Sotib Olish'
  },
]
const Header = ({ setProductsData }) => {

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <header className="header sticky__header padding-default">
      <div className="nav-wrapper">
        <NavLink to='/'>
        <div className="logo">
          <img src={Logo} className='logoimg'/>
          <h4 className="name-shop">Zamon SHOP</h4>
        </div>          
        </NavLink>

        <div className="navigation " ref={menuRef} onClick={menuToggle}>
        </div>

        <div className="nav-icons">
          <NavLink to="/">
            <span className="fav-icon">
              <i class="ri-home-line"></i>
            </span>
          </NavLink>
            <NavLink to="/shop">
          <span className="fav-icon" to="cart">
              <i class="ri-shopping-bag-line" to={nav__link.path}></i>
              <span className="korzina">Все товары</span>
          </span>
            </NavLink>
          <NavLink to="/cart">
            <span className="cart-icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="korzina">Корзина</span>
              <span className="badge">{totalQuantity}</span>
            </span>
          </NavLink>
          <div className="mobile-menu">
            <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
