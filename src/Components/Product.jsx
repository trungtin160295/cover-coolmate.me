import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Text from './Text';
import '../style/ListProduct.scss'


export default function Product( props) {  
    
   const product=props.products
   
        
    return (
        <div className="product">
            <div className="product-img">
                <Link to={`/product/${product.ductName}&${product.id} `}>
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

                {product.discount&&<Text className="price">Chỉ với {Math.round(product.price*(1-(product.discount/100)))} K</Text>}
                {/* <Text className="attention ">Saving Packs</Text> */}
            
                {product.rate? 
                    <div className="evaluate">
                    <Text >{product.rate}</Text>
                    
                    <Text ><i className="fa-solid fa-star" style={{fontSize:"15px" , color:"black"}} ></i></Text>
                    <Text className="product-comment">({product.comment})</Text>                                                 
                
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
                    <Link to={`/product/${product.ductName} ${product.id}`}> {product.ductName}</Link>
                 
                </div>
                <div className="product-price">



                    <Text className="price-discount">{Math.round(product.price*(1-(product.discount/100)))}.000 đ</Text> 
                    {product.discount &&
                    <>
                        <Text  className="price"><i>{product.price}.000 đ</i></Text> 
                    
                        <Text  className="discount">-{product.discount}%</Text> 
                    </>
                   
                    }
                                        
                </div>
                

            </div>
    </div>
  

        
        
    );
  }
 