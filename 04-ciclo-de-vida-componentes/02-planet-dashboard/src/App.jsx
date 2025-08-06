import React from "react";
import { Flex, Layout } from "antd";
import { DataDashboard } from "./components/DataDashboard";
const { Header, Footer, Sider, Content } = Layout;

const styleSider = {
backgroundColor:'#000000'
}

const App = () => (
    <Layout style={styleSider} className="h-dvh w-dvw crt p-2">
      <Sider width="30%" style={styleSider}>
        <DataDashboard />
      </Sider>
      <Layout>
        <Content className="bg-black">Content</Content>
      </Layout>
    </Layout>
);
export default App;
