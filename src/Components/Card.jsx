import { Button } from 'reactstrap';
import Text from './Text';
import '../style/card.scss'


export default  function Card(props) {  
const {linkImage,title,content}= {...props.obj};
      

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
                        <Text className="title">
                        {title}
                        </Text>
                        <div >
                           {
                              content.map((text) =>{
                                 return(<Text key={text.key}>{text.content}</Text>)
                              })
                           }
                        </div>
                        <span>
                           <Button color="info" outline>
                              Tìm hiểu thêm 
                           </Button>
                        </span>
                     
                      </div>
                 
         </div>            
                     
      
    );
  }
    


