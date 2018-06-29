import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TaskAdd from './TaskAdd';
import {Table} from 'reactstrap';


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.setUp();
    }

    handleChange() {
        this.props.refresh();
    }

    render() {
        const { tasks, isFetching, lastUpdate, onToggleClick, onSubmitClick } = this.props;
        let tasks_rows;
        if (!tasks) {
            tasks_rows = (
                <tr>
                    <td>No records!</td>
                </tr>
            );
        } else {
            tasks_rows = tasks.map(task => <Task
                key={task.id}
                id={task.id}
                name={task.name}
                completed={task.completed}
                onToggleClick={() => onToggleClick(task)}
            />);
        }

        return (
            <div>
                <TaskAdd onSubmitClick={onSubmitClick} />
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>completed</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tasks_rows}
                    </tbody>
                </Table>
            </div>
        );
    }
}

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    onToggleClick: PropTypes.func.isRequired,
    setUp: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired,
};

export default TasksList;

