import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar.jsx';

function LandingPageLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LandingPageLayout;
