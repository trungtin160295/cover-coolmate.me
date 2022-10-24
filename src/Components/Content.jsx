




function Content(props) {  
    
      
    
    return (
        <div className ="drop-menu" >
        <a  className="flex-colum">                             
         <span>{props.content} </span>                    
         <span >{props.attention}</span>   
                        
        </a> 
       </div>
  
    );
  }
  export default Content