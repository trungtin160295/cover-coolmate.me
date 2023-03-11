import {useState}from 'react'
import { useParams } from "react-router-dom";
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"
import ListProduct from '../Components/ListProduct';
import IconSearch from "../img/icon-search.svg"


import '../style/pageSeach.scss';



export  default function Seach () {  
    const {keyWord} = useParams();
    console.log(keyWord);
    const [key,setKey] =useState(keyWord)
      const { data: dataProducts, isLoading }
    = useFetch(`http://localhost:3004/products/?q=${key}`, false); 
    
  
  

  
  
    return (
      <>
          <div className="collections-filter">
              <h2>Sản phẩm  </h2> 
                <div className='container-input-seach'>
                 <form >
                     <input type="text"  placeholder='Tìm kiếm sản phẩm ...' onChange={(e) =>setKey(e.target.value)} />
                    
                    <button>
                    <img src={IconSearch} alt="" />

                    </button>  

                  </form>

                </div>
              
              


              
          </div>
                { isLoading === false && dataProducts.length >0 &&
              <ListProduct 
                dataProducts ={dataProducts}
              />
            }
             { isLoading === false && dataProducts.length == 0 &&
           <div style={{margin: "30px",textAlign:"center"}}>
              Sản phẩm này chưa trình bán.
              <br/>
              Mong quý khách xem các sản phẩm khác <a href="http://127.0.0.1:5173/">Trang chủ</a>
               
           </div>
           }
        </>
  
      )
  }
