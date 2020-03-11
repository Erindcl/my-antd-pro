import * as React from 'react';
import './style.scss';
import { Form, Input, Select, TreeSelect, Cascader, Radio, Switch, Checkbox, TimePicker } from 'antd';
const { Option } = Select;
const { TreeNode } = TreeSelect;
const CheckboxGroup = Checkbox.Group;
export default class FormPreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];
        return (
            <div className="form-preview">
                <Form labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
                    <h3>输入框：</h3>
                    <Form.Item label="large输入框" required>
                        <Input size={'large'} placeholder="请输入项目标识" />
                    </Form.Item>
                    <Form.Item label="regular输入框" required>
                        <Input placeholder="请输入项目标识" />
                    </Form.Item>
                    <Form.Item label="small输入框" required>
                        <Input size={'small'} placeholder="请输入项目标识" />
                    </Form.Item>
                    <Form.Item label="禁用输入框">
                        <Input placeholder="请输入项目标识" value={'禁止输入内容'} disabled />
                    </Form.Item>
                    <Form.Item validateStatus="error" hasFeedback label="输入错误" help="输入信息有误">
                        <Input placeholder="请输入项目标识" />
                    </Form.Item>
                    <br />
                    <br />
                    <h3>下拉框：</h3>
                    <Form.Item label="默认" required>
                        <Select
                            placeholder="请选择数据源"
                        >
                            <Option value="1">选项一</Option>
                            <Option value="2">选项二</Option>
                            <Option value="3">选项三</Option>
                            <Option value="4">选项四</Option>
                            <Option value="5">选项五</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="多选项" required>
                        <Select
                            placeholder="请选择数据源"
                            defaultValue={['1', '2']}
                            mode={'multiple'}
                        >
                            <Option value="1">选项一</Option>
                            <Option value="2">选项二</Option>
                            <Option value="3">选项三</Option>
                            <Option value="4">选项四</Option>
                            <Option value="5">选项五</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="树形" required>
                        <TreeSelect
                            style={{ width: '100%' }}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            placeholder="请选择"
                            allowClear
                            treeDefaultExpandAll
                        >
                            <TreeNode value="parent 1" title="parent 1" key="0-1">
                                <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                                    <TreeNode value="leaf1" title="my leaf" key="random" />
                                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                                </TreeNode>
                                <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                                    <TreeNode value="sss" title="sss" key="random3" />
                                </TreeNode>
                            </TreeNode>
                        </TreeSelect>
                    </Form.Item>
                    <Form.Item label="级联" required>
                        <Cascader options={options} placeholder="请选择" />
                    </Form.Item>
                    <Form.Item label="时间选择" required>
                        <TimePicker />
                    </Form.Item>
                    <br />
                    <br />
                    <h3>其余表单：</h3>
                    <Form.Item label="单选">
                        <Radio.Group defaultValue={1}>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="按钮式单选">
                        <Radio.Group defaultValue="a">
                            <Radio.Button value="a">杭州</Radio.Button>
                            <Radio.Button value="b">上海</Radio.Button>
                            <Radio.Button value="c">北京</Radio.Button>
                            <Radio.Button value="d">成都</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="开关">
                        <Switch defaultChecked />
                    </Form.Item>
                    <Form.Item label="多选">
                        <CheckboxGroup
                            options={['北京', '上海', '厦门']}
                            defaultValue={['北京', '厦门']}
                        />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}