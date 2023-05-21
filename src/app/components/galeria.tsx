import styles from "@/styles/components/galeria.module.scss";
import img1 from "@/assets/galeria1.jpg";
import img2 from "@/assets/galeria2.jpg";
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
                            <p>Foto 1</p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img2}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p>Foto 2</p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img1}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p>Foto 1</p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img2}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p>Foto 2</p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img1}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p>Foto 1</p>
                        </div>
                        <div className={styles.foto}>
                            <div className={styles.mask}>
                                <Image
                                    src={img2}
                                    alt="Imagem"
                                    className={styles.img}
                                />
                            </div>
                            <p>Foto 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
