import React from "react";
import BaseLayout from "./layouts/BaseLayout.tsx";
import { Button, Card } from "antd";
import { HeartFilled, SmileOutlined } from "@ant-design/icons";

const App = () => (
  <BaseLayout>
    <Card>
      <Button type = "primary">Hi</Button>
      <HeartFilled />
    </Card>
  </BaseLayout> 
);

export default App;