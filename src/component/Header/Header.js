import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
      <div className='py-5'>
        <nav className='flex justify-center gap-x-4'>
          <CustomLink to="/home">HOME</CustomLink>
          <CustomLink to="/reviews">REVIEWS</CustomLink>
          <CustomLink to="/dashboard">DASHBOARD</CustomLink>
          <CustomLink to="/blogs">BLOGS</CustomLink>
          <CustomLink to="/about">ABOUT</CustomLink>
        </nav>
      </div>
    );
};

export default Header;