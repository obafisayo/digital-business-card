import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { ABOUT, APP, SIGNIN, SIGNUP } from '../../routes/RoutesConstant';

const handleclick = () => {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI4MTc3NTQxfQ.9nTcRafBph9qhH5Ojgoz-cjMpavr40Df1dwpELz7Pj4")
}
const Navbar = () => {
  return (
    <section className="border-b-2 bg-white sticky z-50">
      <div className="container py-2">
        <div className="container flex h-14 items-center justify-between">
          <div className='flex justify-between items-center gap-20'>
              <Link to={APP} onClick={handleclick}>
                <h1 className="text-3xl font-bold text-sky-500 transition duration-300 hover:scale-105">BizIn</h1>
              </Link>
            <ul className='inline-flex items-center justify-center gap-4 md:gap-6'>
              <li>
                <Link to={ABOUT}>
                  About
                </Link>
              </li>
              <li className='max-sm:hidden'>
                <Link to={"#contact"}>
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex gap-4'>
            <ul className='inline-flex items-center justify-between gap-4'>
              <li>
                <Link to={SIGNIN}>
                  <Button type='primary'>Login</Button>
                </Link>
              </li>
              <li className='max-sm:hidden'>
                <Link to={SIGNUP}>
                  <Button size='large'>Create free account</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar;
