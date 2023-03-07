import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const NavBarLayout = () => {
    const { isOpen } = useShoppingCart();
    return (
        <div>
            <NavigationBar />
            <div>
                <div className={isOpen ? 'main-fade' : 'main'}></div>
                <Outlet />
            </div>
        </div>
    )
};

export default NavBarLayout;