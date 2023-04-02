import React from 'react'
import FormEndereco from './formEndereco/formEndereco'

export default function modalForm(props) {

    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Digite seu endereço para entrega</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEndereco />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary">Finalizar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}