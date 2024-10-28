import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';

const UserForm = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const uploadProps = {
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
                console.log(file, fileList);
            }
        },
    };

    return (
        <Form
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
                <Input />
            </Form.Item>
            <Form.Item label="Select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
                <TreeSelect
                    treeData={[
                        {
                            title: 'Light',
                            value: 'light',
                            children: [{ title: 'Bamboo', value: 'bamboo' }],
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item label="Cascader">
                <Cascader
                    options={[
                        {
                            value: 'zhejiang',
                            label: 'Zhejiang',
                            children: [{ value: 'hangzhou', label: 'Hangzhou' }],
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Upload">
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Button">
                <Button type="primary">제출</Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;
