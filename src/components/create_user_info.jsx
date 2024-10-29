import React, { useState } from 'react';
import { InboxOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Space,
    Upload,
} from 'antd';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 20,
    },
};
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onChange = (value) => {
    console.log('changed', value);
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
const UserForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // 상태 변수 선언

    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            style={{
                maxWidth: 700,
            }}
        >
            <Form.Item
                name="인식 유형"
                label="인식 유형"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '인식 유형을 선택하세요',
                    },
                ]}
            >
                <Select placeholder="인식 유형을 선택해주세요">
                    <Option value="Staff">Staff</Option>
                    <Option value="visitor">Visitor</Option>
                    <Option value="blacklist">Blacklist</Option>
                </Select>
            </Form.Item>

            <Form.Item label="아이디">
                <Input />
            </Form.Item>

            <Form.Item
                name="name"
                label="이름"
                rules={[
                    {
                        required: true,
                        message: '이름을 입력해주세요',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="id_admin"
                label="관리자 권한 활성화"
                rules={[
                    {
                        required: true,
                        message: '관리자 권한 여부를 선택해주세요',
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value="활성화">활성화</Radio>
                    <Radio value="비활성화">비활성화</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item name="password" label="비밀번호">
                <Space direction="horizontal">
                    <Input.Password
                        placeholder="비밀번호를 입력해주세요"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
            </Form.Item>

            <Form.Item label="사진 업로드">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <Form.Item label="연락처">
                <Space direction="horizontal">
                    <Space.Compact>
                        <Input
                            style={{
                                width: '20%',
                            }}
                            defaultValue="010"
                        />
                        <Input
                            style={{
                                width: '80%',
                            }}
                        />
                    </Space.Compact>
                </Space>
            </Form.Item>
            <Form.Item
                name="group_list"
                label="group_list"
               rules={[
                   {
                       required: true,
                       message: 'group_list를 입력해주세요',
                   },
               ]}>
                <InputNumber min={1} max={10} onChange={onChange} />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 6,
                }}
            >
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="reset">Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default UserForm;