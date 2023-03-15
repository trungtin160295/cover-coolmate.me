import Container from "react-bootstrap/Container";
import{Row,Col}  from "react-bootstrap";
import Slider from "react-slick";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Coolprint.scss'

export default function Coolxprint() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  const ErrorForm =({name} ) =>{
    return(
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
    )
    
  }

  const listCustomer = [
    {"id":1,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/thay.jpeg"},
    {
      "id":2,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/d4abd67adb0e2d50741f_62.jpeg"
    },
    {"id":3,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/fd771bdece5a05045c4b.jpeg"},
    {
      "id":4,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/z3461093205331_002ec9fd44eec1dda9264235fb4a9167_(1).jpg"
    },
    {"id":5,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/Anh_chup_Man_hinh_2021-09-03_luc_13.26.08.png"},
    {
      "id":6,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/IMG_2044.jpg"
    }
  ]

  
  const settings = {        
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 2,
    autoplaySpeed:2000,
    autoplay: true,                     
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
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
  const dataimg = [
    {
      id: 1,
      nameproduct: "Áo polo in logo",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_do.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 190,
    },
    {
      id: 2,
      nameproduct: "Áo polo in logo",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 150.0,
    },
    {
      id: 3,
      nameproduct: "Quần lót in",
      quantityproduct: "Số lượng tối thiểu: 5 chiếc",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Bamboo_trunk_xanh_navy.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 55.0,
    },
    {
      id: 4,
      nameproduct: "Mũ (nón) lưỡi trai / Bucket hat",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den_45.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 110.0,
    },
    {
      id: 5,
      nameproduct: "Khẩu trang",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
        "hhttps://mcdn.coolmate.me/uploads/November2021/trang_89.png",
      ],
      price: 20.0,
    },
    {
      id: 6,
      nameproduct: "Tất (vớ",
      quantityproduct: "Số lượng tối thiểu: 200 đôi",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_725.png",
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_xanh_navy.png",
      ],
      price: 20.0,
    },
  ];
  const PodWhy = ( {title,description}) =>{
    return(
      <div className="pod-why__content">
         
        <h4 className="pod-why__title">{title}</h4>
        
        <p className="pod-why__description">
           {description}
         </p>
     </div>
    )
  }
  const ProductPrint = ({product}) =>{
    return(
      <Col xs="6" md="4" style={{margin: '20px 0'}}>
                    <div className="cart-coolxprint">
                      
                        <div className="pod-grid__tabline">
                          <span className="nameproduct">
                            {product.nameproduct}
                          </span>
                          <p className="quantityproduct">
                            {product.quantityproduct}
                          </p>
                        </div>
                        <div className=" pod-grid__image">
                            <img src={product.linkproduct}></img>
                        </div>
                        
                          <button className="btn-price__price btn-price ">
                            Giá từ {product.price}.000 đ
                          </button>
                        
                      
                    </div>
                  </Col>
    )
  }


  return (
    <>
      <div className="pod-banner__thumbnail">
        <div className="pod-banner__image pod-banner__image--left">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Back.png"
            alt=""
          ></img>
        </div>
        <div className="pod-banner__content">
          <h1 className="pod-banner__heading">Cool Xprint</h1>
          <p className="pod-banner__description">
            Đặt sản xuất chưa bao giờ <br></br>
            đơn giản đến thế
          </p>
          <div className="pod-banner__policy">
            <span className="pod-banner__item">Số lượng ít</span>|
            <span className="pod-banner__item">Giá cạnh tranh</span>|
            <span className="pod-banner__item">Bảo hành 60 ngày</span>
          </div>{" "}
          <a href="#mockup" className="pod-banner__button scroll-to-step">
            Nhận báo giá
          </a>
        </div>
        <div className="pod-banner__image pod-banner__image--right">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Banner.png"
            alt=""
          ></img>
        </div>
      </div>

      <section className="pod-why">
        <div className="container container--medium">
          <div className="pod-why__cart">
          <div className="pod-why__heading">
              <span>
                Vì sao
                <br />
                lựa chọn
                <br />
                CoolXPrint?
              </span>
            </div>
            <div className="pod-why__item">
              <div className="pod-why__inner">
                <PodWhy 
                  title='Chất lượng đảm bảo'
                  description='Các sản phẩm thuộc dự án CoolXPrint được sản xuất theo tiêu
                  chuẩn như các sản phẩm tương tự của Coolmate'
                />
                <PodWhy 
                  title='In với số lượng ít'
                  description='CoolXPrint sẵn sàng hỗ trợ bạn in, kể cả số lượng từ 1 chiếc'
                />
              </div>
            </div>

            <div className="pod-why__item">
              <div className="pod-why__inner">
                
                <PodWhy 
                  title='Dịch vụ tận tâm'
                  description='Cam kết đem đến trải nghiệm 100% hài lòng với mọi khách hàng'
                />
                <PodWhy 
                  title='Xử lý nhanh chóng'
                  description='Chủ động sản xuất và in với số lượng ít chỉ trong 24h, nhận
                  hàng sau 48h'
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="pod-active">
        <div className="container container--medium">
          <h2 className="pod-activite__heading">
            COOLXPRINT hoạt động như thế nào ?
          </h2>
          <div className="pod-active__wrapper">
            <a href="#product" className="pod-active__inner sroll-to-step">
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-1.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Tiếp nhận yêu cầu</div>
                <div className="pod-active__description">
                  "Qua From"
                  <br />
                  "Email: anhandz02@gmail.com"
                  <br />
                  "Hotline: 190874835"
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-2.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Gửi báo giá</div>
                <div className="pod-active__description">
                  Tối đa 24h Coolmate
                  <br />
                  sẽ phản hồi
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-3.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Sản xuất & hoàn thiện</div>
                <div className="pod-active__description">Bảo hành 60 ngày</div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-4.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Giao hàng</div>
                <div className="pod-active__description">
                  Giao hàng toàn quốc
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="product" className="pod-product">
        <div className="container container--medium">
          <h2 className="pod-products__heading">
            Các sản phẩm của COOLXPRINT
          </h2>
          <Container>
            <Row className="list-pod-product">
              {dataimg.map((product) => {
                return (
                  <ProductPrint product ={product} key ={product.id}/>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <h2 className="pod-customer__heading">
          Các khách hàng thân thiết
        </h2>
        <Slider {...settings}>
           {listCustomer.map((customer) =>{
            return(
              <div className="pod-customer" key={customer.id}>
                <div className="pod-customer_img">
                  <img src={customer.linkImg} alt="" />
                </div>
              </div>
            )
           })}
        </Slider>
      </section>
      <section id="mockup" className="banner-contac">
        <div className="banner-contac-detail">
          <h2 className="title">Bạn cần đặt sản phẩm ?</h2>
          <p className="descriptions">Coolmate sẽ ghi nhận thông tin và phản hồi với bạn trong vòng 24h.
            <br />
          Nếu cần gặp Coolmate ngay. Hãy gọi <b>1900.272735 - 028.7777.2737</b> </p>
        <form onSubmit={handleSubmit(onSubmit) } className='container-form'>
          <div className=" form-group">
            <label htmlFor="Name product">1. Sản phẩm và số lượng dự kiến bạn cần :</label>
              <input 
                type="text" 
                placeholder="vd: 2 áo Polo" 
                id="Name product" 
                className="from-control" 
                {...register("Name product", 
                {required: "Vui lòng  nhập đủ thông tin." ,
                minLength: {
                  value: 6,
                  message: "Tên tối thiểu 6 kí tự "
                }})} 
              />
              <ErrorForm name="Name product"/>
              
          </div>
          <div className=" form-group">
            <label htmlFor="Name custom">2. Tên khách hàng :</label>
              <input 
              type="text"
              placeholder="vd:Phạm Văn Tín" 
              id="Name custom" className="from-control" 
              {...register("Name custom", 
                {required: "Vui lòng  nhập đủ thông tin." ,
                maxLength: {
                  value: 100,
                  message: "Tên tối đa 100 kí tự"
                },
                minLength: {
                  value: 2,
                  message: "Tên tối thiểu 2 kí tự "
                }})} />
              <ErrorForm name="Name custom"/>
          </div>
          <div className=" form-group">
            <label htmlFor="Email">3. Email khách hàng :</label>
            <input
              type="text" 
              placeholder="vd: abc123@gmail.com" 
              id="Email" 
              className="from-control"
              {...register("Email", {
                required: "Vui lòng  nhập đủ thông tin.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Vui lòng nhập đúng ."
                }
               
              })}
            />
            <ErrorForm name="Email"/>
          </div>
          <div className=" form-group">
            <label htmlFor="mobileNumber">4. Số điện thoại khách hàng :</label>
            <input
            
              placeholder="vd: 028.7777.2737" 
              id="mobileNumber" 
              className="from-control"
              {...register("mobileNumber", {
                required: "Vui lòng  nhập đủ thông tin.",
                               
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Vui lòng kiểm tra lại số điện thoại."
                }
              })}
            />
            <ErrorForm name="mobileNumber"/>
          </div>
         
           <div className=" submit-wrapper">
           
            <button type='Sumbit' className='button-order'>Đặt hàng</button>
           </div>
          
    </form>

        </div>
      
      </section>
      </>
  );
}