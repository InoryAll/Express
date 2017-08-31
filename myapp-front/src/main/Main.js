import React from 'react';
import ReactDOM from 'react-dom';
import {Card,Table,Row,Col} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers,updateUser,deleteUser} from "../actions/actions";
import _ from 'lodash';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.props.getAllUsers();
    }

    handleUpdate=(record) => {
        const user=_.cloneDeep(record);
        user.username='wrf';
        this.props.updateUser(user);
    };

    handleDelete=(record) => {
        this.props.deleteUser(record);
    };

    render(){
        const columns = [{
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record,index) => (
                <span>
                    <a href="#" onClick={()=>{this.handleUpdate(record)}}>修改</a>
                    <span className="ant-divider" />
                    <a href="#" onClick={()=>{this.handleDelete(record)}}>删除</a>
                </span>
            ),
        }];


        const data = this.props.users;

        return (
            <Row>
                <Col span="8" offset="8">
                    <Card title="所有用户">
                        <Table
                            columns={columns}
                            dataSource={data}
                            rowKey={(record)=>{return record._id}}
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
function mapStateToProps(state) {
    return {
        users:state.main.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllUsers , updateUser , deleteUser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);