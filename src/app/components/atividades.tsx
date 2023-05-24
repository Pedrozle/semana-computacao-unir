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
    img: string;
}

async function getAtividades(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let palestras: Array<Atividade> = await res.json();

    palestras = palestras.map((palestra: Atividade) => {

        let blob = base64ToBlob(palestra.img)

        return {
            titulo: palestra.titulo,
            palestrante: palestra.palestrante,
            descricao: palestra.descricao,
            data: palestra.data,
            img: URL.createObjectURL(blob)
        };
    });

    return palestras;
}

function base64ToBlob(base64String: any) {
    const byteCharacters = atob(base64String.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: "image/jpeg" });
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
        <div id={props.title.toLowerCase()} className={styles.atividades}>
            <div className={styles.conteudo}>
                <p className={styles.title}>{props.title}</p>
                <Carousel>
                    {atividades.map((atividade: Atividade, index: number) => (
                        <Carousel.Item>
                            <div className={styles.mask}>
                                <img
                                    src={atividade.img}
                                    alt=""
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.caption}>
                                <p className={styles.legenda_title}>
                                    {atividade.titulo}
                                </p>
                                <p className={styles.palestrante}>
                                    {atividade.palestrante}
                                </p>
                                <p className={styles.datahora}>
                                    {atividade.data}
                                </p>
                                <div className={styles.decricao_content}>
                                    <p className={styles.descricao}>
                                        {atividade.descricao}
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
