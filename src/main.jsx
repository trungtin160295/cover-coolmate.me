import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import { Provider} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  FallbackLoading from './Components/FallbackLoading';
import  Wrapper from './Components/Wrapper';
import  Test from './Components/Test';

const Home = lazy(() => import('./pages/Home'));
const Views = lazy(() => import('./Components/Views'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const PagesContent = lazy(() => import('./pages/PagesContent'));
const PagesName = lazy(() => import('./pages/PagesName'));
const Cart = lazy(() => import('./pages/Cart'));
const AllProduct = lazy(() => import('./pages/AllProduct'));
const AboutCoolmate = lazy(() => import('./pages/AboutCoolmate'));
const ChooseSize = lazy(() => import('./pages/ChooseSize'));

ReactDOM.createRoot(document.getElementById('root')).render(
<Suspense fallback={<FallbackLoading />}>
<Provider store={store} >
    <React.StrictMode>
    <BrowserRouter>
    <Wrapper>
    <Routes>
        <Route path="/" element={<Views />} >
          <Route  index element={<Test/>} />
          <Route path="Menu/Sale" element={<div> chưa có  </div>} />
          <Route path="Cart" element={<Cart/>} />
          <Route path="Menu/Sản-phẩm" element={<AllProduct/>} />
          <Route path="Menu/Về-Coolmate" element={<AboutCoolmate />} />     
          <Route path="Menu/Chọn-Size" element={<ChooseSize/>}/>         
          <Route path="Menu/Coolxprint" element={<h1>Coolxprint</h1>} />      
          <Route path = "/product/:ductName&:id" element={<ProductDetails/>}/>       
          <Route path="/Danh-mục/:content" element={<PagesContent/>}/> 
          <Route path="/collection/:name" element={<PagesName/>}/>      
                        
        </Route>
    </Routes>

    </Wrapper>

      
  </BrowserRouter>
  </React.StrictMode>
    </Provider>
    

</Suspense>

  
  
 
)




