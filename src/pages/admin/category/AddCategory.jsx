import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {

        // call API thực hiện thêm mới 
        console.log(values);
        axios.post("http://localhost:8080/api/v1/admin/categories", values).
            then((response) => {
                console.log("Thành công", response);
                toast("Thêm mới danh mục thành công");
            }).catch(err => console.log(err));
        // điều huownsgg về danh sách danh mục 
        navigate("/admin/category");
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên danh mục"
                    name="categoryName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your categoryName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"

                >
                    <Input.TextArea />
                </Form.Item>


                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Thêm mới
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
}

export default AddCategory;