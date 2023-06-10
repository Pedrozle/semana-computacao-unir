import Banner from "@/app/components/banner";
import Atividades from "./components/atividades";
import MiddleBanner from "./components/middleBanner";
import Sobre from "./components/sobre";
import Onde from "./components/onde";
import Agenda from "./components/agenda";
import Comissao from "./components/comissao";
import Pessoas from "./components/pessoas";

export default function Page() {
    return (
        <main>
            <Banner />
            <Sobre />
            <Onde />
            <Atividades link="palestras" title="Palestras" />
            <MiddleBanner />
            <Atividades link="minicursos" title="Minicursos" />
            <Agenda />
            <Pessoas />
            <Comissao />
        </main>
    );
}
