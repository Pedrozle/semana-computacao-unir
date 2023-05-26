"use client";
import styles from "@/styles/components/middle.module.scss";
import { Button } from "react-bootstrap";

export default function MiddleBanner() {
    return (
        <div className={styles.middle_banner}>
            <div className={`${styles.conteudo} divider`}>
                <p className={styles.title}>
                    Inscreva-se para a Semana da Computação
                </p>
                <div className={styles.botao_container}>
                    <Button
                        variant="primary"
                        onClick={() =>
                            (window.location.href = "https://www.eventbrite.com/e/vi-semana-da-computacao-tickets-629344154307")
                        }
                    >
                        Quero Participar!
                    </Button>
                </div>
            </div>
        </div>
    );
}
