import { Button, Form, Input, Select, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';

function AddProduct() {

    const [category, setCategory] = useState([]);
    const [file, setFile] = useState();
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const onFinish = (values) => {
        // values.image = file.originFileObj;
        const formData = new FormData();
        formData.append("sku", values.sku);
        formData.append("productName", values.productName);
        formData.append("description", values.description);
        formData.append("unitPrice", values.unitPrice);
        formData.append("stockQuantity", values.stockQuantity);
        formData.append("categoryId", values.categoryId);
        formData.append("image", file.originFileObj);
        // call API thực hiện thêm mới 
        axios.post("http://localhost:8080/api/v1/admin/products", formData).then((response) => {
            console.log("Thành công", response);
        }).catch(err => console.log(err))
        console.log(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        getDataAPI();
    }, [])
    const getDataAPI = () => {
        axios.get("http://localhost:8080/api/v1/admin/categories")
            .then((response) => {
                console.log(response);
                let data = [];
                response.data.content.map((item) => {
                    data.push({ value: item.id, label: item.categoryName })
                });
                console.log("data", data);
                // cập nhaath sate danh danh danh mục 
                setCategory(data);
            })
            .catch(err => console.log(err));
    }

    const handleChangeImage = ({ fileList }) => {
        setFile(fileList[0]);
    }
    return (
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
                label="Lịnh tinh"
                name="sku"
                rules={[
                    {
                        required: true,
                        message: 'Please input your sku!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="productName"
                name="productName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your productName!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input your description!',
                    },
                ]}
            >
                <TextArea />
            </Form.Item>

            <Form.Item
                label="unitPrice"
                name="unitPrice"
                rules={[
                    {
                        required: true,
                        message: 'Please input your unitPrice!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="stockQuantity"
                name="stockQuantity"
                rules={[
                    {
                        required: true,
                        message: 'Please input your stockQuantity!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="category"
                name="categoryId"
                rules={[
                    {
                        required: true,
                        message: 'Please input your categoryId!',
                    },
                ]}
            >
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={category}
                />
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
                rules={[
                    {
                        required: false,
                        message: 'Please input your image!',
                    },
                ]}
            >
                <Upload
                    listType="picture"
                    maxCount={1}
                    onChange={handleChangeImage}
                    beforeUpload={() => false}
                >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
                <br />

            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Thêm mới
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddProduct