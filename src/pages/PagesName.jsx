import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import ListProduct from "../Components/ListProduct";
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"
import sortBy from "../customize/sortBy"
import '../style/pagesName.scss';

export  default function PageTitle () {  
  const  listFilter = ["Mới nhất","Bán chạy", "Giá thấp đến cao","Giá cao đến thấp"]
  const [filter,setFilter] =useState("Mới nhất")
  const [dataProductsFilter,setDataProductsFilter] =useState([])
  const {name} = useParams();
 
  
    const { data: dataProducts, isLoading }
  = useFetch(`http://localhost:3004/products/?q=${name}`, false); 
  if(isLoading === false && !dataProductsFilter.length){
    setDataProductsFilter(dataProducts)
    }


  useEffect(() => {
    if(isLoading === false && dataProducts.length >0){
      let data =[...dataProducts]
      switch (filter) {
        
        case "Giá thấp đến cao":
          setDataProductsFilter(sortBy(data, {prop:"price", desc: false}))          
          break;
        case "Giá cao đến thấp":
            setDataProductsFilter(sortBy(data, {prop:"price", desc: true}))
            break;
        case "Bán chạy":
          setDataProductsFilter(sortBy(data, {prop:"comment", desc: true}))
          break;
    
        default:
          setDataProductsFilter(data)
          
      }
    }
    
},[filter,dataProducts,name]) 


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
                  { isLoading === false && dataProducts.length >0 &&
            <ListProduct 
              dataProducts ={dataProductsFilter}
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
