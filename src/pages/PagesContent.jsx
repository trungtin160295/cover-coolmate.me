import { useParams } from "react-router-dom";
import { useState } from "react";
import ListProduct from "../Components/ListProduct";
import useFetch from "../customize/fetch";


import '../style/HomeUnderwear.scss';

export  default function PageTitle () {  
  const  listFilter = ["Mới nhất","Bán chạy", "Giá thấp đến cao","Giá cao đến thấp"]
  const [filter,setFilter] =useState(listFilter[0])
  let {content} = useParams();


  const { data: dataProducts, isLoading }
  = useFetch(`http://localhost:3004/products/?q=${content}`, false); 


    

  

  return (
    <>
        <div className="collections-filter">
            <h2>Sản phẩm :{content}</h2> 

            <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            
          >
            {listFilter.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

        </div>
      
        { isLoading === false && dataProducts.length > 0 &&
            <ListProduct 
              imgFirst='https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/do-mac-nha-va-mac-trong.jpg'
              dataProducts ={dataProducts}
            />
          }
         { isLoading === false &&  dataProducts.length =="0" &&
         <div>
            Sản phẩm này chưa trình bán.
            <br/>
            Mong quý khách xem các sản phẩm khác
         </div>
         }

        


    </>

    )
}
