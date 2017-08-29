import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import 'antd/dist/antd.min.css';
import './login.css';
import {browserHistory} from 'react-router';

const FormItem = Form.Item;

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                browserHistory.push('/detail');
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span="12" offset="6">
                    <Card title="登录" style={{maxWidth:600}}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入你的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住账号</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                Or <a href="">立即注册!</a>
                            </FormItem>
                        </Form>
                    </Card>
                </Col>
            </Row>

        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;