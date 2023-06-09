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
                <Button
                    className={styles.button}
                    variant="primary"
                    onClick={() =>
                        (window.location.href =
                            `${process.env.INSCRICAO_LINK}`)
                    }
                >
                    Quero Participar!
                </Button>
            </div>
        </div>
    );
}
