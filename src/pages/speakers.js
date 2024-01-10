import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/speakers.module.scss";
import { SPEAKERS } from "@/data/speakers";
import { getAssetName } from "@/util/githubPagesImagesUtil";

function Speakers() {
    return (
        <PageLayout title={"Speakers | Indiscon'24"}>
            <h1 className={styles.heading}>Speakers</h1>

            <div className={styles.heads}>
                <div className={styles.cards}>
                    {SPEAKERS.map((head, i) => {
                        return (
                            <div className={`${styles.card}`} key={i}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    height={200}
                                    width={200}
                                    src={getAssetName(head.image)}
                                    alt={head.name}
                                />
                                <p className={styles.name}>{head.name}</p>
                                <p className={styles.designation}>{head.designation}</p>
                                <a
                                    href={head.link}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                >
                                    More Info
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
}

export default Speakers;
