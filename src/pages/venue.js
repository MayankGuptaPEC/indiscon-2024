import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from '@/styles/pages/venue.module.scss'


function Venue() {
    return (
        <PageLayout title={"Venue | Indiscon 2024"}>
            <h1 className={styles.heading}>Venue</h1>
        </PageLayout>
    );
}

export default Venue;
