import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function FormInput(props) {

    return (
        <div>

            <Form.Group className="col-md-12 text-center" controlId="formBasicEmail" id="inputFormToy">
                <Form.Label className="text-center">{props.label}</Form.Label>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <Form.Control
                            className="my-0"
                            required
                            placeholder={"Please insert " + props.label}
                            name={props.name}
                            type={props.type}
                            value={props.value}
                            onChange={props.onChange} />
                        <Form.Control.Feedback type="invalid">

                            The field {props.label} is
                            invalid.
                        </Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>

        </div >
    )

}

export default FormInput