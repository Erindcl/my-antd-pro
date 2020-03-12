import * as React from 'react';
import { Table, Divider } from 'antd';
import './style.scss';

export default class TablePreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            render: (text: string) => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '地址',
            dataIndex: 'address',
        }];
        const columns_two: any = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            fixed: 'left',
            render: (text: string) => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            key: 'age',
            dataIndex: 'age',
            width: 150
        }, {
            title: '地址',
            key: 'address',
            dataIndex: 'address',
            width: 250
        }, {
            title: '更新时间',
            key: 'update',
            dataIndex: 'update',
            width: 250
        }, {
            title: '创建时间',
            key: 'create',
            dataIndex: 'create',
            width: 250
        }, {
            title: '历史版本',
            key: 'version',
            dataIndex: 'version',
            width: 250
        }, {
            title: '最近修改人',
            key: 'yyyy',
            dataIndex: 'yyyy',
            width: 250
        }, {
            title: '容量',
            key: 'zzzz',
            dataIndex: 'zzzz',
            width: 250
        }, {
            title: '操作',
            key: 'ope',
            dataIndex: 'ope',
            width: 200,
            fixed: 'right',
            render: () => {
                return (<div>
                    <a>查看</a>
                    <Divider type="vertical" />
                    <a>编辑</a>
                    <Divider type="vertical" />
                    <a>删除</a>
                </div>)
            }
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            update: 'New York No. 1 Lake Park',
            create: 'New York No. 1 Lake Park',
            version: 'New York No. 1 Lake Park',
            xxxx: 'New York No. 1 Lake Park',
            yyyy: 'New York No. 1 Lake Park',
            zzzz: 'New York No. 1 Lake Park'
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            update: 'New York No. 1 Lake Park',
            create: 'New York No. 1 Lake Park',
            version: 'New York No. 1 Lake Park',
            xxxx: 'New York No. 1 Lake Park',
            yyyy: 'New York No. 1 Lake Park',
            zzzz: 'New York No. 1 Lake Park'
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            update: 'New York No. 1 Lake Park',
            create: 'New York No. 1 Lake Park',
            version: 'New York No. 1 Lake Park',
            xxxx: 'New York No. 1 Lake Park',
            yyyy: 'New York No. 1 Lake Park',
            zzzz: 'New York No. 1 Lake Park'
        }, {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            update: 'New York No. 1 Lake Park',
            create: 'New York No. 1 Lake Park',
            version: 'New York No. 1 Lake Park',
            xxxx: 'New York No. 1 Lake Park',
            yyyy: 'New York No. 1 Lake Park',
            zzzz: 'New York No. 1 Lake Park'
        }];
        const rowSelection = {
            onChange: (selectedRowKeys: any, selectedRows: any) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };
        const pagination = {
            showTotal: (total: number) => { return <span>共<span style={{ color: '#3F87FF' }}>{total}</span>条数据，每页显示20条</span> },
            pageSize: 10,
            total: 50,
            size: 'small'
        }
        return (
            <div className="table-preview">
                <h3>常规表：</h3>
                <Table
                    style={{ border: '1px solid #DDDDDD' }}
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    pagination={pagination}
                />
                <br />
                <br />
                <br />
                <br />
                <h3>内容超出范围：</h3>
                <Table
                    style={{ border: '1px solid #DDDDDD' }}
                    rowSelection={rowSelection}
                    columns={columns_two}
                    dataSource={data}
                    scroll={{ x: 2000, y: 150 }}
                    pagination={pagination}
                />
                <br />
                <br />
                <br />
                <br />
                <h3>弹框等浮层里面小一点的表格：</h3>
                <Table
                    style={{ border: '1px solid #DDDDDD' }}
                    rowSelection={rowSelection}
                    columns={columns}
                    size={'middle'}
                    dataSource={data}
                    pagination={pagination}
                />
            </div>
            
        )
    }
}