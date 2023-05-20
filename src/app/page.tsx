import Banner from "@/app/components/banner";
import Sobre from "@/app/components/sobre";
import Onde from "./components/onde";
import MiddleBanner from "./components/middleBanner";
import Atividades from "./components/atividades";

export default function Page() {
    return (
        <main>
            <Banner></Banner>
            <Sobre></Sobre>
            <Onde></Onde>
            <MiddleBanner></MiddleBanner>
            <Atividades title="Palestras" link=""></Atividades>
            <MiddleBanner></MiddleBanner>
            <Atividades title="Minicursos" link=""></Atividades>
        </main>
    );
}
