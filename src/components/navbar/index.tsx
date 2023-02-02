import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./navbar.scss";
import { Emitter } from "../../utils/emitter";
// import logo from "./../../logo.svg";

const NavBar = ({ menu }: any) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        Emitter.EventEmitter.addListener(Emitter.Event.Action.MenuClicked, (data: any) => {
            setVisible(false)
        });
    })

    return (
        <nav className="navbar">
            <Button
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title={false}
                placement="left"
                width={250}
                // onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                open={visible}
            >
                {menu}
            </Drawer>
            {/* <a href="/"><img src={logo} className="logo" alt="logo" /></a>      */}
        </nav>
    );
};

export default NavBar;