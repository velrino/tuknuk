import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

export default function Loading(){
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return(
        <Spin indicator={antIcon} />
    );
}