import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const menuSider = [
    { icon: UserOutlined, label: "Quản lý người dùng", route: "user" },
    { icon: UserOutlined, label: "Quản lý danh mục", subMenu: [{ label: "danh sách", route: "category" }, { label: "Thêm danh mục", route: "add-category" }] },
    { icon: UserOutlined, label: "Thêm mới sản phẩm", route: "add-product" }
];
const itemSider = menuSider.map(item => {
    return {
        key: item.route,
        icon: React.createElement(item.icon),
        label: item.label,
        children: item.subMenu?.map((sub) => {
            return {
                key: sub.route,
                label: sub.label,
            };
        })
    }
});

const items = [
    {
        key: '1',
        label: 'My Account',
        disabled: true,
    },
    {
        type: 'divider',
    },

];
const AdminLayout = () => {
    const navigate = useNavigate();
    const handleNav = (item) => {
        navigate(item.key);
    }
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}
            >
                <div className="demo-logo">
                    <img src="https://mosoftvn.com/images/logo.png" alt="" style={{ width: 50, height: 50 }} />
                </div>
                <div className='avata'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Hover me
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </Header>
            <Layout>
                <Sider
                    width={300}

                    style={{
                        background: colorBgContainer,
                        height: "100vh"
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={itemSider}
                        theme='dark'
                        onClick={handleNav}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: 'List',
                            },
                            {
                                title: 'AdminLayout',
                            },
                        ]}
                        style={{
                            margin: '16px 0',
                        }}
                    />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;