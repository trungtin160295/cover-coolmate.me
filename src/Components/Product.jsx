import { Link } from 'react-router-dom';

export default function Product( props) {  
    
   const product=props.products
   
        
    return (
        
            <div className="product">
            <div className="product-img">
                <Link to={`/product/${product.id} `}>
                    <img src={product.linkImages[0]} alt="Avatar" className="image hover1"/>
                    <img src={product.linkImages[1]} alt="Avatar" className="image hover2"/>
                    {product.listSize? 
                     <div className="size "> 
                        <ul >
                        {
                            product.listSize.map((size) =>{
                                return (
                                <li key = {size.toString() }> 
                                 <span className="size-child">{size} </span>                                
                                </li>)
                            })
                        }
                        </ul>                                                         
                 
                    </div>
                    :null
                 }
                   
                </Link>   

                {product.discount&&<div className="price">Chỉ với {Math.round(product.price*(1-(product.discount/100)))} K</div>}
            
                {product.rate? 
                    <div className="evaluate">
                    <div >{product.rate}</div>
                    
                    <div ><i className="fa-solid fa-star" style={{fontSize:"15px" , color:"black"}} ></i></div>
                    <div className="product-comment">({product.comment})</div>                                                 
                
                </div> 
                :null
                }      
                      

            </div>
            
            <div className="product-information">
                <div className='product-color'>
                    
                    {product.listColor?
                    product.listColor.map((color) =>{
                            return (<span key = {color.toString() } className='color-child'> {color}</span>)
                        })
                        :null
                    }                   

                    

                </div>
                
                <div className="product-name ">
                    <Link to={`/product/${product.id}`}> {product.ductName}</Link>
                 
                </div>
                <div className="product-price">



                    <div className="price-discount">{Math.round(product.price*(1-(product.discount/100)))}.000 đ</div> 
                    {product.discount &&
                    <>
                        <div  className="price"><i>{product.price}.000 đ</i></div> 
                    
                        <div  className="discount">-{product.discount}%</div> 
                    </>
                   
                    }
                                        
                </div>
                

            </div>
        </div>
        
    );
  }
 