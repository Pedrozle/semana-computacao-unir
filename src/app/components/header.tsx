"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "@/assets/img/logo1.png";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

import styles from "@/styles/components/header.module.scss";

export default function Header() {
    return (
        <header>
            <Navbar className={styles.header} expand="lg" variant="dark">
                <Container>
                    <Row className={styles.row}>
                        <Col>
                            <Navbar.Brand href="#home">
                                <Image
                                    src={Logo}
                                    alt="Logo semana da computação"
                                    width={325}
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#inicio">Início</Nav.Link>
                                    <Nav.Link href="#agenda">Agenda</Nav.Link>
                                    <Nav.Link href="#paineis">
                                        Sessão de painéis
                                    </Nav.Link>
                                    <Nav.Link href="#maratona">
                                        Maratona de programação
                                    </Nav.Link>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            (window.location.href =
                                                "https://www.eventbrite.com.br/e/vi-semana-da-computacao-tickets-643466023197")
                                        }
                                    >
                                        Inscreva-se!
                                    </Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}
