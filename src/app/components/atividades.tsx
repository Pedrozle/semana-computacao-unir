"use client";
import styles from "@/styles/components/atividades.module.scss";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import palestra1 from "@/assets/palestrante1.jpg";
import { useEffect, useState } from "react";

interface Props {
    title: string;
    link: string;
}

interface Atividade {
    titulo: string;
    palestrante: string;
    descricao: string;
    data: string;
}

async function getAtividades(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    const palestras: Array<Atividade> = await res.json();

    palestras;

    return palestras;
}

export default function Atividades(props: Props) {
    const [atividades, setAtividades] = useState<Atividade[]>([]);

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getAtividades(props.link);
            setAtividades(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <div className={styles.atividades}>
            <div className={styles.conteudo}>
                <p className={styles.title}>{props.title}</p>
                <Carousel>
                    {atividades.map((atividade: Atividade, index: number) => (
                        <Carousel.Item>
                            <Image
                                className={styles.img}
                                src={palestra1}
                                alt=""
                            />
                            <div className={styles.caption}>
                                <p className={styles.legenda_title}>
                                    {atividade.titulo}
                                </p>
                                <p className={styles.palestrante}>
                                    {atividade.palestrante}
                                </p>
                                <div className={styles.decricao_content}>
                                    <p className={styles.descricao}>
                                        {atividade.descricao}
                                    </p>
                                </div>
                                <p className={styles.datahora}>
                                    {atividade.data}
                                </p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
