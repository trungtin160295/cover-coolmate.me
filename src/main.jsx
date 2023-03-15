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
  Outlet
} from "react-router-dom";
import  Loading from './components/Loading';
import {Header,Footer}  from './components/HeaderFooter';
import useFetch from './ultils/fetch';
import IconLoading from"./assets/img/Spinner-49px.svg"



const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/Details'));
const PagesName = lazy(() => import('./pages/Category'));
const Cart = lazy(() => import('./pages/Cart'));
const AllProduct = lazy(() => import('./pages/AllProduct'));
const AboutCoolmate = lazy(() => import('./pages/AboutCoolmate'));
const ChooseSize = lazy(() => import('./pages/ChooseSize'));
const Seach = lazy(() => import('./pages/Search'));
const  Coolxprint = lazy(() => import('./pages/Coolxprint'));


function Views() { 
  const { data: dataHeadefAndFooter, isLoading}
  = useFetch("headerAndFooter");
    return (
      isLoading === false && dataHeadefAndFooter?
      <>
        <Header dataheader={dataHeadefAndFooter.header} />
        <main>
          <Outlet />
         
        </main>                                 
        <Footer dataFooter={dataHeadefAndFooter.footer}/>                         
      </>
      :null
      
    );
  }

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store} >
<Suspense fallback={<Loading  linkImg={IconLoading} className="loading-page"/>}>

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
          {/* <Route path="*" element={<Home/>}/>            */}
        </Route>
    </Routes>

  

      
  </BrowserRouter>
  </React.StrictMode>
    
    

</Suspense>
</Provider>
  
  
 
)




