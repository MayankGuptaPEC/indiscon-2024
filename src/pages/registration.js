import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import styles from "@/styles/pages/registration.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ieeeColumns = [
    {
        align: "center",
        id: "name",
        label: "Category of Delegates/Authors (IEEE Member)",
        // minWidth: 170,
    },
    {
        id: "ieeeStudentEarly",
        align: "center",
        label: "IEEE Student Members",
        // minWidth: 100,
    },
    {
        id: "ieeeEarly",
        label: "IEEE Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeStudentLate",
        label: "IEEE Student Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeLate",
        label: "IEEE Members",
        // minWidth: 170,
        align: "center",
    },
];

const nonIeeeColumns = [
    {
        id: "name",
        label: "Category of Delegates/Authors (Non-IEEE Member)",
        align: "center",
        // minWidth: 170,
    },
    {
        id: "ieeeStudentEarly",
        label: "Non-IEEE Student Members",
        align: "center",
        // minWidth: 100,
    },
    {
        id: "ieeeEarly",
        label: "Non-IEEE Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeStudentLate",
        label: "Non-IEEE Student Members",
        // minWidth: 170,
        align: "center",
    },
    {
        id: "ieeeLate",
        label: "Non-IEEE Members",
        minWidth: 170,
        align: "center",
    },
];

function createData(
    name,
    ieeeStudentEarly,
    ieeeEarly,
    ieeeStudentLate,
    ieeeLate
) {
    return { name, ieeeStudentEarly, ieeeEarly, ieeeStudentLate, ieeeLate };
}

const ieeeRows = [
    createData("Indian Participant", "₹5,000", "₹6,500", "₹6,000", "₹8,000"),
    createData("Foriegn Participant", "$150", "$250", "$250", "$300"),
];

const nonIeeeRows = [
    createData("Indian Participant", "₹6,000", "₹8,500", "₹7,500", "₹10,000"),
    createData("Foriegn Participant", "$200", "$350", "$400", "$450"),
];

function Registration() {
    return (
        <PageLayout title={"Registration | Indiscon 2024"}>
            <h1 className={styles.heading}>Registration</h1>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}></TableCell>
                            <TableCell
                                align="center"
                                colSpan={2}
                                style={{ fontWeight: "800" }}
                            >
                                Early Bird Registration
                            </TableCell>
                            <TableCell
                                align="center"
                                colSpan={3}
                                style={{ fontWeight: "800" }}
                            >
                                Late Registration
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {ieeeColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                        fontWeight: "600",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ieeeRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                >
                                    {ieeeColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                        <TableRow>
                            {nonIeeeColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        top: 57,
                                        minWidth: column.minWidth,
                                        fontWeight: "600",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                        {nonIeeeRows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                >
                                    {nonIeeeColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <h3>* The registration fee is inclusive of all taxes.</h3>
            <p className={styles.note}>
                Note : Every accepted paper can have up to 6 pages in the final
                PDF. If needed, additional pages (maximum 2 more additional
                pages apart from basic 6 pages) can be added to make the final
                version of the paper. This has to be done by paying an extra
                charge of INR 2000 per additional page at the time of author
                registration payment.
            </p>

            <div className={styles.rules}>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>FOR AUTHORS</h2>
                    <ol className={styles.section_details}>
                        <li>
                            At least one of the authors of every accepted paper
                            must register for the conference as author and
                            present the paper in order for it to be included in
                            the conference proceedings of INDISCON 2024, and
                            subsequent submission to IEEE Xplore digital
                            library.
                        </li>
                        <li>
                            If more than one author of an accepted paper wishes
                            to attend the conference, all such authors need to
                            be registered separately by paying applicable
                            registration fee.
                        </li>
                        <li>
                            Additional authors (other than those who are
                            included in the manuscript submitted for review)
                            cannot be added to the camera-ready paper.
                        </li>
                        <li>
                            Non-refundable registration fee must be paid prior
                            to uploading the final IEEE formatted, Camera-ready
                            version of the paper and e-copyright form.
                        </li>
                    </ol>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>FOR ATTENDEES</h2>
                    <ol className={styles.section_details}>
                        <li>
                            All participants need to be registered to attend the
                            INDISCON 2024 by paying the requisite registration
                            fees.
                        </li>
                        <li>
                            The registration fees include the conference kit,
                            access/admission to tutorials &amp; technical
                            sessions, lunch on all conference days, morning and
                            evening refreshments, banquet dinner,
                            access/admission to cultural events as part of the
                            conference.
                        </li>
                        <li>
                            Please note that the fees shown above are inclusive
                            of all taxes and levies. Any gateway charges along
                            with applicable taxes or levies, if any, will have
                            to be borne by the registrant.
                        </li>
                        <li>
                            IEEE members are requested to upload IEEE membership
                            details during the online registration process, if
                            registering under IEEE category.
                        </li>
                        <li>
                            Students are requested to upload valid student ID
                            card (front and back side) during the online
                            registration process, if registering under that
                            student category.
                        </li>
                        <li>
                            Please keep a copy of the transaction ID, generated
                            by the payment gateway as well as by your bank. You
                            may need these later if you need to track your
                            payment/registration.
                        </li>
                        <li>
                            All correspondence regarding registration for
                            INDISCON 2024 should contain Paper ID as well as
                            registration confirmation number.
                        </li>
                        <li>
                            Please note that INDISCON 2024, or the organizing
                            institute, represented by the Organizing Committee
                            as well as the IEEE India Council or IEEE Delhi
                            Section, will not be responsible for any loss,
                            financial or otherwise, caused by improper
                            transactions conducted online. While organizers have
                            taken all reasonable precautions to ensure a safe
                            online transaction, it is the registrant&apos;s
                            responsibility, while paying the registration fee,
                            to secure their user IDs, passwords, Paper ID, etc.{" "}
                        </li>
                    </ol>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.section_heading}>No Show Policy</h2>
                    <p className={styles.section_details}>
                        Any accepted paper included in the final program is
                        expected to have at least one author attend and present
                        the paper at the conference. Non-presented paper will
                        not be submitted to IEEE Xplore digital library as per
                        IEEE no-show policy.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>Transfer Policy</h2>
                    <p className={styles.section_details}>
                        All requests for registration transfers must be provided
                        in writing and email latest by June 30, 2024.
                        Registration rate difference will apply depending on the
                        membership status of the new registration.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.section_heading}>
                        Substitution Policy
                    </h2>
                    <p className={styles.section_details}>
                        If an author or co-author is NOT available to present
                        the paper at the conference, the TPC Chair can grant
                        permission in some extreme cases to have the paper
                        presented by a qualified substitute presenter. The
                        deadline to submit a substitute presenter is June 30,
                        2024.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}

export default Registration;
