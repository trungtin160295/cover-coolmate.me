
import {Row,Col } from 'react-bootstrap';
import Login from '../Components/Login';
import { useState ,useEffect} from 'react';
import { useSelector ,useDispatch} from "react-redux";
import { cartProductSelector } from "../redux/selectors";
import address from '../assets/address.json';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";


import CartProductDetal from '../Components/CartProductDetal';


import '../style/cart.scss'

const Cart = () => {  
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        criteriaMode: "all"
      });
    const onSubmit = (data) => console.log(data);  
    
    const cartProductData = useSelector(cartProductSelector);
    const cartProduct = cartProductData.cartItems
    const [sumMoney, setSumMoney] = useState()


    
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
    const [ward, setWard] = useState()
    const [dataDistricts, setDataDistricts] = useState([{"Id":"00001","Name":"Chọn quận/huyện"}])
    const [dataWards, setDataWards] = useState([{"Id":"00001","Name":"Chọn phường xã"}])
    
    useEffect(() => {
        if(province &&province!="Chọn tỉnh/thành phố" ){
            var distric =address.filter(addres =>addres.Name == province)[0].districts;
            
            setDataDistricts([{"Id":"00001","Name":"Chọn quận/huyện"},...distric]) 
            setDataWards([{"Id":"00001","Name":"Chọn phường xã"}])
        }else{
            setDataDistricts([{"Id":"00001","Name":"Chọn quận/huyện"}]) 
            setDataWards([{"Id":"00001","Name":"Chọn phường xã"}])

        }
           
        
        },[province]) 

    useEffect(() => {      
        if(district && dataDistricts.length > 1)  
        { const wards = dataDistricts.filter(item =>item.Name === district)[0].wards
            setDataWards(wards)}
        },[district]) 
        

   
    
    const listPayments=[
        {
            id:1,
            name:"COD",
            content:["COD","Thanh toán khi nhận hàng"],
            linkImg:"https://www.coolmate.me/images/COD.svg"
        },
        {
            id:2,
            name:"MoMo",
            content:["Thanh Toán MoMo"],
            linkImg:"https://www.coolmate.me/images/momo-icon.png"
        },
        {
            id:3,
            name:"ZaloPay",
            content:["Ví điện tử ZaloPay"],
            linkImg:"https://www.coolmate.me/images/logo-zalopay.svg"
        },
        {
            id:4,
            name:"ShopeePay",
            content:["Ví điện tử ZaloPay"],
            sale:"Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay",
            linkImg:"https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png"
        },
        {
            id:5,
            name:"VNPAY",
            content:["Thẻ ATM / Internet Banking","Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)","VNPay QR"],
            linkImg:"https://www.coolmate.me/images/vnpay.png"
        },
        {
            id:6,
            name:"9PAY",
            content:["Ví điện tử 9Pay"],
            linkImg:"https://mcdn.coolmate.me/uploads/May2022/9pay.svg"
        }
    ]
    const [payment, setPayment] = useState( listPayments[0])
    function sum (cartProduct){
        let sumMoney = 0;
        for (let i = 1; i < cartProduct.length; i++){
            
            sumMoney += Math.round(cartProduct[i].product.price*(1-(cartProduct[i].product.discount/100))*cartProduct[i].quantity);
        }
       
        return sumMoney;
    }

    useEffect(() => {
        
        setSumMoney(sum(cartProduct))
    },[cartProduct]) 
    function ErrorForm({name} ){
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
    

    function Payments({item}){
        return(
            <button             
            className={`payments-child  ${item.id ==payment.id ? 'active' : ''}`}
            onClick={()=>setPayment(item)}
            >
                
                   
                    <div className='payments-child-conten'>
                        <span className={`${item.id ==payment.id ? 'active-button' : ''}`}>&#8192; </span>
                        <img src={item.linkImg} alt= {item.content} className='img-check'/>
                        <div className='payments-content'>
                        {item.content.map((item) =>{
                            return <div className='payments-title' key={item}>{item}</div>
                        })}
                        {item.sale?<i className='payments-sale'>{item.sale}</i>:null}
                        </div>
                    </div>
                
         </button>  
        )}
  



    return(
        <Row className="cart-product">
            
            <Col  md={12} xl={7}  className='cart-left'>
                <Row className='shipping-information'>
                    <Col  className='title-shipping' >
                        Thông tin vận chuyển
                    </Col>
                    <Col  className='title-shipping--right'>
                    <span>Bạn đã có tài khoản ?</span>
                    <Login  classNames = "button-login--now"/>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit(onSubmit) }>
                    <Row >
                        <Col md={12} xl={6} > 
                            <input 
                                type="text" 
                                placeholder="Họ và tên" 
                                className="buyer-information" 
                                {...register("Name", 
                                {required: "Vui lòng  nhập đủ thông tin." ,
                                minLength: {
                                value: 6,
                                message: "Tên tối thiểu 6 kí tự "
                                }})} 
                            />
                            <ErrorForm name="Name"/>
                        </Col>
                        <Col md={12} xl={6} >
                            <input
                                placeholder="Số điện thoại người nhận" 
                                className="buyer-information"
                                {...register("mobileNumber", {
                                    required: "Vui lòng  nhập đủ thông tin.",
                                    pattern: {
                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                    message: "Vui lòng kiểm tra lại số điện thoại."
                                    }
                                })}
                                />
                                <ErrorForm name="mobileNumber"/>
                        </Col>
                    </Row>
                <Row>
                    <Col>
                     <input
                        type="text" 
                        placeholder="Email" 
                        className="buyer-information "
                        {...register("Email", {
                            required: "Vui lòng  nhập đủ thông tin.",
                            pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Vui lòng nhập đúng ."
                            }
                        })}
                        />
                        <ErrorForm name="Email"/>
                    </Col>
                </Row>   
                <Row className='choose-addres'>
                    <Col style={{    margin: "10px 0"}}>
                            <select
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                                className='choose-addres-child'
                            >
                                {address.map((province) => (
                                <option key={province.Id} value={province.Name}>{province.Name}</option>
                                ))}
                            </select>
                    </Col>
                    <Col style={{    margin: "10px 0"}}>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className='choose-addres-child'
                        >
                          {dataDistricts && dataDistricts.map((district) => (
                            <option key={district.Id} value={district.Name}>{district.Name}</option>
                             ))}
                        </select>
                    </Col>
                    
                    <Col style={{    margin: "10px 0"}}>
                    {dataWards &&
                        <select
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                        className='choose-addres-child'
                      >
                        { dataWards.map((ward) => (

                          <option key={ward.Id} value={ward.Name}>{ward.Name}</option>
                           ))}
                      </select>
                    }
                    </Col>
                </Row>             
                <Row>
                    
                    <Col>
                     <input
                        type="text" 
                        placeholder="Địa chỉ:(ví dụ:Số nhà 88 ngõ 8 đường Hạnh Phúc)" 
                        className="buyer-information "
                        {...register("Address", 
                            {required: "Vui lòng  nhập đủ thông tin." ,
                            maxLength: {
                            value: 100,
                            message: "Tên tối đa 100 kí tự"
                            },
                            minLength: {
                            value: 2,
                            message: "Tên tối thiểu 5 kí tự "
                            }})}
                        />
                        <ErrorForm name="Address"/>
                    </Col>
                </Row>
                <Row>
                <Col>
                     <input
                        type="text" 
                        placeholder="Chú ý : (ví dụ:Giao hàng giờ hành chính))" 
                        className="buyer-information "
                        {...register("Note")}
                        />
                        
                    </Col>
                </Row>
                <div >
                    <hr />
                <h1 className='title-pay'>Hình thức thanh toán</h1>
                {listPayments.map((payment) =>{
                return (
                    <Payments item={payment} key={payment.id} />
                )
                })}
                </div>
                <Row>
                    <button className='button-pay' type='Sumbit'>
                        Đăng nhập
                     </button>
                </Row>
                </form>
            </Col>
            <Col  md={12} xl={5} className='cart-right'>
                <div className='title-cart'> Giỏ hàng của bạn</div> 
                    {cartProductData.cartItems.length > 0 && 
                    cartProductData.cartItems.map((product) =>{      
                                
                        return(
                            <CartProductDetal product={product} key={product.id} />
                        )
                    })
                    }
                <div className='bill'>
                    <hr />
                    <div className=' bill-child'>
                        <span>Tính tổng </span>
                        <span>{sumMoney}.000 đ</span>
                    </div>
                    <div className='bill-child'>
                        <span>Giảm giá</span>
                        <span>0 đ</span>
                        
                    </div>
                    <div className='bill-child'>
                        <span>Phí giao hàng</span>
                        <span>Miễn phí</span>
                        
                    </div>
                    <hr />
                    <div className='bill-child'>
                        <span>Tổng tiền thanh toán</span>
                        <span>{sumMoney}.000 đ</span>
                        
                    </div>

            </div>

                
            </Col>
            
        </Row>
    )
}
export default Cart