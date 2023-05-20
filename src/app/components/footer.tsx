import Image from "next/image";

import "./styles/footer.component.scss";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="dacc">
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
                    <div className="links">
                        <p className="title">Links Rápidos:</p>
                        <a target="_blank" href="/">
                            Departamento Acadêmico de Ciencia da Computação - DACC
                        </a>
                        <a target="_blank" href="/">
                            EventBrite - Descubra eventos
                        </a>
                    </div>
                    <div className="copyright">
                        <p className="title">Desenvolvido por:</p>
                        <p>
                            Alunos formandos do curso de Bacharelado em Ciência
                            da Computação da UNIR.
                        </p>
                        <div className="pessoa">
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
                        <div className="pessoa">
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
