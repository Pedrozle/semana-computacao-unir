import styles from "@/styles/components/galeria.module.scss";
import img1 from "@/assets/img/galeria1.jpg";
import img2 from "@/assets/img/galeria2.jpg";
import img3 from "@/assets/img/galeria3.jpg";
import img4 from "@/assets/img/galeria4.jpg";
import img5 from "@/assets/img/galeria5.jpg";
import img6 from "@/assets/img/galeria6.jpg";
import img7 from "@/assets/img/galeria7.jpg";
import img8 from "@/assets/img/galeria8.jpg";
import img9 from "@/assets/img/galeria9.jpg";
import img10 from "@/assets/img/galeria10.jpg";
import img11 from "@/assets/img/galeria11.jpg";
import img12 from "@/assets/img/galeria12.jpg";
import Image from "next/image";

export default function Galeria() {
    return (
        <div className={styles.galeria}>
            <div className={styles.conteudo}>
                <p className={styles.title}>Galeria da Semana da Computação</p>
                <div className={styles.galeria_content}>
                    <div className={styles.fotos}>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img1}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img2}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img3}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img4}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img5}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img6}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img7}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img8}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img9}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img10}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img11}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img12}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
