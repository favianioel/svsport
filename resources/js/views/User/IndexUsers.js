import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "shards-react";

class IndexUsers extends Component {

    render() {
        let isSuccess;
        if (_.size(this.props.users) > 0)
        if (this.props.users.hasOwnProperty('response')) {
            isSuccess = true;
        }

        return (
            <tbody>
                {isSuccess &&
                    this.props.users.response.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.roles}</td>
                                <td>
                                    <Button theme="info" style={{ padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-eye"></i>
                                    </Button>
                                    <Button style={{ padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button theme="danger" style={{ padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-trash-alt"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })

                }
            </tbody>
        );
    }
}

const mapStateToProps = state => (
    {
        users: state.indexUserReducer
    });

export default connect(mapStateToProps)(IndexUsers);