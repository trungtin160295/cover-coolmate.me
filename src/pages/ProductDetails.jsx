
import React from "react";
import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import useFetch from "../customize/fetch";
import { Button,Spinner } from 'reactstrap';
import {Row,Col } from 'react-bootstrap';
import Text from '../Components/Text';
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import cartSlice from "../redux/sliceReducer/cartReducer";
import { useDispatch } from "react-redux";



import "react-image-gallery/styles/css/image-gallery.css";
import 'react-toastify/dist/ReactToastify.css';
import '../style/productDetails.scss'




const ProductDetails = () => {  
  let {id} = useParams();

  
  const { data: product, isLoading,imgProduct }
      = useFetch(`http://localhost:3004/products/${id}`, true);   

 
    const dispatch =useDispatch()
    const [buttonBuy, setButtonBuy] = useState("Vui lòng chọn màu sắc")
    const [color, setColor] = useState(undefined)


    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)


    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
    
  
    useEffect(() => {
        
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    useEffect(() => {

      if (color != undefined) {
        setButtonBuy("Vui lòng chọn kích cỡ")
        if (size != undefined) {
          setButtonBuy("Thêm vào giỏ hàng")
         }
      }

     
  }, [color,size])
   

    const addToCart = () => {
        if (buttonBuy ==="Thêm vào giỏ hàng") {          
            if (dispatch(
              cartSlice.actions.addProduct({
                color: color,
                size: size,
                quantity: quantity,
                product:product,                
                id:uuidv4()
              }))) {
                purchaseNotice()  
            } else {
                alert('Fail')
            }
        }
    }

  
  const productPolicy =[
    { key:"1",
      icon:"https://www.coolmate.me/images/icons/icon3.svg",
      content:"Đổi trả cực dễ chỉ cần số điện thoại"
    },
    {key:"2",
      icon:"https://www.coolmate.me/images/icons/icon4.svg",
      content:"Miễn phí vận chuyển cho đơn hàng trên 200k"
    },
    {key:"3",
      icon:"https://www.coolmate.me/images/icons/icon5.svg",
      content:"60 ngày đổi trả vì bất kỳ lý do gì"
    },
    {key:"4",
      icon:"https://www.coolmate.me/images/icons/icon2.svg",
      content:"Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày"
    },
    {key:"5",
      icon:"https://www.coolmate.me/images/icons/icon1.svg",
      content:"Đến tận nơi nhận hàng trả,hoàn tiền trong 24h"
    },
    {key:"6",
      icon:"https://www.coolmate.me/images/icons/icon6.svg",
      content:"Giao hàng nhanh toàn quốc"
    },
  ]
  const purchaseNotice = () => toast(<PurchaseNotice/>
  
  
  )
  const PurchaseNotice = () => {
    return(
      <div  className="buy-notice">
      <h6> Đã thêm sản phẩm vào giỏ !</h6>
      <hr />
      <div className="product-information ">
        <div className="product-img">
          <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/3536_57.jpg" alt="" />
        </div>
        <div className="information-content">
          <div className="product-title">
            Quần short nam thể thao Movement 7' co giãn - Xanh rêu
          </div>
          <div className="information-buy">
            <div className="information-color-size">
              Đen / L
            </div>
            <div className="information-pice">
              <span className="pice">
                40000

              </span>
              <span className="cost">
              55555
              </span>

            </div>
          </div>

        </div>


      </div>
      <hr />
      <button className='see-cart'>
        Xem giỏ hàng 
      </button>

    </div>
   
    )
  }
  



           
  return (
  <div className="product-petails">
    <ToastContainer />
    

    
    {isLoading === false && product !=null && 


      <>
         <div  className="path">
          <Link to="/">Trang chủ /</Link>
          <Link to={`/${product.type}`}>{product.type}</Link>          
             
          </div>
         
          <div className="product-presented">
          
            
            <Row>
                <Col md={12} xl={6}  className="product-img">
                  
                    <ImageGallery items={imgProduct}   autoPlay="true"  />
                                
                </Col>
              <Col xs={12} xl={6} className="presented-information"> 
                
                      <h1 className="product-title">{product.ductName}</h1>
                      <div className="evaluate">                  
                        <span><i className="fa-solid fa-star star" ></i>({product.rate}) &nbsp;</span>
                        <span> Số lượng đã bán :  &nbsp;{product.comment} </span>
                      </div>
                      
                      <div className="product-price">
                        <Text className="price-discount">{Math.round(product.price*(1-(product.discount/100)))}.000đ &nbsp;</Text>  
                        
                        {product.discount ?
                        <>
                          <Text  className="price">{product.price}.000đ &nbsp;</Text> 
                          <Text  className="product-discount">-{product.discount}%</Text>
                        </>
                        :null}
                      </div>
                      { product.combo!= "" && 
                        <span className="product-combo">
                          {product.combo}
                        </span>
                        }
                      { product.sale != "" &&
                        <Text className="product-sale">{product.sale}   </Text>
                        }
                      <div className="product-color">
                        <span>Màu sắc:</span>
                        <div className="product-listcolor">
                        {
                            product.listColor.map((item) =>{
                              return(
                              <span 
                                key={item}
                                className={color === item ? 'active' : ''} 
                                onClick={() => setColor(item)}
                               
                              >
                                {item}
                              </span>
                              ) 
                            })
                        }
                        </div>                                                           
                      </div>
                      <div className="product-size">
                        <span>Kích thước :</span>
                        <div className="product-listsize">
                        {
                            product.listSize.map((item) =>{
                              return(
                              <span 
                                key={item}  
                                className={size === item ? 'active' : ''} 
                                onClick={() => setSize(item)}
                                >
                                  {item}
                                </span>
                              )

                            })
                        }
                        </div>                                                           
                      </div>

                    <div className="product-quantity">
                      <div className="product-quantity-title">
                        Số lượng :  
                      </div>
                      <div className="product-quantity-change">
                          <button className="product-quantity-down" onClick={() => updateQuantity('minus')}>
                          -
                          </button>
                          <span className="quantity">
                              {quantity}
                          </span>
                          <button className="product-quantity-up" onClick={() => updateQuantity('plus')}>
                              +
                          </button>
                      </div>
                      <button  className="product-buy" onClick={() => addToCart()}>
                        {buttonBuy}
                      </button>
                     
                  </div>
                      <div className="product-policy">
                        {
                          productPolicy.map((policy) =>{
                            return (
                              <div className="policy-item " key={policy.key}>
                                <div className="policy-icon">
                                  <img src={policy.icon} alt={policy.content} />
                                </div>
                                <span className="policy-content">{policy.content}</span>
                              </div>
                              
                            )
                          })
                        }           
    
    
    
                      </div>
                      { product.outstanding ? 
                        <div className="product.outstanding">
                        
                          <h5>Đặc điểm nổi bật:</h5>
                          <ul>
                            
                              {product.outstanding.map((item) =>{
                                return (<li key={item.key}>{item.content}</li>)
                              })}
                            
                          </ul>
    
                        </div>
                        : null
                      }</Col>
              
            </Row>
          </div>
          

          </>}
          {isLoading === true &&
              <div className='loading'>
              <Button
                  color="primary"
                  disabled
                >
                  <Spinner size="sm">
                    Loading...
                  </Spinner>
                  <span>
                    {' '}Loading
                  </span>
                </Button>
              </div>
          }
            
    </div> 
  )
};

  


export default ProductDetails;
