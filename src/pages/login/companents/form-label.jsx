import { Button, Form, Input } from "antd";

const LoginForm = () => {
    const handleSubmit = () => {
        console.log("salom");
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
                name='username'
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
