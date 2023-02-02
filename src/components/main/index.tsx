import React, { useState } from "react";
import { Layout } from "antd";
// import MenuBar from '../../components/menu';
import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import { Emitter } from "../../utils/emitter";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MenuItens } from "./itens";
import { Menu } from "antd";

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(location.pathname);

    const handleClick = (event: any) => {
        console.log(event)
        Emitter.EventEmitter.emit(Emitter.Event.Action.MenuClicked, true);
        setSelectedKey(event.key);
        navigate(event.key);
    };

    const MenuCompomnent = <Menu mode="inline" items={MenuItens} onClick={handleClick} selectedKeys={[selectedKey]}></Menu>

    return (
        <div className="App">
            <NavBar menu={MenuCompomnent} />
            <Layout>
                <SideBar menu={MenuCompomnent} />
                <Layout.Content className="content" style={{ marginLeft: 200 }}>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </div>
    );

}

export default Main;