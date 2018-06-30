import React, {Component} from 'react';

class TaskEdit extends Component {
    componentDidMount() {
        document.title = "Task Edit | Regalix";
    }
    render() {
        return (<h1>Task edit</h1>);
    }
}

export default TaskEdit;