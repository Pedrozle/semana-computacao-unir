"use client";
import styles from "@/styles/components/maratona.module.scss";
import Image from "next/image";
import { Button } from "react-bootstrap";

import computador from "@/assets/img/startup.png"

export default function Maratona() {
    return (
        <div className={styles.middle_banner}>
            <div className={`${styles.conteudo} divider`}>
                <p className={styles.title}>
                    Maratona de Programação na VI Semana da Computação
                </p>
                <div className={styles.info}>
                    <p>
                        A maratona de programação é um competição entre grupos
                        fechados de pessoas que visa ampliar a capacidade de
                        raciocínio e de resolução de problemas de computador em
                        um tempo determinado. Além de proporcionar a simulação
                        do ambiente competitivo &quot;Maratona de Programação&quot; da
                        SBC.
                    </p>
                    <Image className={styles.img} src={computador} alt=""/>
                </div>
                <Button
                    className={styles.button}
                    variant="primary"
                    onClick={() =>
                        (window.location.href =
                            "https://www.eventbrite.com.br/e/vi-semana-da-computacao-tickets-643466023197")
                    }
                >
                    Saiba mais na EventBrite
                </Button>
            </div>
        </div>
    );
}
