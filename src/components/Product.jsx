import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext'; 

const Product = ({ product }) => {

  const {addToCart} = useContext(CartContext);

  // destructuring product
  const { id, image, category, title, price } = product;

  return (
    <>
      <div className='flex flex-col'>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
          {/* image */}
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              <img className='max-h-[160px] group-hover:scale-110 trasition duration-300' src={image} alt="" />
            </div>
          </div>

          {/* Buttons  */}
          <div className='absolute top-1  -right-10 group-hover:right-1 p-1 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button>
              <div onClick={() => addToCart(product, id)} className='flex justify-center items-center text-white w-10 h-10 bg-[#3b35f7] active:bg-[#2e29c9]'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
              <BsEyeFill />
            </Link>
          </div>
        </div>

        {/* category , title and price */}
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
            <Link to={`product/${id}`}>
              <h2 className='font-semibold mb-1'>{title}</h2>
            </Link>
          <div className='font-semibold'>Rs. {Math.round(price*131.89)}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
