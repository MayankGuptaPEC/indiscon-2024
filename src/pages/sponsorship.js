import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/sponsorship.module.scss";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

function Sponsorship() {
    return (
        <PageLayout title={"Sponsorship | Indiscon'24"}>
            <h1 className={styles.heading}>Sponsorship</h1>

            <p className={styles.description}>
                INDISCON 2024 offers you a unique and focused way to showcase
                your service, technology and solutions, explore opportunities to
                outreach your potential customers and touch base with them. Our
                Sponsorship packages are provided with a set of special
                privileges and a clear focus on your promotion during the
                conference. We are excited to invite you to participate as an
                exhibitor or sponsor at our upcoming{" "}
                <span className={styles.emphasis}>
                    INDISCON 2024 at Punjab Engineering College, Chandigarh,
                    India.
                </span>{" "}
                We encourage you to take advantage of the enclosed exhibitor and
                sponsorship opportunities while they last as we have a limited
                number of exhibitor spaces and they will be filled on a
                first-come, first-served basis. Becoming a sponsor/exhibitors
                you will become a part of one of the largest technology
                conferences in asia pacific, world&apos;s largest organization
                for technology professionals, network with 700+ participants -
                top officials from India and global tech industry;
                representatives from Several countries; strong pre/post event
                media & online coverage; multiple industry/academia partnership
                opportunities; join our team of 20+ long term industry partners.
            </p>

            <h2>Sponsoring Packages</h2>
            <p>
                Five categories of sponsorship packages are available to suit
                your needs at INDISCON 2024. Sponsorship packages offer you a
                unique and focused way to showcase your service, technology and
                solutions, explore opportunities to outreach your potential
                customers and touch base with them.
            </p>

            <h2>Sponsorship Options</h2>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sponsorship grade</TableCell>
                            <TableCell>Amount of Contribution</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Title Sponsors</TableCell>
                            <TableCell>INR 5,00,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Platinum Sponsors</TableCell>
                            <TableCell>INR 3,00,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Gold Sponsors</TableCell>
                            <TableCell>INR 1,00,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Silver Sponsors</TableCell>
                            <TableCell>INR 50,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Academic Partners</TableCell>
                            <TableCell>INR 50,000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </PageLayout>
    );
}

export default Sponsorship;
