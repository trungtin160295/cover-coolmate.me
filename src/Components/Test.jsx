import {React,useEffect,useState} from 'react'
import axios from "axios";
import useFetch from "../customize/fetch";
import useAxiosPost from "../customize/addData";

import useSrt from "../customize/str"
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";



import '../style/productDetails.scss'

let data = 
{
  id:uuidv4(),

  "linkImages": [
          "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/combo-3_49.jpg",
          "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/139-1.jpg",
          "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/Untitled-3_45.jpg"
          ],}
export default function Test() {  
  const [isError, setIsError] = useState(false);

 

  const handleSubmitBtn = async () => {    
            
    await Axios.post('http://localhost:3004/cartProduct', data)
    .then(res =>{
      setIsError()
    })
}

const hand = () =>{

   useAxiosPost(
    "http://localhost:3004/cartProduct",
     {
       data,
      }
      );
     
}
   


  return (
   <>
      <button onClick={handleSubmitBtn}>đáaddas</button>

      <button onClick={hand}>222</button>
   </>
         
    
   
  )
}
