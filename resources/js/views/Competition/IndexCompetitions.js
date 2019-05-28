import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "shards-react";

class IndexCompetitions extends Component {

    render() {
        let isSuccess;
        if (_.size(this.props.response) > 0)
            if (this.props.competitions.hasOwnProperty('response')) {
                isSuccess = true;
            }

        return (
            <tbody>
                {isSuccess &&
                    this.props.competitions.response.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
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

const mapStateToProps = state => ({
    competitions: state.indexCompetitionsReducer
});

export default connect(mapStateToProps)(IndexCompetitions);