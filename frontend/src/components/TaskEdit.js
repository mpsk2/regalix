import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.id = props.match.params.id;
    }

    componentDidMount() {
        this.props.setUp(this.id);
        document.title = "Edit task | Regalix";
    }

    handleChange() {
        this.props.refresh(this.id);
    }

    render() {

        return (
            <div>
                <h1>Task edit {this.props.match.params.id}</h1>
                <p>{this.props.task.id}</p>
                <p>{this.props.task.name}</p>
                <p>{this.props.task.completed}</p>
            </div>
        );
    }
}

TaskEdit.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    setUp: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
};

export default TaskEdit;