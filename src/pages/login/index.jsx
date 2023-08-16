import LoginForm from "./companents/form-label";
import LoginImg from "../../assets/images/login logo.png"
const LoginPage = () => {
    return (
        <div className='login'>
            <div className='login__form_item'>
                <LoginForm />
            </div>
            <div className="login__img">
                <img src={LoginImg} alt="" />
            </div>
        </div>
    );
};

export default LoginPage;
