import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from '@/styles/pages/contact.module.scss'

function Contact() {
    return (
        <PageLayout title={"Contact Us | Indiscon 2024"}>
            <h1 className={styles.heading}>Contact Us</h1>
        </PageLayout>
    );
}

export default Contact;
