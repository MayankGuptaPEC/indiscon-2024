import styles from "@/styles/Home.module.scss";
import PageLayout from "@/components/layout/PageLayout";
import Marquee from "react-fast-marquee";
import { getAssetName } from "@/util/githubPagesImagesUtil";
import { ANNOUNCEMENTS } from "@/data/marquee";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";

export default function Home() {
    return (
        <>
            <PageLayout
                title={"Indiscon 2024 | Punjab Engineering College"}
                description={
                    "INDISCON is a flagship annual international conference of the IEEE India Council organized by an IEEE Subsection in INDIA. INDISCON 2024 scheduled during August 22-24, 2024, is being organized by IEEE Chandigarh Subsection along with IEEE India Council and IEEE Delhi Section. The conference will be hosted by Punjab Engineering College (Deemed to be University), Chandigarh. The conference aims to provide an interdisciplinary platform for the academicians, researchers, industry professionals and research scholars to exchange and share their knowledge, experience & research."
                }
            >
                <Marquee className={styles.marquee_container}>
                    {ANNOUNCEMENTS.map((an, i) => (
                        <p key={i} className={styles.marquee}>
                            {an}
                        </p>
                    ))}
                </Marquee>
                <main
                    className={styles.main}
                    style={{
                        backgroundImage: `url(${getAssetName(
                            "/assets/images/pec_chowk.jpeg"
                        )})`,
                        // height: "80vh",
                        // width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className={styles.hero_box}>
                        <p className={styles.sub_heading}>
                            5th IEEE India Council International Subsections
                            Conference
                        </p>
                        <h1>
                            INDISCON <span>2024</span>
                        </h1>
                        <div
                            style={{
                                borderBottom: "4px solid #000",
                                width: "50px",
                            }}
                        />
                    </div>
                    <h2 className={styles.theme}>
                        Theme- Science, Technology and Society
                    </h2>
                    <div className={styles.venue_details}>
                        <div className={styles.dates}>
                            <h3>Conference Dates</h3>
                            <p>August 22-24, 2024</p>
                        </div>
                        <div className={styles.venue}>
                            <h3>Venue</h3>
                            <p>
                                Punjab Engineering College (Deemed to be
                                University), Sector 12, Chandigarh, India
                            </p>
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
                        Punjab Engineering College (Deemed to be University),
                        Chandigarh. The conference aims to provide an
                        interdisciplinary platform for the academicians,
                        researchers, industry professionals and research
                        scholars to exchange and share their knowledge,
                        experience & research. Papers thatareselected and
                        presented at the conference will be submitted to IEEE
                        Xplore.
                    </p>
                </div>

                <div className={styles.banner}>
                    <div className={styles.important_dates}>
                        <h3>Important Dates</h3>
                    </div>
                    <TableContainer
                        sx={{
                            maxWidth: "70%",
                            margin: "0 auto",
                            border: "1px solid #eee",
                        }}
                    >
                        <Table>
                            <TableBody>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of submission of regular
                                            papers
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>May 15, 2024</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last date of Early Bird Registration
                                        </b>
                                    </TableCell>
                                    <TableCell> May 31, 2024</TableCell>
                                </TableRow>
                                <TableRow hover>
                                    <TableCell>
                                        <b>
                                            Last Date for conference
                                            registration
                                        </b>{" "}
                                    </TableCell>
                                    <TableCell>June 15, 2024</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <hr className={styles.divider} />

                    <div className={styles.paper_wrapper}>
                        <div className={styles.register}>
                            <a
                                href="/INDISCON.pdf"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Call for Papers</button>
                            </a>
                        </div>
                        <div className={styles.register}>
                            <a
                                href="https://cmt3.research.microsoft.com/INDISCON2024/"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <button>Submit your paper</button>
                            </a>
                        </div>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}
