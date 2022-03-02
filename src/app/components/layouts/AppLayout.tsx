import { FC } from "react";
import { Button, Layout, Menu } from "antd";
import { DingdingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AppLayout: FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <DingdingOutlined />
        </div>
        <div className="menus">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item>
              <Link to="/marketplace">Marketplace</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="connect">
          <Button type="primary">Connect Wallet</Button>
        </div>
      </Header>
      <Content>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        NFT World ©2022 Created by Charith
      </Footer>
    </Layout>
  );
};

export default AppLayout;
