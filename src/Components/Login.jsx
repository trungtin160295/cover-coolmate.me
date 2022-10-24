import  { useState ,useEffect} from 'react';

import {Modal,CloseButton }from 'react-bootstrap';

import '../style/header.scss'
import { useForm } from 'react-hook-form';

export default function Login({button}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
 

  return (
    <div className='card-login'>
      {button ? 
      <button  onClick={handleShow}>
        <img src="https://www.coolmate.me/images/header/icon-account.svg" alt="" />
      </button>      
      :
      <button  onClick={handleShow}className="button-login--now" >Đăng nhập ngay</button>
}
      
      <Modal show={show} onHide={handleClose}>
        <div className='login-top'>
          <div className=' login-title'>
            <h2 className='title'>Đăng nhập</h2>
            <CloseButton className='close-button' onClick={handleClose}/>
          </div>
          {/* <span>Nếu đã từng mua hàng trên Website trước đây,
             bạn có thể dùng tính năng  <a href="">"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng email nhé. </span> */}
        </div>        
        <form onSubmit={handleSubmit(onSubmit) }>     
          <div className='form-login'>
            <input type="text" placeholder="Email / Mobile number"  className='login-input' {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="password" placeholder="Password" className='login-input'{...register("Mobile number", {required: true, minLength: 9, maxLength: 12})} />
            <button type='Sumbit' className='button-login'>Đăng nhập</button>
          </div>     
          
        </form>
        
      </Modal>
    </div>
  );
}

