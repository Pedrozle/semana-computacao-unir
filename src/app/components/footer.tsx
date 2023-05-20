import Image from "next/image";

import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_content}>
                    <div className={styles.dacc}>
                        <Image
                            src="https://dacc.unir.br/uploads/91919191/diversos/Logo%20DACC%202017.png"
                            alt="Logo DACC"
                            width={300}
                            height={200}
                        />
                        <p>
                            O Departamento Acadêmico de Ciência da Computação -
                            DACC foi criado com o intuito de realizar, junto à
                            Universidade Federal de Rondônia, as atividades de
                            ensino, pesquisa e extensão relacionadas ao campo da
                            informática e da computação.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <p className={styles.title}>Links Rápidos:</p>
                        <a target="_blank" href="/">
                            Departamento Acadêmico de Ciencia da Computação -
                            DACC
                        </a>
                        <a target="_blank" href="/">
                            EventBrite - Descubra eventos
                        </a>
                    </div>
                    <div className={styles.copyright}>
                        <p className={styles.title}>Desenvolvido por:</p>
                        <p>
                            Alunos formandos do curso de Bacharelado em Ciência
                            da Computação da UNIR.
                        </p>
                        <div className={styles.pessoa}>
                            <img
                                src="https://avatars.githubusercontent.com/u/61695553?v=4"
                                alt="foto de uma pessoa"
                                width="50"
                            />
                            <a
                                target="_blank"
                                href="https://linkedin.com/in/pedrozle"
                            >
                                João Pedro N. Silveira
                            </a>
                        </div>
                        <div className={styles.pessoa}>
                            <img
                                src="https://media.licdn.com/dms/image/D5603AQFWcCtsgPW2GA/profile-displayphoto-shrink_800_800/0/1668519470518?e=1689206400&v=beta&t=6f799cuE9zueLqmNC5XaYjLXoqBnu4XYRYjX6yMQYP4"
                                alt="foto de uma pessoa"
                                width="50"
                            />
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/thania-pereira/"
                            >
                                Thânia Beatriz C. G. Pereira
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
