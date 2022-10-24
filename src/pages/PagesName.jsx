import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import ListProduct from "../Components/ListProduct";
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"
import sortBy from "../customize/sortBy"
import '../style/HomeUnderwear.scss';

export  default function PageTitle () {  
  const  listFilter = ["Mới nhất","Bán chạy", "Giá thấp đến cao","Giá cao đến thấp"]
  const [filter,setFilter] =useState("Mới nhất")
  const [dataProductsFilter,setDataProductsFilter] =useState()
  const {name} = useParams();
  
    const { data: dataProducts, isLoading }
  = useFetch(`http://localhost:3004/products/?q=${name}`, false); 
  // if(isLoading===true ){
  //   setDataProductsFilter([])
        
  //   }
  useEffect(() => {
    if(isLoading === false && dataProducts.length >0){
      switch (filter) {
      
        case "Giá thấp đến cao":
          setDataProductsFilter(sortBy(dataProducts, {prop:"date", desc: false}))
          break;
        case "Giá cao đến thấp":
            setDataProductsFilter(sortBy(dataProducts, {prop:"date", desc: true}))
            break;
        case "Bán chạy":
          setDataProductsFilter(sortBy(dataProducts, {prop:"comment", desc: true}))
          break;
    
        default:
          setDataProductsFilter(dataProducts)
          
      }
    }
    
},[filter]) 


  return (
    <>
        <div className="collections-filter">
            <h2>Sản phẩm :{useSrt(name,false)} </h2> 
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
        <button onClick={() =>console.log(dataProductsFilter) }>aaa</button>
          { isLoading === false && dataProducts.length >0 &&
            <ListProduct 
              dataProducts ={dataProductsFilter}
            />
          }
           { isLoading === false && dataProducts.length == 0 &&
         <div style={{margin: "30px",textAlign:"center"}}>
            Sản phẩm này chưa trình bán.
            <br/>
            Mong quý khách xem các sản phẩm khác
         </div>
         }
      </>

    )
}
