import * as React from 'react';
import './style.scss';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default class OtherPreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        return (
            <div className="other-preview">
                <h3>选项卡：</h3>
                <Tabs defaultActiveKey={"1"} type="card">
                    <TabPane tab="选项卡一" key="1"></TabPane>
                    <TabPane tab="选项卡二" key="2"></TabPane>
                    <TabPane tab="选项卡三" key="3"></TabPane>
                </Tabs>
            </div>
        )
    }
}