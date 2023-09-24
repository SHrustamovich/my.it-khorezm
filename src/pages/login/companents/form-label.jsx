import { Button, Checkbox, Form, Input } from "antd";

const LoginForm = () => {
  const handleSubmit = () => {
    return "salom";
  };
  return (
    <Form
      className="login__form_wrapper"
      autoComplete="off"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      layout="vertical"
    >
      <Form.Item
        name="username"
        label="Login"
        rules={[
          {
            required: true,
            message: "Iltimos, foydalanuvchi nomingizni kiriting",
          },
          {
            whitespace: true,
            message: "Foydalanuvchi nomi bo'sh bo'lishi mumkin emas",
          },
        ]}
        hasFeedback
      >
        <Input
          autoFocus={true}
          className="login__form_input"
          placeholder="Loginingizni kiriting..."
        />
      </Form.Item>
      <Form.Item
        name="parol"
        label="Parol"
        rules={[
          {
            required: true,
            message: "Iltimos, parolingizni kiriting",
          },
          {
            whitespace: true,
            message: "Parol bo'sh bo'lishi mumkin emas",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          className="login__form_input"
          placeholder="Parolingizni kiriting..."
        />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        className="login__form_checkbox"
      >
        <Checkbox>Parolni saqlash</Checkbox>
      </Form.Item>
      <Button className="login__form_btn" htmlType="submit">
        Kirish
      </Button>
    </Form>
  );
};

export default LoginForm;
