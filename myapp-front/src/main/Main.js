import React from 'react';
import ReactDOM from 'react-dom';
import {Card,Table,Row,Col} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers,updateUser} from "../actions/actions";

class Main extends React.Component{

    constructor(props){
        super(props);
        this.props.getAllUsers();
    }

    handleUpdate=(record) => {
        this.props.updateUser(record);
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
                   <a href="#">删除</a>
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
    return bindActionCreators({ getAllUsers , updateUser },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);