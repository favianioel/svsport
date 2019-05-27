import React, { Component } from "react";
import { connect } from "react-redux";

class IndexTeams extends Component {

    render() {
        let isSuccess;
        if (_.size(this.props.response) > 0)
        if (this.props.teams.hasOwnProperty('response')) {
            isSuccess = true;
        }

        return (
            <tbody>
                {isSuccess &&
                    this.props.teams.response.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
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
        teams: state.indexTeamsReducer
    });

export default connect(mapStateToProps)(IndexTeams);