import {React,useEffect,useState} from 'react'
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"

import '../style/productDetails.scss'

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  


export default function Test() {
  const [keyWord,setKeyWord] =useState("")
  

  const { data: dataProducts, isLoading }
  = useFetch(`http://localhost:3004/products/?q=${keyWord}`, false); 



   


  return (
   <>
   <input type="text" onChange={(e) =>setKeyWord(e.target.value)} />
    <button onClick={()=>console.log(dataProducts)}>đáaddas</button>
   </>
         
    
   
  )
}
