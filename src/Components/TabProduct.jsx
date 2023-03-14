import React, { useState,useRef} from 'react';
import useFetch from '../ultils/fetch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import '../style/home.scss'




function TabsProduct(){
    const { data: titleTabs, isLoading}
    = useFetch("tabs", false);     
    const [tab, setTab] = useState()

    if(isLoading === false && titleTabs.length > 0 && !tab){
      setTab(titleTabs[0].title)
    }
   const { data: dataProducts,isLoading:loadDataProducts }
      = useFetch(`products/?q=${tab}`, false); 
            
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
            {titleTabs.map((item) => (
                <div
                    className={`category-name ${
                      tab === item.title
                        ? "on-click"
                        : "not-on-click"
                    }`}
                    key={item.id}
                    onClick={() => setTab(item.title)}
                >
                    {item.title}                      
                </div>
            ))}
        </div>
        {dataProducts&& 
            <div className="slick-container">
                <Slider {...settings}>
                    
                    {dataProducts.map((child,index) => {                      
                        return ( 
                          <div className="container-product">
                            <Product products ={child}  index={index} key={child.id}/>
                          </div>
                        
                        
                        )
                    }
                    )}
                </Slider>
            </div>
           
        }
        </>
        }
      
    </div>
    
    
  );
}

export default  TabsProduct;