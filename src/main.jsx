import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import { Provider} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  FallbackLoading from './components/FallbackLoading';


const Home = lazy(() => import('./pages/Home'));
const Views = lazy(() => import('./components/Views'));
const ProductDetails = lazy(() => import('./pages/Details'));
const PagesName = lazy(() => import('./pages/Category'));
const Cart = lazy(() => import('./pages/Cart'));
const AllProduct = lazy(() => import('./pages/AllProduct'));
const AboutCoolmate = lazy(() => import('./pages/AboutCoolmate'));
const ChooseSize = lazy(() => import('./pages/ChooseSize'));
const Seach = lazy(() => import('./pages/Search'));
const  Coolxprint = lazy(() => import('./pages/Coolxprint'));

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store} >
<Suspense fallback={<FallbackLoading />}>

    <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Views />} >
          <Route  index element={<Home/>} />
          
          <Route path="Cart" element={<Cart/>} />
          <Route path="Menu/Sản-phẩm" element={<AllProduct/>} />
          <Route path="Menu/Về-Coolmate" element={<AboutCoolmate />} />     
          <Route path="Menu/Chọn-Size" element={<ChooseSize/>}/>         
          <Route path="Menu/Coolxprint" element={<Coolxprint/>} />   
          <Route path="/Search/:keyWord" element={<Seach/>}/>        
          <Route path = "/product/:id" element={<ProductDetails/>}/>       
          <Route path="/collection/:name" element={<PagesName/>}/> 
          <Route path="*" element={<Home/>}/>           
                        
        </Route>
    </Routes>

  

      
  </BrowserRouter>
  </React.StrictMode>
    
    

</Suspense>
</Provider>
  
  
 
)




