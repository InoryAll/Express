import React from 'react';
import ReactDOM from 'react-dom';
import {Card,Table,Row,Col} from 'antd';

export default class Main extends React.Component{
    render(){
        const columns = [{
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password'
        }];

        const data = [{
            username:'zhangsan ',
            password:'123456'
        }, {
            username:'lisi ',
            password:'123456'
        }];

        return (
            <Row>
                <Col span="8" offset="8">
                    <Card title="所有用户">
                        <Table columns={columns} dataSource={data} />
                    </Card>
                </Col>
            </Row>
        );
    }
}