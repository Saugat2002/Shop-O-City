import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  });

  // If product is not found 
  if (!product) {
    return (
      <>
        <section className='h-screen flex justify-center items-center'>
          Loading...
        </section>
      </>
    )
  }

  // destructuring product 
  const { title, description, price, image } = product;
  const priceNrs = Math.round(price * 131.89);

  return (
    <>
      <section className='pt-32 pb-12 lg:py-32 h-fit'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center'>
            {/* image  */}
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
            </div>
            {/* text  */}
            <div className='flex-1 text-center lg:text-left '>
              <h1 className='text-[30px] font-medium mb-2 mx-auto lg:mx-0 max-w-[450px]'>{title}</h1>
              <div className='text-xl text-[#3fa0e0] font-medium mb-6'>Rs. {priceNrs}</div>
              <p className='mb-8 '>{description}</p>
              <button onClick={() => addToCart(product,product.id)} className='bg-[#1e1b81] hover:bg-[#3b35f7] py-4 px-8 text-white hover:scale-105 transition-all'>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
