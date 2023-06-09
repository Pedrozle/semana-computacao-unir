"use client";
import { Button } from "react-bootstrap";
import styles from "@/styles//components/banner.module.scss";

export default function Banner() {
    return (
        <div className={styles.inicio} id="inicio">
            <div className={styles.banner_content}>
                <h1 className={styles.title}>VI Semana da Computação</h1>
                <p className={styles.descricao}>
                    Universidade Federal de Rondônia - UNIR
                </p>
                <p className={styles.data}>26 à 30 jun. 2023</p>
                <div className={styles.botao_info}>
                    <Button
                        className={styles.button}
                        variant="primary"
                        onClick={() =>
                            (window.location.href =
                                `${process.env.INSCRICAO_LINK}`)
                        }
                    >
                        Inscreva-se!
                    </Button>
                </div>
            </div>
        </div>
    );
}
