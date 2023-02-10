import React from 'react';
import WomanImg from '../img/shahrukh_khan_hero_pic.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <section className='h-[800px] bg-[#DEFCF9] bg-no-repeat bg-cover bg-center py-24 '> 
      <div className="container mx-auto flex justify-around h-full">
        {/* text  */}
        <div className='flex flex-col text-center xsm:text-left justify-center z-10 text-[#b49831]'>
          <div className='hidden xsm:flex font-semibold items-center uppercase'>
            <div className='w-10 h-[2px] bg-[#3273eb] mr-10'></div>New Trend
          </div>
          <h1 className='text-[50px] xsm:text-[70px] leading-[1.1] font-light mb-4 '>LOOK FAMOUS<br/>
            <span className='font-semibold'>BE A TRENDSETTER</span>
          </h1>
          <Link to='/' className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More  </Link>
        </div>
        {/* image  */}
        <div className='absolute hidden xsm:block z-1 lg:static'>
          <img className= "h-full" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
