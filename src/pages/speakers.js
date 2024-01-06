import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/speakers.module.scss";
function Speakers() {
    return (
        <PageLayout title={"Speakers | Indiscon'24"}>
            <h1 className={styles.heading}>Speakers</h1>
        </PageLayout>
    );
}

export default Speakers;
