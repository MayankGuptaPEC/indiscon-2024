import styles from "@/styles/Home.module.scss";
import PageLayout from "@/components/layout/PageLayout";
import Marquee from "react-fast-marquee";

export default function Home() {
    console.log(process.env.NODE_ENV);
    return (
        <>
            <PageLayout
                title={"Indiscon 2024 | Punjab Engineering College"}
                description={
                    "INDISCON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during August 22-24, 2024, is being organized by IEEE Chandigarh Subsection along with IEEE India Council and IEEE Delhi Section. The conference will be hosted by Punjab Engineeing College (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research."
                }
            >
                <Marquee className={styles.marquee_container}>
                    <p className={styles.marquee}>
                        INDISCON 2024 website is not live, Important
                        announcements will be shown here!
                    </p>
                    <p className={styles.marquee}>Another announcement!</p>
                </Marquee>
                <main className={styles.main}>
                    <div className={styles.hero_box}>
                        <p className={styles.sub_heading}>
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
                                <p>Conference Dates</p>
                                <p>August 22-24, 2024</p>
                            </div>
                            <div className={styles.venue}>
                                <p>Venue</p>
                                <p>Punjab Engineering College (deemed to be university), Sector 12, Chandigarh</p>
                            </div>
                        </div>
                    </div>
                </main>

                <div className={styles.info}>
                    <p>
                        INDISCON is a flagship annual international conference
                        of the IEEE India Council organized by an IEEE
                        Subsection in INDIA. INDISCON 2024 scheduled during
                        August 22-24, 2024, is being organized by IEEE
                        Chandigarh Subsection along with IEEE India Council and
                        IEEE Delhi Section. The conference will be hosted by
                        Punjab Engineeing College (Deemed to be University),
                        Chandigarh. The conference aims to provide an
                        interdisciplinary platform for the academicians,
                        researchers, industry professionals and research
                        scholars to exchange and share their knowledge,
                        experience & research.
                    </p>
                </div>

                <div className={styles.banner}>
                    <div className={styles.register}>
                        <h3>Submit your paper</h3>
                        <a href="https://cmt3.research.microsoft.com/INDISCON2024/">
                            <button>Microsoft CMT</button>
                        </a>
                    </div>
                    <hr className={styles.divider} />
                    <div className={styles.important_dates}>
                        <h3>Important Dates</h3>
                        <div>
                            <li>
                                <b>Early Bird Registration</b> May 31, 2024
                            </li>
                            <li>
                                <b>Last Date for conference registration</b>{" "}
                                June 15, 2024
                            </li>
                            <li>
                                <b>Conference Dates</b> August 22-24, 2024
                            </li>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}
