import styles from "@/styles/components/onde.module.scss";

export default function Onde() {
    return (
        <div className={styles.onde}>
            <div className={styles.banner}></div>
            <div className={styles.info}>
                <div>
                    <p className={styles.title}>Onde vai ocorrer?</p>
                    <p>
                        Campus José Ribeiro Filho, BR 364 km 9,5 <br />
                        Porto Velho - Rondônia - Brasil
                    </p>
                </div>

                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.2316385864976!2d-63.94083794341859!3d-8.836385997419478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325ffc7052e071%3A0x89d78cf0347001a4!2sUNIR%20-%20Campus%20Jos%C3%A9%20Ribeiro%20Filho!5e0!3m2!1spt-BR!2sbr!4v1683767512203!5m2!1spt-BR!2sbr"

                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
