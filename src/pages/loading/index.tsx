import React, { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { StorageKeys, StorageService } from '../../utils/storage';
import Redirect from '../../utils/redirect';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate();
    const user = StorageService.get(StorageKeys.user);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            (user) ? navigate("/dashboard") : navigate("/login");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const antIcon = <LoadingOutlined style={{ fontSize: 100, color: "white" }} spin />;

    return (
        <div className='full-screen-overlay'>
            <div className="centered">
                <Spin indicator={antIcon} />
            </div>
        </div>
    );
}