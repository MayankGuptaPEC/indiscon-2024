import React from "react";
import styles from "@/styles/pages/sponsorship.module.scss";
import PageLayout from "@/components/layout/PageLayout";

function fellowship() {
    return (
        <PageLayout>
            <h2 className={styles.heading}>Travel Grants</h2>
            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                INDISCON 2024 is pleased to offer financial support to the
                selected IEEE student first author for presenting their research
                work during INDISCON 2024 Conference. The grant will be awarded
                to a limited number of applicants on a highly competitive basis.
                The grant will help to cover Conference registration fees or
                partial travel of the authors for attending the Conference. The
                decision regarding this grant will be taken by the Conference
                Fellowship Committee.
            </p>
        </PageLayout>
    );
}

export default fellowship;
