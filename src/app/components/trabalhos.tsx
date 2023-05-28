import styles from "@/styles/components/trabalhos.module.scss";
import Image from "next/image";
import { Button } from "react-bootstrap";

import explica from "@/assets/explica.png"

export default function Trabalhos() {
    return (
        <div className={styles.trabalhos} id="trabalhos">
            <div className={styles.conteudo}>
                <p className={styles.title}>Submissão de Trabalhos</p>
                <div className={styles.info}>
                    <p>
                        Os resumos, submetidos para apresentação na forma de
                        pôster, serão avaliados por subcomissões de áreas
                        temáticas designadas pela Comissão Científica. Cada
                        participante inscrito poderá submeter um único resumo.
                        Instruções envolvendo formato e submissão de resumos
                        estão disponíveis no site do evento.
                    </p>
                    <div className={styles.areas_submissao}>
                        <div className={styles.img}>
                            <Image src={explica} alt="" />
                            <p>
                                Apresentação de trabalho pelo acadêmico Aden
                                Hercules na V Semana da Computação
                            </p>
                        </div>
                        <div className={styles.area}>
                            <p className={styles.subtitle}>Áreas de submissão</p>
                            <p>
                                Os resumos deverão ser submetidos em uma das
                                cinco sessões temáticas pertinentes aos
                                trabalhos de Computação, Inovação e Tecnologia:
                            </p>
                            <ul>
                                <li>
                                    Desenvolvimento de softwares e banco de
                                    dados
                                </li>
                                <li>
                                    Processamento de Imagens e Visão
                                    Computacional
                                </li>
                                <li>Bioinformática</li>
                                <li>
                                    Inteligência Artificial e suas aplicações
                                </li>
                                <li>Deep Learning</li>
                                <li>Software Educacional </li>
                                <li>Programação para dispositivos móveis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Button className={styles.button}
                    variant="primary"
                    onClick={() =>
                        (window.location.href =
                            "https://www.eventbrite.com.br/e/vi-semana-da-computacao-tickets-643466023197")
                    }
                >
                    Saiba mais na EventBrite
                </Button>
            </div>
        </div>
    );
}
