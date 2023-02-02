import React from "react";
import { Menu } from "antd";

const MenuBar = ({ itens, selectedKey, changeSelectedKey }: any) => {
    const styledTopics: any[] = [];
    // itens.forEach((topic: any, index: number) =>
    //     styledTopics.push(
    //         <Menu.Item key={index} onClick={changeSelectedKey} >
    //             {topic.i18n}
    //         </Menu.Item>
    //     )
    // );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]} items={itens}>
          
        </Menu>
    );
}
export default MenuBar;