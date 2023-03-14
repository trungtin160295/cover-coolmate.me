import {Header,Footer}  from './HeaderFooter';
import { Outlet } from "react-router-dom";

import useFetch from '../ultils/fetch';
import { Button,Spinner } from 'reactstrap';
import { useSelector,useDispatch  } from "react-redux";



export default function Views() { 
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
      :
      isLoading ===true && 
        <div className='loading'>
        <Button
            color="primary"
            disabled
          >
            <Spinner size="sm">
              Loading...
            </Spinner>
           
          </Button>
        </div>
      
    );
  }
  

  