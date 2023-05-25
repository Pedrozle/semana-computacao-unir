"use client";
import base64ToBlob from "@/services/fotoConversor";
import styles from "@/styles/components/pessoal.module.scss";
import { useEffect, useState } from "react";

interface Props {
    titulo: string;
    descricao: string;
    link: string;
}

interface Pessoal {
    nome: string;
    descricao: string;
    img: string;
    equipe: number;
}

async function getPessoal(link: string) {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}${link}`, {
        next: { revalidate: 500 },
    });

    let pessoal: Array<Pessoal> = await res.json();

    pessoal = pessoal.map((pessoa: Pessoal) => {
        let blob: Blob = pessoa.img.includes("data=")
            ? base64ToBlob(pessoa.img)
            : new Blob();
        return {
            nome: pessoa.nome,
            descricao: pessoa.descricao,
            equipe: pessoa.equipe,
            img:
                blob.type === "image/jpeg"
                    ? URL.createObjectURL(blob)
                    : pessoa.img,
        };
    });

    return pessoal;
}

export default function Pessoal(props: Props) {
    const [pessoal, setPessoal] = useState<Pessoal[]>([]);

    useEffect(() => {
        // Exemplo de função assíncrona que retorna uma Promise
        async function obterArray() {
            const arrayRetornado = await getPessoal(props.link);
            setPessoal(arrayRetornado);
        }

        obterArray();
    }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <>
            {pessoal.length == 0 ? (
                <></>
            ) : (
                <>
                    <div className={styles.pessoal}>
                        <div className={`${styles.conteudo} divider`}>
                            <p className={styles.title}>{props.titulo}</p>
                            <p>{props.descricao}</p>
                            <div className={styles.pessoas}>
                                <div className={styles.equipe}>
                                    <p className={styles.subtitle}>
                                        Coordenação
                                    </p>
                                    <div className={styles.equipe_pessoal}>
                                        {pessoal.map((pessoa, index) => (
                                            <>
                                                {pessoa.equipe == 1 ? (
                                                    <>
                                                        <div
                                                            className={
                                                                styles.pessoa
                                                            }
                                                            key={index}
                                                        >
                                                            <img
                                                                src={pessoa.img}
                                                                alt="foto de uma pessoa"
                                                                width="50"
                                                            />
                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.nome
                                                                    }
                                                                >
                                                                    {
                                                                        pessoa.nome
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        pessoa.descricao
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.equipe}>
                                    <p className={styles.subtitle}>
                                        Equipe técnica
                                    </p>

                                    <div className={styles.equipe_pessoal}>
                                        {pessoal.map((pessoa, index) => (
                                            <>
                                                {pessoa.equipe == 2 ? (
                                                    <>
                                                        <div
                                                            className={
                                                                styles.pessoa
                                                            }
                                                            key={index}
                                                        >
                                                            <img
                                                                src={pessoa.img}
                                                                alt="foto de uma pessoa"
                                                                width="50"
                                                            />
                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.nome
                                                                    }
                                                                >
                                                                    {
                                                                        pessoa.nome
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        pessoa.descricao
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
