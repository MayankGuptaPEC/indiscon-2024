import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/call_for_papers.module.scss";
import { TRACKS } from "@/data/tracks";

function CallForPapers() {
    return (
        <PageLayout title={"Call For Papers | Indiscon 2024"}>
            <h1 className={styles.heading}>Call For Papers</h1>
            <p className={styles.subheading}>
                The Conference aims to provide an active platform for research
                scientists, engineers, and practitioners throughout the world to
                present their latest research findings, ideas, and applications
                in the fields of interest which fall under the scope of INDISCON
                2024. Papers (upto 6 pages in .pdf) presented in the Conference, duly
                accepted after peer review, will be eligible for submission for
                further consideration of publishing in the IEEE Xplore, subject
                to maintenance of quality, and post-conference scrutiny of
                response of Conference Organizers to Technical Program of
                Questionnaire (TPQ) on the Conference.
            </p>

            <a href="/CFP INDISCON 2024" download className={styles.download_button}>
                {" "}
                <button>Click here to download</button>
            </a>
            <h2 className={styles.subheading}>Technical Tracks</h2>

            <div className={styles.technical_tracks}>
                <p className={styles.paper_track}>
                    Track 1: Power and Energy Systems
                </p>
                <p className={styles.paper_track}>
                    Track 2 : Power Electronics, Drives and Intelligent Control{" "}
                </p>
                <p className={styles.paper_track}>
                    Track 3 : Instrumentation, Control and Signal processing
                </p>
                <p className={styles.paper_track}>
                    Track 4 : Artificial Intelligence and Data Science
                </p>
                <p className={styles.paper_track}>
                    Track 5 : Communication, Network & IOT
                </p>
                <p className={styles.paper_track}>
                    Track 6 : Next Generation Computing and applications
                </p>
                <p className={styles.paper_track}>
                    Track 7 : Security & Privacy{" "}
                </p>
                <p className={styles.paper_track}>
                    Track 8 : RF/Microwave/Terahertz Technologies
                </p>
                <p className={styles.paper_track}>
                    Track 9 : Semiconductor Devices{" "}
                </p>
                <p className={styles.paper_track}>
                    Track 10 : VLSI & Embedded Systems
                </p>
                <p className={styles.paper_track}>
                    Track 11 : Nanotechnology Materials and Devices
                </p>
                <p className={styles.paper_track}>
                    Track 12 : Education Technologies
                </p>
                <p className={styles.paper_track}>
                    Track 13 : Women in Engineering
                </p>
            </div>

            <h2 className={styles.subheading}>Track Details</h2>

            <p className={styles.paper_track}>
                Following are the selected sub-topics &#40;not limited to&#41;
                under different tracks:
            </p>

            {TRACKS.map(({ track, topics }, i) => {
                return (
                    <div key={i} className={styles.tracks}>
                        <h3>
                            <u>{track}</u>
                        </h3>
                        <ul>
                            {topics.map((topic, j) => {
                                return <li key={j}>{topic}</li>;
                            })}
                        </ul>
                    </div>
                );
            })}
        </PageLayout>
    );
}

export default CallForPapers;
