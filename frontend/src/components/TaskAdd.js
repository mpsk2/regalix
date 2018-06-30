import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Label, Button, Input, FormGroup} from 'reactstrap';

class TaskAdd extends Component {
    render() {
        let name;
        let completed;

        const handleSubmit = e => {
            const task = {name: name.value, completed: completed.value};
            e.preventDefault();
            this.props.onSubmitClick(task);
        };
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="string" name="name" placeholder="Input name" innerRef={node => name = node}/>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="completed" innerRef={node => completed = node}/>
                        Completed
                    </Label>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

TaskAdd.propTypes = {
    onSubmitClick: PropTypes.func.isRequired,
};

export default TaskAdd;