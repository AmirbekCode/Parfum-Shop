import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom"

const nav__link = [
    {
        path: "home",
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
function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
            <h4 className="name-shop">Zamon Parfum</h4>                
              <img src="" />
            </div>


            <div className="navigation">
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
                <span className="badge">0</span>
              </span>
              <span className="bag-icon">
                <i class="ri-shopping-bag-line"></i>
              </span>
              <span className="fav-icon">
                <i class="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>
              <span>
                <img src={userIcon} />
              </span>
            </div>
            <div className="mobile-menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
