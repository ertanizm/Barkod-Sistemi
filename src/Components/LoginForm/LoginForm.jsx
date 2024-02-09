import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../LoginForm/Login.css';

const LoginForm = () => {
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
                />
              </div>
              <div className="buttonContainer d-grid gap-2 mt-3">
                  <button  type="submit" className="btn">
                    <b>Giriş Yap</b>
                  </button>
              </div>
              <p style={{color: '#3652AD;'}} className="forgot-password text-right mt-2">
                Şifre mi ? <a href="#">Unuttum</a>
              </p>
            </div>
          </form>
        </div>
      );
}

export default LoginForm