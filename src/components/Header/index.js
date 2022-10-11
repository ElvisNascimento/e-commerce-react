import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Buscar from "./Buscar";

export default function Header() {
    return (
        <Container className="container-md border">
            <Row className="border justify-content-center">
                <Col className="border" sm={1}>Logo</Col>
                <Col className="border" sm={2}>Digital Store</Col>
                <Col className="border" sm={6}><Buscar /></Col>
                <Col className="border" sm={1}>cadastre-se</Col>
                <Col className="border" sm={1}><Button>Entrar</Button></Col>
                <Col className="border" sm={1}>carrinho</Col>
            </Row>
            <Row className="border">
                <Col className="border" sm={8}><Nav /></Col>
                <Col className="border"></Col>
            </Row>
        </Container>
    )
}