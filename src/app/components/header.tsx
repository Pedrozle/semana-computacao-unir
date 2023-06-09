"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "@/assets/img/logo1.png";
import Button from "react-bootstrap/Button";

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src={Logo}
                            alt="Logo semana da computação"
                            width={325}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">Início</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Nav.Link href="#palestras">Palestras</Nav.Link>
                            <Nav.Link href="#minicursos">Minicursos</Nav.Link>
                            <Nav.Link href="#trabalhos">Trabalhos</Nav.Link>
                            <Button
                                variant="primary"
                                onClick={() =>
                                    (window.location.href =
                                        `${process.env.INSCRICAO_LINK}`)
                                }
                            >
                                Inscreva-se!
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
