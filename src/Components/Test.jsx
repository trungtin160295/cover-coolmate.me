import {React,useEffect,useState} from 'react'
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"
import Axios from "axios";

import '../style/productDetails.scss'

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  


export default function Test() {  
  

 

  const handleSubmitBtn = async () => {
    // if (!title) {
    //     alert('empty title');
    //     return;
    // }
    // if (!content) {
    //     alert('empty content')
    //     return;
    // }

    let data = 
      {
        "id":40,
        "linkImages": [
                "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/combo-3_49.jpg",
                "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/139-1.jpg",
                "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/Untitled-3_45.jpg"
                ],
                      
        
    }          
    
    Axios.post('http://localhost:3004/products', data)
    .then(res =>{
      console.log(res.data)
    })

}


   


  return (
   <>
      <button onClick={handleSubmitBtn}>đáaddas</button>
   </>
         
    
   
  )
}
