
import Text from "./Text"
import {  NavLink,Link, useNavigate  } from "react-router-dom";
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"
import Login from "./Login";
import { useState,useEffect,useRef } from "react";
import { useSelector,useDispatch  } from "react-redux";
import { cartProductSelector } from "../redux/selectors";
// import { fetchCart } from '../redux/slices/cartSlice';





import '../style/header.scss'
import '../style/footer.scss'

 function Header({dataheader}) {
    const cartProduct = useSelector((state) => state.cart);
    const cartQuantity = useSelector((state) => state.cart).cartQuantity
    const [sumProduct, setSumProduct] = useState()        

    const  seachInput = useRef()
    const [keyWord,setKeyWord] =useState("")
    const [show,setShow] =useState(false)
    const navigate = useNavigate();
    const handleclicproductItem = (id) => {
        setShow(false)
      navigate(`/product/${id}`);
      
    };
    const handleClicMore = (keyWord) => {
        setShow(false)
      navigate(`/Seach/${keyWord}`);
      
    };

  
  const { data: dataProductsSeach,isLoading:loadSeach }
  = useFetch(`http://localhost:3004/products/?q=${keyWord}`, false); 
//   useEffect(() => {
//     dispatch(fetchCart());    
//   }, [])
 
//  if(cartProduct.length ===0){
//     let cartProduct =useSelector(cartProductSelector)
//     console.log("SDadasda");
//     setcartProduct(cartProduct)
//  }

const hideSeach = () =>{
    if(show){
        setShow (false)
    }
}
 var timer = setInterval(hideSeach, 10000);
  function  onKeyPressSeach (e){
    if(e.key === "Enter" && keyWord.length >0){
        navigate(`/Seach/${keyWord}`)
    }
    else{
        clearTimeout(timer);
    }
  }
   function focusSeachInput (){
    clearInterval(timer);
        setShow(true)
        seachInput.current.focus()
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
                            <span className="pice">{product.price} .000 ?? </span>
                            <span className="pice-sale">{Math.round(product.price*(1-(product.discount/100)))}.000?? </span>
                        </div>
                    </div>
                    </div>
        )
    }
    function TypesOpProduct ({typesOpProduct}){
        return(
            <div className="menu-header">
                { 
                  typesOpProduct.map((list) =>{     
                     
                return(
                   <div key={list.title} >
                     <Text className="title">{list.title}</Text>
                        <div  className="menu-header-column">
                            {
                               list.child.map((child)  => {                                
                                 return(
                                   <div key={child.name} className="menu-header-child">                                                                            
                                     <Link to={
                                         child.name==="T???t c??? s???n ph???m" ?
                                          "Menu/S???n-ph???m"
                                          :`collection/${useSrt(child.name,true)}`}
                                         className="child-name">
                                       <div className="child-name-title"> 
                                          <Text>{child.name}</Text>
                                         {child.attention? <Text className= "attention-hot">{child.attention}</Text> :null}                                            
                                                                                  
                                          </div>                                                                              
                                           {child.explain ? <Text className="child-explain">{child.explain}</Text> :null }                        
                                      </Link>                                                                          
                                      { child.product?
                                         <ul>                                                                              
                                         {child.product.map((content) => {
                                         return (
                                       <li key= {content}>
                                        <Link to= {`collection/${useSrt(content,true)}`}  className="child-product">{content}</Link>
                                                                                              
                                        </li>                                                   
                                          )
                                       })} 
                                        </ul>:null} 
                                        <hr  style={{width:'80%'  ,margin: '0'} }/>
                                         </div>
                                        )
                                        })}
                             </div>
                             </div>
                          )
                      } )
                     
                   }  
                 </div>
        )

    }
    return (    
        <header>
            {dataheader.sale ? <Text className='topbar' >{dataheader.sale} </Text> :null}        
            {dataheader.header ?  
            <nav >
                <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src="https://www.coolmate.me/images/logo-coolmate.svg" alt="" /></Link>                    
                </div>
                <div className="nav-center">
                  <ul >
                      { dataheader.header.map((item) =>{
                          return(
                            <li className="hover" key={item.id}>
                                  <NavLink  to={`Menu/${useSrt(item.title,true)}`}>  {item.title}  </NavLink>
                                  {item.child ?  
                                    <div className="dropdown-content ">
                                        {item.title ==="S???n ph???m" &&
                                          <TypesOpProduct typesOpProduct = {item.child}/>
                                        }  
                                        {item.title ==="V??? Coolmate" &&
                                        
                                          <div className="about-cool ">
                                            {item.child.map((content) =>{
                                                return(
                                                    <div key={content.id} className="about-cool-child">
                                                        <img src={content.linkImg} alt={content.title} />
                                                        <div className="title">{content.title}</div>
                                                        <span>{content.content}</span>
                                                    </div>
                                                )
                                                
                                            })}                                    
                                         </div>                                      
                                        }                                  
                                    </div>
                                : null}
                            </li>
                        )
                        })  
                    }                      
                  </ul>
                </div>
                   
                <div className="nav-right">
                    <div>
                    <button onClick={focusSeachInput}><img src="https://www.coolmate.me/images/header/icon-search.svg"  /></button>
                    </div>
                    <div className="cart-product">
                    <Link to="/Cart"><img src="https://www.coolmate.me/images/header/icon-cart.svg" /></Link> 
                    <span className="quantity-product">{sumProduct}</span>
                    </div>
                    <Login  button/>   
               
                              
                </div>
                </div>
            </nav>
             :null}
             <div  className={`container-seach  ${show===true ? 'show-nav-seach' : ''}`}>
                <div className="nav-seach">
                    <input ref = {seachInput} type="text"  onChange={(e) =>setKeyWord(e.target.value)} onKeyPress={(e) => onKeyPressSeach(e)} />
                    <button onClick={() =>{setShow(false)}}>X</button>
                </div>
                {
                keyWord.length > 0 && show===true && loadSeach===false ? 
                <div  className="seach-products" >
                    
                    {dataProductsSeach.length >0?
                    <><button onClick={handleClicMore}> Xem th??m</button>
                    {dataProductsSeach.slice(0,5).map((product) => {
                        return(
                            <ProductSeach product={product} key={product.id}/>
                        )
                    })}</>
                    :<div>
                        Kh??ng c?? s???n ph???m
                    </div> 
                    }
                </div>
                :null}
               
             </div>
        </header>
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
                           <Text className="footer-title">{item.name}</Text>
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
                   <Text className="footer-title-right">COOLMATE l???ng nghe b???n!</Text>
                   <Text className="footer-content-right">Ch??ng t??i lu??n tr??n tr???ng v?? mong ?????i nh???n ???????c m???i ??
                        ki???n ????ng g??p t??? kh??ch h??ng ????? c?? th??? n??ng c???p tr???i nghi???m d???ch v??? v?? s???n ph???m t???t h??n n???a.</Text>
                   
                   <a href="#" className="sent-idea">G???i ?? ki???n</a>
                   <div className="hotline">
                       <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" alt="" />
                       <div>
                           <Text> Hotline</Text>
                           <Text> 1900.272737 (028.7777.2737)</Text>
                       </div>                        
                   </div>
                   <div className="hotline">
                       <img src="https://www.coolmate.me/images/footer/icon-email.svg" alt="" />
                       <div>
                           <Text> Email</Text>
                           <Text> Cool@coolmate.me</Text>
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
                   <h6>@ C??NG TY TNHH FASTECH ASIA</h6>
                    <span>M?? s??? doanh nghi???p: 0108617038. Gi???y ch???ng nh???n ????ng k?? doanh nghi???p do S??? K??? ho???ch v?? ?????u t?? TP H?? N???i c???p l???n ?????u ng??y 20/02/2019.</span>

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