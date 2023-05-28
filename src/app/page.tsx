"use client";
import Banner from "@/app/components/banner";
import Sobre from "@/app/components/sobre";
import Onde from "./components/onde";
import MiddleBanner from "./components/middleBanner";
import Atividades from "./components/atividades";
import Galeria from "./components/galeria";
import Pessoal from "./components/pessoal";
import Trabalhos from "./components/trabalhos";
import Maratona from "./components/maratona";

export default function Page() {
    return (
        <main>
            <Banner />
            <Sobre />
            <Onde />
            <MiddleBanner />
            <Atividades title="Palestras" link="palestras" />
            <MiddleBanner />
            <Atividades title="Minicursos" link="minicursos" />
            <Galeria />
            <Trabalhos />
            <Maratona />
            <Pessoal
                titulo="Comissão Organizadora"
                descricao="As pessoas que ajudaram a tornar isso possível"
                link="comissao"
            />
            <Pessoal
                titulo="Patrocinadores"
                descricao="Patrocinadores que contribuíram para o evento"
                link="patrocinadores"
            />
        </main>
    );
}
