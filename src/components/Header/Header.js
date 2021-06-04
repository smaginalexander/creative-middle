import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(props) {
    return (
        <header className="header">
            {/* устанавиваем классы в зависимости от роута */}
            <div className={props.location.pathname === '/' ? "cats-active cats_type_all" : 'cats cats_type_all'}>
                <Link
                    to="/"
                    className={props.location.pathname === '/' ? "header__link-active" : 'header__link'}>Все квартиры</Link>
            </div>
            <div className={props.location.pathname === '/saved-cards' ? "cats-active cats_type_saved" : 'cats cats_type_saved'}>
                <Link to="/saved-cards" className={props.location.pathname === '/saved-cards' ? "header__link-active" : 'header__link'}>Любимые квартиры</Link>
            </div>
        </header>
    );
}

export default Header;