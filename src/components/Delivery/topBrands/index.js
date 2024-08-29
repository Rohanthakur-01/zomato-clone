import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/prevArrow';
import PrevArrow from '../../common/carousel/nextArrow';
import "./topBrands.css";


const topBrandList = [
    {
      id:1,
      title:"Haldiram's",
      time:"32 min",
      cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",  
    },
    {
        id:2,
        title:"Burger King",
        time:"24 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
    },
    {
        id:3,
        title:"McDonald's",
        time:"27 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
    },
    {
        id:4,
        title:"Domino's Pizza",
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
    },
    {
        id:5,
        title:"KFC",
        time:"21 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
    },
    {
        id:6,
        title:"Bikanervala",
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
    },
    {   
        id:7,
        title:"Subway",
        time:"34 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
    },
    {
        id:8,
        title:"The Yellow Bowl",
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a613366fa9c3efa49d9ac412b6a0fa28_1725705277.png?output-format=webp",
    },
    {
        id:9,
        title:"Khadak Singh Da Dhaba",
        time:"26 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb3db39305a0dfbbd729837f04d6249e_1656137122.png?output-format=webp",
    },
    {
        id:10,
        title:"Punjabi Angithi By Vegorama Group",
        time:"46 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/deb3eec101dbc1ccc3cd238d15a04e1b_1641558038.png?output-format=webp",
    },
];

const settings = { 
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
     <div className='collection-title'>Top brands for you
     </div>
     <Slider {...settings}>
      {topBrandList.map((brand)=>{
        return ( <div>
            <div className='top-brands-cover'>
          <img src={brand.cover} className="top-brands-image" alt={brand.time} />
        </div>
        </div>
        );
      })}
     </Slider>
     </div>
  )
}; 



export default TopBrands; 