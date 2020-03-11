import * as React from 'react';
import './style.scss';
import { Button } from 'antd';

export default class ButtonPreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        return (
            <div className="button-preview">
                <h3>常规尺寸：</h3>
                <Button type="primary" size={'default'}>创建项目</Button>
                <br />
                <br />
                <h3>小尺寸：</h3>
                <Button type="primary" size={'small'}>创建项目</Button>
                <br />
                <br />
                <h3>按钮的分类与状态：</h3>
                <Button type="primary">一级按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button>二级按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button ghost>幽灵按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="link">文字按钮</Button>
                <br />
                <br />
                <Button disabled type="primary">一级按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button disabled>二级按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button disabled ghost>幽灵按钮</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button disabled type="link">文字按钮</Button>
            </div>
        )
    }
}