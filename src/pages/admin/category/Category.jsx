import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'STT',
        dataIndex: 'category_id',
        key: 'category_id',
    },
    {
        title: 'Category Name',
        dataIndex: 'category_name',
        key: 'category_name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Desciption',
        dataIndex: 'category_description',
        key: 'category_description',
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
                <a>Edit</a>
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
const Category = () => <Table columns={columns} dataSource={data} />;
export default Category;