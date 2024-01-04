import styles from "@/styles/Home.module.scss";
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
                <main className={styles.main}>
                    <div className={styles.hero_box}>
                        <p>
                            5th IEEE India Council International Subsections
                            Conference
                        </p>
                        <h1>
                            INDISCON <br /> <span>2024</span>
                        </h1>
                        <div
                            style={{
                                borderBottom: "4px solid #000",
                                width: "50px",
                            }}
                        />

                        <div className={styles.venue_details}>
                            <div className={styles.dates}>
                                <p>Conference</p>
                                <p>August 22-24, 2024</p>
                            </div>
                            <div className={styles.venue}>
                                <p>Venue</p>
                                <p>PEC</p>
                            </div>
                        </div>
                    </div>
                </main>
            </PageLayout>
        </>
    );
}
