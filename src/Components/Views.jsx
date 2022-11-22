import {Header,Footer}  from './HeaderFooter';
import ScrollToTops from './ScrollToTops';
import { Outlet } from "react-router-dom";

import useFetch from '../customize/fetch';
import { Button,Spinner } from 'reactstrap';




export default function Views() { 

  

  const { data: dataHeadefAndFooter, isLoading}
  = useFetch(`http://localhost:3004/headerAndFooter`, false);

    return (
     
      isLoading === false && dataHeadefAndFooter?
      <>
        <Header dataheader={dataHeadefAndFooter.header} />
        <main>
          <Outlet />
          <ScrollToTops/>
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
  

  