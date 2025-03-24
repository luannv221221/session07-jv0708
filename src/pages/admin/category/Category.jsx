import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';


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
    const handleDelete = (id) => {
        let check = confirm("Bạn chắc chắn muốn xóa");
        if (check) {
            axios.delete(`http://localhost:8080/api/v1/admin/categories/${id}`).then((res) => {
                console.log(res);
                getDataAPI();
                toast("Xóa danh mục thành công");
            }).catch((err) => console.log(err));
        }
        console.log(id);
    }
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

                    <Button danger onClick={() => handleDelete(record.categoryId)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={categories} />
            <ToastContainer autoClose={3000} />

        </>
    )
}

export default Category;