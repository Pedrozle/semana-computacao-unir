import styles from "@/styles/components/pessoas.module.scss";
import Image from "next/image";

import blocos2 from "@/assets/img/blocos2.svg";

export default function Pessoas() {
    return (
        <div className={styles.pessoas}>
            <Image src={blocos2} alt="" className={styles.img} />
            <p className={styles.titulo}>Palestrantes</p>
            <div className={styles.pessoal}>
                <div className={styles.pessoa_container}>
                    <Image src={blocos2} alt="" className={styles.pessoa_img} />
                    <div className={styles.detalhes}>
                        <p className={styles.nome}>Thânia Beatriz C. G. Pereira</p>
                        <p className={styles.descricao}>
                            Formanda em ciência da computação pela Universidade
                            Federal de Rondônia, sou desenvolvdora na SPC
                            Brasil, apaixonada por dados, design e games.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
