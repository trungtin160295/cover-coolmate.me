import React, { useState } from 'react';
import { Row,Col,Dropdown } from 'react-bootstrap'
import { useRanger } from "react-ranger";



import '../style/chooseSize.scss'
export default function ChooseSize() {

    const [body,setBody] =useState("Gầy")
    const [selectItem,setSelectItem] =useState()
   

const allFilterSize = [
    {
        id:1,
        title:"Áo dài tay",
        linkImgProduct:"https://mcdn.coolmate.me/uploads/November2020/31.jpg",
        linkImgTableSize:"../src/img/img-select-size/ao-polo.jpg"
    },
    {
        id:2,
        title:"Áo Polo",
        linkImgProduct:"https://mcdn.coolmate.me/uploads/December2021/POLO2x.png",
        linkImgTableSize:"../src/img/img-select-size/ao-dai-tay.jpg"
    },
    {
        id:3,
        title:"Áo Tank Top",
        linkImgProduct:"https://mcdn.coolmate.me/uploads/December2021/TANK_TOP2x.png",
        linkImgTableSize:"../src/img/img-select-size/ao-tank-top.jpg"
    },
    {
        id:4,
        title:"Quần Jeans",
        linkImgProduct:"https://mcdn.coolmate.me/uploads/December2021/JEANS2x.png",
        linkImgTableSize:"../src/img/img-select-size/quan-jeans.jpg"
    },
    {
        id:5,
        title:"Quần Short",
        linkImgProduct:"https://mcdn.coolmate.me/uploads/December2021/EZ_ACTIV2x.png",
        linkImgTableSize:"../src/img/img-select-size/quan-short.jpg"
    },
    {
        id:6,
        title:"Trunk Cotton Pima",
        linkImgProduct:"https://mcdn.coolmate.me/image/September2022/mceclip0_25.jpg",
        linkImgTableSize:"../src/img/img-select-size/quan-trunk-cotton-pima.jpg"
    }
]
const bodyList = [
    "Gầy",
    "Bình thường",
    " Đầy đặn"
]


const listChooseBody=[
    {id:1,
    title:"Chiều cao của bạn",
    min:155,
    max:200,
    unit:"cm"
    },
    {id:2,
        title:"Cân nặng  của bạn",
        min:48,
        max:90,
        unit:"kg"
        }
]
const FilterChild = ({item}) =>{
    return(
       <>
        <Dropdown.Item 
        className='fiter-child' 
        onClick={() =>setSelectItem(item)} 
        >
        <div className='container-fiter-img'>
           <img src={item.linkImgProduct} alt="" />
        </div>
       <div className='container-fiter-name'>
       {item.title}
        </div>
        </Dropdown.Item>
   <Dropdown.Divider />

       </>
)
    
       

}
const Renger =({item}) =>{
    const [values, setValues] = useState([item.min]);

    const { getTrackProps, handles } = useRanger({
            min: item.min,
            max: item.max,
            stepSize: 1,
            values,
            onChange: setValues
            });
    return(
        <div className='choose-body'>
                            <div className='choose-body-title'>
                                <span className='body-title'>{item.title} : </span>
                                <span className='selected-body'>{values} {item.unit} </span>

                            </div>
                            <div
                                className="set-body"
                                {...getTrackProps({
                                style: {
                                    height: "20px",
                                    background: "white",
                                    borderRadius: "10px",
                                    border:"1px solid" ,
                                }
                                }) }
                            
                            >
                                {handles.map(({ getHandleProps }) => (
                                <button
                                    {...getHandleProps({
                                    style: {
                                        width: "25px",
                                        height: "25px",
                                        outline: "none",
                                        borderRadius: "100%",
                                        background: "blue",
                                        border: "solid 1px #888"
                                    }
                                    })}
                                />
                                ))}
                            </div>

                        </div>
    )

    } 
    



  return (
    
    <div className='choose-size'>
        <div className='choose-title'>
            <h4 className='title'> Hướng dẫn chọn size của Coolmate</h4>
        </div>
        <Row className='container-fiter'>
            <Col xs={12}  sm= {12} md={12}  lg={4}  xl={4} xxl={4} className='container-fiter-left'>
                <div className='fixed-left'>
                <div className='title'> Loại sản phẩm</div>
                <Dropdown className='w-100 container-select'>
                    <Dropdown.Toggle className='w-100'>
                        <div className='button-select'>{selectItem ?selectItem.title:"--Chọn sản phẩm bạn cần xem--"}</div>
                        
                    
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='w-100 container-fiter-child'>
                        
                        <Dropdown.Header>-- Chọn sản phẩm bạn cần xem--</Dropdown.Header>
                        <Dropdown.Divider />

                        
                        {allFilterSize.map((item) =>{
                            return(<FilterChild item={item} key={item.id}/>)
                        })}
                        
                       
                        
                    </Dropdown.Menu>
                </Dropdown>

                {selectItem &&
                <div className='select-item-img'>
                <img src={selectItem.linkImgProduct} alt= {selectItem.title}/>
                </div>
                }
                
                </div>
               
            </Col>

            <Col xs={12}  sm= {12} md={12}  lg={8}  xl={8} xxl={8} className='container-fiter-right'>
                <Row className='container-body-parameters'>
                    <Col xs={12}  sm= {8} md={8}  lg={8}  xl={8} xxl={8} className='choose-body-parameters'>
                        <h4 className='title'>Thông số cơ thể</h4>
                        <div  className='body-parameters' >
                        {bodyList.map((item) =>{
                            return (
                            <button 
                            key={item}
                            className ={`button-choose-body ${body == item ? 'active' : ''}`}
                            onClick={() => setBody(item)}
                            >
                            {item}
                            </button>)
                        })}
                        </div>
                        {listChooseBody.map((item) =>{
                            return <Renger item={item} key={item.id}/>
                        })}
                    </Col>
                    <Col className='suggestions-size'>
                        <h4 className='title'>Gợi ý Sezi</h4>
                        <div className='suggestions-content'>
                            XL

                        </div>
                    </Col>
                </Row>
                <hr />
                {selectItem &&
                

                <div className='select-item-tablesize'>
                    <div className='tablesize-content'>
                        <h6 className='title'>Size chart</h6>
                        <div className='content'>
                        * Thông số cơ bản của các sản phẩm coolmate: Lấy chiếc áo mà các bạn đang
                            mặc và cảm thấy vừa nhất sau đó đo các kích thước của áo,và đối chiếu với bảng
                            thông số của chúng tôi theo các kích thước sau:
                        </div>

                    </div>
                    <img src={selectItem.linkImgTableSize} alt= {selectItem.title}/>
                </div>
                }

               
                

            </Col>



        </Row>



      
      
      
    



    </div>

    
    
  )
}
