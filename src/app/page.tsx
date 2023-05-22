"use client";
import Banner from "@/app/components/banner";
import Sobre from "@/app/components/sobre";
import Onde from "./components/onde";
import MiddleBanner from "./components/middleBanner";
import Atividades from "./components/atividades";
import Galeria from "./components/galeria";
import Comissao from "./components/comissao";

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
            <Comissao></Comissao>
        </main>
    );
}
