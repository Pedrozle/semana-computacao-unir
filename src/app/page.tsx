"use client";
import Banner from "@/app/components/banner";
import Sobre from "@/app/components/sobre";
import Onde from "./components/onde";
import MiddleBanner from "./components/middleBanner";
import Atividades from "./components/atividades";
import Galeria from "./components/galeria";
import Pessoal from "./components/pessoal";

export default function Page() {
    return (
        <main>
            <Banner></Banner>
            <Sobre></Sobre>
            <Onde></Onde>
            <MiddleBanner></MiddleBanner>
            <Atividades title="Palestras" link="palestras"></Atividades>
            <MiddleBanner></MiddleBanner>
            <Atividades title="Minicursos" link="minicursos"></Atividades>
            <Galeria></Galeria>
            <Atividades title="Trabalhos" link="trabalhos"></Atividades>
            <Pessoal
                titulo="Comissão Organizadora"
                descricao="As pessoas que ajudaram a tornar isso possível"
                link="comissao"
            ></Pessoal>
            <Pessoal
                titulo="Patrocinadores"
                descricao="Patrocinadores que contribuíram para o evento"
                link="patrocinadores"
            ></Pessoal>
        </main>
    );
}
