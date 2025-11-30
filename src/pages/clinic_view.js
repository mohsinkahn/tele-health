"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import ClientViewComponent from "../components/ClientView";
import Doctor from "../components/Doctor";
import Pateint from "../components/Patient"
import Clinic_View_Appoint_Table from "../components/clinic_view_appointment_table"
import AddPaymentModal from "@/components/AddPaymentModal";
import BookAppointModal from "@/components/BookAppointModal";
import AddFormModal from "@/components/AddFormModal";


import Payment_Table from "../components/payment_table"

import Clinic_View_Form from "../components/clinic_view_form_table"

import { ChevronRight,Plus,Download,Pencil,Trash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ClinicViewPage() {

const [showModal, setShowModal] = useState(false);

const [showModal2, setShowModal2] = useState(false);
const [showModal3, setShowModal3] = useState(false);

const router = useRouter();
const { id } = router.query;
const [ClientId, setClientId] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (id) {
setClientId(id);
setTimeout(() => setLoading(false), 1500); // simulate delay
}
}, [id]);

const [activeTab, setActiveTab] = useState("tab1");

const tabTitles = {
tab1: "Profile",
tab2: "Doctors",
tab3: "Patients",
tab4: "Appointments",
tab5: "Payments",
tab6: "Forms",
};

const tabIcons = {
tab1: (
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0.599609 15.5996H1.43294M15.5996 15.5996H14.7663M1.43294 15.5996V3.79961C1.43294 2.6795 1.43294 2.11945 1.65093 1.69163C1.84268 1.3153 2.14864 1.00934 2.52496 0.817596C2.95279 0.599609 3.51284 0.599609 4.63294 0.599609H8.23294C9.35305 0.599609 9.9131 0.599609 10.3409 0.817596C10.7172 1.00934 11.0232 1.3153 11.215 1.69163C11.4329 2.11945 11.4329 2.6795 11.4329 3.79961V4.76628M1.43294 15.5996H4.76628M11.4329 15.5996V4.76628M11.4329 15.5996H14.7663M11.4329 15.5996H8.09961M11.4329 4.76628H13.1663C13.7263 4.76628 14.0064 4.76628 14.2203 4.87527C14.4084 4.97114 14.5614 5.12412 14.6573 5.31229C14.7663 5.5262 14.7663 5.80622 14.7663 6.36628V15.5996M6.43294 3.93294V7.26628M4.76628 5.59961H8.09961M4.76628 15.5996V12.1996C4.76628 11.6396 4.76628 11.3595 4.87527 11.1456C4.97114 10.9575 5.12412 10.8045 5.31229 10.7086C5.5262 10.5996 5.80622 10.5996 6.36628 10.5996H6.49961C7.05966 10.5996 7.33969 10.5996 7.5536 10.7086C7.74176 10.8045 7.89474 10.9575 7.99062 11.1456C8.09961 11.3595 8.09961 11.6396 8.09961 12.1996V15.5996M4.76628 15.5996H8.09961"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab2: (
<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3.09961 5.59961H8.09961M5.59961 3.09961L5.59961 8.09961M10.5996 8.09961H13.9329M10.5996 10.5996H13.9329M3.26628 13.9329H14.5996C15.533 13.9329 15.9997 13.9329 16.3563 13.7513C16.6699 13.5915 16.9248 13.3365 17.0846 13.0229C17.2663 12.6664 17.2663 12.1997 17.2663 11.2663V3.26628C17.2663 2.33286 17.2663 1.86614 17.0846 1.50963C16.9248 1.19602 16.6699 0.941054 16.3563 0.781265C15.9997 0.599609 15.533 0.599609 14.5996 0.599609H3.26628C2.33285 0.599609 1.86614 0.599609 1.50963 0.781265C1.19602 0.941054 0.941054 1.19602 0.781265 1.50963C0.599609 1.86614 0.599609 2.33286 0.599609 3.26628V11.2663C0.599609 12.1997 0.599609 12.6664 0.781265 13.0229C0.941054 13.3365 1.19602 13.5915 1.50963 13.7513C1.86614 13.9329 2.33286 13.9329 3.26628 13.9329Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab3: (
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8.93294 11.0163C11.8094 11.0163 14.1413 8.68443 14.1413 5.80794C14.1413 2.93146 11.8094 0.599609 8.93294 0.599609C6.05646 0.599609 3.72461 2.93146 3.72461 5.80794C3.72461 8.68443 6.05646 11.0163 8.93294 11.0163ZM8.93294 11.0163C4.33057 11.0163 0.599609 13.8145 0.599609 17.2663M8.93294 11.0163C13.5353 11.0163 17.2663 13.8145 17.2663 17.2663"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab4: (
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M12.2663 0.631591V6.6048C12.2663 7.09038 12.2663 7.33317 12.165 7.467C12.0768 7.5836 11.942 7.65575 11.7961 7.66446C11.6286 7.67446 11.4265 7.53979 11.0225 7.27044L10.21 6.72878C10.0497 6.62186 9.96947 6.5684 9.8828 6.54763C9.8062 6.52928 9.72635 6.52928 9.64976 6.54763C9.56308 6.5684 9.48289 6.62186 9.32252 6.72878L8.51004 7.27044C8.10601 7.53979 7.90399 7.67446 7.73648 7.66446C7.59054 7.65575 7.45572 7.5836 7.36752 7.467C7.26628 7.33317 7.26628 7.09038 7.26628 6.6048V0.599609M7.26628 0.599609H5.93294C4.0661 0.599609 3.13268 0.599609 2.41964 0.962921C1.79243 1.2825 1.2825 1.79243 0.962921 2.41964C0.599609 3.13268 0.599609 4.0661 0.599609 5.93294V10.2663C0.599609 12.1331 0.599609 13.0665 0.962921 13.7796C1.2825 14.4068 1.79243 14.9167 2.41964 15.2363C3.13268 15.5996 4.0661 15.5996 5.93294 15.5996H10.2663C12.1331 15.5996 13.0665 15.5996 13.7796 15.2363C14.4068 14.9167 14.9167 14.4068 15.2363 13.7796C15.5996 13.0665 15.5996 12.1331 15.5996 10.2663V5.93294C15.5996 4.0661 15.5996 3.13268 15.2363 2.41964C14.9167 1.79243 14.4068 1.2825 13.7796 0.962921C13.2334 0.684652 12.558 0.619516 11.4329 0.604269C11.0891 0.599609 10.7033 0.599609 10.2663 0.599609H8.09961H7.26628Z"
        stroke="#6B7280" stroke-width="1.2" />
</svg>
),
tab5: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M3.93294 3.93294H10.5996M3.93294 7.26628H10.5996M3.93294 10.5996H10.5996M2.26628 0.599609H12.2663C13.1868 0.599609 13.9329 1.3458 13.9329 2.26628V14.5696C13.9329 15.8085 12.6291 16.6143 11.5209 16.0603L11.345 15.9723C10.8758 15.7377 10.3235 15.7377 9.85425 15.9723L8.01163 16.8936C7.54242 17.1282 6.99013 17.1282 6.52092 16.8936L4.6783 15.9723C4.20909 15.7377 3.6568 15.7377 3.18759 15.9723L3.01163 16.0603C1.90346 16.6143 0.599609 15.8085 0.599609 14.5696V2.26628C0.599609 1.3458 1.3458 0.599609 2.26628 0.599609Z"
        stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
</svg>
),
tab6: (
<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.50963 17.0846L1.78202 16.55L1.50963 17.0846ZM0.781265 16.3563L1.31587 16.0839L0.781265 16.3563ZM13.7513 16.3563L13.2167 16.0839L13.7513 16.3563ZM13.0229 17.0846L12.7505 16.55L13.0229 17.0846ZM13.0229 0.781265L12.7505 1.31587L13.0229 0.781265ZM13.7513 1.50963L13.2167 1.78202L13.7513 1.50963ZM1.50963 0.781265L1.78202 1.31587L1.50963 0.781265ZM0.781265 1.50963L1.31587 1.78202L0.781265 1.50963ZM3.93294 3.33294C3.60157 3.33294 3.33294 3.60157 3.33294 3.93294C3.33294 4.26431 3.60157 4.53294 3.93294 4.53294V3.93294V3.33294ZM10.5996 4.53294C10.931 4.53294 11.1996 4.26431 11.1996 3.93294C11.1996 3.60157 10.931 3.33294 10.5996 3.33294V3.93294V4.53294ZM3.93294 6.66628C3.60157 6.66628 3.33294 6.93491 3.33294 7.26628C3.33294 7.59765 3.60157 7.86628 3.93294 7.86628V7.26628V6.66628ZM10.5996 7.86628C10.931 7.86628 11.1996 7.59765 11.1996 7.26628C11.1996 6.93491 10.931 6.66628 10.5996 6.66628V7.26628V7.86628ZM10.5739 11.0154L11.1693 11.0895L11.1693 11.0895L10.5739 11.0154ZM3.95863 11.0154L4.55404 10.9414L4.55404 10.9414L3.95863 11.0154ZM3.26628 0.599609V1.19961H11.2663V0.599609V-0.000390649H3.26628V0.599609ZM13.9329 3.26628H13.3329V14.5996H13.9329H14.5329V3.26628H13.9329ZM11.2663 17.2663V16.6663H3.26628V17.2663V17.8663H11.2663V17.2663ZM0.599609 14.5996H1.19961V3.26628H0.599609H-0.000390649V14.5996H0.599609ZM3.26628 17.2663V16.6663C2.78966 16.6663 2.46829 16.6658 2.22047 16.6456C1.97966 16.6259 1.8616 16.5906 1.78202 16.55L1.50963 17.0846L1.23723 17.6192C1.51417 17.7603 1.80773 17.8158 2.12275 17.8416C2.43077 17.8667 2.80947 17.8663 3.26628 17.8663V17.2663ZM0.599609 14.5996H-0.000390649C-0.000390649 15.0564 -0.000857294 15.4351 0.024309 15.7431C0.0500475 16.0582 0.105553 16.3517 0.246661 16.6287L0.781265 16.3563L1.31587 16.0839C1.27532 16.0043 1.24 15.8862 1.22032 15.6454C1.20008 15.3976 1.19961 15.0762 1.19961 14.5996H0.599609ZM1.50963 17.0846L1.78202 16.55C1.58131 16.4478 1.41813 16.2846 1.31587 16.0839L0.781265 16.3563L0.246661 16.6287C0.463975 17.0552 0.810731 17.4019 1.23723 17.6192L1.50963 17.0846ZM13.9329 14.5996H13.3329C13.3329 15.0762 13.3325 15.3976 13.3122 15.6454C13.2926 15.8862 13.2572 16.0043 13.2167 16.0839L13.7513 16.3563L14.2859 16.6287C14.427 16.3517 14.4825 16.0582 14.5082 15.7431C14.5334 15.4351 14.5329 15.0564 14.5329 14.5996H13.9329ZM11.2663 17.2663V17.8663C11.7231 17.8663 12.1018 17.8667 12.4098 17.8416C12.7248 17.8158 13.0184 17.7603 13.2953 17.6192L13.0229 17.0846L12.7505 16.55C12.671 16.5906 12.5529 16.6259 12.3121 16.6456C12.0643 16.6658 11.7429 16.6663 11.2663 16.6663V17.2663ZM13.7513 16.3563L13.2167 16.0839C13.1144 16.2846 12.9512 16.4478 12.7505 16.55L13.0229 17.0846L13.2953 17.6192C13.7218 17.4019 14.0686 17.0552 14.2859 16.6287L13.7513 16.3563ZM11.2663 0.599609V1.19961C11.7429 1.19961 12.0643 1.20008 12.3121 1.22032C12.5529 1.24 12.671 1.27532 12.7505 1.31587L13.0229 0.781265L13.2953 0.246661C13.0184 0.105553 12.7248 0.0500475 12.4098 0.024309C12.1018 -0.000857294 11.7231 -0.000390649 11.2663 -0.000390649V0.599609ZM13.9329 3.26628H14.5329C14.5329 2.80947 14.5334 2.43077 14.5082 2.12275C14.4825 1.80773 14.427 1.51417 14.2859 1.23723L13.7513 1.50963L13.2167 1.78202C13.2572 1.8616 13.2926 1.97966 13.3122 2.22047C13.3325 2.46829 13.3329 2.78966 13.3329 3.26628H13.9329ZM13.0229 0.781265L12.7505 1.31587C12.9512 1.41813 13.1144 1.58131 13.2167 1.78202L13.7513 1.50963L14.2859 1.23723C14.0686 0.81073 13.7218 0.463974 13.2953 0.246661L13.0229 0.781265ZM3.26628 0.599609V-0.000390649C2.80947 -0.000390649 2.43077 -0.000857294 2.12275 0.024309C1.80773 0.0500475 1.51417 0.105553 1.23723 0.246661L1.50963 0.781265L1.78202 1.31587C1.8616 1.27532 1.97966 1.24 2.22047 1.22032C2.46829 1.20008 2.78966 1.19961 3.26628 1.19961V0.599609ZM0.599609 3.26628H1.19961C1.19961 2.78967 1.20008 2.46829 1.22032 2.22047C1.24 1.97966 1.27532 1.8616 1.31587 1.78202L0.781265 1.50963L0.246661 1.23723C0.105553 1.51417 0.0500475 1.80773 0.024309 2.12275C-0.000857294 2.43077 -0.000390649 2.80947 -0.000390649 3.26628H0.599609ZM1.50963 0.781265L1.23723 0.246661C0.81073 0.463974 0.463974 0.81073 0.246661 1.23723L0.781265 1.50963L1.31587 1.78202C1.41813 1.58131 1.58131 1.41813 1.78202 1.31587L1.50963 0.781265ZM3.93294 3.93294V4.53294H10.5996V3.93294V3.33294H3.93294V3.93294ZM3.93294 7.26628V7.86628H10.5996V7.26628V6.66628H3.93294V7.26628ZM10.5739 11.0154L9.97852 10.9414C9.81076 12.2894 8.65993 13.3329 7.26628 13.3329V13.9329V14.5329C9.27288 14.5329 10.9277 13.0309 11.1693 11.0895L10.5739 11.0154ZM7.26628 13.9329V13.3329C5.87262 13.3329 4.72179 12.2894 4.55404 10.9414L3.95863 11.0154L3.36322 11.0895C3.60481 13.0309 5.25968 14.5329 7.26628 14.5329V13.9329ZM11.0163 10.5996V11.1996H13.9329V10.5996V9.99961H11.0163V10.5996ZM3.51628 10.5996V9.99961H0.599609V10.5996V11.1996H3.51628V10.5996ZM3.95863 11.0154L4.55404 10.9414C4.49408 10.4596 4.09421 9.99961 3.51628 9.99961V10.5996V11.1996C3.4622 11.1996 3.41993 11.1763 3.39678 11.154C3.37579 11.1337 3.36592 11.1112 3.36322 11.0895L3.95863 11.0154ZM10.5739 11.0154L11.1693 11.0895C11.1666 11.1112 11.1568 11.1337 11.1358 11.154C11.1126 11.1763 11.0704 11.1996 11.0163 11.1996V10.5996V9.99961C10.4383 9.99961 10.0385 10.4596 9.97852 10.9414L10.5739 11.0154Z"
        fill="#6B7280" />
</svg>
),
};

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
            Loading Clinic View Page Details...
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
                        <h1 className="text-[#6B7280]">Clinics</h1>
                    </div>
                    <div>
                        <ChevronRight className="text-[#6B7280] w-5" />
                    </div>

                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[#6B7280]">Cross Head Hospital</h1>
                    </div>
                    <div>
                        <ChevronRight className="text-[#6B7280] w-5" />
                    </div>

                </div>
                <div>
                    <h1 className="text-2xl font-[500] text-[#7026A1]">{tabTitles[activeTab]}</h1>
                </div>
            </div>
          
            <div className="flex gap-3 items-center">

                {/* ====== TAB 1: Edit + Delete ====== */}
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
                </>
                )}

                {/* ====== TAB 2: Add Doc ====== */}
                {tabTitles[activeTab] === "Doctors" && (
                <>
                    <div className="relative">
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
                    <Link href="/adddoctor" className="btn btn-primary">
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Add New</span>
                    </Link>
                </>

                )}

                {/* ====== TAB 3: Add Patient ====== */}
                {tabTitles[activeTab] === "Patients" && (
                <>
                    <div className="relative">
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
                    <Link href="/addpatient" className="btn btn-primary">
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Add New</span>
                    </Link>
                </>
                )}

                {/* ====== TAB 4: Add Appointment ====== */}
                {tabTitles[activeTab] === "Appointments" && (
                <>
                    <div className="relative">
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
                    <Link href="#" className="btn btn-primary"
                    onClick={()=> setShowModal(true)}
                    >
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Add New</span>
                    </Link>
                  <BookAppointModal isOpen={showModal} onClose={()=> setShowModal(false)}/>
                </>
                )}

                {/* ====== TAB 5: Add Payment ====== */}
                {tabTitles[activeTab] === "Payments" && (
                <>
                    <div className="relative">
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
                    <Link href="#" className="btn btn-primary"
                    onClick={()=> setShowModal(true)}
                    >
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Upgrade Plan</span>
                    </Link>
                    <AddPaymentModal isOpen={showModal} onClose={()=> setShowModal(false)}/>
                </>
                )}

                {/* ====== TAB 6: Add Form ====== */}
                {tabTitles[activeTab] === "Forms" && (
                <>
                    <div className="relative">
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
                    <Link href="#" className="btn btn-primary"
                    onClick={()=> setShowModal3(true)}
                    >
                    <svg width="14" height="14" className="inline-block">
                        <path d="M6.999 1.166v11.667M1.166 7h11.667" stroke="white" strokeWidth="1.67" />
                    </svg>
                    <span>Add Form</span>
                    </Link>
                    <AddFormModal isOpen={showModal3} onClose={()=> setShowModal3(false)}/>
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

                {["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"].map((tab) => (
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
            <div className="flex-1   px-6  lg:mt-[60px]">
                {activeTab === "tab1" && (
                <div className="overflow-auto lg:max-h-[calc(100vh-230px)]  max-h-[calc(100vh-425px)]">
                    <div className=" grid lg:grid-cols-1 grid-cols-1 gap-3">

                        <div className="h-fit">

                            <div className="bg-white rounded-lg p-4">
                                <div // className="bg-[url('/back.png')] bg-cover bg-no-repeat bg-center"
                                    className="back-img px-20 py-15 rounded-lg">
                                    <div className="lg:flex lg:justify-between lg:items-center grid grid-cols-1">
                                        <div>
                                            <p className="text-white text-5xl">
                                                Cross Head <br></br> Hospital
                                            </p>
                                            <p className="text-white my-5">
                                                Package 1
                                            </p>
                                            <button type="button" className="btn btn-primary">
                                                Update Package
                                            </button>
                                        </div>
                                        <div>
                                            <Image src="/hos-logo.png" width={250} height={250} alt="hospital logo"
                                                className="object-contain mx-auto rounded-full" />
                                        </div>
                                    </div>

                                </div>
                                <div className="bg-[#F9FAFB] my-4 rounded-lg p-3">
                                    <div className=" grid lg:grid-cols-4 grid-cols-1 gap-3 ">

                                        <div
                                            className="bg-white rounded-2xl mt-3 text-center pt-6 pb-6 border border-[#EAEAEA]">
                                            <div>
                                                <h2 className="text-[#56555C] ">Total Appointments</h2>
                                                <p className="text-[#7026A1] text-3xl font-medium">
                                                    5k
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white rounded-2xl mt-3 text-center pt-6 pb-6 border border-[#EAEAEA]">
                                            <div>
                                                <h2 className="text-[#56555C] ">Total Doctors</h2>
                                                <p className="text-[#7026A1] text-3xl font-medium">
                                                    16
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white rounded-2xl mt-3 text-center pt-6 pb-6 border border-[#EAEAEA]">
                                            <div>
                                                <h2 className="text-[#56555C]  ">Total Patients</h2>
                                                <p className="text-[#7026A1] text-3xl font-medium">
                                                    20
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white rounded-2xl mt-3 text-center pt-6 pb-6 border border-[#EAEAEA]">
                                            <div>
                                                <h2 className="text-[#56555C]  ">Total Revenue</h2>
                                                <p className="text-[#7026A1] text-3xl font-medium">
                                                    $36k
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid lg:grid-cols-3 grid-cols-1 my-10 mx-30 ">
                                        <div className="flex gap-2 items-center pt-3 ">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.65482 7.36887L1.47631 8.54738C0.174563 9.84913 0.174563 11.9597 1.47631 13.2614C2.77806 14.5632 4.88861 14.5632 6.19036 13.2614L7.36887 12.0829M7.36887 2.65482L8.54738 1.47631C9.84913 0.174563 11.9597 0.174563 13.2614 1.47631C14.5632 2.77806 14.5632 4.88861 13.2614 6.19036L12.0829 7.36887M5.01201 9.72605L9.72606 5.012"
                                                            stroke="#7026A1" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Website</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">Dental.com</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 pb-3 pr-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1.33333 1.33333L7.8101 6.37082C8.41195 6.83892 9.25472 6.83892 9.85657 6.37082L16.3333 1.33333M3.16667 13.8333H14.5C15.4334 13.8333 15.9001 13.8333 16.2567 13.6517C16.5703 13.4919 16.8252 13.2369 16.985 12.9233C17.1667 12.5668 17.1667 12.1001 17.1667 11.1667V3.16667C17.1667 2.23325 17.1667 1.76654 16.985 1.41002C16.8252 1.09641 16.5703 0.841445 16.2567 0.681656C15.9001 0.5 15.4334 0.5 14.5 0.5H3.16667C2.23325 0.5 1.76654 0.5 1.41002 0.681656C1.09641 0.841445 0.841445 1.09641 0.681656 1.41002C0.5 1.76654 0.5 2.23325 0.5 3.16667V11.1667C0.5 12.1001 0.5 12.5668 0.681656 12.9233C0.841445 13.2369 1.09641 13.4919 1.41002 13.6517C1.76654 13.8333 2.23325 13.8333 3.16667 13.8333Z"
                                                            stroke="#7026A1" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Email Address</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">Clearsmile@dental.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 ">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.65022 5.29596C5.18017 6.39974 5.9026 7.43424 6.81751 8.34916C7.73242 9.26407 8.76693 9.9865 9.8707 10.5164C9.96565 10.562 10.0131 10.5848 10.0732 10.6023C10.2867 10.6646 10.5488 10.6199 10.7296 10.4904C10.7804 10.454 10.824 10.4105 10.911 10.3234C11.1772 10.0572 11.3103 9.92413 11.4441 9.83711C11.9489 9.50894 12.5996 9.50894 13.1043 9.83711C13.2382 9.92413 13.3713 10.0572 13.6375 10.3234L13.7858 10.4718C14.1905 10.8765 14.3928 11.0788 14.5027 11.2961C14.7213 11.7282 14.7213 12.2386 14.5027 12.6708C14.3928 12.888 14.1905 13.0904 13.7858 13.495L13.6658 13.6151C13.2625 14.0183 13.0609 14.22 12.7868 14.374C12.4826 14.5448 12.0101 14.6677 11.6612 14.6667C11.3468 14.6657 11.1319 14.6047 10.7021 14.4827C8.39241 13.8272 6.21294 12.5903 4.39467 10.772C2.5764 8.95373 1.33949 6.77425 0.683921 4.46455C0.561935 4.03477 0.500942 3.81987 0.500007 3.50545C0.498968 3.15654 0.621833 2.68409 0.792713 2.37989C0.946709 2.10575 1.14834 1.90412 1.55161 1.50085L1.67164 1.38083C2.07629 0.976171 2.27862 0.773845 2.49592 0.663937C2.92807 0.445354 3.43843 0.445354 3.87058 0.663937C4.08788 0.773844 4.29021 0.976171 4.69486 1.38082L4.84324 1.5292C5.10944 1.7954 5.24254 1.9285 5.32956 2.06234C5.65773 2.56709 5.65773 3.21778 5.32956 3.72253C5.24254 3.85637 5.10944 3.98947 4.84324 4.25567C4.7562 4.34271 4.71268 4.38623 4.67625 4.4371C4.5468 4.61788 4.5021 4.88001 4.56433 5.09348C4.58184 5.15355 4.60463 5.20102 4.65022 5.29596Z"
                                                            stroke="#7026A1" stroke-linecap="round"
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

                                                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10.5 7.16667C10.5 9.00762 9.00762 10.5 7.16667 10.5C5.32572 10.5 3.83333 9.00762 3.83333 7.16667C3.83333 5.32572 5.32572 3.83333 7.16667 3.83333C9.00762 3.83333 10.5 5.32572 10.5 7.16667Z"
                                                            stroke="#7026A1" />
                                                        <path
                                                            d="M13.8333 7.16667C13.8333 10.8486 8.83333 17.1667 7.16667 17.1667C5.5 17.1667 0.5 10.8486 0.5 7.16667C0.5 3.48477 3.48477 0.5 7.16667 0.5C10.8486 0.5 13.8333 3.48477 13.8333 7.16667Z"
                                                            stroke="#7026A1" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">Address</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">123 Main Street, Anytown, CA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 ">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10.5 3.83333H13.8333M10.5 7.16667H13.8333M10.5 10.5H13.8333M3.16667 13.8333H14.5C15.4334 13.8333 15.9001 13.8333 16.2567 13.6517C16.5703 13.4919 16.8252 13.2369 16.985 12.9233C17.1667 12.5668 17.1667 12.1001 17.1667 11.1667V3.16667C17.1667 2.23325 17.1667 1.76654 16.985 1.41002C16.8252 1.09641 16.5703 0.841445 16.2567 0.681656C15.9001 0.5 15.4334 0.5 14.5 0.5H3.16667C2.23325 0.5 1.76654 0.5 1.41002 0.681656C1.09641 0.841445 0.841445 1.09641 0.681656 1.41002C0.5 1.76654 0.5 2.23325 0.5 3.16667V11.1667C0.5 12.1001 0.5 12.5668 0.681656 12.9233C0.841445 13.2369 1.09641 13.4919 1.41002 13.6517C1.76654 13.8333 2.23325 13.8333 3.16667 13.8333ZM4.25 7.16667H6.75C6.98012 7.16667 7.16667 6.98012 7.16667 6.75V4.25C7.16667 4.01988 6.98012 3.83333 6.75 3.83333H4.25C4.01988 3.83333 3.83333 4.01988 3.83333 4.25V6.75C3.83333 6.98012 4.01988 7.16667 4.25 7.16667Z"
                                                            stroke="#7026A1" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">License Number</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">34-34323-se43</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center pt-3 pb-3 pr-6">
                                            <div>
                                                <div className="bg-white rounded-lg p-4">

                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.5 8.33366H17.5M6.66667 5.00033V1.66699M13.3333 5.00033V1.66699M7.83333 18.3337H12.1667C14.0335 18.3337 14.9669 18.3337 15.68 17.9703C16.3072 17.6508 16.8171 17.1408 17.1367 16.5136C17.5 15.8006 17.5 14.8672 17.5 13.0003V8.66699C17.5 6.80015 17.5 5.86673 17.1367 5.15369C16.8171 4.52648 16.3072 4.01655 15.68 3.69697C14.9669 3.33366 14.0335 3.33366 12.1667 3.33366H7.83333C5.96649 3.33366 5.03307 3.33366 4.32003 3.69697C3.69282 4.01655 3.18289 4.52648 2.86331 5.15369C2.5 5.86673 2.5 6.80015 2.5 8.66699V13.0003C2.5 14.8672 2.5 15.8006 2.86331 16.5136C3.18289 17.1408 3.69282 17.6508 4.32003 17.9703C5.03307 18.3337 5.96649 18.3337 7.83333 18.3337Z"
                                                            stroke="#7026A1" stroke-linecap="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-sm mt-1 text-[#56555C]">License Expiry Date</h2>
                                                <p className="text-[#A1A5AA] mt-1 text-sm">23-10-2025</p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <div className="grid lg:grid-cols-3 grid-cols-1 mb-6">

                                    </div> */}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                )}

                {activeTab === "tab2" && (
                <Doctor />
                )}

                {activeTab === "tab3" && (
                <Pateint />
                )}
                {activeTab === "tab4" && (
                <Clinic_View_Appoint_Table />
                )}
                {activeTab === "tab5" && (
                <Payment_Table />
                )}
                {activeTab === "tab6" && (
                <Clinic_View_Form />
                )}
            </div>
        </div>

    </>
    )}
</>
);
}