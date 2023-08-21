import LoginForm from "./companents/form-label";
import { login_logo } from "@/assets/images";

const LoginPage = () => {
    return (
        <div className='login'>
            <div className='login__form_item'>
                <LoginForm />
            </div>
            <div className="login__img">
                <img src={login_logo} alt="" />
            </div>
        </div>
    );
};

export default LoginPage;
