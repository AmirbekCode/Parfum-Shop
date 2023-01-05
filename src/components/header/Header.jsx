import React,{useRef, useEffect} from "react";
import "./header.css";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";



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
const Header = () => {

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  return (
    <header className="header sticky__header">
          <div className="nav-wrapper">
            <div className="logo">
            <h4 className="name-shop">Zamon Parfum</h4>                
              <img src="" />
            </div>


            <div className="navigation " ref={menuRef} onClick={ menuToggle}>
              <ul className="menu">
                {
                    nav__link.map(item=>(
                    <li className="menu__item">
                        <NavLink to={item.path}>{item.display} <div className="indicator"></div></NavLink>    
                    </li>
                    ))
                }
              </ul>
            </div>

            <div className="nav-icons">
              <span className="cart-icon">
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span className="bag-icon" to="cart">
                <i class="ri-shopping-bag-line" to={nav__link.path}></i>
              </span>
              <span className="fav-icon">
                <i class="ri-heart-line"></i>
                <span className="badge"></span>
              </span>
              <span>
                <img src={userIcon} />
              </span>
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
