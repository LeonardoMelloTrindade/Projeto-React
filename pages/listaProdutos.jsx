import React from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';


export default function listaProdutos() {
    return (
        <>
            <Row className='mb-3 pt-4'>
                <Col>
                    <p className="text-center fs-1">
                        Nossos Produtos
                    </p>
                </Col>
            </Row>
            <hr />
            <Row >
                <Col md='4'>

                    <p className=" fs-1">Categoria</p>

                    <Form>
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type='checkbox'
                                id='default-checkbox'
                                label='Módulos'
                            />

                            <Form.Check

                                type='checkbox'
                                id='default-checkbox'
                                label='Inversores'
                            />
                        </div>
                    </Form>

                </Col>
                <Col md='6'>
                    <Row className='flex-wrap'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
