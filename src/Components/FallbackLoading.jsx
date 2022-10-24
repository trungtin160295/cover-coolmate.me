import React from 'react'
import { Button,Spinner } from 'reactstrap';

export default function FallbackLoading() {
  return (
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
  )
}
