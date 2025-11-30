"use client";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// import ClientViewComponent from "../components/ClientView";
import { ChevronRight,Plus,Download,Pencil,Trash,ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import DocViewPicker from "../components/doc_view_picker";
// import DocTimeSlots from "../components/doc_timeslots";
// import BookAppointModal from "../components/BookAppointModal";
// import AddAvailModal from "../components/AddAvailModal";
// import AddRecommendationModal from "@/components/AddRecommendatioModal";
// import AddDocumentModal from "@/components/AddDocumentModal";
// import AddPrescriptionModal from "@/components/AddPrescriptionModal";
// import AddAllergiesModal   from "@/components/AddAllergiesModal";
// import AddVitalsModal from "@/components/AddVitalsModal"

// import PatientPsychiatricPlanTable from "@/components/patient_psychiatric_plan_table";
// import PatientRecommendationTable from "@/components/patient_recommendation_table";
// import Document from "../components/Document";
// import PatientPrescriptionTable from "@/components/patient_prescription_table";
// import PatientAiNotesTable from "@/components/patient_ai_notes_table";  
// import PatientAppointmentTable from "@/components/patient_appointment_table";
// import PatientInsuranceClaimTable from "@/components/patient_insurance_claim_table";

export default function Settings() {

const [showModal, setShowModal] = useState(false);

const [showModal7, setShowModal7] = useState(false);

const [showModal6, setShowModal6] = useState(false);

const [showModal5, setShowModal5] = useState(false);

const [showModal4, setShowModal4] = useState(false);

const [showModal3, setShowModal3] = useState(false);

const [showModal2, setShowModal2] = useState(false);

const router = useRouter();
const { id } = router.query;
const [ClientId, setClientId] = useState(null);
const [loading, setLoading] = useState(true);
const colorPickerRef = useRef(null);

const tabTitles = {
tab1: "Profile",
tab2: "Security",
tab3: "Website",
tab4: "Integration",
tab5: "Billing",
tab6: "Ai Notes",
tab7: "Templates",
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
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.0003 2.5L3.33366 5.41667V9.16667C3.33366 13.75 6.66699 17.8333 10.0003 18.3333C13.3337 17.8333 16.667 13.75 16.667 9.16667V5.41667L10.0003 2.5Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path
        d="M7.5 10L9.16667 11.6667L12.5 8.33333"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
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
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8.33333 5.83333C8.33333 4.91286 9.07952 4.16667 10 4.16667C10.9205 4.16667 11.6667 4.91286 11.6667 5.83333V7.5M8.33333 14.1667C8.33333 15.0871 9.07952 15.8333 10 15.8333C10.9205 15.8333 11.6667 15.0871 11.6667 14.1667V12.5M5.83333 8.33333C4.91286 8.33333 4.16667 9.07952 4.16667 10C4.16667 10.9205 4.91286 11.6667 5.83333 11.6667H7.5M14.1667 8.33333C15.0871 8.33333 15.8333 9.07952 15.8333 10C15.8333 10.9205 15.0871 11.6667 14.1667 11.6667H12.5"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
),
tab5: (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5H15.8333C16.7538 5 17.5 5.74619 17.5 6.66667V13.3333C17.5 14.2538 16.7538 15 15.8333 15H4.16667C3.24619 15 2.5 14.2538 2.5 13.3333V6.66667Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path
        d="M2.5 8.33333H17.5M6.66667 12.5H8.33333"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
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

// Profile form state
const [profileData, setProfileData] = useState({
  // Clinic
  clinicLogo: null,
  clinicLogoPreview: null,
  clinicCoverImage: null,
  clinicCoverImagePreview: null,
  clinicName: '',
  clinicEmail: '',
  clinicWebsite: '',
  clinicAddress: '',
  clinicPhone: '',
  clinicLicense: '',
  clinicLicenseExpiry: '',
  
  // Doctor
  doctorProfilePicture: null,
  doctorProfilePicturePreview: null,
  doctorName: '',
  doctorQualification: '',
  doctorSpecialization: '',
  doctorEmail: '',
  doctorAddress: '',
  doctorPhone: '',
  doctorLanguage: '',
  doctorLicense: '',
  doctorLicenseExpiry: '',
  doctorLicenseFile: null,
  
  // Patient
  patientProfilePicture: null,
  patientProfilePicturePreview: null,
  patientName: '',
  patientEmail: '',
  patientAddress: '',
  patientPhone: '',
});

// Security form state
const [securityData, setSecurityData] = useState({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  showPassword: false,
});

// Website form state
const [websiteData, setWebsiteData] = useState({
  logo: null,
  logoPreview: null,
  primaryColor: '#4F46E5',
  secondaryColor: '#EC4899',
  linearColor: 'linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)',
  businessName: '',
  showColorPicker: false,
  activeColorPicker: null, // 'primary', 'secondary', or 'linear'
  savedColors: ['#EF4444', '#F97316', '#FBBF24', '#10B981', '#3B82F6', '#4F46E5', '#EC4899', '#F43F5E'],
  colorPickerHue: 250,
  colorPickerSaturation: 100,
  colorPickerLightness: 50,
  colorPickerOpacity: 100,
});

// Integration form state
const [integrationData, setIntegrationData] = useState({
  publicKey: '',
  privateKey: '',
});

// Billing form state
const [billingData, setBillingData] = useState({
  selectedPlan: 'basic', // 'basic', 'business', 'enterprise'
  cardName: 'Olivia Rhye',
  cardExpiry: '06 / 2024',
  cardNumber: '1234 1234 1234 1234',
  cardCVV: '•••',
  paymentMethod: {
    type: 'Visa',
    last4: '1234',
    expiry: '06/2024',
    email: 'billing@untitledui.com'
  }
});

// Templates form state
const [templatesData, setTemplatesData] = useState([
  { id: 738, formName: "Fainting", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Admin", creationDate: "25 - July - 2024" },
  { id: 185, formName: "Difficulty Swallowing", placement: { patient: true, doctor: false }, usedFor: "After Session", createdBy: "Super Admin", creationDate: "25 - July - 2024" },
  { id: 816, formName: "Sweating", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Dr. Bilal", creationDate: "25 - July - 2024" },
  { id: 922, formName: "Irregular Menstruation", placement: { patient: true, doctor: false }, usedFor: "After Session", createdBy: "Dr. Zafar Islam", creationDate: "25 - July - 2024" },
  { id: 647, formName: "Muscle Weakness", placement: { patient: false, doctor: true }, usedFor: "After Doctor Registration", createdBy: "Dr. Shireen Khan", creationDate: "25 - July - 2024" },
  { id: 426, formName: "Joint Pain", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Dr. Imtiaz Ahmed", creationDate: "25 - July - 2024" },
  { id: 556, formName: "Vomiting", placement: { patient: true, doctor: false }, usedFor: "After Session", createdBy: "Dr. Jahid Rahman", creationDate: "25 - July - 2024" },
  { id: 540, formName: "Dry Skin", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Admin", creationDate: "25 - July - 2024" },
  { id: 600, formName: "Vision Changes", placement: { patient: false, doctor: true }, usedFor: "After Doctor Registration", createdBy: "Super Admin", creationDate: "25 - July - 2024" },
  { id: 740, formName: "Dizziness", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Dr. Bilal", creationDate: "25 - July - 2024" },
  { id: 883, formName: "Fever", placement: { patient: true, doctor: false }, usedFor: "After Session", createdBy: "Dr. Zafar Islam", creationDate: "25 - July - 2024" },
  { id: 130, formName: "Difficulty Concentrating", placement: { patient: true, doctor: true }, usedFor: "Patient Intake", createdBy: "Dr. Shireen Khan", creationDate: "25 - July - 2024" },
]);

const handleProfileInputChange = (e) => {
  const { name, value } = e.target;
  setProfileData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleImageUpload = (e, field, previewField) => {
  const file = e.target.files[0];
  if (file) {
    const preview = URL.createObjectURL(file);
    setProfileData(prev => ({
      ...prev,
      [field]: file,
      [previewField]: preview
    }));
  }
};

const handleFileUpload = (e, field) => {
  const file = e.target.files[0];
  if (file) {
    setProfileData(prev => ({
      ...prev,
      [field]: file
    }));
  }
};

const handleSecurityInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  setSecurityData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

const handleWebsiteInputChange = (e) => {
  const { name, value } = e.target;
  setWebsiteData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleIntegrationInputChange = (e) => {
  const { name, value } = e.target;
  setIntegrationData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleBillingInputChange = (e) => {
  const { name, value } = e.target;
  setBillingData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handlePlanSelect = (plan) => {
  setBillingData(prev => ({
    ...prev,
    selectedPlan: plan
  }));
};

const handleDeleteTemplate = (id) => {
  setTemplatesData(prev => prev.filter(template => template.id !== id));
};

const handleEditTemplate = (id) => {
  // Handle edit logic here
  console.log('Edit template:', id);
};

const handleAddTemplate = () => {
  // Handle add template logic here
  console.log('Add new template');
};

const handleWebsiteLogoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const preview = URL.createObjectURL(file);
    setWebsiteData(prev => ({
      ...prev,
      logo: file,
      logoPreview: preview
    }));
  }
};

// Color conversion utilities
const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
      default: h = 0;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const handleColorChange = (color, type) => {
  // Validate hex color
  if (color.startsWith('#') && (color.length === 4 || color.length === 7)) {
    setWebsiteData(prev => {
      const newPrimary = type === 'primary' ? color : prev.primaryColor;
      const newSecondary = type === 'secondary' ? color : prev.secondaryColor;
      const hsl = hexToHsl(color);
      return {
        ...prev,
        [type === 'primary' ? 'primaryColor' : type === 'secondary' ? 'secondaryColor' : 'primaryColor']: color,
        linearColor: `linear-gradient(135deg, ${newPrimary} 0%, ${newSecondary} 100%)`,
        colorPickerHue: hsl.h,
        colorPickerSaturation: hsl.s,
        colorPickerLightness: hsl.l,
      };
    });
  }
};

const handleHueChange = (hue) => {
  setWebsiteData(prev => {
    const hex = hslToHex(hue, prev.colorPickerSaturation, prev.colorPickerLightness);
    const type = prev.activeColorPicker;
    const newPrimary = type === 'primary' ? hex : prev.primaryColor;
    const newSecondary = type === 'secondary' ? hex : prev.secondaryColor;
    return {
      ...prev,
      colorPickerHue: hue,
      [type === 'primary' ? 'primaryColor' : 'secondaryColor']: hex,
      linearColor: `linear-gradient(135deg, ${newPrimary} 0%, ${newSecondary} 100%)`
    };
  });
};

const handleSaturationLightnessChange = (saturation, lightness) => {
  setWebsiteData(prev => {
    const hex = hslToHex(prev.colorPickerHue, saturation, lightness);
    const type = prev.activeColorPicker;
    const newPrimary = type === 'primary' ? hex : prev.primaryColor;
    const newSecondary = type === 'secondary' ? hex : prev.secondaryColor;
    return {
      ...prev,
      colorPickerSaturation: saturation,
      colorPickerLightness: lightness,
      [type === 'primary' ? 'primaryColor' : 'secondaryColor']: hex,
      linearColor: `linear-gradient(135deg, ${newPrimary} 0%, ${newSecondary} 100%)`
    };
  });
};

const toggleColorPicker = (type) => {
  setWebsiteData(prev => {
    const isOpening = prev.activeColorPicker !== type;
    const currentColor = type === 'primary' ? prev.primaryColor : prev.secondaryColor;
    const hsl = isOpening ? hexToHsl(currentColor) : { h: prev.colorPickerHue, s: prev.colorPickerSaturation, l: prev.colorPickerLightness };
    
    return {
      ...prev,
      showColorPicker: isOpening,
      activeColorPicker: isOpening ? type : null,
      colorPickerHue: hsl.h,
      colorPickerSaturation: hsl.s,
      colorPickerLightness: hsl.l,
    };
  });
};

const addSavedColor = (color) => {
  if (!websiteData.savedColors.includes(color)) {
    setWebsiteData(prev => ({
      ...prev,
      savedColors: [...prev.savedColors, color]
    }));
  }
};

// Close color picker when clicking outside
useEffect(() => {
if (!websiteData.showColorPicker) return;

const handleClickOutside = (event) => {
// Check if click is inside the color picker popup
if (colorPickerRef.current && colorPickerRef.current.contains(event.target)) {
return; // Don't close if clicking inside
}

// Check if the click is on a color swatch - let toggleColorPicker handle it
const isColorSwatch = event.target.closest('[data-color-swatch]');
if (isColorSwatch) {
return; // Let the onClick handler on the swatch handle the toggle
}

// Close if clicking outside
setWebsiteData(prev => ({
...prev,
showColorPicker: false,
activeColorPicker: null
}));
};

document.addEventListener('mousedown', handleClickOutside);

return () => {
document.removeEventListener('mousedown', handleClickOutside);
};
}, [websiteData.showColorPicker]);

return (
<>
    <div
            className="lg:flex lg:justify-between  lg:items-center grid grid-cols-1  lg:pl-35 lg:pr-22 lg:pt-6 lg:absolute w-full">
            <div className="flex gap-3 items-center">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[#6B7280]">Settings</h1>
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

                    <button 
                        onClick={() => {
                            // Handle update logic here
                            console.log('Update profile:', profileData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Update
                    </button>

                </>
                )}

                {/* ====== TAB 2: Security ====== */}
                {tabTitles[activeTab] === "Security" && (
                    <button 
                        onClick={() => {
                            // Handle update logic here
                            console.log('Update security:', securityData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Update
                    </button>
                )}

                {/* ====== TAB 3: Website ====== */}
                {tabTitles[activeTab] === "Website" && (
                    <button 
                        onClick={() => {
                            // Handle update logic here
                            console.log('Update website:', websiteData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Update
                    </button>
                )}

                {/* ====== TAB 4: Integration ====== */}
                {tabTitles[activeTab] === "Integration" && (
                    <button 
                        onClick={() => {
                            // Handle update logic here
                            console.log('Update integration:', integrationData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Update
                    </button>
                )}

                {/* ====== TAB 2: Psychiatric Treatment Plan (old) ====== */}
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
                    //    onClick={()=> setShowModal3(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Recommendation</span>

                    </Link>
                   
                {/* <AddRecommendationModal
                        isOpen={showModal3}
                        onClose={() => setShowModal3(false)}
                    /> */}

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
                    //    onClick={()=> setShowModal(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Documents</span>

                    </Link>
                 {/* <AddDocumentModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    /> */}
                </>
                )}

                {/* ====== TAB 5: Billing ====== */}
                {tabTitles[activeTab] === "Billing" && (
                    <button 
                        onClick={() => {
                            // Handle update logic here
                            console.log('Update billing:', billingData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Update
                    </button>
                )}

                {/* ====== TAB 5: Prescriptions (old) ====== */}
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
                    //    onClick={()=> setShowModal4(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Prescription</span>

                    </Link>
                  {/* <AddPrescriptionModal
                        isOpen={showModal4}
                        onClose={() => setShowModal4(false)}
                    /> */}
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
                {tabTitles[activeTab] === "Templates" && (
                    <button 
                        onClick={() => {
                            // Handle save logic here
                            console.log('Save templates:', templatesData);
                        }}
                        className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-6 py-2 font-medium"
                    >
                        Save
                    </button>
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
                       <Link href="#" className="btn btn-primary" 
                    //    onClick={()=> setShowModal7(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Appointment</span>

                    </Link>

                     {/* <BookAppointModal
                        isOpen={showModal7}
                        onClose={() => setShowModal7(false)}
                    /> */}

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
                    <div className="space-y-8 pb-8">
                        {/* CLINIC SECTION */}
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-6">Clinic</h2>
                            
                            {/* Logo */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">LOGO</label>
                                    <p className="text-xs text-[#6B7280]">This will be shown in your profile view of the clinic.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-32 h-32 bg-[#FFE9F4] rounded-lg flex items-center justify-center border border-[#E5E7EB] flex-shrink-0">
                                        {profileData.clinicLogoPreview ? (
                                            <Image 
                                                src={profileData.clinicLogoPreview} 
                                                alt="Clinic Logo" 
                                                width={128} 
                                                height={128}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 4L4 8V16L12 20L20 16V8L12 4Z" stroke="#7026A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 12L4 8M12 12L20 8M12 12V20" stroke="#7026A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <p className="text-xs text-[#7026A1] font-medium">HEALTH CARE</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="block border-2 border-dashed border-[#D0D5DD] rounded-lg p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg"
                                                onChange={(e) => handleImageUpload(e, 'clinicLogo', 'clinicLogoPreview')}
                                                className="hidden"
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                                                <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Cover Image */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Cover Image</label>
                                    <p className="text-xs text-[#6B7280]">This will be shown in your profile view of the clinic.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-48 h-32 bg-gray-200 rounded-lg overflow-hidden border border-[#E5E7EB] flex-shrink-0">
                                        {profileData.clinicCoverImagePreview ? (
                                            <Image 
                                                src={profileData.clinicCoverImagePreview} 
                                                alt="Cover Image" 
                                                width={192} 
                                                height={128}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="block border-2 border-dashed border-[#D0D5DD] rounded-lg p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg"
                                                onChange={(e) => handleImageUpload(e, 'clinicCoverImage', 'clinicCoverImagePreview')}
                                                className="hidden"
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                                                <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Text Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Clinic Name</label>
                                    <p className="text-xs text-[#6B7280]">This will reflect as the title of your business.</p>
                                </div>
                                <input
                                    type="text"
                                    name="clinicName"
                                    value={profileData.clinicName}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter clinic name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Attached Email</label>
                                    <p className="text-xs text-[#6B7280]">This Email will be used to send emails.</p>
                                </div>
                                <input
                                    type="email"
                                    name="clinicEmail"
                                    value={profileData.clinicEmail}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Website</label>
                                    <p className="text-xs text-[#6B7280]">This is the business website.</p>
                                </div>
                                <input
                                    type="url"
                                    name="clinicWebsite"
                                    value={profileData.clinicWebsite}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter website URL"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Address</label>
                                    <p className="text-xs text-[#6B7280]">Business address.</p>
                                </div>
                                <input
                                    type="text"
                                    name="clinicAddress"
                                    value={profileData.clinicAddress}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Phone Number</label>
                                    <p className="text-xs text-[#6B7280]">Phone number that will be used to contact.</p>
                                </div>
                                <input
                                    type="tel"
                                    name="clinicPhone"
                                    value={profileData.clinicPhone}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">License and Expiry</label>
                                    <p className="text-xs text-[#6B7280]">This will be reflected in your profile.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        name="clinicLicense"
                                        value={profileData.clinicLicense}
                                        onChange={handleProfileInputChange}
                                        className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                        placeholder="License number"
                                    />
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="clinicLicenseExpiry"
                                            value={profileData.clinicLicenseExpiry}
                                            onChange={handleProfileInputChange}
                                            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                        />
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DOCTOR SECTION */}
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-6">Doctor</h2>
                            
                            {/* Profile Picture */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Profile Picture</label>
                                    <p className="text-xs text-[#6B7280]">This will be displayed as you display picture.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#E5E7EB] bg-gray-200 flex-shrink-0">
                                        {profileData.doctorProfilePicturePreview ? (
                                            <Image 
                                                src={profileData.doctorProfilePicturePreview} 
                                                alt="Doctor Profile" 
                                                width={128} 
                                                height={128}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="block border-2 border-dashed border-[#D0D5DD] rounded-lg p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg"
                                                onChange={(e) => handleImageUpload(e, 'doctorProfilePicture', 'doctorProfilePicturePreview')}
                                                className="hidden"
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                                                <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Text Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Name</label>
                                    <p className="text-xs text-[#6B7280]">This will reflect as the title of your profile.</p>
                                </div>
                                <input
                                    type="text"
                                    name="doctorName"
                                    value={profileData.doctorName}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Qualification</label>
                                    <p className="text-xs text-[#6B7280]">Your Top qualification.</p>
                                </div>
                                <input
                                    type="text"
                                    name="doctorQualification"
                                    value={profileData.doctorQualification}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter qualification"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Specialization</label>
                                    <p className="text-xs text-[#6B7280]">This will be reflected on your profile.</p>
                                </div>
                                <input
                                    type="text"
                                    name="doctorSpecialization"
                                    value={profileData.doctorSpecialization}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter specialization"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Email Address</label>
                                    <p className="text-xs text-[#6B7280]">This Email will be used to send emails.</p>
                                </div>
                                <input
                                    type="email"
                                    name="doctorEmail"
                                    value={profileData.doctorEmail}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Address</label>
                                    <p className="text-xs text-[#6B7280]">Your address.</p>
                                </div>
                                <input
                                    type="text"
                                    name="doctorAddress"
                                    value={profileData.doctorAddress}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Phone Number</label>
                                    <p className="text-xs text-[#6B7280]">Phone number that will be used to contact.</p>
                                </div>
                                <input
                                    type="tel"
                                    name="doctorPhone"
                                    value={profileData.doctorPhone}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Language</label>
                                    <p className="text-xs text-[#6B7280]">Language you speak.</p>
                                </div>
                                <input
                                    type="text"
                                    name="doctorLanguage"
                                    value={profileData.doctorLanguage}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter language"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">License and Expiry</label>
                                    <p className="text-xs text-[#6B7280]">This will be reflected in your profile.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        name="doctorLicense"
                                        value={profileData.doctorLicense}
                                        onChange={handleProfileInputChange}
                                        className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                        placeholder="License number"
                                    />
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="doctorLicenseExpiry"
                                            value={profileData.doctorLicenseExpiry}
                                            onChange={handleProfileInputChange}
                                            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                        />
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">License</label>
                                    <p className="text-xs text-[#6B7280]">This will be reflected in your profile.</p>
                                </div>
                                <div>
                                    <label className="block border-2 border-dashed border-[#D0D5DD] rounded-lg p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                                        <input
                                            type="file"
                                            accept=".png,.jpeg,.jpg,.pdf"
                                            onChange={(e) => handleFileUpload(e, 'doctorLicenseFile')}
                                            className="hidden"
                                        />
                                        <div className="flex flex-col items-center gap-2">
                                            <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                                            <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported.</span>
                                        </div>
                                    </label>
                                    {profileData.doctorLicenseFile && (
                                        <p className="text-xs text-[#7026A1] mt-2">{profileData.doctorLicenseFile.name}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* PATIENT SECTION */}
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-6">Patient</h2>
                            
                            {/* Profile Picture */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Profile Picture</label>
                                    <p className="text-xs text-[#6B7280]">This will be displayed as you display picture.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#E5E7EB] bg-gray-200 flex-shrink-0">
                                        {profileData.patientProfilePicturePreview ? (
                                            <Image 
                                                src={profileData.patientProfilePicturePreview} 
                                                alt="Patient Profile" 
                                                width={128} 
                                                height={128}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="block border-2 border-dashed border-[#D0D5DD] rounded-lg p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg"
                                                onChange={(e) => handleImageUpload(e, 'patientProfilePicture', 'patientProfilePicturePreview')}
                                                className="hidden"
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                                                <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Text Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Name</label>
                                    <p className="text-xs text-[#6B7280]">This will reflect as the title of your profile.</p>
                                </div>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={profileData.patientName}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Email Address</label>
                                    <p className="text-xs text-[#6B7280]">This Email will be used to send emails.</p>
                                </div>
                                <input
                                    type="email"
                                    name="patientEmail"
                                    value={profileData.patientEmail}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Address</label>
                                    <p className="text-xs text-[#6B7280]">Your address.</p>
                                </div>
                                <input
                                    type="text"
                                    name="patientAddress"
                                    value={profileData.patientAddress}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter address"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 mb-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Phone Number</label>
                                    <p className="text-xs text-[#6B7280]">Phone number that will be used to contact.</p>
                                </div>
                                <input
                                    type="tel"
                                    name="patientPhone"
                                    value={profileData.patientPhone}
                                    onChange={handleProfileInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {activeTab === "tab2" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className="bg-white rounded-lg p-6 space-y-6">
                        {/* Password Change Form */}
                        <div className="space-y-6">
                            {/* Current Password */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#202E2D]">Current password</label>
                                <input
                                    type={securityData.showPassword ? "text" : "password"}
                                    name="currentPassword"
                                    value={securityData.currentPassword}
                                    onChange={handleSecurityInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter current password"
                                />
                            </div>

                            {/* New Password */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#202E2D]">New password</label>
                                <input
                                    type={securityData.showPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={securityData.newPassword}
                                    onChange={handleSecurityInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter new password"
                                />
                                <p className="text-xs text-[#6B7280]">Your new password must be more than 8 characters.</p>
                            </div>

                            {/* Confirm New Password */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#202E2D]">Confirm new password</label>
                                <input
                                    type={securityData.showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={securityData.confirmPassword}
                                    onChange={handleSecurityInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Confirm new password"
                                />
                            </div>

                            {/* Show Password Checkbox */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="showPassword"
                                    id="showPassword"
                                    checked={securityData.showPassword}
                                    onChange={handleSecurityInputChange}
                                    className="w-4 h-4 text-[#7026A1] bg-gray-100 border-gray-300 rounded focus:ring-[#7026A1] focus:ring-2 cursor-pointer"
                                />
                                <label htmlFor="showPassword" className="ml-2 text-sm font-medium text-[#202E2D] cursor-pointer">
                                    Show Password
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {activeTab === "tab3" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className="space-y-8 pb-8">
                        {/* LOGO SECTION */}
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-2">LOGO</h2>
                            <p className="text-sm text-[#6B7280] mb-6">This will be shown in your website</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
                                <div className="flex items-center justify-center">
                                    {/* Current Logo Display */}
                                    <div className="w-40 h-40 bg-[#FFE9F4] rounded-lg flex flex-col items-center justify-center border border-[#E5E7EB]">
                                        {websiteData.logoPreview ? (
                                            <Image 
                                                src={websiteData.logoPreview} 
                                                alt="Website Logo" 
                                                width={160} 
                                                height={160}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center border-2 border-red-500">
                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 6L18 18M18 6L6 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <p className="text-sm font-semibold text-[#7026A1]">HEALTH CARE</p>
                                                <p className="text-xs text-[#6B7280] mt-1">SAMPLE TEXT</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block border-2 border-dashed border-[#7026A1] rounded-lg p-8 text-center cursor-pointer hover:border-[#5a1f7a] transition-colors">
                                        <input
                                            type="file"
                                            accept="image/png,image/jpeg,image/jpg"
                                            onChange={handleWebsiteLogoUpload}
                                            className="hidden"
                                        />
                                        <div className="flex flex-col items-center gap-3">
                                            <svg className="w-10 h-10 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span className="text-sm text-[#202E2D] font-medium">Click to upload or drag and drop</span>
                                            <span className="text-xs text-[#6B7280]">PNG, JPEG, JPEG formats are supported</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* COLOR THEME SECTION */}
                        <div className="bg-white rounded-lg p-6 relative">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-2">Color Theme</h2>
                            <p className="text-sm text-[#6B7280] mb-6">Your website will have these colors</p>
                            
                            <div className="space-y-6">
                                {/* Primary Color */}
                                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
                                    <div>
                                        <label className="block text-sm font-medium text-[#202E2D] mb-1">Primary</label>
                                        <p className="text-xs text-[#6B7280]">This will reflect as the title of your business</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-16 h-16 rounded-lg border-2 border-[#E5E7EB] cursor-pointer shadow-sm"
                                            style={{ backgroundColor: websiteData.primaryColor }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleColorPicker('primary');
                                            }}
                                            data-color-swatch
                                        />
                                        <input
                                            type="text"
                                            value={websiteData.primaryColor}
                                            onChange={(e) => handleColorChange(e.target.value, 'primary')}
                                            className="px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] w-32"
                                            placeholder="#4F46E5"
                                        />
                                    </div>
                                </div>

                                {/* Secondary Color */}
                                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
                                    <div>
                                        <label className="block text-sm font-medium text-[#202E2D] mb-1">Secondary</label>
                                        <p className="text-xs text-[#6B7280]">This will reflect as the title of your business</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-16 h-16 rounded-lg border-2 border-[#E5E7EB] cursor-pointer shadow-sm"
                                            style={{ backgroundColor: websiteData.secondaryColor }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleColorPicker('secondary');
                                            }}
                                            data-color-swatch
                                        />
                                        <input
                                            type="text"
                                            value={websiteData.secondaryColor}
                                            onChange={(e) => handleColorChange(e.target.value, 'secondary')}
                                            className="px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] w-32"
                                            placeholder="#EC4899"
                                        />
                                    </div>
                                </div>

                                {/* Linear Color */}
                                <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
                                    <div>
                                        <label className="block text-sm font-medium text-[#202E2D] mb-1">Linear</label>
                                        <p className="text-xs text-[#6B7280]">This will reflect as the title of your business</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="w-16 h-16 rounded-lg border-2 border-[#E5E7EB] shadow-sm"
                                            style={{ background: websiteData.linearColor }}
                                        />
                                        <span className="text-sm text-[#6B7280]">Gradient (auto-generated)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Color Picker Popup */}
                            {websiteData.showColorPicker && websiteData.activeColorPicker && (
                                <div ref={colorPickerRef} className="absolute right-0 top-20 bg-white border-2 border-[#E5E7EB] rounded-lg shadow-xl p-6 z-50 w-80">
                                    <div className="space-y-4">
                                        {/* Main Color Gradient Box */}
                                        <div 
                                            className="w-full h-48 rounded-lg border border-[#E5E7EB] relative overflow-hidden cursor-crosshair"
                                            style={{
                                                background: `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, hsl(${websiteData.colorPickerHue}, 100%, 50%))`
                                            }}
                                            onClick={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                const x = e.clientX - rect.left;
                                                const y = e.clientY - rect.top;
                                                const saturation = Math.round((x / rect.width) * 100);
                                                const lightness = Math.round(100 - (y / rect.height) * 100);
                                                handleSaturationLightnessChange(saturation, lightness);
                                            }}
                                        >
                                            {/* Color indicator dot */}
                                            <div
                                                className="absolute w-4 h-4 border-2 border-white rounded-full shadow-lg pointer-events-none"
                                                style={{
                                                    left: `${websiteData.colorPickerSaturation}%`,
                                                    top: `${100 - websiteData.colorPickerLightness}%`,
                                                    transform: 'translate(-50%, -50%)',
                                                    backgroundColor: websiteData[websiteData.activeColorPicker === 'primary' ? 'primaryColor' : 'secondaryColor']
                                                }}
                                            />
                                        </div>

                                        {/* Hue Slider */}
                                        <div className="relative">
                                            <input
                                                type="range"
                                                min="0"
                                                max="360"
                                                value={websiteData.colorPickerHue}
                                                onChange={(e) => handleHueChange(parseInt(e.target.value))}
                                                className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                                                style={{
                                                    background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
                                                }}
                                            />
                                        </div>

                                        {/* Opacity Slider */}
                                        <div className="relative">
                                            <label className="block text-xs text-[#6B7280] mb-1">Opacity: {websiteData.colorPickerOpacity}%</label>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={websiteData.colorPickerOpacity}
                                                onChange={(e) => {
                                                    const opacity = parseInt(e.target.value);
                                                    setWebsiteData(prev => ({
                                                        ...prev,
                                                        colorPickerOpacity: opacity
                                                    }));
                                                }}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>

                                        {/* Hex Input */}
                                        <div>
                                            <label className="block text-xs text-[#6B7280] mb-1">Hex</label>
                                            <input
                                                type="text"
                                                value={websiteData[websiteData.activeColorPicker === 'primary' ? 'primaryColor' : 'secondaryColor']}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value.startsWith('#') && (value.length <= 7)) {
                                                        handleColorChange(value, websiteData.activeColorPicker);
                                                    } else if (value.length === 0) {
                                                        // Allow clearing
                                                        setWebsiteData(prev => ({
                                                            ...prev,
                                                            [prev.activeColorPicker === 'primary' ? 'primaryColor' : 'secondaryColor']: value
                                                        }));
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    // Validate and fix hex on blur
                                                    const value = e.target.value;
                                                    if (!value.startsWith('#') || value.length < 4) {
                                                        const currentColor = websiteData[websiteData.activeColorPicker === 'primary' ? 'primaryColor' : 'secondaryColor'];
                                                        e.target.value = currentColor;
                                                    }
                                                }}
                                                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1]"
                                                placeholder="#4F46E5"
                                            />
                                        </div>

                                        {/* Saved Colors */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="block text-xs text-[#6B7280]">Saved colors:</label>
                                                <button
                                                    onClick={() => addSavedColor(websiteData[websiteData.activeColorPicker === 'primary' ? 'primaryColor' : 'secondaryColor'])}
                                                    className="text-xs text-[#7026A1] hover:text-[#5a1f7a] font-medium"
                                                >
                                                    + Add
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {websiteData.savedColors.map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-8 h-8 rounded-full border-2 border-[#E5E7EB] cursor-pointer hover:scale-110 transition-transform"
                                                        style={{ backgroundColor: color }}
                                                        onClick={() => handleColorChange(color, websiteData.activeColorPicker)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* BUSINESS NAME SECTION */}
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-[#202E2D] mb-2">Business Name</h2>
                            <p className="text-sm text-[#6B7280] mb-6">This will be the title name</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
                                <div>
                                    <label className="block text-sm font-medium text-[#202E2D] mb-1">Business Name</label>
                                    <p className="text-xs text-[#6B7280]">Enter your business name</p>
                                </div>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={websiteData.businessName}
                                    onChange={handleWebsiteInputChange}
                                    className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                    placeholder="Enter business name"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {activeTab === "tab4" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className="bg-white rounded-lg p-6 space-y-6">
                        {/* Public Key Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#202E2D]">Public Key</label>
                            <input
                                type="password"
                                name="publicKey"
                                value={integrationData.publicKey}
                                onChange={handleIntegrationInputChange}
                                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Private Key Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#202E2D]">Private Key</label>
                            <input
                                type="password"
                                name="privateKey"
                                value={integrationData.privateKey}
                                onChange={handleIntegrationInputChange}
                                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                placeholder="••••••••"
                            />
                            <p className="text-xs text-[#6B7280]">Your new password must be more than 8 characters.</p>
                        </div>
                    </div>
                </div>
                )}
                {activeTab === "tab5" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className="pb-8">
                        {/* Header with Breadcrumb and Update Button */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <button onClick={() => setActiveTab('tab1')} className="text-[#6B7280] hover:text-[#7026A1] transition-colors">
                                    <ArrowBigLeft className="w-5 h-5" />
                                </button>
                                <span className="text-[#6B7280]">Settings</span>
                                <ChevronRight className="text-[#6B7280] w-4 h-4" />
                                <span className="text-xl font-semibold text-[#202E2D]">Billing</span>
                            </div>
                            <button className="bg-[#7026A1] text-white px-6 py-2 rounded-lg hover:bg-[#5a1f7f] transition-colors font-medium">
                                Update
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Subscription Plan Card - Centered */}
                            <div className="flex justify-center">
                                <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                                    <h2 className="text-xl font-semibold text-[#202E2D] mb-6">Subscription Plan</h2>
                                    
                                    <div className="space-y-4">
                                        {/* Basic Plan */}
                                        <div 
                                            onClick={() => handlePlanSelect('basic')}
                                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                                billingData.selectedPlan === 'basic' 
                                                    ? 'bg-[#7026A1] border-[#7026A1] text-white' 
                                                    : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#202E2D]'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="font-semibold">Basic plan</h3>
                                                        <span className={`font-semibold ${billingData.selectedPlan === 'basic' ? 'text-white' : 'text-[#202E2D]'}`}>$10/month</span>
                                                    </div>
                                                    <p className={`text-sm ${billingData.selectedPlan === 'basic' ? 'text-white/90' : 'text-[#6B7280]'}`}>
                                                        Includes up to 10 users, 20GB individual data and access to all features.
                                                    </p>
                                                </div>
                                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                                    billingData.selectedPlan === 'basic' 
                                                        ? 'border-white bg-white' 
                                                        : 'border-[#D1D5DB] bg-white'
                                                }`}>
                                                    {billingData.selectedPlan === 'basic' && (
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="#7026A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Plan */}
                                        <div 
                                            onClick={() => handlePlanSelect('business')}
                                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                                billingData.selectedPlan === 'business' 
                                                    ? 'bg-[#7026A1] border-[#7026A1] text-white' 
                                                    : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#202E2D]'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="font-semibold">Business plan</h3>
                                                        <span className={`font-semibold ${billingData.selectedPlan === 'business' ? 'text-white' : 'text-[#202E2D]'}`}>$20/month</span>
                                                    </div>
                                                    <p className={`text-sm ${billingData.selectedPlan === 'business' ? 'text-white/90' : 'text-[#6B7280]'}`}>
                                                        Includes up to 20 users, 40GB individual data and access to all features.
                                                    </p>
                                                </div>
                                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                                    billingData.selectedPlan === 'business' 
                                                        ? 'border-white bg-white' 
                                                        : 'border-[#D1D5DB] bg-white'
                                                }`}>
                                                    {billingData.selectedPlan === 'business' && (
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="#7026A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enterprise Plan */}
                                        <div 
                                            onClick={() => handlePlanSelect('enterprise')}
                                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                                billingData.selectedPlan === 'enterprise' 
                                                    ? 'bg-[#7026A1] border-[#7026A1] text-white' 
                                                    : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#202E2D]'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="font-semibold">Enterprise plan</h3>
                                                        <span className={`font-semibold ${billingData.selectedPlan === 'enterprise' ? 'text-white' : 'text-[#202E2D]'}`}>$40/month</span>
                                                    </div>
                                                    <p className={`text-sm ${billingData.selectedPlan === 'enterprise' ? 'text-white/90' : 'text-[#6B7280]'}`}>
                                                        Unlimited users, unlimited individual data and access to all features.
                                                    </p>
                                                </div>
                                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                                    billingData.selectedPlan === 'enterprise' 
                                                        ? 'border-white bg-white' 
                                                        : 'border-[#D1D5DB] bg-white'
                                                }`}>
                                                    {billingData.selectedPlan === 'enterprise' && (
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="#7026A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Details and Payment Method - Side by Side */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Card Details Card */}
                                <div className="bg-white rounded-lg p-6">
                                    <h2 className="text-xl font-semibold text-[#202E2D] mb-6">Card details</h2>
                                    
                                    <div className="space-y-4">
                                        {/* Name on card */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#202E2D]">Name on card</label>
                                            <input
                                                type="text"
                                                name="cardName"
                                                value={billingData.cardName}
                                                onChange={handleBillingInputChange}
                                                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                                placeholder="Enter name on card"
                                            />
                                        </div>

                                        {/* Expiry */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#202E2D]">Expiry</label>
                                            <input
                                                type="text"
                                                name="cardExpiry"
                                                value={billingData.cardExpiry}
                                                onChange={handleBillingInputChange}
                                                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                                placeholder="MM / YY"
                                            />
                                        </div>

                                        {/* Card Number */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#202E2D]">Card number</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    value={billingData.cardNumber}
                                                    onChange={handleBillingInputChange}
                                                    className="w-full px-4 py-2 pl-12 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                                    placeholder="1234 1234 1234 1234"
                                                />
                                                {/* Mastercard Logo */}
                                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="16" rx="2" fill="#EB001B"/>
                                                        <rect x="12" width="12" height="16" rx="2" fill="#F79E1B"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CVV */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-[#202E2D]">CVV</label>
                                            <input
                                                type="password"
                                                name="cardCVV"
                                                value={billingData.cardCVV}
                                                onChange={handleBillingInputChange}
                                                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7026A1] focus:border-transparent"
                                                placeholder="•••"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method Card */}
                                <div className="bg-white rounded-lg p-6">
                                    <h2 className="text-xl font-semibold text-[#202E2D] mb-2">Payment method</h2>
                                    <p className="text-sm text-[#6B7280] mb-6">Change how you pay for your plan.</p>
                                    
                                    <div className="bg-white border-2 border-[#E5E7EB] rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                {/* Visa Logo - Blue */}
                                                <div className="w-12 h-8 bg-[#1434CB] rounded flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold text-[10px] tracking-wide">VISA</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-[#202E2D]">{billingData.paymentMethod.type} ending in {billingData.paymentMethod.last4}</p>
                                                    <p className="text-sm text-[#6B7280]">Expiry {billingData.paymentMethod.expiry}</p>
                                                    <p className="text-sm text-[#6B7280]">{billingData.paymentMethod.email}</p>
                                                </div>
                                            </div>
                                            <button className="flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                                                <Pencil className="w-4 h-4 text-[#6B7280]" />
                                                <span className="text-sm text-[#6B7280]">Edit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {activeTab === "tab6" && (
               <div>
                    <h2 className="text-xl font-semibold mb-2">Settings6</h2>
                    <p>This is the Settings tab content.</p>
                </div>
                )}
                {activeTab === "tab7" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
                    <div className="bg-white rounded-lg p-6">
                        {/* Form Creation Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-[#202E2D]">Form Creation</h2>
                            <button
                                onClick={handleAddTemplate}
                                className="btn btn-primary bg-[#7026A1] hover:bg-[#5a1f7a] text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                <span>Add</span>
                            </button>
                        </div>

                        {/* Form Creation Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-[#E5E7EB]">
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">ID No</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">Form Name</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">Placement</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">Used For</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">Created By</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">Creation Date</th>
                                        <th className="text-left py-3 px-4 text-sm font-medium text-[#6B7280]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                                                <path d="M8 4V4.01M8 8V8.01M8 12V12.01" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {templatesData.map((template) => (
                                        <tr key={template.id} className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]">
                                            <td className="py-4 px-4 text-sm text-[#202E2D]">{template.id}</td>
                                            <td className="py-4 px-4 text-sm text-[#202E2D] font-medium">{template.formName}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex gap-2">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        template.placement.patient 
                                                            ? 'bg-[#FFE9F4] text-[#7026A1]' 
                                                            : 'bg-[#F3F4F6] text-[#6B7280]'
                                                    }`}>
                                                        Patient Profile
                                                    </span>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        template.placement.doctor 
                                                            ? 'bg-[#FFE9F4] text-[#7026A1]' 
                                                            : 'bg-[#F3F4F6] text-[#6B7280]'
                                                    }`}>
                                                        Doctor Profile
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-sm text-[#202E2D]">{template.usedFor}</td>
                                            <td className="py-4 px-4 text-sm text-[#202E2D]">{template.createdBy}</td>
                                            <td className="py-4 px-4 text-sm text-[#202E2D]">{template.creationDate}</td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => handleEditTemplate(template.id)}
                                                        className="text-[#6B7280] hover:text-[#7026A1] transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteTemplate(template.id)}
                                                        className="text-[#D91B1B] hover:text-[#B91C1C] transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )}
                {activeTab === "tab8" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Settings6</h2>
                    <p>This is the Settings tab content.</p>
                </div>
                )}
                {activeTab === "tab9" && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Settings6</h2>
                    <p>This is the Settings tab content.</p>
                </div>
                )}
            </div>
        </div>
</>
);
}