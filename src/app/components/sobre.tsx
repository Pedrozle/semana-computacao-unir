import Image from "next/image";
import styles from "@/styles/components/sobre.module.scss";
import primeiro_dia from "@/assets/primeiro_dia.jpeg";

export default function Sobre() {
    return (
        <div className={styles.sobre} id="sobre">
            <div className={styles.conteudo}>
                <p className={styles.title}>Sobre a Semana da Computação</p>
                <div className={styles.descricao}>
                    <div className={styles.texto}>
                        <p>
                            A SEMANA DA COMPUTAÇÃO DA UNIR, antigamente
                            denominada INFOUNIR (Semana de Informática), é um
                            evento aberto a toda comunidade regional e de outros
                            centros, procurando congregar estudantes de
                            graduação e pós-graduação, professores,
                            pesquisadores, profissionais e demais interessados
                            em computação, objetivando a difusão da computação e
                            do seu bom uso, trazendo para o debate aberto, temas
                            importantes relacionados à Ciência de Dados e Big
                            data.
                        </p>
                        <p>
                            Nesta edição, o evento será integrado ao Workshop de
                            Tecnologias de Redes do PoP-RO, voltado para
                            gestores e equipes técnicas da área de TIC das
                            principais instituições públicas e privadas de
                            ensino e pesquisa do estado de Rondônia.
                        </p>
                    </div>
                    <div className={styles.foto}>
                        <div className={styles.img}>
                            <Image src={primeiro_dia} alt="" />
                            <p>2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
