import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {
    return (
        <>
            <header>
            <Navbar/>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;