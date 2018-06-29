import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

class Task extends Component {
    render() {
        const {id, completed, name, onToggleClick} = this.props;

        let completed_info = completed ? "YES" : "NO";
        let completed_btn_text = completed ? "Mark Pending" : "Mark Completed";
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{completed_info}</td>
                <td>
                    <Button color="edit">Edit</Button>
                    <Button color="edit" onClick={onToggleClick}>
                        {completed_btn_text}
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