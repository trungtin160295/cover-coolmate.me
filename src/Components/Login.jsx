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
          <span>Nếu đã từng mua hàng trên Website trước đây,
             bạn có thể dùng tính năng  <a href="">"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng email nhé. </span>
        </div>        
        
                        
                        <div className="account">
                            <input type="text" className="input_account" placeholder='Email/SDT của bạn' />
                        </div>
                        <div className="account">
                            <input type="text" className="input_account" placeholder='Mật khẩu' />
                        </div>
                        <div className="button_login">
                            <button className="text_button_login">
                                Đăng nhập
                            </button>
                        </div>
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




