import React, { Component } from 'react'
import {
    Alert
} from 'react-bootstrap';
class Message extends Component {

    render() {
        var { message } = this.props;
        const messages = [
            'success'];
        return (
            <>
                {messages.map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        {message}
                    </Alert>
                ))}
            </>
        )
    }
}

export default Message;