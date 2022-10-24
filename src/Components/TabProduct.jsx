import React, { useState ,useEffect} from 'react';
import useFetch from '../customize/fetch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";
import ListProduct from './ListProduct';
import Product from './Product';
import '../style/Home.scss'




function TabsProduct(){
    const { data: titleTabs, isLoading}
    = useFetch(`http://localhost:3004/homeProducts`, false);     
    
     
    
    const [isSelected, setIsSelected] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    const handleChangeType = (index) => {
        setIsSelected(true)
        setSelectedIndex(index)
        
      }
    const settings = {        
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 2,
      autoplaySpeed:2000,
      autoplay: true,                     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2, 
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   
    
  return (

    <div className="category-container">
        {isLoading === false && titleTabs.length > 0  &&
        <>
       
        <div className="second-slogan">Mặc Ngay, Yêu Luôn</div>
        <div className="category-title">
            {titleTabs.map((type, index) => (
                    
                <div
                    className={`category-name ${
                    isSelected && selectedIndex === index
                        ? "on-click"
                        : "not-on-click"
                    }`}
                    key={type.id}
                    onClick={() => handleChangeType(index)}
                >
                    {type.title}
                    {type.attention && <span className="tag">{type.attention}</span>}      
                    
                </div>
            ))}
        </div>
        {titleTabs[selectedIndex]?  
            <div className="slick-container">
                <Slider {...settings}>
                    
                    {titleTabs[selectedIndex].products.map((child,index) => {                      
                        return ( 
                        <Product products ={child}  index={index} key={child.id}/>
                        
                        )
                    }
                    )}
                </Slider>
            </div>
            : <h2>Chưa có sản phẩm</h2>
        }
        </>
        }
      
    </div>
    
    
  );
}

export default  TabsProduct;