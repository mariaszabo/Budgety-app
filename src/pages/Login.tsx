import { useAuth } from "@/contexts/AuthContext";
import { Button, Card, Checkbox, Form, Input } from "antd";
// import { login } from "@/requests";

type FieldType = {
  username: string;
  password: string;
  remember?: boolean; // ? --> This is optional
};

// type LoginProps = {
//   onLogin: (token: string) => void; // --> ia token-ul si il trimite la functia onLogin
// };

const Login = () => {
  const { login } = useAuth(); // --> extrage login din contextul de autentificare

  const onFinish = async (values: FieldType) => {
    //  Cuvântul cheie `async` este folosit pentru a declara o funcție asincronă în JavaScript.

    console.log("onFinish:", values);

    await login(values); // asteapta pana cand login(values.username, values.password) este rezolvat

    // const result = await login(values); // asteapta pana cand login(values) este rezolvat

    //  O funcție asincronă este o funcție care returnează o promisiune. Aceasta poate conține o expresie `await`, care oprește execuția funcției asincrone și așteaptă până când promisiunea este rezolvată sau respinsă, după care funcția asincronă este reluată și valoarea promisiunii returnate este returnată.

    //  În codul acesta , `onFinish` este o funcție asincronă. Aceasta înseamnă că, atunci când este apelată, ea returnează imediat o promisiune și nu blochează restul codului. În interiorul funcției, poți folosi `await` pentru a aștepta rezultatul apelului `login(values)`, fără a bloca restul codului.

    //  Acest model de programare asincronă este foarte util în JavaScript, deoarece permite codului să continue să ruleze în timp ce așteaptă operațiuni care ar putea dura mult timp, cum ar fi cererile de rețea.

    // if (result) {

    //   onLogin(result.token); // daca result este adevarat, atunci trimite token-ul la functia onLogin

    // }
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
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

export default Login;
