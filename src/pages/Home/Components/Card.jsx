

import { Link } from 'react-router-dom';



export default  function Card(props) {  
const {linkImage,title,content,link}= {...props.obj};
      

    let className;
    if (props.right) {
       className = "card";
      } else {
        className = " card right"
      }
    
    return (
        <div className={className}>
                     <img src={linkImage}  alt={props.obj.title} />    
                     <div className='content'> 
                        <div className="title">
                        {title}
                        </div>
                        <div >
                           {
                              content.map((text) =>{
                                 return(<div key={text.key}>{text.content}</div>)
                              })
                           }
                        </div>
                        <span>
                           <Link to={link} color="info">
                              Tìm hiểu thêm 
                           </Link>
                        </span>
                     
                      </div>
         </div>            
    );
  }
    


