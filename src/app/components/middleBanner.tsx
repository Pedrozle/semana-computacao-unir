"use client";
import styles from "@/styles/components/middle.module.scss";
import { Button } from "react-bootstrap";

export default function MiddleBanner() {
    return (
        <div className={styles.middle_banner}>
            <div className={`${styles.conteudo} ${styles.divider}`}>
                <p className={styles.title}>
                    Inscreva-se para a Semana da Computação
                </p>
                <div className={styles.botao_container}>
                    <Button
                        variant="primary"
                        onClick={() =>
                            (window.location.href = "https://google.com")
                        }
                    >
                        Quero Participar!
                    </Button>
                </div>
            </div>
        </div>
    );
}
