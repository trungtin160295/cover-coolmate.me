import  { useState ,useEffect} from 'react';
import {Modal,CloseButton }from 'react-bootstrap';
import '../style/header.scss'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { ClassNames } from '@emotion/react';
import IconAccount from "../assets/img/icon-account.svg"


export default function Login({img,classNames}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
const onSubmit = (data) => alert("Bạn kiểm tra lại thông tin đăng nhập");
function ErrorForm({name} ){
  return(
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          : null;
      }}
    />
  )
  
}
  return (
    <div className='card-login'>
      {
        <button  onClick={handleShow} className={classNames}>
        {
          img ? <img src={IconAccount} alt="" />
          :"Đăng nhập ngay"
        }
        
      </button> 
      }
           
      
      
      <Modal show={show} onHide={handleClose}>
        <div className='login-top'>
          <div className=' login-title'>
            <h2 className='title'>Đăng nhập</h2>
            <CloseButton className='close-button' onClick={handleClose}/>
          </div>
          <span>Nếu đã từng mua hàng trên Website trước đây,
             bạn có thể dùng tính năng  <a href="">"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng email nhé. </span>
        </div>        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="account">
            <input 
               type="text" 
                placeholder="Email/SDT của bạn" 
                className="input_account" 
                {...register("Email/SDT", 
                {required: "Vui lòng  nhập thông tin." 
                
                })} 
                />
            <ErrorForm name="Email/SDT"/>
            
           </div>
           <div className="account">
            <input 
               type="password"
                placeholder="Mật khẩu" 
                className="input_account" 
                {...register("Password", 
                {required: "Vui lòng  nhập mật khẩu." 
                
                })} 
                />
            <ErrorForm name="Password"/>
            
           </div>
           
             <div className="button_login">
              <button className='text_button_login' type='Sumbit'>
                        Đăng nhập
              </button>
              
            </div>
        </form>
                        
        <p className="or">Hoặc</p>
          <div className="button_login_facebook">
            <button className="login_facebook">
           <p className="text_login">Đăng nhập với Facebook <i className="fa-brands fa-facebook icon_login" /></p>
          </button>
           </div>
           <div className="button_login_google">
           <button className="login_Google">
              <p className="text_login">Đăng nhập với Google <i className="fa-brands fa-google icon_login" /></p>
            </button>
           </div>
           <div className="footer_login">
            <p className="new_account">Đăng ký tài khoản mới</p>
            <p className="new_account">Quên mật khẩu</p>
            </div>
                                   
                       
        
        
      </Modal>
    </div>
  );
}




