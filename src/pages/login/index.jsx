import LoginForm from "./companents/form-label";
import LoginImg from "../../assets/images/login logo.png";

const LoginPage = () => {
  return (
    <div className="login__page">
      <div className="login">
        <div className="login__form">
          <div className="login__info">
            <h1 className="login__title">IT Park Xorazm</h1>
            <p className="login__text">
              #Sening IT Karyerang shu yerdan boshlanadi
            </p>
          </div>
          <LoginForm />
        </div>
        <div className="login__img">
          <div className="login__img_wrapper">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
