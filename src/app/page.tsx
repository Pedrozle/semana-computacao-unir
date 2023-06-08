import Banner from "@/app/components/banner";
import Atividades from "./components/atividades";
import MiddleBanner from "./components/middleBanner";
import Sobre from "./components/sobre";
import Onde from "./components/onde";

export default function Page() {
    return (
        <main>
            <Banner />
            <Sobre />
            <Onde />
            <Atividades link="palestras" title="Palestras" />
            <MiddleBanner />
            <Atividades link="minicursos" title="Minicursos" />
        </main>
    );
}
