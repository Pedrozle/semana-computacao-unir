"use client";
import styles from "@/styles/components/atividades.module.scss";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import palestra1 from "@/assets/palestrante1.jpg";

interface Props {
    title: string;
    link: string;
}

export default function Atividades(props: Props) {
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
                            <p className={styles.descricao}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, cum. Quos maiores
                                error pariatur, explicabo minus harum officia ab
                                quae cum totam repellendus exercitationem.
                                Necessitatibus accusantium doloribus
                                voluptatibus aut mollitia, quo, porro asperiores
                                odit eaque cumque provident impedit illo velit
                                enim officia quasi eligendi vel tempora ea nemo
                                illum totam maxime minima consequatur. Sunt
                                dolores cumque odio, sequi quas nesciunt harum,
                                maiores minima libero expedita neque quasi
                                excepturi nam. Quisquam facilis vero totam in
                                atque recusandae, modi quas culpa provident
                                voluptate quis blanditiis eaque nostrum dicta
                                natus eveniet architecto magni dolore qui
                                officia accusantium. Debitis aliquid in omnis
                                molestias numquam.
                            </p>
                            <p className={styles.datahora}>
                                dia 27 de jun às 10:30h
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className={styles.img} src={palestra1} alt="" />
                        <div className={styles.caption}>
                            <p className={styles.legenda_title}>Firasdasdas</p>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interasdasdadasasdsdollis interdum.Nulla vitae
                                elit libero, a pharetra augue mollis
                                interdum.Nulla vitae elit libero
                            </p>
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
