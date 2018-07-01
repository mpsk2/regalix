import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import style from './Task.css';
import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = Task.newState(this.props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleRejectClick = this.handleRejectClick.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props !== this.props.completed) {
            this.setState(Task.newState(props));
        }
    }

    static newState(props, inEdition = false) {
        const {completed, name} = props;
        return {
            completedText: completed ? "YES" : "NO",
            completedBtnText: completed ? "Mark Pending" : "Mark Done",
            completed,
            inEdition: inEdition,
            name,
        }
    }

    handleEditClick(e) {
        this.setState(Task.newState(this.props, true));
    }

    handleSaveClick(e) {
        this.handleRejectClick(e);

        let {name, completed} = this.state;
        const {id} = this.props;

        const task = {name, completed, id};
        console.log({task, props: this.props});

        if ((name !== this.props.name) || (completed !== this.props.completed)) {
            this.props.onEditSaveClick(task);
        }
    }

    handleRejectClick(e) {
        this.setState(Task.newState(this.props, false));
    }

    onFormChange(event, key) {
        let {value} = event.target;
        if (key === 'completed') {
            value = (value === 'true');
        }
        this.state[key] = value;
        this.forceUpdate();
    }

    renderBasic() {
        const {id, name, onToggleClick} = this.props;
        const {completedText, completedBtnText} = this.state;
        return (
            <tr>
                <td className={style.shrink}>{id}</td>
                <td>{name}</td>
                <td className={style.shrink}>{completedText}</td>
                <td className={style.shrink}>
                    <Button onClick={this.handleEditClick}>Edit</Button>
                    <Button onClick={onToggleClick}>
                        {completedBtnText}
                    </Button>
                </td>
            </tr>
        );
    }

    renderForm() {
        const {id} = this.props;
        return (
            <tr>
                <td className={style.shrink}>{id}</td>
                <td>
                    <Input
                        type="string"
                        name="name"
                        placeholder="Input name"
                        value={this.state.name}
                        onChange={(e) => this.onFormChange(e, 'name')}
                        form={"form" + id}
                    />
                </td>
                <td className={style.shrink}>
                    <FormGroup check
                               form={"form" + id}>
                        <Label check
                               form={"form" + id}>
                            <Input
                                type="checkbox"
                                name="completed"
                                form={"form" + id}
                                value={this.state.completed}
                                onChange={(e) => this.onFormChange(e, 'completed')}
                            />
                        </Label>
                    </FormGroup>
                </td>
                <td className={style.shrink}>
                    <Form id={"form" + id} onSubmit={this.handleSaveClick}>
                        <Button color="success"
                                type="submit">
                            Save
                        </Button>
                    </Form>
                    <Button color="danger" onClick={this.handleRejectClick} type="button">Reject</Button>
                </td>
            </tr>
        );
    }

    render() {
        const {inEdition} = this.state;
        if (inEdition) {
            return this.renderForm();
        } else {
            return this.renderBasic();
        }
    }
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    onEditSaveClick: PropTypes.func.isRequired,
};

export default Task;