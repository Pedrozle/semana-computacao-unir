"use client";
import styles from "@/styles/components/atividades.module.scss";
import Carousel from "react-bootstrap/Carousel";
import base64ToBlob from "@/services/fotoConversor";

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
    img: string;
}

async function getAtividades(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let atividades: Array<Atividade> = await res.json();

    atividades = atividades.map((atividade: Atividade) => {
        let blob: Blob = atividade.img
            ? base64ToBlob(atividade.img)
            : new Blob();

        return {
            titulo: atividade.titulo,
            palestrante: atividade.palestrante,
            descricao: atividade.descricao,
            data: atividade.data,
            img: atividade.img ? URL.createObjectURL(blob) : "",
        };
    });

    return atividades;
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
        <>
            {atividades.length === 0 ? (
                <></>
            ) : (
                <>
                    <div
                        id={props.title.toLowerCase()}
                        className={styles.atividades}
                    >
                        <div className={styles.conteudo}>
                            <p className={styles.title}>{props.title}</p>
                            <Carousel>
                                {atividades.map(
                                    (atividade: Atividade, index: number) => (
                                        <Carousel.Item key={index}>
                                            <div className={styles.mask}>
                                                {atividade.img.length > 0 ? (
                                                    <>
                                                        <img
                                                            src={atividade.img}
                                                            alt=""
                                                            className={
                                                                styles.img
                                                            }
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <img
                                                            src="https://placehold.co/600x400"
                                                            alt=""
                                                            className={
                                                                styles.img
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </div>
                                            <div className={styles.caption}>
                                                <p
                                                    className={
                                                        styles.legenda_title
                                                    }
                                                >
                                                    {atividade.titulo}
                                                </p>
                                                <p
                                                    className={
                                                        styles.palestrante
                                                    }
                                                >
                                                    {atividade.palestrante}
                                                </p>
                                                <p className={styles.datahora}>
                                                    {atividade.data}
                                                </p>
                                                <div
                                                    className={
                                                        styles.decricao_content
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            styles.descricao
                                                        }
                                                    >
                                                        {atividade.descricao}
                                                    </p>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    )
                                )}
                            </Carousel>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
