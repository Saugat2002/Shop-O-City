import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart , clearCart , itemAmount , total} = useContext(CartContext);
  return (
    <>
      <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
          <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center hover:scale-125 transition-all duration-200'>
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        <div className='flex flex-col gap-y-2 h-[350px] overflow-y-auto overflow-x-hidden border-b px-2'>
          {cart.map((item) => {
          return (
            <CartItem item={item} key={item.id} />
          );
        })}
        </div>
        <div className='flex flex-col gap-y-3 py-4 mt-4'>
          <div className='flex w-full justify-between items-center'>
            {/* total  */}
            <div className='uppercase font-semibold '>
              <span className='mr-2'>Total:</span>Rs. {total}
            </div>
            {/* clear cart icon  */}
            <div onClick={clearCart} className='cursor-pointer py-4 w-12 h-12 flex justify-center items-center text-xl rounded-full hover:bg-[#DEFCF9] transition-all duration-150'>
              <FiTrash2 />
            </div>
          </div>
          <Link onClick={handleClose} to='/' className='bg-gray-200 hover:bg-gray-300 flex p-3 justify-center items-center text-primary w-full font-medium hover:scale-105 transition-all'>Continue Shopping</Link>
          <Link to='/' className='bg-[#1e1b81] hover:bg-[#3b35f7] flex p-3 justify-center items-center text-white w-full font-medium hover:scale-105 transition-all'>Proceed to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

