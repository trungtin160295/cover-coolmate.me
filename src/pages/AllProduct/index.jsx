import ListProduct from "../../components/ListProduct";
import useFetch from "../../ultils/fetch";
import useSrt from "../../ultils/str"
import { useParams } from "react-router-dom";
import {Row,Col, } from 'react-bootstrap';



import './AllProduct.scss'
export default function AllProduct () {    

    let {title} = useParams();
    const { data: dataProducts, isLoading }
  = useFetch("products", false); 

    const collectionsFilter=[
        {
            id:1,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip0_35.png"
        },
        {
            id:2,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip1_79.png"
        },
        {
            id:3,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip2_44.png"
        },
        {
            id:4,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip4_40.png"
        },
        {
            id:5,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip2_97.png"
        },
        {
            id:6,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip5_4.png"
        }
        
    ]

    const collectionsListing = [
        {
            id:1,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-short.jpg",
            title1:"Quần Shorts",
            type:true
        },
        {
            id:2,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-dai.jpg",
            title1:"Quần dài",
            type:true
        },
        {
            id:3,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2022/AntismellTANKTOP.jpg",
            title1:"Áo Tank top",
            title2:"Áo thể thao",
            type:true
        },
        {
            id:4,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-lot.jpg",
            title1:"Quần lót nam",
            type:false
        },
        {
            id:5,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/phu-kien-nam.jpg",
            title1:"Phụ kiện",
            type:false

        },
        {
            id:6,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2022/AntismellPOLO-2.jpg",
            title1:"Áo Polo",
            title2:"Áo Sơ mi",
            type:true
        }
    ]
   
   
    const Collection =({collection}) =>{  
        
       
      let productFilter       
        if(collection.type===true){
            let productFilter1 = dataProducts.filter(product =>product.type==useSrt(collection.title1,true));
            let productFilter2=[];
            if (collection.title2) {
                productFilter2 = dataProducts.filter(product =>product.type==useSrt(collection.title2,true));                
               }
            productFilter =[...productFilter1,...productFilter2]
        }
        else{
             productFilter = dataProducts.filter(product =>product.category==useSrt(collection.title1,true))
        }
        

        return(
           
            <>
            <section className={`${collection.title1} collections-listing`}>
            <h2 className="collections-listing__tittle"> <span>{collection.title1}</span> {collection.title2?  <span > & {collection.title2}  </span> :null}</h2>
            <ListProduct 
              imgFirst={collection.linkImg}
              dataProducts ={productFilter}
            />
            </section>
            </>
        )
    }

    return(
        <div className="all-products">
            <div className="collections-filter">
                {collectionsFilter.map((item) => {
                    return(
                        <Col className="collections-filter__img"><a href="#"><img src={item.linkImg} key={item.id} alt=""  /></a></Col>
                        
                    )
                })}
            </div>
            <hr />
           {isLoading===false && dataProducts.length >0 ?
           
            collectionsListing.map((collection) =>{
                return < Collection collection={collection} key={collection.id}/>

            }):null
            
           } 
        </div>
    )
}   