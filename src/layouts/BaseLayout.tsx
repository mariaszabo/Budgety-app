import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Flex } from 'antd';
import { useAuth } from '@/contexts/AuthContext';

const { Header, Sider, Content, Footer } = Layout;

type BaseLayoutProps = { //ca sa o putem folosi pentru fiecare pagina
  children: React.ReactNode;
  username: string;
};

const BaseLayout = ({children, username}: BaseLayoutProps) => {

  const {user} = useAuth();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style = {{height: "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex justify= "space-between">

            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div style={{paddingRight: 20 }} >{user?.username}</div>
          </Flex>
        </Header>
        <Content //acestea sunt setarile pentru continut (un singur card in centru)
          style={{
            margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;