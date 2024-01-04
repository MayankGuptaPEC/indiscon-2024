import styles from "@/styles/Home.module.css";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
    return (
        <>
            <PageLayout
                title={"Indiscon 2024 | Punjab Engineering College"}
                description={
                    "INDISCON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during August 22-24, 2024, is being organized by IEEE Chandigarh Subsection along with IEEE India Council and IEEE Delhi Section. The conference will be hosted by Punjab Engineeing College (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research."
                }
            >
                <main className={styles.main}></main>
            </PageLayout>
        </>
    );
}
