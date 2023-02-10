import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'

const Header = () => {
  const [isActive , setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
  })
})

  return (
    <>
    <header className = {`${isActive ? ' py-7 shadow-md bg-white' : 'py-6 bg-none'}  fixed w-full h-fit z-20 transition-all duration-200`}>
      <div className='pl-3 pr-10 flex items-center justify-between'>
        {/* logo  */}
        <Link to='/'>
          <div className='absolute '>
            <img className='h-[75px] relative -top-9 flex items-center justify-center' src={Logo} alt="" />
          </div>
        </Link>
        {/* cart  */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative hover:scale-125 transition-all duration-200">
          <BsBag className='text-2xl' />
          <div className='bg-[#3b35f7] absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
