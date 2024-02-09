import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../LoginForm/Login.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { LiveChatLoaderProvider,HelpScout } from 'react-live-chat-loader'
import { FcOnlineSupport } from "react-icons/fc";

const MySwal = withReactContent(Swal);
const LoginForm = () => {

    const [isChatOpen, setIsChatOpen] = React.useState(false);
    const[username,setUsername]=React.useState('');
    const[password,setPassword]=React.useState('');
 

    const toggleChat = () => {
      setIsChatOpen(!isChatOpen);
    };
    const handleLogin=(e)=>{
      e.preventDefault();
      if(password!=='123')
      {
        MySwal.fire({
          icon:'error',
          title:'Hata',
          text:'Şifreniz Yanlış ! Tekrar Kontrol Ediniz'
        });
      }
      else{
        window.location.href='/home';
      }      
    }
   
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Giriş Yap</h3>
              <div className="form-group mt-3">
                <label>Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Kullanıcı Adını Giriniz"
                />
              </div>
              <div className="form-group mt-3">
                <label>Şifre</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Şifrenizi Giriniz"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="buttonContainer d-grid gap-2 mt-3">
                  <button onClick={handleLogin} type="submit" className="btn">
                    <b>Giriş Yap</b>
                  </button>
              </div>
              <p style={{color: '#3652AD;'}} className="forgot-password text-right mt-2">
                Şifre mi ? <a href="#">Unuttum</a>
              </p>
            </div>
          </form>
          <LiveChatLoaderProvider providerKey="asdjkasl123123" provider="helpScout">
            <div className="App">
              <div className="live-chat-container">
                <button className="live-chat-button" onClick={toggleChat}>
                  <FcOnlineSupport size={35} />
                </button>
                {isChatOpen && (
                  <div className={`popup ${isChatOpen ? 'open' : ''}`}>
                    <div className="popup-content">
                      <button className="close-button" onClick={toggleChat}>X</button>
                      <p>BU BİR DİJİTAL ÇIRAKTIR</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
    </LiveChatLoaderProvider>
        </div>
      );
}
export default LoginForm