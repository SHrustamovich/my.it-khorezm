import LoginForm from "./companents/form-label";
import LoginImg from "../../assets/images/login logo.png";
import { Spin } from "antd";
import { usePostRequest } from "@/hooks/request";
import { loginUrl } from "@/utils/urls";

const LoginPage = () => {
  const loginRequest = usePostRequest({ url: loginUrl });
  const { loading } = loginRequest;

  return (
    <div className="login__page">
      <Spin spinning={loading} />
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
