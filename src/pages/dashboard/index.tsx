import React, { useState } from "react";
import { Layout } from "antd";
import MenuBar from '../../components/menu';
import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import { Emitter } from "../../utils/emitter";

export function DashboardPage() {
    return (
        <div className='dashboard'>
            <h1>Welcome to the main Dashboard</h1>
        </div>
    );

}