import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { BasicProvider } from '../../contexts/BasicContext';

const AppLayout = () => {
  

  return (
    <div>
      <main>
      <BasicProvider>
        <Sidebar
          children={<Outlet />}
        />
      </BasicProvider>
      </main>
    </div>
  )
}

export default AppLayout;
