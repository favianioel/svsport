import { destroyTeamsAction } from '../../actions/teamsActions';
import { Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "shards-react";

class IndexTeams extends Component {

    onHandleDelete = (id, event) => {
        event.preventDefault();
        const token = getCookie('token');
        const data = {
            id, token
        };
        this.props.dispatch(destroyTeamsAction(data));
        return () => <Redirect to={{ pathname: "/teams" }}/>
    }

    render() {
        let isSuccess;
        if (_.size(this.props.teams) > 0)
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
                                    <Button theme="info" style={{ padding: '2 5 2 5', margin: 3 }}>
                                        <i className="fas fa-eye"></i>
                                    </Button>
                                    <Button style={{ padding: '2 5 2 5', margin: 3 }} tag={Link} to="/teams/create/${obj.id}">
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button theme="danger" style={{ padding: '2 5 2 5', margin: 3 }} onClick={(e) => this.onHandleDelete(obj.id, e)}>
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
        teams: state.indexTeamReducer
    });

export default connect(mapStateToProps)(IndexTeams);