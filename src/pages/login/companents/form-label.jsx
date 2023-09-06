import { Button, Form, Input } from "antd";
import { loginUrl } from "@/utils/urls";
import { usePostRequest } from "@/hooks/request";
import axios from "axios";

const LoginForm = () => {
    const loginRequest = usePostRequest({ url: loginUrl });
    const { loading } = loginRequest;

    const handleSubmit = async (value) => {
        const { response } = await loginRequest.request({
            data: { username: value.username, password: value.password },
        });
        console.log(response, "oooooooooooooooo");
        // const { success } = response;
        // console.log(response, "ffffff");
        // if (success) {
        //     let accessTokenExpiresAt = response.data.access_token_expires_at;
        //     let adminId = response.data.id;
        //     setLocalStorage("id", adminId);
        //     setLocalStorage("accessTokenExpiresAt", accessTokenExpiresAt);
        //     setLocalStorage("accessToken", response.data.accessToken);
        //     setUser(true);
        // } else {
        //     message.warning(response.error);
        // }
    };
    return (
        <Form
            className='login__form'
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            layout='vertical'
        >
            <Form.Item
                name='username'
                label='Login'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='password'
                label='Parol'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Button className='login__btn' htmlType='submit'>
                LOGIN
            </Button>
        </Form>
    );
};

export default LoginForm;
