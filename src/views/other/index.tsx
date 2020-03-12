import * as React from 'react';
import './style.scss';
import { Tabs, Steps, Card } from 'antd';
const { TabPane } = Tabs;
const { Step } = Steps;
export default class OtherPreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        return (
            <div className="other-preview">
                <h3>选项卡：</h3>
                <Tabs className="dt-tab" defaultActiveKey={"1"}>
                    <TabPane tab="选项卡一" key="1"></TabPane>
                    <TabPane tab="选项卡二" key="2"></TabPane>
                    <TabPane tab="选项卡三" key="3"></TabPane>
                </Tabs>
                <br />
                <br />
                <br />
                <br />
                <h3>步骤条：</h3>
                <Steps style={{ width: 700 }}>
                    <Step key={'0'} title={'基本信息'} />
                    <Step key={'1'} title={'字段与分区'} />
                    <Step key={'2'} title={'索引'} />
                </Steps>
                <br />
                <br />
                <br />
                <br />
                <h3>卡片：</h3>
                <Card title="卡片标题" extra={<a href="#">了解更多</a>} style={{ width: 500 }}>
                    <p>卡片内容</p>
                </Card>
            </div>
        )
    }
}