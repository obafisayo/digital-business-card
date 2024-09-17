import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

const AppLayout = () => {
  

  return (
    <div>
      <main>
        <Sidebar
          children={<Outlet />}
        />
      </main>
    </div>
  )
}

export default AppLayout;
