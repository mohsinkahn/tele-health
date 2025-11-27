"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import ClientViewComponent from "../components/ClientView";
import { ChevronRight,Plus,Download,Pencil,Trash,ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DocViewPicker from "../components/doc_view_picker";
import DocTimeSlots from "../components/doc_timeslots";
import BookAppointModal from "../components/BookAppointModal";
import AddAvailModal from "../components/AddAvailModal";
import AddRecommendationModal from "@/components/AddRecommendatioModal";
import AddDocumentModal from "@/components/AddDocumentModal";
import AddPrescriptionModal from "@/components/AddPrescriptionModal";
import AddAllergiesModal   from "@/components/AddAllergiesModal";
import AddVitalsModal from "@/components/AddVitalsModal"

import PatientPsychiatricPlanTable from "@/components/patient_psychiatric_plan_table";
import PatientRecommendationTable from "@/components/patient_recommendation_table";
import Document from "../components/Document";
import PatientPrescriptionTable from "@/components/patient_prescription_table";
import PatientAiNotesTable from "@/components/patient_ai_notes_table";  
import PatientAppointmentTable from "@/components/patient_appointment_table";
import PatientInsuranceClaimTable from "@/components/patient_insurance_claim_table";

export default function PatientViewPage() {

const [showModal, setShowModal] = useState(false);

const [showModal6, setShowModal6] = useState(false);

const [showModal5, setShowModal5] = useState(false);

const [showModal4, setShowModal4] = useState(false);

const [showModal3, setShowModal3] = useState(false);

const [showModal2, setShowModal2] = useState(false);

const router = useRouter();
const { id } = router.query;
const [ClientId, setClientId] = useState(null);
const [loading, setLoading] = useState(true);

const tabTitles = {
tab1: "Profile",
tab2: "Psychiatric Treatment Plan",
tab3: "Recommendation",
tab4: "Documents",
tab5: "Prescriptions",
tab6: "Ai Notes",
tab7: "Appointments",
tab8: "Preparing for the holiday",
tab9: "Insurance Claims",

};

const tabIcons = {
tab1: (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.0003 12.0827C12.8768 12.0827 15.2087 9.75083 15.2087 6.87435C15.2087 3.99787 12.8768 1.66602 10.0003 1.66602C7.12384 1.66602 4.79199 3.99787 4.79199 6.87435C4.79199 9.75083 7.12384 12.0827 10.0003 12.0827ZM10.0003 12.0827C5.39795 12.0827 1.66699 14.8809 1.66699 18.3327M10.0003 12.0827C14.6027 12.0827 18.3337 14.8809 18.3337 18.3327"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab2: (
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8.02499 2.07634C8.02499 1.2358 8.65834 0.50926 9.49283 0.609944C10.5683 0.739702 11.7529 1.17486 12.1917 2.2717M8.02499 2.07634C8.02499 1.2358 7.39163 0.50926 6.55715 0.609944C5.48169 0.739702 4.29706 1.17486 3.85832 2.2717M8.02499 2.07634V14.2161M12.1917 2.2717C13.025 4.35503 13.8583 3.52168 14.6917 4.77168C15.525 6.02168 14.6917 6.85501 14.6917 8.10501M12.1917 2.2717C12.4694 3.10503 12.6917 5.10501 11.3583 6.43834M14.6917 8.10501C14.6917 9.35501 16.0727 9.99185 15.1083 11.4383C14.275 12.6883 13.2671 12.0295 12.6083 12.6883C11.775 13.5217 12.1917 13.9383 10.9417 14.7717C9.9916 15.4051 9.04154 15.3966 8.45736 15.1121C8.13314 14.9542 8.02499 14.5767 8.02499 14.2161M14.6917 8.10501C14.5528 8.66057 13.8583 9.77168 12.1917 9.77168M8.02499 14.2161C8.02499 14.5767 7.91684 14.9542 7.59262 15.1121C7.00844 15.3966 6.05838 15.4051 5.10832 14.7717C3.85832 13.9383 4.27499 13.5217 3.44165 12.6883C2.78285 12.0295 1.77499 12.6883 0.941655 11.4383C-0.022676 9.99185 1.35832 9.35501 1.35832 8.10501M3.85832 2.2717C3.02499 4.35503 2.19165 3.52168 1.35832 4.77168C0.524988 6.02168 1.35832 6.85501 1.35832 8.10501M3.85832 2.2717C3.58054 3.10503 3.35832 5.10501 4.69165 6.43834M1.35832 8.10501C1.49721 8.66057 2.19165 9.77168 3.85832 9.77168"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab3: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.18294 6.01676H9.34961M7.26628 3.93343V8.1001M3.93294 11.4334H10.5996M3.93294 13.9334H10.5996M3.26628 17.2668H11.2663C12.1997 17.2668 12.6664 17.2668 13.0229 17.0851C13.3365 16.9253 13.5915 16.6704 13.7513 16.3567C13.9329 16.0002 13.9329 15.5335 13.9329 14.6001V3.26676C13.9329 2.33334 13.9329 1.86663 13.7513 1.51011C13.5915 1.19651 13.3365 0.941542 13.0229 0.781753C12.6664 0.600098 12.1997 0.600098 11.2663 0.600098H3.26628C2.33286 0.600098 1.86614 0.600098 1.50963 0.781753C1.19602 0.941542 0.941054 1.19651 0.781265 1.51011C0.599609 1.86663 0.599609 2.33334 0.599609 3.26676V14.6001C0.599609 15.5335 0.599609 16.0002 0.781265 16.3567C0.941054 16.6704 1.19602 16.9253 1.50963 17.0851C1.86614 17.2668 2.33286 17.2668 3.26628 17.2668Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab4: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3.26628 0.600098V1.2001V0.600098ZM13.9329 3.26677H13.3329H13.9329ZM13.9329 14.6001H14.5329H13.9329ZM13.7513 16.3568L14.2859 16.6291L13.7513 16.3568ZM11.2663 17.2668V16.6668V17.2668ZM13.0229 17.0851L13.2953 17.6197H13.2953L13.0229 17.0851ZM13.0229 0.781754L13.2953 0.247151L13.0229 0.781754ZM13.7513 1.51011L13.2167 1.78251V1.78251L13.7513 1.51011ZM1.50963 0.781753L1.78202 1.31636L1.50963 0.781753ZM0.59961 3.26676H-0.000389874H0.59961ZM0.781266 1.51011L1.31587 1.78251L1.31587 1.78251L0.781266 1.51011ZM-0.000390649 12.2668C-0.000390649 12.5981 0.268238 12.8668 0.599609 12.8668C0.93098 12.8668 1.19961 12.5981 1.19961 12.2668H0.599609H-0.000390649ZM5.59961 16.6668C5.26824 16.6668 4.99961 16.9354 4.99961 17.2668C4.99961 17.5981 5.26824 17.8668 5.59961 17.8668V17.2668V16.6668ZM0.741869 12.409L1.16613 11.9848H1.16613L0.741869 12.409ZM5.45735 17.1245L5.03309 17.5488V17.5488L5.45735 17.1245ZM0.800795 12.2668L0.800795 12.8668H0.800795V12.2668ZM4.76628 12.2668V11.6668V12.2668ZM5.59961 13.1001H4.99961H5.59961ZM5.59961 17.0656H6.19961H5.59961ZM10.5996 9.53343C10.931 9.53343 11.1996 9.2648 11.1996 8.93343C11.1996 8.60206 10.931 8.33343 10.5996 8.33343V8.93343V9.53343ZM3.93294 8.33343C3.60157 8.33343 3.33294 8.60206 3.33294 8.93343C3.33294 9.2648 3.60157 9.53343 3.93294 9.53343V8.93343V8.33343ZM10.5996 12.8668C10.931 12.8668 11.1996 12.5981 11.1996 12.2668C11.1996 11.9354 10.931 11.6668 10.5996 11.6668V12.2668V12.8668ZM8.93294 11.6668C8.60157 11.6668 8.33294 11.9354 8.33294 12.2668C8.33294 12.5981 8.60157 12.8668 8.93294 12.8668V12.2668V11.6668ZM10.5996 6.2001C10.931 6.2001 11.1996 5.93147 11.1996 5.6001C11.1996 5.26873 10.931 5.0001 10.5996 5.0001V5.6001V6.2001ZM3.93294 5.0001C3.60157 5.0001 3.33294 5.26873 3.33294 5.6001C3.33294 5.93147 3.60157 6.2001 3.93294 6.2001V5.6001V5.0001ZM3.26628 0.600098V1.2001L11.2663 1.2001V0.600098V9.83477e-05L3.26628 9.76324e-05V0.600098ZM13.9329 3.26677H13.3329V14.6001H13.9329H14.5329V3.26677H13.9329ZM13.9329 14.6001H13.3329C13.3329 15.0767 13.3325 15.3981 13.3122 15.6459C13.2926 15.8867 13.2572 16.0048 13.2167 16.0844L13.7513 16.3568L14.2859 16.6291C14.427 16.3522 14.4825 16.0586 14.5082 15.7436C14.5334 15.4356 14.5329 15.0569 14.5329 14.6001H13.9329ZM11.2663 17.2668V17.8668C11.7231 17.8668 12.1018 17.8672 12.4098 17.8421C12.7248 17.8163 13.0184 17.7608 13.2953 17.6197L13.0229 17.0851L12.7505 16.5505C12.671 16.5911 12.5529 16.6264 12.3121 16.646C12.0643 16.6663 11.7429 16.6668 11.2663 16.6668V17.2668ZM13.7513 16.3568L13.2167 16.0844C13.1144 16.2851 12.9512 16.4482 12.7505 16.5505L13.0229 17.0851L13.2953 17.6197C13.7218 17.4024 14.0686 17.0556 14.2859 16.6291L13.7513 16.3568ZM11.2663 0.600098V1.2001C11.7429 1.2001 12.0643 1.20057 12.3121 1.22081C12.5529 1.24049 12.671 1.27581 12.7505 1.31636L13.0229 0.781754L13.2953 0.247151C13.0184 0.106042 12.7248 0.0505366 12.4098 0.024798C12.1018 -0.000368237 11.7231 9.83477e-05 11.2663 9.83477e-05V0.600098ZM13.9329 3.26677H14.5329C14.5329 2.80996 14.5334 2.43126 14.5082 2.12324C14.4825 1.80822 14.427 1.51466 14.2859 1.23772L13.7513 1.51011L13.2167 1.78251C13.2572 1.86209 13.2926 1.98014 13.3122 2.22096C13.3325 2.46878 13.3329 2.79015 13.3329 3.26677H13.9329ZM13.0229 0.781754L12.7505 1.31636C12.9512 1.41862 13.1144 1.5818 13.2167 1.78251L13.7513 1.51011L14.2859 1.23772C14.0686 0.811219 13.7218 0.464463 13.2953 0.247151L13.0229 0.781754ZM3.26628 0.600098V9.76324e-05C2.80947 9.75728e-05 2.43077 -0.000369072 2.12275 0.0247971C1.80773 0.0505357 1.51417 0.106041 1.23723 0.247149L1.50963 0.781753L1.78202 1.31636C1.8616 1.27581 1.97966 1.24049 2.22047 1.22081C2.46829 1.20056 2.78967 1.2001 3.26628 1.2001V0.600098ZM0.59961 3.26676L1.19961 3.26676C1.19961 2.79015 1.20008 2.46878 1.22032 2.22096C1.24 1.98014 1.27532 1.86209 1.31587 1.78251L0.781266 1.51011L0.246662 1.23772C0.105554 1.51466 0.0500484 1.80822 0.0243099 2.12324C-0.0008564 2.43126 -0.000389814 2.80995 -0.000389874 3.26676H0.59961ZM1.50963 0.781753L1.23723 0.247149C0.810731 0.464462 0.463975 0.811218 0.246662 1.23772L0.781266 1.51011L1.31587 1.78251C1.41813 1.5818 1.58131 1.41862 1.78202 1.31636L1.50963 0.781753ZM0.599609 12.2668H1.19961L1.19961 3.26676L0.59961 3.26676H-0.000389874L-0.000390649 12.2668H0.599609ZM11.2663 17.2668V16.6668H5.59961V17.2668V17.8668H11.2663V17.2668ZM0.741869 12.409L0.317605 12.8333L5.03309 17.5488L5.45735 17.1245L5.88162 16.7002L1.16613 11.9848L0.741869 12.409ZM0.800795 12.2668V12.8668H4.76628V12.2668V11.6668H0.800795V12.2668ZM5.59961 13.1001H4.99961V17.0656H5.59961H6.19961V13.1001H5.59961ZM4.76628 12.2668V12.8668C4.89514 12.8668 4.99961 12.9712 4.99961 13.1001H5.59961H6.19961C6.19961 12.3085 5.55789 11.6668 4.76628 11.6668V12.2668ZM5.45735 17.1245L5.03309 17.5488C5.46357 17.9792 6.19961 17.6744 6.19961 17.0656H5.59961H4.99961C4.99961 16.6053 5.55613 16.3748 5.88162 16.7002L5.45735 17.1245ZM0.741869 12.409L1.16613 11.9848C1.49162 12.3102 1.2611 12.8668 0.800795 12.8668L0.800795 12.2668L0.800795 11.6668C0.19201 11.6668 -0.112871 12.4028 0.317605 12.8333L0.741869 12.409ZM10.5996 8.93343V8.33343H3.93294V8.93343V9.53343H10.5996V8.93343ZM10.5996 12.2668V11.6668H8.93294V12.2668V12.8668H10.5996V12.2668ZM10.5996 5.6001V5.0001H3.93294V5.6001V6.2001H10.5996V5.6001Z"
        fill="#6B7280" />
</svg>
),
tab5: (
<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.90845 19.2913C2.71712 20.0999 3.83429 20.6001 5.06828 20.6001C7.53626 20.6001 9.53695 18.5994 9.53695 16.1314C9.53695 14.8974 9.03677 13.7803 8.2281 12.9716M1.90845 19.2913C1.09978 18.4826 0.599609 17.3654 0.599609 16.1314C0.599609 13.6635 2.6003 11.6628 5.06828 11.6628C6.30227 11.6628 7.41943 12.1629 8.2281 12.9716M1.90845 19.2913L8.2281 12.9716M17.0177 6.14639L14.7833 2.27641C13.8578 0.67341 11.8081 0.124182 10.2051 1.04967C8.6021 1.97516 8.05287 4.02491 8.97836 5.62791L11.2127 9.49789M17.0177 6.14639L19.252 10.0164C20.1775 11.6194 19.6283 13.6691 18.0253 14.5946C16.4223 15.5201 14.3725 14.9709 13.447 13.3679L11.2127 9.49789M17.0177 6.14639L11.2127 9.49789"
        stroke="#6B7280" stroke-width="1.2" />
</svg>
),
tab6: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0.599609 2.6001V16.4577C0.599609 16.8294 0.990766 17.0712 1.32322 16.905L6.37185 14.3806C6.9349 14.0991 7.59765 14.0991 8.1607 14.3806L13.2093 16.905C13.5418 17.0712 13.9329 16.8294 13.9329 16.4577V2.6001C13.9329 1.49553 13.0375 0.600098 11.9329 0.600098H2.59961C1.49504 0.600098 0.599609 1.49553 0.599609 2.6001Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab7: (
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M12.2663 0.63208V6.60528C12.2663 7.09087 12.2663 7.33366 12.165 7.46749C12.0768 7.58409 11.942 7.65624 11.7961 7.66495C11.6286 7.67495 11.4265 7.54028 11.0225 7.27092L10.21 6.72927C10.0497 6.62235 9.96947 6.56889 9.8828 6.54812C9.8062 6.52977 9.72635 6.52977 9.64976 6.54812C9.56308 6.56889 9.48289 6.62235 9.32252 6.72927L8.51004 7.27092C8.10601 7.54028 7.90399 7.67495 7.73648 7.66495C7.59054 7.65624 7.45572 7.58409 7.36752 7.46749C7.26628 7.33366 7.26628 7.09087 7.26628 6.60528V0.600098M7.26628 0.600098H5.93294C4.0661 0.600098 3.13268 0.600098 2.41964 0.963409C1.79243 1.28299 1.2825 1.79292 0.962921 2.42013C0.599609 3.13317 0.599609 4.06659 0.599609 5.93343V10.2668C0.599609 12.1336 0.599609 13.067 0.962921 13.7801C1.2825 14.4073 1.79243 14.9172 2.41964 15.2368C3.13268 15.6001 4.0661 15.6001 5.93294 15.6001H10.2663C12.1331 15.6001 13.0665 15.6001 13.7796 15.2368C14.4068 14.9172 14.9167 14.4073 15.2363 13.7801C15.5996 13.067 15.5996 12.1336 15.5996 10.2668V5.93343C15.5996 4.06659 15.5996 3.13317 15.2363 2.42013C14.9167 1.79292 14.4068 1.28299 13.7796 0.963409C13.2334 0.68514 12.558 0.620004 11.4329 0.604757C11.0891 0.600098 10.7033 0.600098 10.2663 0.600098H8.09961H7.26628Z"
        stroke="#6B7280" stroke-width="1.2" />
</svg>
),
tab8: (
<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0.599609 3.93343H17.2663M3.93294 10.6001H7.26628M10.5996 10.6001H13.9329M3.26628 13.9334H14.5996C15.533 13.9334 15.9997 13.9334 16.3563 13.7518C16.6699 13.592 16.9248 13.337 17.0846 13.0234C17.2663 12.6669 17.2663 12.2002 17.2663 11.2668V3.26676C17.2663 2.33334 17.2663 1.86663 17.0846 1.51011C16.9248 1.19651 16.6699 0.941542 16.3563 0.781753C15.9997 0.600098 15.533 0.600098 14.5996 0.600098H3.26628C2.33285 0.600098 1.86614 0.600098 1.50963 0.781753C1.19602 0.941542 0.941054 1.19651 0.781265 1.51011C0.599609 1.86663 0.599609 2.33334 0.599609 3.26676V11.2668C0.599609 12.2002 0.599609 12.6669 0.781265 13.0234C0.941054 13.337 1.19602 13.592 1.50963 13.7518C1.86614 13.9334 2.33286 13.9334 3.26628 13.9334Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab9: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.50963 17.0851L1.78202 16.5505L1.50963 17.0851ZM0.781265 16.3567L1.31587 16.0844L0.781265 16.3567ZM13.7513 16.3567L13.2167 16.0844L13.7513 16.3567ZM13.0229 17.0851L12.7505 16.5505L13.0229 17.0851ZM13.0229 0.781753L12.7505 1.31636L13.0229 0.781753ZM13.7513 1.51011L13.2167 1.78251L13.7513 1.51011ZM1.50963 0.781753L1.78202 1.31636L1.50963 0.781753ZM0.781265 1.51011L1.31587 1.78251L0.781265 1.51011ZM3.93294 3.33343C3.60157 3.33343 3.33294 3.60206 3.33294 3.93343C3.33294 4.2648 3.60157 4.53343 3.93294 4.53343V3.93343V3.33343ZM10.5996 4.53343C10.931 4.53343 11.1996 4.2648 11.1996 3.93343C11.1996 3.60206 10.931 3.33343 10.5996 3.33343V3.93343V4.53343ZM3.93294 6.66676C3.60157 6.66676 3.33294 6.93539 3.33294 7.26676C3.33294 7.59813 3.60157 7.86676 3.93294 7.86676V7.26676V6.66676ZM10.5996 7.86676C10.931 7.86676 11.1996 7.59813 11.1996 7.26676C11.1996 6.93539 10.931 6.66676 10.5996 6.66676V7.26676V7.86676ZM10.5739 11.0159L11.1693 11.09L11.1693 11.09L10.5739 11.0159ZM3.95863 11.0159L4.55404 10.9418L4.55404 10.9418L3.95863 11.0159ZM3.26628 0.600098V1.2001H11.2663V0.600098V9.76324e-05H3.26628V0.600098ZM13.9329 3.26676H13.3329V14.6001H13.9329H14.5329V3.26676H13.9329ZM11.2663 17.2668V16.6668H3.26628V17.2668V17.8668H11.2663V17.2668ZM0.599609 14.6001H1.19961V3.26676H0.599609H-0.000390649V14.6001H0.599609ZM3.26628 17.2668V16.6668C2.78966 16.6668 2.46829 16.6663 2.22047 16.646C1.97966 16.6264 1.8616 16.5911 1.78202 16.5505L1.50963 17.0851L1.23723 17.6197C1.51417 17.7608 1.80773 17.8163 2.12275 17.8421C2.43077 17.8672 2.80947 17.8668 3.26628 17.8668V17.2668ZM0.599609 14.6001H-0.000390649C-0.000390649 15.0569 -0.000857294 15.4356 0.024309 15.7436C0.0500475 16.0586 0.105553 16.3522 0.246661 16.6291L0.781265 16.3567L1.31587 16.0844C1.27532 16.0048 1.24 15.8867 1.22032 15.6459C1.20008 15.3981 1.19961 15.0767 1.19961 14.6001H0.599609ZM1.50963 17.0851L1.78202 16.5505C1.58131 16.4482 1.41813 16.2851 1.31587 16.0844L0.781265 16.3567L0.246661 16.6291C0.463975 17.0556 0.810731 17.4024 1.23723 17.6197L1.50963 17.0851ZM13.9329 14.6001H13.3329C13.3329 15.0767 13.3325 15.3981 13.3122 15.6459C13.2926 15.8867 13.2572 16.0048 13.2167 16.0844L13.7513 16.3567L14.2859 16.6291C14.427 16.3522 14.4825 16.0586 14.5082 15.7436C14.5334 15.4356 14.5329 15.0569 14.5329 14.6001H13.9329ZM11.2663 17.2668V17.8668C11.7231 17.8668 12.1018 17.8672 12.4098 17.8421C12.7248 17.8163 13.0184 17.7608 13.2953 17.6197L13.0229 17.0851L12.7505 16.5505C12.671 16.5911 12.5529 16.6264 12.3121 16.646C12.0643 16.6663 11.7429 16.6668 11.2663 16.6668V17.2668ZM13.7513 16.3567L13.2167 16.0844C13.1144 16.2851 12.9512 16.4482 12.7505 16.5505L13.0229 17.0851L13.2953 17.6197C13.7218 17.4024 14.0686 17.0556 14.2859 16.6291L13.7513 16.3567ZM11.2663 0.600098V1.2001C11.7429 1.2001 12.0643 1.20056 12.3121 1.22081C12.5529 1.24049 12.671 1.27581 12.7505 1.31636L13.0229 0.781753L13.2953 0.24715C13.0184 0.106041 12.7248 0.0505358 12.4098 0.0247973C12.1018 -0.000369012 11.7231 9.76324e-05 11.2663 9.76324e-05V0.600098ZM13.9329 3.26676H14.5329C14.5329 2.80995 14.5334 2.43126 14.5082 2.12324C14.4825 1.80822 14.427 1.51466 14.2859 1.23772L13.7513 1.51011L13.2167 1.78251C13.2572 1.86209 13.2926 1.98014 13.3122 2.22096C13.3325 2.46878 13.3329 2.79015 13.3329 3.26676H13.9329ZM13.0229 0.781753L12.7505 1.31636C12.9512 1.41862 13.1144 1.5818 13.2167 1.78251L13.7513 1.51011L14.2859 1.23772C14.0686 0.811218 13.7218 0.464462 13.2953 0.24715L13.0229 0.781753ZM3.26628 0.600098V9.76324e-05C2.80947 9.76324e-05 2.43077 -0.000369012 2.12275 0.0247973C1.80773 0.0505358 1.51417 0.106041 1.23723 0.24715L1.50963 0.781753L1.78202 1.31636C1.8616 1.27581 1.97966 1.24049 2.22047 1.22081C2.46829 1.20056 2.78966 1.2001 3.26628 1.2001V0.600098ZM0.599609 3.26676H1.19961C1.19961 2.79015 1.20008 2.46878 1.22032 2.22096C1.24 1.98014 1.27532 1.86209 1.31587 1.78251L0.781265 1.51011L0.246661 1.23772C0.105553 1.51466 0.0500475 1.80822 0.024309 2.12324C-0.000857294 2.43126 -0.000390649 2.80995 -0.000390649 3.26676H0.599609ZM1.50963 0.781753L1.23723 0.24715C0.81073 0.464463 0.463974 0.811218 0.246661 1.23772L0.781265 1.51011L1.31587 1.78251C1.41813 1.5818 1.58131 1.41862 1.78202 1.31636L1.50963 0.781753ZM3.93294 3.93343V4.53343H10.5996V3.93343V3.33343H3.93294V3.93343ZM3.93294 7.26676V7.86676H10.5996V7.26676V6.66676H3.93294V7.26676ZM10.5739 11.0159L9.97852 10.9418C9.81076 12.2899 8.65993 13.3334 7.26628 13.3334V13.9334V14.5334C9.27288 14.5334 10.9277 13.0314 11.1693 11.09L10.5739 11.0159ZM7.26628 13.9334V13.3334C5.87262 13.3334 4.72179 12.2899 4.55404 10.9418L3.95863 11.0159L3.36322 11.09C3.60481 13.0314 5.25968 14.5334 7.26628 14.5334V13.9334ZM11.0163 10.6001V11.2001H13.9329V10.6001V10.0001H11.0163V10.6001ZM3.51628 10.6001V10.0001H0.599609V10.6001V11.2001H3.51628V10.6001ZM3.95863 11.0159L4.55404 10.9418C4.49408 10.4601 4.09421 10.0001 3.51628 10.0001V10.6001V11.2001C3.4622 11.2001 3.41993 11.1768 3.39678 11.1545C3.37579 11.1342 3.36592 11.1117 3.36322 11.09L3.95863 11.0159ZM10.5739 11.0159L11.1693 11.09C11.1666 11.1117 11.1568 11.1342 11.1358 11.1545C11.1126 11.1768 11.0704 11.2001 11.0163 11.2001V10.6001V10.0001C10.4383 10.0001 10.0385 10.4601 9.97852 10.9418L10.5739 11.0159Z"
        fill="#6B7280" />
</svg>
),
};

useEffect(() => {
if (id) {
setClientId(id);
setTimeout(() => setLoading(false), 1500); // simulate delay
}
}, [id]);

const [activeTab, setActiveTab] = useState("tab1");

const [suppliers] = useState(
Array(40).fill({
id: "#547388",
appointment_date: "25 - July - 2024",
patients: "Darrell Steward",
complaint: "Fainting",

})
);
const [selectedRows, setSelectedRows] = useState([]);

return (
<>
    {loading ? (
    <div className="flex flex-col items-center justify-center h-[400px] gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="text-[#4e758d] text-lg font-medium">
            Loading Patient View Page Details...
        </p>

        {/* Skeleton preview */}
        <div className="w-full max-w-3xl space-y-3 mt-6 h-100">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
        </div>
    </div>
    ) : (
    <>

        <div
            className="lg:flex lg:justify-between  lg:items-center grid grid-cols-1  lg:pl-35 lg:pr-22 lg:pt-6 lg:absolute w-full">
            <div className="flex gap-3 items-center">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[#6B7280]">Patient list</h1>
                    </div>
                    <div>
                        <ChevronRight className="text-[#6B7280] w-5" />
                    </div>

                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[#6B7280]">Jane Dominique</h1>
                    </div>
                    <div>
                        <ChevronRight className="text-[#6B7280] w-5" />
                    </div>

                </div>
                <div>
                    <h1 className="text-2xl font-[500] text-[#7026A1]">{tabTitles[activeTab]}</h1>
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                {tabTitles[activeTab] === "Profile" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="/psy_plan/new" className="btn btn-primary" // onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Psychiatric Plan</span>

                    </Link>

                </>
                )}

                {/* ====== TAB 2: c ====== */}
                {tabTitles[activeTab] === "Psychiatric Treatment Plan" && (
             <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="/psy_plan/new" className="btn btn-primary" // onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Psychiatric Plan</span>

                    </Link>

                </>

                )}

                {/* ====== TAB 3:  ====== */}
                {tabTitles[activeTab] === "Recommendation" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="#" className="btn btn-primary" 
                       onClick={()=> setShowModal3(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Recommendation</span>

                    </Link>
                   
                <AddRecommendationModal
                        isOpen={showModal3}
                        onClose={() => setShowModal3(false)}
                    />

                </>
                )}

                {/* ====== TAB 4:  ====== */}
                {tabTitles[activeTab] === "Documents" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="#" className="btn btn-primary" 
                       onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Documents</span>

                    </Link>
                 <AddDocumentModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />
                </>
                )}

                {/* ====== TAB 5:  ====== */}
                {tabTitles[activeTab] === "Prescriptions" && (
               <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="#" className="btn btn-primary" 
                       onClick={()=> setShowModal4(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Prescription</span>

                    </Link>
                  <AddPrescriptionModal
                        isOpen={showModal4}
                        onClose={() => setShowModal4(false)}
                    />
                </>
                )}

                {/* ====== TAB 6: ====== */}
                {tabTitles[activeTab] === "Ai Notes" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       

                </>
                )}
                {tabTitles[activeTab] === "Appointments" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="#" className="btn btn-primary" // onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Appointment</span>

                    </Link>

                </>
                )}
                {tabTitles[activeTab] === "Preparing for the holiday" && (
                <>
                    {/* <div className="relative">
                        <input type="search"
                            className="block min-w-0 grow bg-white py-[7px] pr-3 pl-8  text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-[#E6E4F0] border-1 rounded-lg" />
                        <div className="absolute top-[20px] left-2 -translate-y-1/2  pointer-events-none">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.2663 17.2663L13.5163 13.5163M15.5996 8.09961C15.5996 12.2417 12.2417 15.5996 8.09961 15.5996C3.95747 15.5996 0.599609 12.2417 0.599609 8.09961C0.599609 3.95747 3.95747 0.599609 8.09961 0.599609C12.2417 0.599609 15.5996 3.95747 15.5996 8.09961Z"
                                    stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <Link href="#" className="btn btn-primary">
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Add Form</span>
                    </Link> */}
                </>
                )}
                 {tabTitles[activeTab] === "Insurance Claims" && (
                <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      <Link href="#"
                        className="btn btn-light border-[#EEEEEE] border bg-white rounded-md pt-[9px] pb-[9px] px-4" //
                        // onClick={()=> setShowModal(true)}
                    >

                    <svg width="15" height="15" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="inline-block">
                        <path
                            d="M0.893172 6.61363C0.730425 6.47413 0.649051 6.40438 0.619236 6.32138C0.593067 6.24853 0.593067 6.16885 0.619236 6.096C0.649051 6.013 0.730425 5.94325 0.893172 5.80375L6.54032 0.963338C6.82048 0.723208 6.96055 0.603142 7.07915 0.6002C7.18221 0.597644 7.28066 0.642925 7.3458 0.722843C7.42075 0.814801 7.42075 0.999292 7.42075 1.36827V4.23178C8.84386 4.48075 10.1463 5.20186 11.1143 6.2846C12.1695 7.46503 12.7533 8.99265 12.7541 10.576V10.984C12.0545 10.1413 11.1811 9.4597 10.1936 8.98597C9.32295 8.56831 8.3818 8.3209 7.42075 8.25571V11.0491C7.42075 11.4181 7.42075 11.6026 7.3458 11.6945C7.28066 11.7745 7.18221 11.8197 7.07915 11.8172C6.96055 11.8142 6.82048 11.6942 6.54032 11.454L0.893172 6.61363Z"
                            stroke="#7026A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span className="pl-2 text-[#7026A1]">Send Records</span>

                    </Link>
                       <Link href="#" className="btn btn-primary" // onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Insurance Claim</span>

                    </Link>

                </>
                )}

            </div>

        </div>

        {/*
        <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" /> */}

        <div className="flex w-full lg:pl-8 lg:pr-6 lg:pt-6 h-full">
            {/* LEFT SIDE TABS */}
            <div className="w-20   bg-white flex flex-col rounded-2xl justify-start items-center h-[100%] z-2">
                <Link href="" className="px-4 py-7 border-b border-[#E5E7EB]">

                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.0715 5.75H1.23816M5.40482 0.75L0.994077 5.16074C0.668641 5.48618 0.668641 6.01382 0.994077 6.33926L5.40482 10.75"
                        stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                </Link>

                {["tab1", "tab2", "tab3", "tab4", "tab5", "tab6", "tab7", "tab8", "tab9"].map((tab) => (
                <button key={tab} className={`p-4 mt-3 rounded-lg transition-all ${ activeTab===tab
                    ? "bg-[#FFE9F4] text-blue-600 font-semibold" : "bg-[#F8F8F8] text-gray-700 hover:bg-gray-100" }`}
                    onClick={()=> setActiveTab(tab)}
                    >
                    <span>
                        {tabIcons[tab]}
                    </span>
                </button>
                ))}
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="flex-1 px-6  lg:mt-[60px]">
                {activeTab === "tab1" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className=" grid lg:grid-cols-5 grid-cols-1 gap-3">
                        <div className="bg-white rounded-lg p-4 lg:col-span-3">
                            <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                    <div>
                                        <div className="bg-[#FFE9F4] rounded-lg ">
                                            <Image src="/doc.png" width={40} height={30} alt="doctor photo"
                                                className="object-contain rounded-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg  mt-1 text-[#1F2937]">Jane Dominique</h2>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                        // onClick={()=> setShowModal2(true)}
                                        >
                                        <Pencil className="text-[#7026A1] w-5" />
                                    </button>
                                </div>
                            </div>
                            <AddAvailModal isOpen={showModal2} onClose={()=> setShowModal2(false)}
                                />
                                <div className="bg-[#F8FAF8] rounded-2xl mt-3 pb-5 pt-5">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 mb-6">
                                        <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.50033 4.16683L8.97709 9.20431C9.57894 9.67242 10.4217 9.67242 11.0236 9.20431L17.5003 4.16683M4.33366 16.6668H15.667C16.6004 16.6668 17.0671 16.6668 17.4236 16.4852C17.7372 16.3254 17.9922 16.0704 18.152 15.7568C18.3337 15.4003 18.3337 14.9336 18.3337 14.0002V6.00016C18.3337 5.06674 18.3337 4.60003 18.152 4.24351C17.9922 3.92991 17.7372 3.67494 17.4236 3.51515C17.0671 3.3335 16.6004 3.3335 15.667 3.3335H4.33366C3.40024 3.3335 2.93353 3.3335 2.57701 3.51515C2.2634 3.67494 2.00844 3.92991 1.84865 4.24351C1.66699 4.60003 1.66699 5.06674 1.66699 6.00016V14.0002C1.66699 14.9336 1.66699 15.4003 1.84865 15.7568C2.00844 16.0704 2.2634 16.3254 2.57701 16.4852C2.93353 16.6668 3.40024 16.6668 4.33366 16.6668Z"
                                                            stroke="#959698" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Email Address</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">Something@gamil.com</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 pb-3 pr-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6 13.0351C3.60879 13.7267 2 15.0194 2 16.5C2 18.7091 5.58172 20.5 10 20.5C14.4183 20.5 18 18.7091 18 16.5C18 15.0194 16.3912 13.7267 14 13.0351M16 6.9C16 10.4346 11.5 16.5 10 16.5C8.5 16.5 4 10.4346 4 6.9C4 3.36538 6.68629 0.5 10 0.5C13.3137 0.5 16 3.36538 16 6.9ZM12 6.5C12 7.60457 11.1046 8.5 10 8.5C8.89543 8.5 8 7.60457 8 6.5C8 5.39543 8.89543 4.5 10 4.5C11.1046 4.5 12 5.39543 12 6.5Z"
                                                            stroke="#959698" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Address</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">123 Highland Drive, Anytown
                                                    USA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 grid-cols-1 mb-6">
                                        <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.48322 8.12946C8.01318 9.23324 8.73561 10.2677 9.65052 11.1827C10.5654 12.0976 11.5999 12.82 12.7037 13.3499C12.7987 13.3955 12.8461 13.4183 12.9062 13.4358C13.1197 13.4981 13.3818 13.4534 13.5626 13.3239C13.6134 13.2875 13.657 13.244 13.744 13.1569C14.0102 12.8907 14.1433 12.7576 14.2771 12.6706C14.7819 12.3424 15.4326 12.3424 15.9373 12.6706C16.0712 12.7576 16.2043 12.8907 16.4705 13.1569L16.6189 13.3053C17.0235 13.71 17.2258 13.9123 17.3357 14.1296C17.5543 14.5617 17.5543 15.0721 17.3357 15.5042C17.2258 15.7215 17.0235 15.9239 16.6189 16.3285L16.4988 16.4486C16.0956 16.8518 15.8939 17.0535 15.6198 17.2074C15.3156 17.3783 14.8431 17.5012 14.4942 17.5002C14.1798 17.4992 13.9649 17.4382 13.5351 17.3162C11.2254 16.6607 9.04595 15.4238 7.22768 13.6055C5.40941 11.7872 4.17249 9.60775 3.51693 7.29805C3.39494 6.86826 3.33395 6.65337 3.33301 6.33894C3.33198 5.99004 3.45484 5.51758 3.62572 5.21339C3.77972 4.93925 3.98135 4.73762 4.38462 4.33435L4.50465 4.21432C4.9093 3.80967 5.11163 3.60734 5.32892 3.49743C5.76108 3.27885 6.27144 3.27885 6.70359 3.49743C6.92089 3.60734 7.12321 3.80967 7.52787 4.21432L7.67625 4.3627C7.94245 4.6289 8.07554 4.762 8.16257 4.89584C8.49074 5.40058 8.49074 6.05128 8.16257 6.55602C8.07555 6.68986 7.94245 6.82296 7.67625 7.08916C7.58921 7.1762 7.54569 7.21972 7.50926 7.2706C7.37981 7.45138 7.33511 7.71351 7.39734 7.92698C7.41485 7.98705 7.43764 8.03452 7.48322 8.12946Z"
                                                            stroke="#959698" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Phone Number</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">231-2324-2324</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 pb-3 pr-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.6663 8.33317L14.9997 4.99984M11.6663 4.1665H15.4163C15.6465 4.1665 15.833 4.35305 15.833 4.58317V8.33317M13.333 12.4998C13.333 15.2613 11.0944 17.4998 8.33301 17.4998C5.57158 17.4998 3.33301 15.2613 3.33301 12.4998C3.33301 9.73841 5.57158 7.49984 8.33301 7.49984C11.0944 7.49984 13.333 9.73841 13.333 12.4998Z"
                                                            stroke="#959698" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Gender</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">Female</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 grid-cols-1 mb-6">
                                        <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.667 6.66683H15.0003M11.667 10.0002H15.0003M11.667 13.3335H15.0003M4.33366 16.6668H15.667C16.6004 16.6668 17.0671 16.6668 17.4236 16.4852C17.7372 16.3254 17.9922 16.0704 18.152 15.7568C18.3337 15.4003 18.3337 14.9336 18.3337 14.0002V6.00016C18.3337 5.06674 18.3337 4.60003 18.152 4.24351C17.9922 3.92991 17.7372 3.67494 17.4236 3.51515C17.0671 3.3335 16.6004 3.3335 15.667 3.3335H4.33366C3.40024 3.3335 2.93353 3.3335 2.57701 3.51515C2.2634 3.67494 2.00844 3.92991 1.84865 4.24351C1.66699 4.60003 1.66699 5.06674 1.66699 6.00016V14.0002C1.66699 14.9336 1.66699 15.4003 1.84865 15.7568C2.00844 16.0704 2.2634 16.3254 2.57701 16.4852C2.93353 16.6668 3.40024 16.6668 4.33366 16.6668ZM5.41699 10.0002H7.91699C8.14711 10.0002 8.33366 9.81361 8.33366 9.5835V7.0835C8.33366 6.85338 8.14711 6.66683 7.91699 6.66683H5.41699C5.18687 6.66683 5.00033 6.85338 5.00033 7.0835V9.5835C5.00033 9.81361 5.18687 10.0002 5.41699 10.0002Z"
                                                            stroke="#959698" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Insurance</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">745798564</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 pb-3 pr-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.5 8.33317H17.5M6.66667 4.99984V1.6665M13.3333 4.99984V1.6665M7.83333 18.3332H12.1667C14.0335 18.3332 14.9669 18.3332 15.68 17.9699C16.3072 17.6503 16.8171 17.1403 17.1367 16.5131C17.5 15.8001 17.5 14.8667 17.5 12.9998V8.6665C17.5 6.79966 17.5 5.86624 17.1367 5.1532C16.8171 4.526 16.3072 4.01606 15.68 3.69648C14.9669 3.33317 14.0335 3.33317 12.1667 3.33317H7.83333C5.96649 3.33317 5.03307 3.33317 4.32003 3.69648C3.69282 4.01606 3.18289 4.526 2.86331 5.1532C2.5 5.86624 2.5 6.79966 2.5 8.6665V12.9998C2.5 14.8667 2.5 15.8001 2.86331 16.5131C3.18289 17.1403 3.69282 17.6503 4.32003 17.9699C5.03307 18.3332 5.96649 18.3332 7.83333 18.3332Z"
                                                            stroke="#959698" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Date of Birth</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">25 - July - 1992</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                        </div>
                        <div className="bg-white rounded-lg p-4 lg:col-span-2">
                            <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                    <div>
                                        <div className="bg-[#FFE9F4] rounded-lg p-3">

                                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.5 7.16667H15.5M4.66667 3.83333V0.5M11.3333 3.83333V0.5M5.83333 17.1667H10.1667C12.0335 17.1667 12.9669 17.1667 13.68 16.8034C14.3072 16.4838 14.8171 15.9738 15.1367 15.3466C15.5 14.6336 15.5 13.7002 15.5 11.8333V7.5C15.5 5.63316 15.5 4.69974 15.1367 3.9867C14.8171 3.35949 14.3072 2.84956 13.68 2.52998C12.9669 2.16667 12.0335 2.16667 10.1667 2.16667H5.83333C3.96649 2.16667 3.03307 2.16667 2.32003 2.52998C1.69282 2.84956 1.18289 3.35949 0.863312 3.9867C0.5 4.69974 0.5 5.63316 0.5 7.5V11.8333C0.5 13.7002 0.5 14.6336 0.863312 15.3466C1.18289 15.9738 1.69282 16.4838 2.32003 16.8034C3.03307 17.1667 3.96649 17.1667 5.83333 17.1667Z"
                                                    stroke="#7026A1" stroke-linecap="round" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg  mt-1 text-[#1F2937]">Upcoming Appointments</h2>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                        onClick={()=> setShowModal2(true)}>
                                        <Plus className="text-[#7026A1] w-5" />
                                    </button>
                                </div>
                            </div>
                            <AddAvailModal isOpen={showModal2} onClose={()=> setShowModal2(false)}
                                />
                                <div className="mt-4 overflow-auto lg:h-[280px] max-h-[calc(100vh-425px)]">
                                    <p className="text-[#56555C] px-2">Today</p>

                                    <div
                                        className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 hover:bg-[#7026A1] group rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Back Pain
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                10:00am - 11:00am
                                            </p>
                                        </div>
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Chandler M Bingg
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                12 - May - 2024
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 hover:bg-[#7026A1] group  rounded-lg p-4 mt-4 mb-4 border-b border-[#F6F6F6]">
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Heart Pain
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                10:00am - 11:00am
                                            </p>
                                        </div>
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Chandler M Bingg
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                12 - May - 2024
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[#56555C] px-2">12 July 2025</p>
                                    <div
                                        className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 hover:bg-[#7026A1] group  rounded-lg p-4 mt-4 mb-4 border-b border-[#F6F6F6]">
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Heart Pain
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                10:00am - 11:00am
                                            </p>
                                        </div>
                                        <div>
                                            <p className="group-hover:text-white text-[#606061] mb-1">
                                                Chandler M Bingg
                                            </p>
                                            <p className="group-hover:text-white text-[#606061] text-xs">
                                                12 - May - 2024
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[#56555C] px-2">13 July 2025</p>
                                </div>
                                <div>
                                    <p className="text-[#56555C] px-2 text-center mt-6 border-t border-[#F6F6F6] pt-4">
                                        All caught up</p>
                                </div>

                        </div>

                    </div>
                    <div className="bg-white rounded-lg p-4 mt-3 mb-3">
                        <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                            <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                <div>
                                    <div className="bg-[#FFE9F4] rounded-lg p-3">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.5 10.0001H4.67468C4.86587 10.0001 5.03253 9.87001 5.0789 9.68453L6.26244 4.95038C6.36764 4.52956 6.96569 4.52956 7.07089 4.95038L9.59577 15.0499C9.70098 15.4707 10.299 15.4707 10.4042 15.0499L11.5878 10.3157C11.6341 10.1303 11.8008 10.0001 11.992 10.0001H18.3333"
                                                stroke="#7026A1" stroke-width="1.2" stroke-linecap="round" />
                                        </svg>

                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg  mt-1 text-[#1F2937]">Vitals</h2>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                    onClick={()=> setShowModal6(true)}
                                    >
                                    <Plus className="text-[#7026A1] w-5" />
                                </button>
                            </div>
                        </div>
                        <AddVitalsModal isOpen={showModal6} onClose={()=> setShowModal6(false)}
                            />
                            <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
                                <div className="bg-[#F8FAF8] rounded-2xl mt-3  pt-4 pb-4 px-4">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">

                                        <div>
                                            <h2 className="text-[#6B7280] text-sm">Height</h2>

                                        </div>
                                        <div className="text-right">
                                            <Pencil className="text-[#6B7280] w-4 float-end" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-[#1F2937] text-5xl">168 </h2><span
                                                className="text-[#6B7280]  text-lg">cm</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-white float-end rounded-4xl p-3">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 13.9998L12 18.9998M12 9.99985V4.99985M16 15.9998L12.7071 19.2927C12.3166 19.6833 11.6834 19.6833 11.2929 19.2927L8 15.9998M16 7.99985L12.7071 4.70696C12.3166 4.31643 11.6834 4.31643 11.2929 4.70696L8 7.99985"
                                                        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F8FAF8] rounded-2xl mt-3  pt-4 pb-4 px-4">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">

                                        <div>
                                            <h2 className="text-[#6B7280] text-sm">Weight</h2>

                                        </div>
                                        <div className="text-right">
                                            <Pencil className="text-[#6B7280] w-4 float-end" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-[#1F2937] text-5xl ">75.2 </h2><span
                                                className="text-[#6B7280]  text-lg ">Kg</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-white float-end rounded-4xl p-3">

                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 13.9998L12 18.9998M12 9.99985V4.99985M16 15.9998L12.7071 19.2927C12.3166 19.6833 11.6834 19.6833 11.2929 19.2927L8 15.9998M16 7.99985L12.7071 4.70696C12.3166 4.31643 11.6834 4.31643 11.2929 4.70696L8 7.99985"
                                                        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F8FAF8] rounded-2xl mt-3  pt-4 pb-4 px-4">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">

                                        <div>
                                            <h2 className="text-[#6B7280] text-sm">Blood Pressure</h2>

                                        </div>
                                        <div className="text-right">
                                            <Pencil className="text-[#6B7280] w-4 float-end" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-[#1F2937] text-5xl ">120/70 </h2><span
                                                className="text-[#6B7280]  text-lg"> mmHg</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-white float-end rounded-4xl p-3">

                                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.5996 11.388C14.5996 15.254 11.4656 18.388 7.59961 18.388C3.73362 18.388 0.599609 15.254 0.599609 11.388C0.599609 8.04427 5.8362 2.25575 7.25093 0.752924C7.44275 0.549156 7.75647 0.549155 7.94829 0.752923C9.36302 2.25575 14.5996 8.04427 14.5996 11.388Z"
                                                        stroke="#6B7280" stroke-width="1.2" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F8FAF8] rounded-2xl mt-3  pt-4 pb-4 px-4">
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">

                                        <div>
                                            <h2 className="text-[#6B7280] text-sm">Heart Rate</h2>

                                        </div>
                                        <div className="text-right">
                                            <Pencil className="text-[#6B7280] w-4 float-end" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-[#1F2937] text-5xl ">82 </h2><span
                                                className="text-[#6B7280]  text-lg">bpm</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-white float-end rounded-4xl p-3">

                                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.5928 2.75675C8.59341 0.3976 5.25936 -0.237003 2.7543 1.92327C0.249253 4.08354 -0.103423 7.6954 1.86381 10.2504C3.49943 12.3746 8.44938 16.8549 10.0717 18.305C10.2532 18.4672 10.344 18.5483 10.4498 18.5802C10.5422 18.608 10.6433 18.608 10.7357 18.5802C10.8416 18.5483 10.9323 18.4672 11.1138 18.305C12.7361 16.8549 17.6861 12.3746 19.3217 10.2504C21.2889 7.6954 20.9793 4.06081 18.4312 1.92327C15.8831 -0.214279 12.5921 0.3976 10.5928 2.75675Z"
                                                        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div className=" grid lg:grid-cols-6 grid-cols-1 gap-3">
                        <div className="bg-white rounded-lg p-4 lg:col-span-2">
                            <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                    <div>
                                        <div className="bg-[#FFE9F4] rounded-lg p-3">

                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.91634 7.08317H12.083M9.99967 4.99984V9.1665M6.66634 12.4998H13.333M6.66634 14.9998H13.333M5.99967 18.3332H13.9997C14.9331 18.3332 15.3998 18.3332 15.7563 18.1515C16.0699 17.9917 16.3249 17.7368 16.4847 17.4232C16.6663 17.0666 16.6663 16.5999 16.6663 15.6665V4.33317C16.6663 3.39975 16.6663 2.93304 16.4847 2.57652C16.3249 2.26292 16.0699 2.00795 15.7563 1.84816C15.3998 1.6665 14.9331 1.6665 13.9997 1.6665H5.99967C5.06625 1.6665 4.59954 1.6665 4.24302 1.84816C3.92942 2.00795 3.67445 2.26292 3.51466 2.57652C3.33301 2.93304 3.33301 3.39975 3.33301 4.33317V15.6665C3.33301 16.5999 3.33301 17.0666 3.51466 17.4232C3.67445 17.7368 3.92942 17.9917 4.24302 18.1515C4.59954 18.3332 5.06625 18.3332 5.99967 18.3332Z"
                                                    stroke="#7026A1" stroke-width="1.2" stroke-linecap="round" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg  mt-1 text-[#1F2937]">Disease History</h2>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                        onClick={()=> setShowModal3(true)}
                                        >
                                        <Plus className="text-[#7026A1] w-5" />
                                    </button>
                                </div>
                            </div>
                            <AddRecommendationModal
                        isOpen={showModal3}
                        onClose={() => setShowModal3(false)}
                    />
                                <div className="mt-4 overflow-auto lg:h-[280px] max-h-[calc(100vh-425px)]">

                                    <div
                                        className="lg:flex lg:justify-between lg:items-center grid grid-cols-1 bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                Date of Appointment
                                            </p>
                                            <p className=" text-[#606061] text-xs">
                                                12 - May - 2024
                                            </p>
                                        </div>
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                Diagnosis
                                            </p>
                                            <p className=" text-[#606061] text-xs">
                                                High BP
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:flex lg:flex-col lg:items-center  bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div className="mt-3">
                                            <p className=" text-[#959698] mb-1">
                                                Complaint
                                            </p>
                                            <p className=" text-[#606061] ">
                                                Sweating, Chest Pain, Headache  and severe pain in the chest, abdomen
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <p className=" text-[#959698] mb-1">
                                                Diagnostic Details
                                            </p>
                                            <p className=" text-[#606061] ">
                                                High blood pressure, or hypertension, is diagnosed by measuring your
                                                blood pressure, with readings consistently ≥130/80 mmHg, often confirmed
                                                on separate occasions. A healthcare provider determines high blood
                                                pressure (hypertension) .Blood pressure is categorized into stages, and
                                                additional tests like blood and urine tests, cholesterol.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                        </div>
                        <div className="bg-white rounded-lg p-4 lg:col-span-2">
                            <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                    <div>
                                        <div className="bg-[#FFE9F4] rounded-lg p-3">

                                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.90845 19.2913C2.71712 20.0999 3.83429 20.6001 5.06828 20.6001C7.53626 20.6001 9.53695 18.5994 9.53695 16.1314C9.53695 14.8974 9.03677 13.7803 8.2281 12.9716M1.90845 19.2913C1.09978 18.4826 0.599609 17.3654 0.599609 16.1314C0.599609 13.6635 2.6003 11.6628 5.06828 11.6628C6.30227 11.6628 7.41943 12.1629 8.2281 12.9716M1.90845 19.2913L8.2281 12.9716M17.0177 6.14639L14.7833 2.27641C13.8578 0.67341 11.8081 0.124182 10.2051 1.04967C8.6021 1.97516 8.05287 4.02491 8.97836 5.62791L11.2127 9.49789M17.0177 6.14639L19.252 10.0164C20.1775 11.6194 19.6283 13.6691 18.0253 14.5946C16.4223 15.5201 14.3725 14.9709 13.447 13.3679L11.2127 9.49789M17.0177 6.14639L11.2127 9.49789"
                                                    stroke="#7026A1" stroke-width="1.2" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg  mt-1 text-[#1F2937]">Current Perscription</h2>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                        onClick={()=> setShowModal4(true)}
                                        >
                                        <Plus className="text-[#7026A1] w-5" />
                                    </button>
                                </div>
                            </div>
                            <AddPrescriptionModal isOpen={showModal4} onClose={()=> setShowModal4(false)}
                                />
                                <div className="mt-4 overflow-auto lg:h-[280px] max-h-[calc(100vh-425px)]">

                                    <div
                                        className="lg:flex lg:justify-between lg:items-center  bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                <span className="text-[#1F2937]">Gastoenteril</span> 200mg
                                            </p>
                                            <p className=" text-[#7026A1] text-xs">
                                                Before Meal
                                            </p>
                                        </div>
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                2x / Day
                                            </p>

                                        </div>
                                    </div>
                                    <div
                                        className="lg:flex lg:justify-between lg:items-center  bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                <span className="text-[#1F2937]">Gastoenteril</span> 200mg
                                            </p>
                                            <p className=" text-[#7026A1] text-xs">
                                                Before Meal
                                            </p>
                                        </div>
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                2x / Day
                                            </p>

                                        </div>
                                    </div>
                                    <div
                                        className="lg:flex lg:justify-between lg:items-center  bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                <span className="text-[#1F2937]">Gastoenteril</span> 200mg
                                            </p>
                                            <p className=" text-[#7026A1] text-xs">
                                                Before Meal
                                            </p>
                                        </div>
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                2x / Day
                                            </p>

                                        </div>
                                    </div>
                                    <div
                                        className="lg:flex lg:justify-between lg:items-center  bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                <span className="text-[#1F2937]">Gastoenteril</span> 200mg
                                            </p>
                                            <p className=" text-[#7026A1] text-xs">
                                                Before Meal
                                            </p>
                                        </div>
                                        <div>
                                            <p className=" text-[#959698] mb-1">
                                                2x / Day
                                            </p>

                                        </div>
                                    </div>

                                </div>

                        </div>
                        <div className="bg-white rounded-lg p-4 lg:col-span-2">
                            <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                                    <div>
                                        <div className="bg-[#FFE9F4] rounded-lg p-3">

                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5 1.6665V4.99984C5 7.76126 7.23858 9.99984 10 9.99984M15 18.3332V14.9998C15 12.2384 12.7614 9.99984 10 9.99984M10 9.99984C7.23858 9.99984 5 12.2384 5 14.9998V18.3332M10 9.99984C12.7614 9.99984 15 7.76126 15 4.99984V1.6665M5 3.33317H10M5.83333 6.6665H8.33333M15 16.6665H10M14.1667 13.3332H11.6667"
                                                    stroke="#7026A1" stroke-width="1.2" stroke-linecap="round" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-lg  mt-1 text-[#1F2937]">Allergies</h2>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer"
                                        onClick={()=> setShowModal5(true)}>
                                        <Plus className="text-[#7026A1] w-5" />
                                    </button>
                                </div>
                            </div>
                            <AddAllergiesModal isOpen={showModal5} onClose={()=> setShowModal5(false)}
                                />

                                <div className="mt-4 overflow-auto lg:h-[280px] max-h-[calc(100vh-425px)]">

                                    <div className=" bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className="  mb-1">
                                                Peanut Butter
                                            </p>

                                        </div>

                                    </div>
                                    <div className=" bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className="  mb-1">
                                                Dust
                                            </p>

                                        </div>

                                    </div>
                                    <div className=" bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className="  mb-1">
                                                Dogs
                                            </p>

                                        </div>

                                    </div>
                                    <div className=" bg-[#F8FAF8]  rounded-lg border-b border-[#F6F6F6] p-4 mt-4 mb-4">
                                        <div>
                                            <p className="  mb-1">
                                                Cats
                                            </p>

                                        </div>

                                    </div>

                                </div>

                        </div>

                    </div>

                </div>
                )}

                {activeTab === "tab2" && (
                <PatientPsychiatricPlanTable/>
                )}

                {activeTab === "tab3" && (
                <PatientRecommendationTable/>
                )}
                {activeTab === "tab4" && (
                <Document    />
                )}
                {activeTab === "tab5" && (
                <PatientPrescriptionTable/>
                )}
                {activeTab === "tab6" && (
                <PatientAiNotesTable/>
                )}
                {activeTab === "tab7" && (
                <PatientAppointmentTable/>
                )}
                {activeTab === "tab8" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Settings6</h2>
                    <p>This is the Settings tab content.</p>
                </div>
                )}
                {activeTab === "tab9" && (
                <PatientInsuranceClaimTable/>
                )}
            </div>
        </div>

    </>
    )}
</>
);
}