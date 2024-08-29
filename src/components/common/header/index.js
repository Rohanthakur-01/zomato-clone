import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <div className="max-width header">
      <img 
      src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
      alt='Zomato-logo'
      className='header-logo'
      />  
      <div className='header-right'>
        <div className='header-location-search-container'>
         <div className='location-wrapper'>
          <div className='location-icon-name'>
          <i className="fi fi-rr-marker absolute-center location-icon">

          </i>
          <div>Bangalore</div>
          </div>
          <i className="fi fi-rr-caret-down absolute-center"></i>
         </div>
         <div className='location-search-separator'></div>
          <div className='header-searchBar'>
          <i class="fi fi-rr-search absolute-center search-icon"></i>
          <input
          placeholder='search for a restaurant, cuisine or a dish'
          className='search-input'
          />
         </div>
         </div>
         <div className='profile-wrapper'>
         <img src="https://b.zmtcdn.com/data/user_profile_pictures/ee2/c45c57322bd1fbdb0f6a3d499f51cee2.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className='header-profile-image'
         />
         <span className='header-username'>Rohan</span>
         <i class="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
         </div>
        </div>
      </div>
  )
}

export default Header;