import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/call_for_papers.module.scss";
import { FaArrowRight } from "react-icons/fa";

function CallForPapers() {
    return (
        <PageLayout title={"Call For Papers | Indiscon 2024"}>
            <h1 className={styles.heading}>Call For Papers</h1>
            <p className={styles.subheading}>
                The Conference aims to provide an active platform for research
                scientists, engineers, and practitioners throughout the world to
                present their latest research findings, ideas, and applications
                in the fields of interest which fall under the scope of INDISCON
                2024. Prospective authors are invited to submit original
                research papers (not being considered for publication elsewhere)
                in standard IEEE conference template describing new theoretical
                and/or experimental research results in the following tracks:
            </p>

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

            <div className={styles.submission}>
                <h2>Submission Details</h2>
                <div className={styles.submission_details}>
                    Authors are requested to submit their original research
                    papers in{" "}
                    <a
                        href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                        target="_blank"
                    >
                        IEEE format
                    </a>{" "}
                    through the{" "}
                    <a
                        href="https://cmt3.research.microsoft.com/INDISCON2024/"
                        target="_blank"
                    >
                        submission link
                    </a>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Paper Specifications</h2>
                <div className={styles.submission_details}>
                    Use our template to meet formatting requirements below. Your
                    paper must comply with the following specifications:
                    <ul>
                        <li>
                            <FaArrowRight /> Paper Length: Maximum 6 pages
                        </li>
                        <li>
                            <FaArrowRight /> Paper Size: US Letter (8.5&rdquo; x
                            11&rdquo;)
                        </li>
                        <li>
                            <FaArrowRight />
                            Fonts: Embed ALL fonts in your PDF file. Avoid the
                            use of Type 3 fonts.
                        </li>
                        <li>
                            <FaArrowRight /> File Format: Adobe PDF (.pdf)
                        </li>
                        <li>
                            <FaArrowRight /> Allowed File Size: 2.0Mb
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT page number your paper.
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT apply security settings to
                            your PDF file.
                        </li>
                    </ul>
                    <p className={styles.special_note}>
                        <b>Note:</b> Deviations from the above paper
                        specifications will result in rejection of your
                        submission.
                    </p>
                </div>
            </div>

            <div className={styles.submission}>
                <h2>Final Submission Procedure</h2>
                <div className={styles.submission_details}>
                    Use our template to meet formatting requirements below. Your
                    paper must comply with the following specifications:
                    <ul>
                        <li>
                            <FaArrowRight /> Pay for conference registration
                            here: IEEE INDISCON 2024 registration site
                        </li>
                        <li>
                            <FaArrowRight /> Final submission is REQUIRED, even
                            if you do not intend to make any changes to your
                            original submission.
                        </li>
                        <li>
                            <FaArrowRight />
                            BEFORE YOU PROCEED, carefully read the Author
                            Information page to ensure that your submission
                            meets the guidelines.
                        </li>
                        <li>
                            <FaArrowRight /> Prepare a copy of your paper in PDF
                            format using our templates
                        </li>
                        <li>
                            <FaArrowRight /> MANDATORY: Make sure your PDF file
                            meets IEEE Xplore compliance by following the
                            instructions on the PDF Express page.
                        </li>
                        <li>
                            <FaArrowRight /> Log in using the same username and
                            password you created during your initial submission.
                        </li>
                        <li>
                            <FaArrowRight /> Do NOT apply security settings to
                            your PDF file.
                        </li>
                    </ul>
                    <p className={styles.special_note}>
                        <b>MANDATORY:</b> You must pay for conference
                        registration BEFORE you will be allowed to upload your
                        final paper. You will need your registration code in
                        order to proceed. Prospective authors are requested to
                        submit full length paper no longer than six (6) pages.
                        The paper must clearly state the objectives of the work,
                        its significance in the advancement of scientific and
                        technical knowledge.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}

export default CallForPapers;
