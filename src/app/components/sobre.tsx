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
                            É um evento aberto a toda comunidade regional e de
                            outros centros, procurando congregar estudantes de
                            graduação e pós-graduação, professores,
                            pesquisadores, profissionais e demais interessados
                            em computação, objetivando a difusão da computação e
                            do seu bom uso, trazendo para o debate aberto, temas
                            importantes relacionados à Ciência da Computação.
                        </p>
                        <p>
                            Além de propiciar uma troca de experiência, o
                            objetivo também é gerar um ambiente para atualização
                            tecnológica através de atividades complementares
                            como palestras, debates e minicursos.
                        </p>
                        <p>
                            Também haverá apresentação de trabalhos acadêmicos
                            desenvolvidos pelos alunos do curso de Ciência da
                            Computação da Unir, a fim de divulgar à comunidade
                            as pesquisas desenvolvidas nesta temática pelos
                            alunos e professores. As inscrições são limitadas
                            para as atividades e é necessário que o participante
                            escolha e se inscreva na(s) atividade(s) que irá
                            participar.
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
