import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "@/styles/pages/about.module.scss";

function About() {
    return (
        <PageLayout title={"About Indiscon 2024 | Punjab Engineering College"}>
            <h1 className={styles.heading}>About us</h1>
            <div className={styles.description}>
                <p className={styles.about_text}>
                    <span className={styles.emphasize}>INDISCON</span> is a
                    flagship annual international conference of the IEEE India
                    Council organized by an IEEE Subsection in INDIA. INDISCON
                    2024 scheduled during{" "}
                    <span className={styles.emphasize}>August 22-24, 2024</span>
                    , is being organized by IEEE Chandigarh Subsection along
                    with IEEE India Council and IEEE Delhi Section. The
                    conference will be hosted by{" "}
                    <span className={styles.emphasize}>
                        {" "}
                        Punjab Engineeing College (Deemed to be University),
                        Chandigarh
                    </span>
                    . The conference aims to provide an interdisciplinary
                    platform for the academicians, researchers, industry
                    professionals and research scholars to exchange and share
                    their knowledge, experience & research.
                </p>
                <a href="https://ieeexplore.ieee.org/xpl/conhome/1839985/all-proceedings">
                    Previous versions of the conference <FaExternalLinkAlt />{" "}
                </a>
            </div>

            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>IEEE India Council</h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        IEEE is the world&apos;s largest professional
                        association dedicated to advancing technological
                        innovation and excellence for the benefit of humanity.
                        IEEE and its members inspire a global community through
                        IEEE&apos;s highly cited publications, conferences,
                        technology standards, and professional & educational
                        activities. IEEE India Council is the umbrella
                        organisation which coordinates IEEE activities in India.
                        Its primary aim is to assist and coordinate the
                        activities of local &ldquo;Sections&rdquo;, in order to
                        benefit mutually, and avoid duplication of effort and
                        resources. IEEE India Council was established on May 20,
                        1976 and is one of the five councils in the Asia Pacific
                        Region (Region #10 of IEEE).
                    </p>{" "}
                    <a
                        href="https://ieeeindiacouncil.org/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>

            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>IEEE Delhi Section</h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        IEEE Delhi Section is one of the 13 Sections in IEEE
                        India Council coming under Asia-Pacific Region, the
                        Region-10 of IEEE. At present it covers entire northern
                        part of the country consisting of the four states of
                        Rajasthan, Haryana, Punjab, Himachal Pradesh, and the
                        National Capital Territory of Delhi, Union Territories
                        of Chandigarh, Jammu & Kashmir, Ladakh.
                    </p>{" "}
                    <a
                        href="https://ieeedelhisac.in/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>

            <div className={styles.spacer} />

            <div className={styles.section}>
                <h1 className={styles.section_heading}>
                    IEEE Chandigarh Subsection
                </h1>
                <div className={styles.section_details}>
                    <p className={styles.text}>
                        IEEE Chandigarh Subsection is a technical society that
                        was established on June 18, 2005, under IEEE Delhi
                        Section of IEEE India Council. It provides a platform
                        for the students to enhance their technical skills and
                        professional growth. The subsection organizes various
                        events and technical extravaganzas, such as Techadroit,
                        which is an annual event organized by IEEE PEC Student
                        Branch in association with IEEE Chandigarh Subsection
                        for students. In 2020, the subsection organized the
                        first-ever Chandigarh Subsection Congress with the
                        participation of more than 1700 delegates.
                    </p>{" "}
                    <a
                        href="https://ieeedelhisac.in/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Details <FaExternalLinkAlt />{" "}
                    </a>
                </div>
            </div>

            <div className={styles.spacer} />

            <h1 className={styles.college_heading}>
                Punjab Engineering College
            </h1>
            <div className={styles.college_description}>
                Punjab Engineering College (Deemed to be University) (PEC)
                having its roots in Lahore as Mugalpura Engineering College
                since 1921, moved to its present campus in 1953 as PEC
                affiliated to Panjab University. The institute became Deemed
                University in 2003 through a MHRD notification and rechristened
                as PEC University of Technology in 2009. It is a Grant-in-Aid
                institution under administration of Union Territory of
                Chandigarh, Government of India. The institute has a 146 acres
                sprawling and pious campus and is house of Chandigarh College of
                Architecture also. The academic and administrative processes are
                similar to IITs in the country. The institute governance is
                through a vibrant Board of Governors, chaired by a renowned
                industrialist, Sh. Rajinder Gupta. The institute is headed by a
                Director on 5 years tenure; a position, which is equivalent to
                Vice Chancellor of Universities. The institute offers 8
                Undergraduate B. Tech. Programmes and 14 Post graduate M. Tech.
                Programmes in various disciplines of engineering and technology.
                After becoming University, the institute has also started PhD
                programme in various disciplines of engineering, science,
                management, humanities and social sciences. The admission to UG
                and PG programmes are made through national level examinations
                namely JEE (Mains) and GATE respectively. There are 9 academic
                departments and 2 centers of excellence. The faculty of academic
                departments and centers is involved in cutting edge research and
                development works. The institute collaborates very closely with
                research organisations, industries, alumni and other academic
                institutions both India and abroad, and has signed MoUs to
                pursue joint research in niche areas. The students graduating
                from this institute are placed in highly reputed companies with
                handsome salary packages. With a history of 100 Years now, the
                institute has produced a number of alumni who have earned name
                and fame both for themselves and the institute. For more
                details, visit{" "}
                <a
                    href="https://pec.ac.in/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    website <FaExternalLinkAlt />{" "}
                </a>{" "}
                of the institute.
            </div>
            <div className={styles.spacer} />
        </PageLayout>
    );
}

export default About;
