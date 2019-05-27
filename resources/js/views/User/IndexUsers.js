import React, { Component } from "react";
import { connect } from "react-redux";

class IndexUsers extends Component {

    render() {
        let isSuccess;
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
                                    <button style={{ fontSize: 15, color: 'blue', padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-eye"></i>
                                    </button>
                                    <button style={{ fontSize: 15, color: 'green', padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button style={{ fontSize: 15, color: 'red', padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
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