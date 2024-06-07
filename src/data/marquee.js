// export const ANNOUNCEMENTS = [
//     // '🚨 Attention: Deadline Extension! 🚨 The deadline for Regular "Full" Paper Submission, Special Session Proposals, and Tutorial/Workshop Proposals has been extended to April 15, 2024. [Extended Deadline]',
//     // 'Thanks for the overwhelming response for paper submissions in INDISCON 2024. The submission was closed on 15th April 2024. The decisions on submitted papers through given CMT portal will be given in the Month of June 2024.',
//     <a href="/List of Oral and Posters.pdf" target="_blank">Click here to see list of accepted papers</a>,
// ];

export const ANNOUNCEMENTS = [
    // '🚨 Attention: Deadline Extension! 🚨 The deadline for Regular "Full" Paper Submission, Special Session Proposals, and Tutorial/Workshop Proposals has been extended to April 15, 2024. [Extended Deadline]',
    // 'Thanks for the overwhelming response for paper submissions in INDISCON 2024. The submission was closed on 15th April 2024. The decisions on submitted papers through given CMT portal will be given in the Month of June 2024.',
    '<a href="/List of Oral and Posters.pdf" target="_blank">Click here to see list of accepted papers</a>',
];

// React component to render the announcements
const AnnouncementsComponent = () => {
    return (
        <div>
            {ANNOUNCEMENTS.map((announcement, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: announcement }} />
            ))}
        </div>
    );
};

export default AnnouncementsComponent;
