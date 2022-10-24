 import SlideBanner from '../Components/SliderBanner'
 import TabsProduct from '../Components/TabProduct'
 import Card from '../Components/Card'
import Basic from '../Components/Basic'

 import Collection from '../Components/Collection'
 
 import '../style/home.scss'






 export default function Home(){
    const cleandenim ={
        linkImage:"https://mcdn.coolmate.me/image/August2022/mceclip0.jpg",
        title:"Coolmate's CLEAN DENIM",
        content:[{content:"Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng  và trồng bằng quy trình sạch, bền vững. Chiếc quần với vải Denim được dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex /- nhà máy với nhiều trang máy móc, thiết bị hiện đại với quy trình sản xuất khép kín, giảm thiểu CO2 và nước thải ra môi trường.",
                    key:1}],
        
    }
    const excool ={
        linkImage:"https://mcdn.coolmate.me/uploads/January2022/ao_(1)_1_(1)_(1).jpg",
        title:"Dòng sản phẩm công nghệ EXCOOL",
        content:[{content:"Công nghệ Việt cho người Việt. Với hơn 100.000 sản phẩm đã được gửi đến tay khách hàng sử dụng và hài lòng",
                    key:1}],
        
    }
    const shoppingWithCool ={
        linkImage:"https://mcdn.coolmate.me/uploads/January2022/ao_(1)_1_(1)_(1).jpg",
        title:"Trải nghiệm mua sắm hài lòng với #Coolmate",
        content:[{
            content:"Giá cả hợp lý",
            key:1,
        },
        {
            content:"Dịch vụ 100% hài lòng",
            key:2,
        },
        {
            content:"60 ngày đổi trả",
            key:3,
        }
        ,{
            content:"Tự hào sản xuất tại Việt Nam",
            key:4,
        }

        ],
        
    }

    const collections=[
        {title:"Đồ mặc trong",
        linkImg:"./src/img/mceclip0_43.jpg",
        id:1},
        {title:"Mặc hàng ngày",
        linkImg:"./src/img/mceclip0_99.jpg",
        id:2},
        {title:"Đồ thể thao",
        linkImg:"./src/img/mceclip1_56.jpg",
        id:3},
        {title:"Tất cả",
        linkImg:"./src/img/mceclip1_61.jpg",
        id:4},
    
    ]


    return(
        <>
            <SlideBanner/>
            <TabsProduct/>
            <Card obj={cleandenim} />
            <Card obj={excool} right="false"/>    
            <Basic/>                    
            {
                <div className="collections">
                    {collections.map((collection) =>{
                        return(
                        <Collection key={collection.id} collection={collection} />
                    )
                    })}
                </div>
            }
            <Card obj={shoppingWithCool}/>    
            <div className='marquee ' >
                <marquee>CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7% cho lần mua sắm tiếp theo</marquee>
             <a href="">Đăng nhập ngay</a>
            </div>       

           <div className='card-collections '>
            <div><a href=""><img src="https://mcdn.coolmate.me/uploads/November2021/image1_59.jpg" alt="" /></a></div>
            <div><a href=""><img src="https://mcdn.coolmate.me/uploads/November2021/image2.jpg" alt="" /></a></div>
            
           </div>
           


        </>

    )
 }