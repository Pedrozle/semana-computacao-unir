import styles from "@/styles/components/comissao.module.scss";
import Image from "next/image";
import img1 from "./../../assets/galeria1.jpg";

export default function Comissao() {
    return (
        <div className={styles.comissao}>
            <div className={styles.conteudo}>
                <p className={styles.title}>Comissão Organizadora</p>
                <p>As pessoas que ajudaram a tornar isso possível</p>
                <div className={styles.pessoas}>
                    <div className={styles.pessoa}>
                        <img
                            src="https://avatars.githubusercontent.com/u/61695553?v=4"
                            alt="foto de uma pessoa"
                            width="50"
                        />
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/thania-pereira/"
                        >
                            João Pedro Nascimento da Silveira
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
