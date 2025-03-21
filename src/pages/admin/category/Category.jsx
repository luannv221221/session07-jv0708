import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
const columns = [
    {
        title: 'STT',
        dataIndex: 'categoryId',
        key: 'categoryId',
    },
    {
        title: 'Category Name',
        dataIndex: 'categoryName',
        key: 'categoryName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Desciption',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (

            <>
                <Tag color={status ? "geekblue" : "green"} key={status}>
                    {status ? "Active" : "Inactive"}
                </Tag>
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button>
                    <NavLink to={`/admin/edit-category/${record.categoryId}`}>Edit</NavLink>
                </Button>

                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        category_id: '1',
        category_name: 'Áo Bà Ba',
        category_description: 'New York No. 1 Lake Park1',
        status: true
    },
    {
        category_id: '2',
        category_name: 'Quần Bà Ba',
        category_description: 'New York No. 1 Lake Park',
        status: false
    }
];
const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDataAPI();
    }, [])

    const getDataAPI = () => {
        axios.get("http://localhost:8080/api/v1/admin/categories")
            .then((response) => {
                // cập nhaath sate danh danh danh mục 
                setCategories(response.data.content);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Table columns={columns} dataSource={categories} />
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Category;