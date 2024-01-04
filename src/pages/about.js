import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/about.module.scss";

function About() {
    return (
        <PageLayout title={"About Indiscon 2024 | Punjab Engineering College"}>
            <h1>About us</h1>
            <div className={styles.description}>
                <p></p>
            </div>
        </PageLayout>
    );
}

export default About;
