import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  
} from 'reactstrap';


const listPolicy =[
        { content:"Miễn phí vận chuyển  cho đơn hàng trên 200k",
        id:1
      },
       {content:"60 ngày đổi trả bất kỳ lí do nào",
       id:2} ,
        {content:"Đến tận nơi nhận hàng trả và hoàn tiền trong 24h",
        id:3}
]

const items = [
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/August2022/COMBO-GIAM-GIA---T7_15.jpeg',
      
      id: 1,
    },
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Banner-Coolmate-Active-opt-1.jpeg',
      
      id: 2,
    },
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/August2022/Banner-CXp-2.jpeg',
      
      id: 3,
    },
    {
        src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Excool-Banner-website.jpeg',
        
        id: 4,
      },
      
  ];

export default function SliderBanner(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={item.src}  />
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
      
    );
  });

  return (
    <div className='slide'>
        <div >
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
            <CarouselIndicators
            className=''
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                
            
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
               
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </Carousel>

        </div>
        <div className='policy'>
            {

                listPolicy.map((policy) => {
                    return (<span key={policy.id}>{policy.content}</span> )
                   
                })
            }
        </div>
       
    </div>
    
  );
}


