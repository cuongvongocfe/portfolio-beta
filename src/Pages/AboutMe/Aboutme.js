import React from 'react';
import AboutmeImg from '../../assets/Banner/banner-kayo-3.jpg';
import Tab from '../../Components/Tab';
const Aboutme = () => {
    return (
      <div>
        <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img className="rounded-3xl hover:border-2 hover:border-secondary" src={AboutmeImg} alt="banner" />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center lg:py-20">
       
          <Tab></Tab>
          <a href='w' className='btn btn-info m-12 hover:btn-secondary hover:font-bold'>Dowload Resume</a>
        </div>
        </div>
       
      </div>
      </div>
    );
};

export default Aboutme;