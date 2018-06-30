import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TaskEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            completed: false,
        }
    }
    componentDidMount() {
        document.title = "Task Edit | Regalix";
    }

    render() {
        return (
            <div>
                <h1>Task edit {this.props.match.params.id}</h1>
                <p>{this.state.name}</p>
                <p>{this.state.completed}</p>
            </div>
        );
    }
}

export default TaskEdit;