import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Switch } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
    // lấy id tren url 
    const { id } = useParams();

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {

        // call API thực hiện thêm mới 
        console.log(values);
        axios.put(`http://localhost:8080/api/v1/admin/categories/${id}`, values).
            then((response) => {
                console.log("Thành công", response);
                toast("Cập nhật danh mục thành công");
            }).catch(err => console.log(err));
        // điều huownsgg về danh sách danh mục 
        navigate("/admin/category");
    };
    const getCategoryById = () => {
        axios.get(`http://localhost:8080/api/v1/admin/categories/${id}`).then(response => {
            console.log(response);
            // cập nhật giá trị mặc định cho input
            form.setFieldsValue(response.data);
        }).catch(err => console.log(err));
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        getCategoryById();
    }, [])

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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
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

                <Form.Item
                    label="Trạng thái"
                    name="status"
                    valuePropName='checked'
                >
                    <Switch checkedChildren="Active" unCheckedChildren="InActive" defaultChecked />

                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
}

export default EditCategory;