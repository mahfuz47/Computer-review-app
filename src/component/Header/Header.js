import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
      <div className="py-5">
        <nav className="flex justify-center gap-x-4">
          <CustomLink className="font-mono" to="/">
            HOME
          </CustomLink>
          <CustomLink className="font-mono" to="/reviews">
            REVIEWS
          </CustomLink>
          <CustomLink className="font-mono" to="/dashboard">
            DASHBOARD
          </CustomLink>
          <CustomLink className="font-mono" to="/blogs">
            BLOGS
          </CustomLink>
          <CustomLink className="font-mono" to="/about">
            ABOUT
          </CustomLink>
        </nav>
      </div>
    );
};

export default Header;