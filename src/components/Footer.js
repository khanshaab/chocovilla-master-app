import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";

export default class Footer extends Component {
    render() {
        return (
            <div>
                    <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link>Social links:</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link src="https://facebook.com">facebook</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">twitter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                    </Nav.Item>
                    </Nav>
            </div>
        )
    }
}
