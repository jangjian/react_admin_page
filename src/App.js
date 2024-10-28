import React, { useState } from 'react';
import { TeamOutlined, KeyOutlined, ToolOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import UserForm from './components/create_user_info';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: '인증 관리 인터페이스',
        icon: <KeyOutlined />,
        children: [
            { key: '1', label: 'Option 1' },
            { key: '2', label: 'Option 2' },
            { key: '3', label: 'Option 3' },
            { key: '4', label: 'Option 4' },
        ],
    },
    {
        key: 'sub2',
        label: '사용자 관리 인터페이스',
        icon: <TeamOutlined />,
        children: [
            { key: '5', label: <Link to="/user-form">정보 생성</Link> },
            { key: '6', label: 'Option 6' },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    { key: '7', label: 'Option 7' },
                    { key: '8', label: 'Option 8' },
                ],
            },
        ],
    },
    {
        key: 'sub4',
        label: '장치 관리 인터페이스',
        icon: <ToolOutlined />,
        children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
        ],
    },
];

const App: React.FC = () => {
    const [current, setCurrent] = useState('1');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);

    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
                <Routes>
                    <Route path="/user-form" element={<UserForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
