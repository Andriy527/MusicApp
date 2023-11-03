import {FC} from "react";
import {UserOutlined} from '@ant-design/icons';
import {Layout, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";

const {Sider} = Layout;

const NavBar: FC = () => {
    const location = useLocation();
    const menuItems = [
        {
            key: '/',
            label: <Link to='/'>Home</Link>,
            icon: <UserOutlined/>,
        },
        {
            key: '/tracks',
            label: <Link to="/tracks">Tracks</Link>,
            icon: <UserOutlined/>
        }
    ]
    return (
        <Sider trigger={null} collapsible style={{
            margin: '24px 16px',
            height: '100%'
        }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                items={menuItems}
            />
        </Sider>
    );
};

export default NavBar;