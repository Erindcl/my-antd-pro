import * as React from 'react';
import './style.scss';
import { Button, Modal, Form, Input, Select } from 'antd';
const { Option } = Select;
const { confirm } = Modal;
export default class ModalPreview extends React.Component<any, any> {

    state: any = {
        basicVisible: false
    }

    componentDidMount() {

    }

    showModal = () => {
        this.setState({
            basicVisible: true,
        });
    };

    handleOk = () => {
        this.setState({
            basicVisible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            basicVisible: false,
        });
    };

    deleteConfirm = () => {
        confirm({
            title: '确认要删除该大屏？',
            content: '此操作后不可逆，确认要将对应文件删除？',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    warning = () => {
        Modal.warning({
            okText: '确认',
            title: '我是一个警示信息',
            content: '数据库容量即将爆满，请及时清理！',
        });
    }

    render() {
        const { basicVisible } = this.state;
        return (
            <div className="modal-preview">
                <h3>普通弹框：</h3>
                <Button type="primary" onClick={this.showModal}>普通弹框</Button>
                <br />
                <br />
                <h3>确认弹框：</h3>
                <Button type="primary" onClick={this.deleteConfirm}>删除</Button>
                <br />
                <br />
                <h3>警示弹框：</h3>
                <Button type="primary" onClick={this.warning}>警告</Button>
                <Modal
                    title="普通弹框"
                    visible={basicVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
                        <Form.Item label="项目标识" required>
                            <Input placeholder="请输入项目标识" />
                        </Form.Item>
                        <Form.Item label="显示名称">
                            <Input placeholder="请输入显示名称" />
                        </Form.Item>
                        <Form.Item label="数据源配置" required>
                            <Select
                                placeholder="请选择数据源配置"
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}