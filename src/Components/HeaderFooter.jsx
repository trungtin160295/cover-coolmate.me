
import {  NavLink,Link, useNavigate  } from "react-router-dom";
import useSrt from "../ultils/str"
import Login from "./Login";
import { useState,useEffect,useRef } from "react";
import { useSelector,useDispatch  } from "react-redux";
import axios from "axios";
import IconSearch from "../assets/img/icon-search.svg"
import IconCart from "../assets/img/icon-cart.svg"
import IconMenu from "../assets/img/icon-menu.svg"

import { Button,Spinner } from 'reactstrap';
import { Col } from "react-bootstrap";


import '../style/header.scss'
import '../style/footer.scss'


 function Header({dataheader}) {
 
    const [dataProductsSeach, setDataProductsSeach] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const cartProduct = useSelector((state) => state.cart);
    const [sumProduct, setSumProduct] = useState()
    
    const  seachInput = useRef()
    const [keyWord,setKeyWord] =useState("")
    const [show,setShow] =useState(false)
    const [showMenu,setShowMenu] =useState(false)

    const navigate = useNavigate();
   

    const handleclicproductItem = (id) => {
        setShow(false)
      navigate(`/product/${id}`);
    };
    const handleClicMore = () => {
        setShow(false)
      navigate(`/Search/${keyWord}`);
    };
    function  onKeyPressSeach (e){
      if(e.key === "Enter" ){
          setShow(false)
          navigate(`/Search/${keyWord}`)
      }
      }
//   const { data: dataProductsSeach,isLoading:loadSeach }
//   = useFetch(`http://localhost:3004/products/?q=${keyWord}`, false); 
  useEffect(() => {
    setIsLoading(true)
    setDataProductsSeach([])
    const ourRequest = axios.CancelToken.source(); 

    async function fetchData() {
      try {
        let res = await axios.get(`http://localhost:3004/products/?q=${keyWord}`, {
          cancelToken: ourRequest.token, 
        });

        let data = res && res.data ? res.data : null;
       

        setDataProductsSeach(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      ourRequest.cancel("Operation canceled by the user."); // <-- 3rd step
    };
  }, [keyWord]);






function focusSeachInput (){
    seachInput.current.focus()
    setShow(true)
}

 
    
  
  function onChangeKey(e){
    setKeyWord(e.target.value)
  }
  function onClickMenu() {
    
    var menu= document.getElementById("navbar-ipad")
    menu.classList.toggle("navbar-show")
    
    
  }
  function onClickMenuHide() {
    
    var menu= document.getElementById("navbar-ipad")
    menu.classList.toggle("navbar-show")
    
  }
  const sumQuantity = (cartProduct) =>{     
    let  sumProduct = 0 ;
    for (let i = 1; i < cartProduct.length  ; i++){
        
        sumProduct += cartProduct[i].quantity;
    }         
    return sumProduct;
}
  useEffect(() => {
        
    setSumProduct(sumQuantity(cartProduct.cartItems))
},[cartProduct]) 

 
    useEffect(() => {
        
        setSumProduct(sumQuantity(cartProduct.cartItems))
    },[cartProduct]) 
    function ProductSeach ({product}) {
        return(
           
                <div className="product" onClick={ () =>handleclicproductItem(product.id)}>

                    <div className="product-img">
                        <img src={product.linkImages[0]} alt="" />
                    </div>
                    <div className="products-right">
                        <h5 className="product-title">
                        {product.ductName}
                        </h5>
                        <div className="product-pice">
                            <span className="pice">{product.price} .000 đ </span>
                            <span className="pice-sale">{Math.round(product.price*(1-(product.discount/100)))}.000đ </span>
                        </div>
                    </div>
                    </div>
        )
    }
    function TypesOpProduct ({data}){
        return(
            <>
                { 
                  data.map((list) =>{     
                     
                return(
                   <div key={list.title}  className="menu--second">
                     <div className="menu--second__title">{list.title}</div>
                            {
                               list.child.map((child)  => {                                
                                 return(
                                   <div key={child.name} className="menu-3th">                                                                            
                                     <Link to={
                                         child.name==="Tất cả sản phẩm" ?
                                          "Menu/Sản-phẩm"
                                          : `collection/${child.name.replaceAll(/\s+/g, "-")}`}
                                         className="menu-3th__tittle">
                                       <div className="menu-3th__name"> 
                                          <div className="menu-3th__content">{child.name} </div> 
                                         { child.attention ? 
                                            <div className= {`menu-3th__attention ${child.attention}`} >{child.attention}
                                            </div> 
                                            :null
                                         }                                            
                                       </div>                                                                              
                                           {child.explain ? <div className="menu-3th__explain">{child.explain}</div> :null }                        
                                      </Link>                                                                          
                                      { child.product?
                                         <ul className="menu-4th">                                                                              
                                         {child.product.map((content) => {
                                         return (
                                        <li key= {content} className="menu-4th__tittle">
                                         <Link to= {`collection/${content.replaceAll(/\s+/g, "-")}`}  className="menu-4th__tittle">{content}</Link>
                                        </li>                                                   
                                          )
                                       })} 
                                        </ul>:null} 
                                        
                                         </div>
                                        )
                                        })}
                             </div>
                             
                          )
                      } )
                     
                   }  
                 </>
        )

    }
    function AboutCool({data}) {
      
     return(<div className="container-about-cool">
     { data.map((content) =>{
          return(
              <Col key={content.id} xs={12}  sm= {12} md={6}  lg={3}  xl={3} xxl={3} className=" about-cool">
                <div className="container-child"><img src={content.linkImg} alt={content.title} />
                  <div className="container-child__title">{content.title}</div>
                  <p>{content.content}</p>
                  </div>
                  
              </Col>
          )
      }) }

     </div>
                                      
    )}

    
    return ( 
        <>
        <header>
            
            {dataheader.sale ? <h5 className='most-special' >{dataheader.sale} </h5> :null}        
            {dataheader.header ?  
            <nav >
                <div className="nav">
                <div className="nav__logo">
                    <Link to="/"><img src="https://www.coolmate.me/images/logo-coolmate.svg" alt="" /></Link>     
                                  
                </div>
                <div id="button-menu" className="button-menu" onClick={()=>onClickMenu()} > <a href="#navbar-ipad"><img src={IconMenu} alt="" /></a></div> 
                
                <div  className="navbar">
                  <ul className="nabar__flex" >
                      { dataheader.header.map((item) =>{
                          return(
                            <li className="navbar-tittle " key={item.id}>
                                  <NavLink  to={`Menu/${useSrt(item.title,true)}` }
                                   > 
                                    {item.title}  
                                  </NavLink>
                                    {  item.title === "Sản phẩm"&& item.child  ?
                                    
                                  <>
                                    <div className="menu__space menu__dropdown  ">
                                    &#8192;           
                                    </div>
                                    <div className="menu__dropdown">
                                    <TypesOpProduct data = {item.child}/>
                                    </div>
                                  </>
                                  :null
                                   }
                                    { item.title === "Về Coolmate" && item.child ?
                                    <>
                                   
                                      <div className="menu__space menu__dropdown  ">
                                         &#8192;           
                                      </div>
                                      <div className="menu__dropdown">
                                       <AboutCool data={item.child}/> 
                                      </div>
                                      </>
                                  :null
                                   }
                                    
                                   
                            </li>
                        )
                        })  
                    }                      
                  </ul>
                </div>
                   
                <div className="nav-right">
                    <div>
                    <button onClick={focusSeachInput}><img src={IconSearch} /></button>
                    </div>
                    <div className="cart-product">
                    <Link to="/Cart"><img src={IconCart} /></Link> 
                    <span className="quantity-product">{sumProduct}</span>
                    </div>
                    <Login img />   
               
                              
                </div>
                </div>
            </nav>
             :null}
            
             <div  className={`container-seach  ${show ? 'show-nav-seach' : ''}`}>
                <div className="nav-seach">
                    <input ref = {seachInput} type="text"  onChange={(e) =>onChangeKey(e)} onKeyDown={(e) => onKeyPressSeach(e)} />
                    <button onClick={() =>{setShow(false)}}>X</button>
                </div>
               
                {
                keyWord.length > 0 && show  ? 
                
                
                <div  className="seach-products" >
                    {
                    isLoading===true ? <div className='loading'>
                    <Button
                        color="primary"
                        disabled
                      >
                        <Spinner size="sm">
                          Loading...
                        </Spinner>
                       
                      </Button>
                    </div>
                    :
                
                    
                    dataProductsSeach.length >0 && isLoading === false?
                    <><button onClick={handleClicMore}> Xem thêm</button>
                    {dataProductsSeach.slice(0,5).map((product) => {
                        return(
                            <ProductSeach product={product} key={product.id}/>
                        )
                    })}</>
                    :<div>
                        Không có sản phẩm
                    </div> 
                    }
                </div>
                :null}
               
             </div>
             
        </header>
        <div id="navbar-ipad" className="navbar-ipad" onClick={()=>onClickMenuHide()}>
        
        <div className="list-menu" >
                      { dataheader.header.map((item) =>{
                          return(
                            <li className="navbar-tittle " style={{fontSize:"22px"}} key={item.id}>
                                  <NavLink  to={`Menu/${useSrt(item.title,true)}` }
                                   > 
                                    {item.title}  
                                  </NavLink>
                                  
                                    
                                   
                                    {  item.title === "Sản phẩm"&& item.child  ?
                                    
                                  <>
                                    
                                    <div className="menu__dropdown">
                                    <TypesOpProduct data = {item.child}/>
                                    </div>
                                  </>
                                  :null
                                   }
                                    { item.title === "Về Coolmate" && item.child ?
                                    <>
                                   
                                      <div className="menu__dropdown">
                                       <AboutCool data={item.child}/> 
                                      </div>
                                      </>
                                  :null
                                   }
                                    
                                   
                            </li>
                        )
                        })  
                    }                      
        </div>      
        </div>
    </> 
        

    )
  }
   

  function Footer( {dataFooter}) {      
    
     return(
       dataFooter ?
       <footer >
           <div className="footer-menu">
               {dataFooter.map((item) => {
                   return(
                       <div className="footer-menu-item" key={item.id}>  
                           <div className="footer-title">{item.name}</div>
                           <ul>
                               {item.children.map((content) =>{
                                   return(
                                   <li key={content.toString()}>                                                                
                                       <a href="#">{content}</a>
                                    </li>)
                                   
                                   
                               } ) }
                           </ul>
                       </div>
                   )    })}
               
               <div className="footer-right">
                   <div className="footer-title-right">COOLMATE lắng nghe bạn!</div>
                   <div className="footer-content-right">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý
                        kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</div>
                   
                   <a href="#" className="sent-idea">Gửi ý kiến</a>
                   <div className="hotline">
                       <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" alt="" />
                       <div>
                           <div> Hotline</div>
                           <div> 1900.272737 (028.7777.2737)</div>
                       </div>                        
                   </div>
                   <div className="hotline">
                       <img src="https://www.coolmate.me/images/footer/icon-email.svg" alt="" />
                       <div>
                           <div> Email</div>
                           <div> Cool@coolmate.me</div>
                       </div>                        
                   </div>
                   <div className="social">
                       <a href=""><img src="https://www.coolmate.me/images/footer/icon-facebook.svg" alt="" /></a>
                       <a href=""><img src="https://www.coolmate.me/images/footer/icon-instar.svg" alt="" /></a>
                       <a href=""><img src="https://www.coolmate.me/images/footer/icon-youtube.svg" alt="" /></a>
                   
                   
                   
                   </div>
               </div>

           </div>
           <div className="footer-bottom">
               <div className="company">
                   <h6>@ CÔNG TY TNHH FASTECH ASIA</h6>
                    <span>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</span>

              </div>
               <div className="footer-bottom-right">
                   <a href="#"><img src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png" alt="" /></a>
                    <a href="#"><img src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png" alt="" /></a>
                   <a href="#"><img src="https://www.coolmate.me/images/footer/Coolmate-info.png" alt="" /></a>
                    <a href="#"><img src="https://www.coolmate.me/images/footer/logoSaleNoti.png" alt="" /></a>

               
              </div>
            </div>
           
       </footer>
       :null

       

     )    
   }
    
  
export {Header,Footer}  