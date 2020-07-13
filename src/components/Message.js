import React, { Component } from 'react'
import {
    Alert
} from 'react-bootstrap';
class Message extends Component {

    render() {
        const messages = [
            'success'];
        return (
            <>
                {messages.map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
            </>
        )
    }
}

export default Message;