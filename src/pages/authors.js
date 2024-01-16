import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "@/styles/pages/call_for_papers.module.scss";

function authors() {
    return (
        <PageLayout title={"Authors | Indiscon 2024"}>
            <h1 className={styles.heading}>Authors</h1>
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
                    Use IEEE template to meet formatting requirements. Your
                    paper must comply with the following:
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
                    Use IEEE template to meet formatting requirements. Your
                    paper must comply with the following:
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
                            instructions on the PDF Express page. IEEE Xplore
                            link will be provided later.
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

            <div className={styles.submission}>
                <h2>Plagiarism Policy</h2>
                <div className={styles.submission_details}>
                    <a
                        href=" https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/"
                        target="_blank"
                    >
                        Click here
                    </a>{" "}
                    for IEEE policy on plagiarism, guidelines for AI generated
                    text etc. <br /> <br /> Similarity, plagiarism and
                    self-plagiarism Since INDISCON will be submitted to IEEE
                    Xplore which policy requires all IEEE content to be screened
                    for possible plagiarism, INDISCON may have access to the
                    CrossCheck database and has scanned all submitted papers.
                    Read more about the CrossCheck initiative to prevent
                    scholarly and professional plagiarism at{" "}
                    <a
                        href="http://www.ieee.org/publications_standards/publications/rights/crosscheckmain.html#sect5"
                        target="_blank"
                    >
                        http://www.ieee.org/publications_standards/publications/rights/crosscheckmain.html#sect5
                    </a>{" "}
                    and{" "}
                    <a
                        href="http://www.crossref.org/crosscheck.html"
                        target="_blank"
                    >
                        http://www.crossref.org/crosscheck.html
                    </a>{" "}
                    <br /> <br />
                    Similarity scores and scan reports are generated by an
                    external provider and not by the conference. Please check
                    the on-line report to understand how the similarity score
                    was determined and which sections of your paper may need
                    changes. Note that to be submitted to IEEE Xplore, the
                    overall similarity rate of a paper should not exceed 30
                    percent, and the similarity rate to a single source should
                    not exceed 10 percent. The score and report are provided to
                    assist you in revising your manuscript, if necessary. The
                    conference will not be able to provide you a score or a
                    report for the revised manuscript. <br />
                    <br /> You have to remove, replace, rewrite, redraw the
                    content (text, figures, tables) if any, from already
                    published sources. (See your similarity report sent with
                    reviews) <br />
                    <br /> Nothing is to be done on reference section. Anyhow,
                    full sentences or paragraphs highlighted in the plagiarism
                    report is to be removed or rewritten using new sentences.
                </div>
            </div>
        </PageLayout>
    );
}

export default authors;
