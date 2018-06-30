import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = Task.newState(this.props);
    }

    componentWillReceiveProps(props) {
        if (props !== this.props.completed) {
            this.setState(Task.newState(props));
        }
    }

    static newState(props) {
        const {completed} = props;
        return {
            completedText: completed ? "YES" : "NO",
            completedBtnText: completed ? "Mark Pending" : "Mark Completed",
            completed,
        }
    }

    render() {
        const {id, name, onToggleClick} = this.props;
        const {completedText, completedBtnText} = this.state;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{completedText}</td>
                <td>
                    <Button color="edit">Edit</Button>
                    <Button color="edit" onClick={onToggleClick}>
                        {completedBtnText}
                    </Button>
                </td>
            </tr>
        );
    }
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onToggleClick: PropTypes.func.isRequired,
};

export default Task;