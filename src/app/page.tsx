import Banner from "@/app/components/banner";
import Atividades from "./components/atividades";
import MiddleBanner from "./components/middleBanner";
import Sobre from "./components/sobre";

export default function Page() {
    return (
        <main>
            <Banner />
            <Sobre />
            <Atividades link="palestras" title="Palestras" />
            <MiddleBanner />
            <Atividades link="minicursos" title="Minicursos" />
        </main>
    );
}
