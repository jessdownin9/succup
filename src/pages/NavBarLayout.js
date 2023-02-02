import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../features/navigation/NavigationBar';

export const NavBarLayout = () => {
    return (
        <div>
            <NavigationBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
};

export default NavBarLayout;