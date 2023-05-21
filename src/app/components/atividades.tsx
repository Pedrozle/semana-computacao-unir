"use client";
import styles from "@/styles/components/atividades.module.scss";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import palestra1 from "@/assets/palestrante1.jpg";

interface Props {
    title: string;
    link: string;
}

async function getAtividades() {
    const res = await fetch(`/api/db`, { cache: "no-store" });
    const projects = await res.json();
    console.log(projects);

    return projects;
}

export default function Atividades(props: Props) {

    const a = getAtividades();

    return (
        <div className={styles.atividades}>
            <div className={styles.conteudo}>
                <p className={styles.title}>{props.title}</p>
                <Carousel>
                    <Carousel.Item>
                        <Image className={styles.img} src={palestra1} alt="" />
                        <div className={styles.caption}>
                            <p className={styles.legenda_title}>
                                First slide label
                            </p>
                            <p className={styles.palestrante}>Nome do caba</p>
                            <div className={styles.decricao_content}>
                                <p className={styles.descricao}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repellendus id suscipit,
                                    quae debitis, possimus facere accusamus
                                    animi dignissimos saepe quas maxime error,
                                    ut voluptates in beatae? Incidunt quia
                                    explicabo, sequi quo ratione ipsam corporis
                                    nemo porro perferendis, minus neque officiis
                                    voluptas eligendi dolore ab atque.
                                    Cupiditate, ad voluptates, unde earum
                                    exercitationem ut enim aliquam iusto quaerat
                                    velit dolor cum facilis atque quia culpa
                                    nam, nostrum quibusdam sunt. Praesentium,
                                    eligendi excepturi nobis neque, facere earum
                                    dolores voluptates provident fugiat
                                    exercitationem deleniti corporis laborum
                                    distinctio debitis in magnam dignissimos
                                    culpa nisi vitae cumque perspiciatis? Animi
                                    cumque ratione nesciunt? Atque modi
                                    accusamus dicta.
                                </p>
                            </div>
                            <p className={styles.datahora}>
                                dia 27 de jun às 10:30h
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
