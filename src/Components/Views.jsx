


import {Header,Footer}  from './HeaderFooter';
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
        <main><Outlet /></main>                                 
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
            <span>
              {' '}Loading
            </span>
          </Button>
        </div>
      
    );
  }
  

  