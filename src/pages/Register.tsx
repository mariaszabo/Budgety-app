import { useAuth } from "@/contexts/AuthContext";
import { Button, Card, Checkbox, Form, Input } from "antd";
// import { register } from "@/requests";

type FieldType = {
  fullName: string;
  username: string;
  password: string;
  terms: boolean;
};

const Register = () => {
  const { register } = useAuth();
  const onFinish = (values: FieldType) => {
    console.log("onFinish:", values);
    register(values);
  };

  // const onFinishFailed = (errorInfo: any) => { console.log("Failed:", errorInfo); };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //  onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Full name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="terms"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          rules={[
            {
              required: true,
              message: "Please agree with terms & conditions!",
            },
          ]}
        >
          <Checkbox>I agree with terms & conditions</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
