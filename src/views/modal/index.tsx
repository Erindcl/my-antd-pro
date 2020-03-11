import * as React from 'react';
import './style.scss';
import { Button, Modal, Form, Input, Select } from 'antd';
const { Option } = Select;

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

    render() {
        const { basicVisible } = this.state;
        return (
            <div className="modal-preview">
                <Button type="primary" onClick={this.showModal}>普通弹框</Button>
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