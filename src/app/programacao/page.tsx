"use client";

import styles from "@/styles/agenda.module.scss";
import base64ToBlob from "@/services/fotoConversor";

import { useState, useEffect } from "react";

interface Atividade {
    titulo: string;
    palestrante: string;
    descricao: string;
    data: string;
    img: string;
}

async function getAtividades() {
    const url = "/api/db?colecao=";

    const res = await fetch(`${url}`, {
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

export default function Page() {
    const [atividades, setAtividades] = useState<Atividade[]>([]);

    // useEffect(() => {
    //     // Exemplo de função assíncrona que retorna uma Promise
    //     async function obterArray() {
    //         const arrayRetornado = await getAtividades();
    //         setAtividades(arrayRetornado);
    //     }

    //     obterArray();
    // }, []); // Certifique-se de fornecer um array vazio para o useEffect para que ele seja executado apenas uma vez

    return (
        <div className={styles.agenda}>
            <div className={styles.cabecalho}>
                <p className={styles.titulo}>printf(&quot;Programação&quot;)</p>
            </div>
        </div>
    );
}
