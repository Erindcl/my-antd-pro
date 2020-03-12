import * as React from 'react';
import './style.scss';
import { Alert, Button, notification, message } from 'antd';

export default class NoticePreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    openNotificationWithIcon = (type: any) => {
        switch (type) {
            case 'success': {
                notification.success({
                    duration: null,
                    message: '提交成功',
                    description: '你提交的信息已经成功上传。'
                });
                break;
            }
            case 'warning': {
                notification.warning({
                    duration: null,
                    message: '警告',
                    description: '数据库的空间已不足3MB，请清理掉垃圾文件！'
                });
                break;
            }
            case 'error': {
                notification.error({
                    duration: null,
                    message: '请求失败',
                    description: '数据库中没有匹配到该字段，请检查后再请求！'
                });
                break;
            }
            default: ;
        }
    };

    success = () => {
        message.success('成功信息xxxx，默认停留3秒自动消失。');
    };

    error = () => {
        message.error('错误信息xxxx，默认停留3秒自动消失。');
    };

    warning = () => {
        message.warning('警告信息xxxx，默认停留3秒自动消失。');
    };

    render() {
        return (
            <div className="notice-preview">
                <h3>顶部提示:</h3>
                <div className="alter-box">
                    <Alert message="提交成功，请至***查看详情。" type="success" showIcon closable />
                    <br />
                    <Alert message="你的产品使用权限即将到期，请尽快升级！" type="warning" showIcon closable />
                    <br />
                    <Alert message="系统暂时没有反馈，请稍后重试！" type="error" showIcon closable />
                    <br />
                    <Alert message="系统暂时没有反馈" type="info" showIcon />
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3>侧边划出提示:</h3>
                <div>
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>成功</Button>&nbsp;&nbsp;
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>&nbsp;&nbsp;
                    <Button type="primary" onClick={() => this.openNotificationWithIcon('error')}>失败</Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3>气泡提醒:</h3>
                <div>
                    <Button type="primary" onClick={this.success}>成功</Button>&nbsp;&nbsp;
                    <Button type="primary" onClick={this.warning}>警告</Button>&nbsp;&nbsp;
                    <Button type="primary" onClick={this.error}>失败</Button>
                </div>
            </div>
        )
    }
}