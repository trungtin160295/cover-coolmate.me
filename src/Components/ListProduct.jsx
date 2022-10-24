

import {Row,Col, } from 'react-bootstrap';
import Product from './Product';

import '../style/listProduct.scss'

export default function ListProduct({imgFirst,dataProducts}) {       
   
    return (
       dataProducts.length > 0 &&
        
        <Row className='list-product' >
            {imgFirst ?
            <Col    xs={12}  sm= {12} md={6}  lg={4}  xl={3} xxl={2}  className="collection-thumbnail">
                <img src={imgFirst} alt={imgFirst} />
            </Col>
            :null
            } 
            
            {     
             dataProducts.map( (product) =>{
                return(                 
                    <Col xs={12}  sm= {12} md={6}  lg={4}  xl={3}  xxl={2} className='product-child' key={product.id}>
                         <Product products ={product} />   
                        
                    </Col>
                                                                           
                )
            })}
                                     
        </Row>

        
        
       
        
    )
 }
