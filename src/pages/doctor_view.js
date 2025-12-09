"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import ClientViewComponent from "../components/ClientView";
import { ChevronRight,Plus,Download,Pencil,Trash,X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DocViewPicker from "../components/doc_view_picker";
import DocTimeSlots from "../components/doc_timeslots";
import BookAppointModal from "../components/BookAppointModal";
import AddAvailModal from "../components/AddAvailModal";
import AddFormModal from "@/components/AddFormModal";

import Patient from "@/components/Patient";

import AppointmentTable from "@/components/appointment_table";
import DoctorRecommendationTable from "@/components/doctor_recommendation_table";
import Form from "../components/clinic_view_form_table"
import DoctorEarningTable from "@/components/doctor_earning_table";




export default function DoctorViewPage() {

const [showModal, setShowModal] = useState(false);  

const [showModal2, setShowModal2] = useState(false);

const [showModal3, setShowModal3] = useState(false);


const router = useRouter();
const { id } = router.query;
const [ClientId, setClientId] = useState(null);
const [loading, setLoading] = useState(true);



const tabTitles = {
tab1: "Details",
tab2: "Patients",
tab3: "Appointments",
tab4: "Recommendations",
tab5: "Forms",
tab6: "Earnings",


};

const tabIcons = {
tab1: (
 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.16602 8.33398H9.16602M6.66602 5.83398L6.66602 10.834M11.666 10.834H14.9993M11.666 13.334H14.9993M4.33268 16.6673H15.666C16.5994 16.6673 17.0661 16.6673 17.4227 16.4857C17.7363 16.3259 17.9912 16.0709 18.151 15.7573C18.3327 15.4008 18.3327 14.9341 18.3327 14.0007V6.00065C18.3327 5.06723 18.3327 4.60052 18.151 4.244C17.9912 3.9304 17.7363 3.67543 17.4227 3.51564C17.0661 3.33398 16.5994 3.33398 15.666 3.33398H4.33268C3.39926 3.33398 2.93255 3.33398 2.57603 3.51564C2.26243 3.67543 2.00746 3.9304 1.84767 4.244C1.66602 4.60052 1.66602 5.06723 1.66602 6.00065V14.0007C1.66602 14.9341 1.66602 15.4008 1.84767 15.7573C2.00746 16.0709 2.26243 16.3259 2.57603 16.4857C2.93255 16.6673 3.39926 16.6673 4.33268 16.6673Z"
                stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
            </svg>
),
tab2: (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0003 12.0827C12.8768 12.0827 15.2087 9.75083 15.2087 6.87435C15.2087 3.99787 12.8768 1.66602 10.0003 1.66602C7.12384 1.66602 4.79199 3.99787 4.79199 6.87435C4.79199 9.75083 7.12384 12.0827 10.0003 12.0827ZM10.0003 12.0827C5.39795 12.0827 1.66699 14.8809 1.66699 18.3327M10.0003 12.0827C14.6027 12.0827 18.3337 14.8809 18.3337 18.3327"
                stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
            </svg>
),
tab3: (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.1667 2.53198V8.50519C14.1667 8.99077 14.1667 9.23356 14.0654 9.36739C13.9772 9.48399 13.8424 9.55614 13.6965 9.56485C13.5289 9.57485 13.3269 9.44018 12.9229 9.17083L12.1104 8.62917C11.95 8.52225 11.8699 8.46879 11.7832 8.44802C11.7066 8.42967 11.6267 8.42967 11.5501 8.44802C11.4635 8.46879 11.3833 8.52225 11.2229 8.62917L10.4104 9.17083C10.0064 9.44018 9.80438 9.57485 9.63687 9.56485C9.49093 9.55614 9.35611 9.48399 9.26791 9.36739C9.16667 9.23356 9.16667 8.99077 9.16667 8.50519V2.5M9.16667 2.5H7.83333C5.96649 2.5 5.03307 2.5 4.32003 2.86331C3.69282 3.18289 3.18289 3.69282 2.86331 4.32003C2.5 5.03307 2.5 5.96649 2.5 7.83333V12.1667C2.5 14.0335 2.5 14.9669 2.86331 15.68C3.18289 16.3072 3.69282 16.8171 4.32003 17.1367C5.03307 17.5 5.96649 17.5 7.83333 17.5H12.1667C14.0335 17.5 14.9669 17.5 15.68 17.1367C16.3072 16.8171 16.8171 16.3072 17.1367 15.68C17.5 14.9669 17.5 14.0335 17.5 12.1667V7.83333C17.5 5.96649 17.5 5.03307 17.1367 4.32003C16.8171 3.69282 16.3072 3.18289 15.68 2.86331C15.1338 2.58504 14.4584 2.51991 13.3333 2.50466C12.9895 2.5 12.6037 2.5 12.1667 2.5H10H9.16667Z"
                stroke="#6B7280" stroke-width="1.2" />
            </svg>
),
tab4: (
 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.24302 18.151L3.97063 18.6856L3.97063 18.6856L4.24302 18.151ZM3.51466 17.4227L2.98006 17.6951L2.98006 17.6951L3.51466 17.4227ZM16.4847 17.4227L17.0193 17.6951L16.4847 17.4227ZM15.7563 18.151L16.0287 18.6856L16.0287 18.6856L15.7563 18.151ZM15.7563 3.51439L16.0287 2.97978V2.97978L15.7563 3.51439ZM16.4847 4.24275L15.9501 4.51514L16.4847 4.24275ZM4.24302 3.51439L4.51542 4.04899L4.24302 3.51439ZM3.51466 4.24275L2.98006 3.97035L3.51466 4.24275ZM6.66634 6.89935C6.33497 6.89935 6.06634 7.16798 6.06634 7.49935C6.06634 7.83072 6.33497 8.09935 6.66634 8.09935V7.49935V6.89935ZM13.333 8.09935C13.6644 8.09935 13.933 7.83072 13.933 7.49935C13.933 7.16798 13.6644 6.89935 13.333 6.89935V7.49935V8.09935ZM6.66634 10.2327C6.33497 10.2327 6.06634 10.5013 6.06634 10.8327C6.06634 11.1641 6.33497 11.4327 6.66634 11.4327V10.8327V10.2327ZM9.99967 11.4327C10.331 11.4327 10.5997 11.1641 10.5997 10.8327C10.5997 10.5013 10.331 10.2327 9.99967 10.2327V10.8327V11.4327ZM6.66634 13.566C6.33497 13.566 6.06634 13.8346 6.06634 14.166C6.06634 14.4974 6.33497 14.766 6.66634 14.766V14.166V13.566ZM13.333 14.766C13.6644 14.766 13.933 14.4974 13.933 14.166C13.933 13.8346 13.6644 13.566 13.333 13.566V14.166V14.766ZM16.6663 5.9994H16.0663V15.666H16.6663H17.2663V5.9994H16.6663ZM13.9997 18.3327V17.7327H5.99967V18.3327V18.9327H13.9997V18.3327ZM3.33301 15.666H3.93301V5.9994H3.33301H2.73301V15.666H3.33301ZM5.99967 18.3327V17.7327C5.52306 17.7327 5.20169 17.7322 4.95387 17.712C4.71305 17.6923 4.595 17.657 4.51542 17.6164L4.24302 18.151L3.97063 18.6856C4.24757 18.8267 4.54113 18.8822 4.85615 18.908C5.16417 18.9331 5.54286 18.9327 5.99967 18.9327V18.3327ZM3.33301 15.666H2.73301C2.73301 16.1228 2.73254 16.5015 2.75771 16.8095C2.78345 17.1246 2.83895 17.4181 2.98006 17.6951L3.51466 17.4227L4.04927 17.1503C4.00872 17.0707 3.9734 16.9526 3.95372 16.7118C3.93347 16.464 3.93301 16.1426 3.93301 15.666H3.33301ZM4.24302 18.151L4.51542 17.6164C4.31471 17.5142 4.15153 17.351 4.04927 17.1503L3.51466 17.4227L2.98006 17.6951C3.19737 18.1216 3.54413 18.4683 3.97063 18.6856L4.24302 18.151ZM16.6663 15.666H16.0663C16.0663 16.1426 16.0659 16.464 16.0456 16.7118C16.026 16.9526 15.9906 17.0707 15.9501 17.1503L16.4847 17.4227L17.0193 17.6951C17.1604 17.4181 17.2159 17.1246 17.2416 16.8095C17.2668 16.5015 17.2663 16.1228 17.2663 15.666H16.6663ZM13.9997 18.3327V18.9327C14.4565 18.9327 14.8352 18.9331 15.1432 18.908C15.4582 18.8822 15.7518 18.8267 16.0287 18.6856L15.7563 18.151L15.4839 17.6164C15.4044 17.657 15.2863 17.6923 15.0455 17.712C14.7977 17.7322 14.4763 17.7327 13.9997 17.7327V18.3327ZM16.4847 17.4227L15.9501 17.1503C15.8478 17.351 15.6846 17.5142 15.4839 17.6164L15.7563 18.151L16.0287 18.6856C16.4552 18.4683 16.802 18.1216 17.0193 17.6951L16.4847 17.4227ZM13.9997 3.33273V3.93273C14.4763 3.93273 14.7977 3.9332 15.0455 3.95345C15.2863 3.97312 15.4044 4.00844 15.4839 4.04899L15.7563 3.51439L16.0287 2.97978C15.7518 2.83868 15.4582 2.78317 15.1432 2.75743C14.8352 2.73226 14.4565 2.73273 13.9997 2.73273V3.33273ZM16.6663 5.9994H17.2663C17.2663 5.54259 17.2668 5.1639 17.2416 4.85588C17.2159 4.54085 17.1604 4.24729 17.0193 3.97035L16.4847 4.24275L15.9501 4.51514C15.9906 4.59472 16.026 4.71278 16.0456 4.95359C16.0659 5.20141 16.0663 5.52279 16.0663 5.9994H16.6663ZM15.7563 3.51439L15.4839 4.04899C15.6846 4.15126 15.8478 4.31444 15.9501 4.51514L16.4847 4.24275L17.0193 3.97035C16.802 3.54385 16.4552 3.1971 16.0287 2.97978L15.7563 3.51439ZM5.99967 3.33273V2.73273C5.54286 2.73273 5.16417 2.73226 4.85615 2.75743C4.54113 2.78317 4.24757 2.83868 3.97063 2.97978L4.24302 3.51439L4.51542 4.04899C4.595 4.00844 4.71305 3.97312 4.95387 3.95345C5.20169 3.9332 5.52306 3.93273 5.99967 3.93273V3.33273ZM3.33301 5.9994H3.93301C3.93301 5.52279 3.93347 5.20141 3.95372 4.95359C3.9734 4.71278 4.00872 4.59472 4.04927 4.51514L3.51466 4.24275L2.98006 3.97035C2.83895 4.24729 2.78345 4.54085 2.75771 4.85588C2.73254 5.1639 2.73301 5.54259 2.73301 5.9994H3.33301ZM4.24302 3.51439L3.97063 2.97978C3.54413 3.1971 3.19737 3.54385 2.98006 3.97035L3.51466 4.24275L4.04927 4.51514C4.15153 4.31444 4.31471 4.15126 4.51542 4.04899L4.24302 3.51439ZM5.99967 3.33273V3.93273H6.66634V3.33273V2.73273H5.99967V3.33273ZM13.9997 3.33273V2.73273H13.333V3.33273V3.93273H13.9997V3.33273ZM7.08301 1.66602V2.26602H12.9163V1.66602V1.06602H7.08301V1.66602ZM13.333 2.08268H12.733V3.74935H13.333H13.933V2.08268H13.333ZM12.9163 4.16602V3.56602H7.08301V4.16602V4.76602H12.9163V4.16602ZM6.66634 3.74935H7.26634V2.08268H6.66634H6.06634V3.74935H6.66634ZM7.08301 4.16602V3.56602C7.18426 3.56602 7.26634 3.6481 7.26634 3.74935H6.66634H6.06634C6.06634 4.31084 6.52152 4.76602 7.08301 4.76602V4.16602ZM13.333 3.74935H12.733C12.733 3.6481 12.8151 3.56602 12.9163 3.56602V4.16602V4.76602C13.4778 4.76602 13.933 4.31084 13.933 3.74935H13.333ZM12.9163 1.66602V2.26602C12.8151 2.26602 12.733 2.18393 12.733 2.08268H13.333H13.933C13.933 1.52119 13.4778 1.06602 12.9163 1.06602V1.66602ZM7.08301 1.66602V1.06602C6.52152 1.06602 6.06634 1.52119 6.06634 2.08268H6.66634H7.26634C7.26634 2.18393 7.18426 2.26602 7.08301 2.26602V1.66602ZM6.66634 7.49935V8.09935H13.333V7.49935V6.89935H6.66634V7.49935ZM6.66634 10.8327V11.4327H9.99967V10.8327V10.2327H6.66634V10.8327ZM6.66634 14.166V14.766H13.333V14.166V13.566H6.66634V14.166Z"
                fill="#6B7280" />
            </svg>
),
tab5: (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.24302 18.151L4.51542 17.6164L4.24302 18.151ZM3.51466 17.4227L4.04927 17.1503L3.51466 17.4227ZM16.4847 17.4227L15.9501 17.1503L16.4847 17.4227ZM15.7563 18.151L15.4839 17.6164L15.7563 18.151ZM15.7563 1.84767L15.4839 2.38228L15.7563 1.84767ZM16.4847 2.57603L15.9501 2.84843L16.4847 2.57603ZM4.24302 1.84767L4.51542 2.38228L4.24302 1.84767ZM3.51466 2.57603L4.04927 2.84843L3.51466 2.57603ZM6.66634 4.39935C6.33497 4.39935 6.06634 4.66798 6.06634 4.99935C6.06634 5.33072 6.33497 5.59935 6.66634 5.59935V4.99935V4.39935ZM13.333 5.59935C13.6644 5.59935 13.933 5.33072 13.933 4.99935C13.933 4.66798 13.6644 4.39935 13.333 4.39935V4.99935V5.59935ZM6.66634 7.73268C6.33497 7.73268 6.06634 8.00131 6.06634 8.33268C6.06634 8.66405 6.33497 8.93268 6.66634 8.93268V8.33268V7.73268ZM13.333 8.93268C13.6644 8.93268 13.933 8.66405 13.933 8.33268C13.933 8.00131 13.6644 7.73268 13.333 7.73268V8.33268V8.93268ZM13.3073 12.0819L13.9027 12.1559L13.9027 12.1559L13.3073 12.0819ZM6.69203 12.0819L7.28743 12.0078L7.28743 12.0078L6.69203 12.0819ZM5.99967 1.66602V2.26602H13.9997V1.66602V1.06602H5.99967V1.66602ZM16.6663 4.33268H16.0663V15.666H16.6663H17.2663V4.33268H16.6663ZM13.9997 18.3327V17.7327H5.99967V18.3327V18.9327H13.9997V18.3327ZM3.33301 15.666H3.93301V4.33268H3.33301H2.73301V15.666H3.33301ZM5.99967 18.3327V17.7327C5.52306 17.7327 5.20169 17.7322 4.95387 17.712C4.71305 17.6923 4.595 17.657 4.51542 17.6164L4.24302 18.151L3.97063 18.6856C4.24757 18.8267 4.54113 18.8822 4.85615 18.908C5.16417 18.9331 5.54286 18.9327 5.99967 18.9327V18.3327ZM3.33301 15.666H2.73301C2.73301 16.1228 2.73254 16.5015 2.75771 16.8095C2.78345 17.1246 2.83895 17.4181 2.98006 17.6951L3.51466 17.4227L4.04927 17.1503C4.00872 17.0707 3.9734 16.9526 3.95372 16.7118C3.93347 16.464 3.93301 16.1426 3.93301 15.666H3.33301ZM4.24302 18.151L4.51542 17.6164C4.31471 17.5142 4.15153 17.351 4.04927 17.1503L3.51466 17.4227L2.98006 17.6951C3.19737 18.1216 3.54413 18.4683 3.97063 18.6856L4.24302 18.151ZM16.6663 15.666H16.0663C16.0663 16.1426 16.0659 16.464 16.0456 16.7118C16.026 16.9526 15.9906 17.0707 15.9501 17.1503L16.4847 17.4227L17.0193 17.6951C17.1604 17.4181 17.2159 17.1246 17.2416 16.8095C17.2668 16.5015 17.2663 16.1228 17.2663 15.666H16.6663ZM13.9997 18.3327V18.9327C14.4565 18.9327 14.8352 18.9331 15.1432 18.908C15.4582 18.8822 15.7518 18.8267 16.0287 18.6856L15.7563 18.151L15.4839 17.6164C15.4044 17.657 15.2863 17.6923 15.0455 17.712C14.7977 17.7322 14.4763 17.7327 13.9997 17.7327V18.3327ZM16.4847 17.4227L15.9501 17.1503C15.8478 17.351 15.6846 17.5142 15.4839 17.6164L15.7563 18.151L16.0287 18.6856C16.4552 18.4683 16.802 18.1216 17.0193 17.6951L16.4847 17.4227ZM13.9997 1.66602V2.26602C14.4763 2.26602 14.7977 2.26648 15.0455 2.28673C15.2863 2.30641 15.4044 2.34173 15.4839 2.38228L15.7563 1.84767L16.0287 1.31307C15.7518 1.17196 15.4582 1.11645 15.1432 1.09072C14.8352 1.06555 14.4565 1.06602 13.9997 1.06602V1.66602ZM16.6663 4.33268H17.2663C17.2663 3.87587 17.2668 3.49718 17.2416 3.18916C17.2159 2.87413 17.1604 2.58058 17.0193 2.30364L16.4847 2.57603L15.9501 2.84843C15.9906 2.928 16.026 3.04606 16.0456 3.28688C16.0659 3.5347 16.0663 3.85607 16.0663 4.33268H16.6663ZM15.7563 1.84767L15.4839 2.38228C15.6846 2.48454 15.8478 2.64772 15.9501 2.84843L16.4847 2.57603L17.0193 2.30364C16.802 1.87714 16.4552 1.53038 16.0287 1.31307L15.7563 1.84767ZM5.99967 1.66602V1.06602C5.54286 1.06602 5.16417 1.06555 4.85615 1.09072C4.54113 1.11645 4.24757 1.17196 3.97063 1.31307L4.24302 1.84767L4.51542 2.38228C4.595 2.34173 4.71305 2.30641 4.95387 2.28673C5.20169 2.26648 5.52306 2.26602 5.99967 2.26602V1.66602ZM3.33301 4.33268H3.93301C3.93301 3.85607 3.93347 3.5347 3.95372 3.28688C3.9734 3.04606 4.00872 2.928 4.04927 2.84843L3.51466 2.57603L2.98006 2.30364C2.83895 2.58058 2.78345 2.87414 2.75771 3.18916C2.73254 3.49718 2.73301 3.87587 2.73301 4.33268H3.33301ZM4.24302 1.84767L3.97063 1.31307C3.54413 1.53038 3.19737 1.87714 2.98006 2.30364L3.51466 2.57603L4.04927 2.84843C4.15153 2.64772 4.31471 2.48454 4.51542 2.38228L4.24302 1.84767ZM6.66634 4.99935V5.59935H13.333V4.99935V4.39935H6.66634V4.99935ZM6.66634 8.33268V8.93268H13.333V8.33268V7.73268H6.66634V8.33268ZM13.3073 12.0819L12.7119 12.0078C12.5442 13.3558 11.3933 14.3993 9.99967 14.3993V14.9993V15.5993C12.0063 15.5993 13.6611 14.0973 13.9027 12.1559L13.3073 12.0819ZM9.99967 14.9993V14.3993C8.60602 14.3993 7.45519 13.3558 7.28743 12.0078L6.69203 12.0819L6.09662 12.1559C6.33821 14.0973 7.99307 15.5993 9.99967 15.5993V14.9993ZM13.7497 11.666V12.266H16.6663V11.666V11.066H13.7497V11.666ZM6.24967 11.666V11.066H3.33301V11.666V12.266H6.24967V11.666ZM6.69203 12.0819L7.28743 12.0078C7.22748 11.526 6.82761 11.066 6.24967 11.066V11.666V12.266C6.1956 12.266 6.15332 12.2427 6.13018 12.2204C6.10919 12.2001 6.09931 12.1776 6.09662 12.156L6.69203 12.0819ZM13.3073 12.0819L13.9027 12.1559C13.9 12.1776 13.8902 12.2001 13.8692 12.2204C13.846 12.2427 13.8038 12.266 13.7497 12.266V11.666V11.066C13.1717 11.066 12.7719 11.526 12.7119 12.0078L13.3073 12.0819Z"
                fill="#6B7280" />
            </svg>
),
tab6: (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.1663 6.66602C14.1663 4.82507 12.674 3.33268 10.833 3.33268H9.16634C7.32539 3.33268 5.83301 4.82507 5.83301 6.66602C5.83301 8.50696 7.32539 9.99935 9.16634 9.99935H10.833C12.674 9.99935 14.1663 11.4917 14.1663 13.3327C14.1663 15.1736 12.674 16.666 10.833 16.666H9.16634C7.32539 16.666 5.83301 15.1736 5.83301 13.3327M9.99967 1.66602L9.99968 18.3327"
                stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" />
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

 const [mobileOpen, setMobileOpen] = useState(false);


   const tabs = ["tab1","tab2","tab3","tab4","tab5","tab6"];


return (
<>
  {loading ? (
  <div className="flex flex-col items-center justify-center h-[400px] gap-4">
    {/* Spinner */}
    <div className="w-12 h-12 border-4 border-[#144a6c] border-t-transparent rounded-full animate-spin"></div>

    {/* Loading text */}
    <p className="text-[#4e758d] text-lg font-medium">
      Loading Doctor View Page Details...
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
                <div className="lg:flex gap-3 items-center grid grid-cols-1">
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-[#6B7280]">Doctors</h1>
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
                    
            <div>
                 <button
        className="lg:hidden p-2 m-2 bg-[#7026A1] w-full text-white text-left rounded-lg"
        onClick={() => setMobileOpen(true)}
      >
        Open Tabs
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />
            </div>
                </div>
                <div className="lg:flex items-center gap-3 grid grid-cols-1 mt-3 lg:mt-0">
                {tabTitles[activeTab] === "Details" && (
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

                {/* ====== TAB 2: c ====== */}
                {tabTitles[activeTab] === "Patients" && (
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

                {/* ====== TAB 3:  ====== */}
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
                      
                </>
                )}

                {/* ====== TAB 4:  ====== */}
                {tabTitles[activeTab] === "Recommendations" && (
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

                {/* ====== TAB 5:  ====== */}
                {tabTitles[activeTab] === "Forms" && (
               <>
                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Pencil className="inline-block w-4 text-[#6B7280]" />
                    <span className="pl-2 text-[#6B7280]">Edit</span>
                    </Link>

                    <Link href="#" className="btn btn-light border-[#EEEEEE] bg-white rounded-md p-3">
                    <Trash className="inline-block w-4 text-[#D91B1B]" />
                    <span className="pl-2 text-[#D91B1B]">Delete</span>
                    </Link>
                      
                       <Link href="#" className="btn btn-primary"
                        onClick={()=> setShowModal3(true)}
                    >

                    <Plus className="inline-block w-5 text-white" />

                    <span className="pl-2 text-white">Add New</span>

                    </Link>
                    <AddFormModal isOpen={showModal3} onClose={()=> setShowModal3(false)}/>

                </>
                )}

                {/* ====== TAB 6: ====== */}
                {tabTitles[activeTab] === "Earnings" && (
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
                
                

            </div>
    
     </div>


  {/* Sliding Off-Canvas */}
      <div
        className={`fixed top-30 right-0 h-[75%] w-20 bg-white z-50 transform transition-transform duration-300 rounded-l-lg ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-3 p-4 overflow-auto`}
      >
        <button
          className="self-end mb-2 text-[#6B7280] px-4 py-7  rounded border-b border-[#E5E7EB]"
          onClick={() => setMobileOpen(false)}
        >
          
          <X size={18} />
        </button>


        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-4 rounded-lg transition-all ${
              activeTab === tab
                ? "bg-[#FFE9F4] text-blue-600 font-semibold"
                : "bg-[#F8F8F8] text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tabIcons[tab]}</span>
          </button>
        ))}
      </div>

    {/*
    <hr className="mt-[20px] mb-[30px] text-[#EAECF0]" /> */}

    <div className="lg:flex w-full lg:pl-8 lg:pr-6 lg:pt-6 h-full">
      {/* LEFT SIDE TABS */}
      <div className="w-20 hidden   bg-white lg:flex flex-col rounded-2xl justify-start items-center h-[100%] z-2 px-4">
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
      <div className="flex-1 lg:px-6  lg:mt-[60px] mt-4">
        {activeTab === "tab1" && (
        <div className="overflow-auto lg:max-h-[calc(100vh-230px)] max-h-[calc(100vh-425px)]">
          <div className=" grid lg:grid-cols-4 grid-cols-1 gap-3">
            <div className="flex flex-col ">
              <div className="bg-white rounded-2xl">
                <div className="p-6">
                  <div className="flex flex-col">
                    <Image src="/doc.png" width={330} height={330} alt="doctor photo"
                      className="object-contain mx-auto" />
                    <h1 className="text-2xl font-[500] text-[#7026A1] mt-4 text-center">
                      Jane Dominique
                    </h1>
                    <p className="text-[#6B7280] text-center mt-2 mb-4">
                      Psychiatrist
                    </p>

                    <Link href="#" className="btn btn-primary mb-3"  onClick={() => setShowModal(true)}>
                    <div className="flex gap-2 items-center justify-center">
                      <Plus />
                      Book Appointment
                    </div>
                       
                    </Link>
                    <BookAppointModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                    />
                    <Link href="#" className="btn btn-light border-[#EEEEEE] border rounded-md pt-[8px] pb-[8px]">
                    <div className="flex gap-2 items-center justify-center">
                      <Download />
                      Download License
                    </div>

                    </Link>

                  </div>
                  <div className="bg-[#F8FAF8] rounded-2xl mt-3">
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.5 15.0007L5 17.5007M4.16667 15.834L6.66667 13.334M5 11.6673L8.33333 15.0007M5 11.6673L10.4882 6.17916C11.139 5.52829 12.1943 5.52829 12.8452 6.17916L13.8215 7.15547C14.4724 7.80635 14.4724 8.86162 13.8215 9.51249L8.33333 15.0007M5 11.6673L4.16667 10.834M8.33333 15.0007L9.16667 15.834M13.3333 6.66732L16.6667 3.33398"
                              stroke="#7026A1" stroke-linecap="round" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Specialty</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">Psychiatrist</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M3.87813 8.96166L1.8793 7.77512C1.59622 7.60708 1.59622 7.20118 1.8793 7.03314L9.10037 2.74662C9.65431 2.41779 10.3463 2.41779 10.9003 2.74662L18.1213 7.03314C18.4044 7.20118 18.4044 7.60708 18.1213 7.77512L16.1225 8.96166M3.87813 8.96166L9.10034 12.0616C9.65428 12.3905 10.3463 12.3905 10.9002 12.0616L16.1225 8.96166M3.87813 8.96166V13.1736C3.87813 13.7814 4.20051 14.3448 4.72737 14.6575L9.10034 17.2534C9.65428 17.5822 10.3463 17.5822 10.9002 17.2534L15.2733 14.6575C15.8001 14.3448 16.1225 13.7814 16.1225 13.1736V8.96166M10.0003 7.5H12.5003"
                              stroke="#7026A1" stroke-linecap="round" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Qualification</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">Doctor of Dental Surgery (DDS)</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.50033 4.16732L8.97709 9.2048C9.57894 9.67291 10.4217 9.67291 11.0236 9.2048L17.5003 4.16732M4.33366 16.6673H15.667C16.6004 16.6673 17.0671 16.6673 17.4236 16.4857C17.7372 16.3259 17.9922 16.0709 18.152 15.7573C18.3337 15.4008 18.3337 14.9341 18.3337 14.0007V6.00065C18.3337 5.06723 18.3337 4.60052 18.152 4.244C17.9922 3.9304 17.7372 3.67543 17.4236 3.51564C17.0671 3.33398 16.6004 3.33398 15.667 3.33398H4.33366C3.40024 3.33398 2.93353 3.33398 2.57701 3.51564C2.2634 3.67543 2.00844 3.9304 1.84865 4.244C1.66699 4.60052 1.66699 5.06723 1.66699 6.00065V14.0007C1.66699 14.9341 1.66699 15.4008 1.84865 15.7573C2.00844 16.0709 2.2634 16.3259 2.57701 16.4857C2.93353 16.6673 3.40024 16.6673 4.33366 16.6673Z"
                              stroke="#7026A1" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Email Address</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">Something@gamil.com</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6 13.0351C3.60879 13.7267 2 15.0194 2 16.5C2 18.7091 5.58172 20.5 10 20.5C14.4183 20.5 18 18.7091 18 16.5C18 15.0194 16.3912 13.7267 14 13.0351M16 6.9C16 10.4346 11.5 16.5 10 16.5C8.5 16.5 4 10.4346 4 6.9C4 3.36538 6.68629 0.5 10 0.5C13.3137 0.5 16 3.36538 16 6.9ZM12 6.5C12 7.60457 11.1046 8.5 10 8.5C8.89543 8.5 8 7.60457 8 6.5C8 5.39543 8.89543 4.5 10 4.5C11.1046 4.5 12 5.39543 12 6.5Z"
                              stroke="#7026A1" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Address</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">123 Highland Drive, Anytown USA</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.48322 8.12995C8.01318 9.23372 8.73561 10.2682 9.65052 11.1831C10.5654 12.0981 11.5999 12.8205 12.7037 13.3504C12.7987 13.396 12.8461 13.4188 12.9062 13.4363C13.1197 13.4985 13.3818 13.4539 13.5626 13.3244C13.6134 13.288 13.657 13.2445 13.744 13.1574C14.0102 12.8912 14.1433 12.7581 14.2771 12.6711C14.7819 12.3429 15.4326 12.3429 15.9373 12.6711C16.0712 12.7581 16.2043 12.8912 16.4705 13.1574L16.6189 13.3058C17.0235 13.7104 17.2258 13.9128 17.3357 14.1301C17.5543 14.5622 17.5543 15.0726 17.3357 15.5047C17.2258 15.722 17.0235 15.9244 16.6189 16.329L16.4988 16.449C16.0956 16.8523 15.8939 17.0539 15.6198 17.2079C15.3156 17.3788 14.8431 17.5017 14.4942 17.5006C14.1798 17.4997 13.9649 17.4387 13.5351 17.3167C11.2254 16.6612 9.04595 15.4242 7.22768 13.606C5.40941 11.7877 4.17249 9.60824 3.51693 7.29853C3.39494 6.86875 3.33395 6.65386 3.33301 6.33943C3.33198 5.99053 3.45484 5.51807 3.62572 5.21388C3.77972 4.93974 3.98135 4.7381 4.38462 4.33484L4.50465 4.21481C4.9093 3.81016 5.11163 3.60783 5.32892 3.49792C5.76108 3.27934 6.27144 3.27934 6.70359 3.49792C6.92089 3.60783 7.12321 3.81016 7.52787 4.21481L7.67625 4.36319C7.94245 4.62939 8.07554 4.76249 8.16257 4.89633C8.49074 5.40107 8.49074 6.05177 8.16257 6.55651C8.07555 6.69035 7.94245 6.82345 7.67625 7.08965C7.58921 7.17669 7.54569 7.22021 7.50926 7.27108C7.37981 7.45187 7.33511 7.714 7.39734 7.92746C7.41485 7.98753 7.43764 8.03501 7.48322 8.12995Z"
                              stroke="#7026A1" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Phone Number</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">231-2324-2324</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.99967 19.1673C15.0623 19.1673 19.1663 15.0633 19.1663 10.0007C19.1663 4.93804 15.0623 0.833984 9.99967 0.833984M9.99967 19.1673C4.93706 19.1673 0.833008 15.0633 0.833008 10.0007C0.833008 4.93804 4.93706 0.833984 9.99967 0.833984M9.99967 19.1673C11.8406 19.1673 13.333 15.0633 13.333 10.0007C13.333 4.93804 11.8406 0.833984 9.99967 0.833984M9.99967 19.1673C8.15873 19.1673 6.66634 15.0633 6.66634 10.0007C6.66634 4.93804 8.15873 0.833984 9.99967 0.833984M1.66634 6.66732H18.333M1.66634 12.5007H18.333"
                              stroke="#7026A1" stroke-linecap="round" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">Language</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">English, Spanish</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.667 6.66732H15.0003M11.667 10.0007H15.0003M11.667 13.334H15.0003M4.33366 16.6673H15.667C16.6004 16.6673 17.0671 16.6673 17.4236 16.4857C17.7372 16.3259 17.9922 16.0709 18.152 15.7573C18.3337 15.4008 18.3337 14.9341 18.3337 14.0007V6.00065C18.3337 5.06723 18.3337 4.60052 18.152 4.244C17.9922 3.9304 17.7372 3.67543 17.4236 3.51564C17.0671 3.33398 16.6004 3.33398 15.667 3.33398H4.33366C3.40024 3.33398 2.93353 3.33398 2.57701 3.51564C2.2634 3.67543 2.00844 3.9304 1.84865 4.244C1.66699 4.60052 1.66699 5.06723 1.66699 6.00065V14.0007C1.66699 14.9341 1.66699 15.4008 1.84865 15.7573C2.00844 16.0709 2.2634 16.3259 2.57701 16.4857C2.93353 16.6673 3.40024 16.6673 4.33366 16.6673ZM5.41699 10.0007H7.91699C8.14711 10.0007 8.33366 9.8141 8.33366 9.58398V7.08398C8.33366 6.85387 8.14711 6.66732 7.91699 6.66732H5.41699C5.18687 6.66732 5.00033 6.85387 5.00033 7.08398V9.58398C5.00033 9.8141 5.18687 10.0007 5.41699 10.0007Z"
                              stroke="#7026A1" stroke-linecap="round" />
                          </svg>

                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm mt-1 text-[#56555C]">License Number</h2>
                        <p className="text-[#A1A5AA] mt-1 text-sm">34-34323-se43</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pt-3 pb-3 pl-6">
                      <div>
                        <div className="bg-white rounded-lg p-4">

                          <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0.5 7.16667H15.5M4.66667 3.83333V0.5M11.3333 3.83333V0.5M5.83333 17.1667H10.1667C12.0335 17.1667 12.9669 17.1667 13.68 16.8034C14.3072 16.4838 14.8171 15.9738 15.1367 15.3466C15.5 14.6336 15.5 13.7002 15.5 11.8333V7.5C15.5 5.63316 15.5 4.69974 15.1367 3.9867C14.8171 3.35949 14.3072 2.84956 13.68 2.52998C12.9669 2.16667 12.0335 2.16667 10.1667 2.16667H5.83333C3.96649 2.16667 3.03307 2.16667 2.32003 2.52998C1.69282 2.84956 1.18289 3.35949 0.863312 3.9867C0.5 4.69974 0.5 5.63316 0.5 7.5V11.8333C0.5 13.7002 0.5 14.6336 0.863312 15.3466C1.18289 15.9738 1.69282 16.4838 2.32003 16.8034C3.03307 17.1667 3.96649 17.1667 5.83333 17.1667Z"
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
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:col-span-3  gap-3 h-fit">
              <div>
                <div className="bg-white rounded-lg p-4">
                  <div className="bg-[#F8FAF8] rounded-2xl mt-3 text-center pt-6 pb-6">
                    <div>
                      <h2 className="text-[#56555C] ">Total Patients</h2>
                      <p className="text-[#7026A1] text-3xl font-semibold">
                        20
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAF8] rounded-2xl mt-3 text-center pt-6 pb-6">
                    <div>
                      <h2 className="text-[#56555C] ">Total Appointments</h2>
                      <p className="text-[#7026A1] text-3xl font-semibold">
                        16
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAF8] rounded-2xl mt-3 text-center pt-6 pb-6">
                    <div>
                      <h2 className="text-[#56555C]  ">Earnings</h2>
                      <p className="text-[#7026A1] text-3xl font-semibold">
                        $76k
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="bg-white rounded-lg p-4 lg:col-span-3">
                <div className="flex justify-between items-center border-[#E5E7EB] border-b">
                  <div className="flex gap-2 items-center pt-3 pb-3 pl-2 ">
                    <div>
                      <div className="bg-[#FFE9F4] rounded-lg p-3">

                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0.5 7.16667H15.5M4.66667 3.83333V0.5M11.3333 3.83333V0.5M5.83333 17.1667H10.1667C12.0335 17.1667 12.9669 17.1667 13.68 16.8034C14.3072 16.4838 14.8171 15.9738 15.1367 15.3466C15.5 14.6336 15.5 13.7002 15.5 11.8333V7.5C15.5 5.63316 15.5 4.69974 15.1367 3.9867C14.8171 3.35949 14.3072 2.84956 13.68 2.52998C12.9669 2.16667 12.0335 2.16667 10.1667 2.16667H5.83333C3.96649 2.16667 3.03307 2.16667 2.32003 2.52998C1.69282 2.84956 1.18289 3.35949 0.863312 3.9867C0.5 4.69974 0.5 5.63316 0.5 7.5V11.8333C0.5 13.7002 0.5 14.6336 0.863312 15.3466C1.18289 15.9738 1.69282 16.4838 2.32003 16.8034C3.03307 17.1667 3.96649 17.1667 5.83333 17.1667Z"
                            stroke="#7026A1" stroke-linecap="round" />
                        </svg>

                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg  mt-1 text-[#1F2937]">Availability</h2>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-light border-[#7026A1] border rounded-md pt-[3px] pb-[3px] px-[5px] cursor-pointer" onClick={() => setShowModal2(true)}>
                      <Plus className="text-[#7026A1] w-5" />
                    </button>
                  </div>
                </div>
                  <AddAvailModal
                        isOpen={showModal2}
                        onClose={() => setShowModal2(false)}
                    />
                <div>
                  <DocViewPicker />
                </div>
                <div>
                  <DocTimeSlots />
                </div>

              </div>

              <div className="bg-white rounded-lg p-4 lg:col-span-4">
                <div className="flex gap-2 items-center pt-3 pb-3 pl-2 border-[#E5E7EB] border-b">
                  <div>
                    <div className="bg-[#FFE9F4] rounded-lg p-3">

                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                <div className="mt-4 overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-425px)]">
                  <table className="min-w-full text-sm text-left">
                    <thead
                      className="bg-[#F8FAF8] text-[#333333] capitalize text-xs sticky top-0 z-10  whitespace-nowrap">
                      <tr>

                        {[
                        "ID No",
                        "Appointment Date",
                        "Patients",
                        "Complaint",

                        ].map((header, idx) => (
                        <th key={idx} className="px-6 py-3 font-[400] text-[#475467] text-[13px]">
                          {header}
                        </th>
                        ))}

                      </tr>
                    </thead>
                    <tbody>
                      {suppliers.length > 0 ? (
                      suppliers.map((s, i) => (
                      <tr key={i} className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50
                        ${selectedRows.includes(i) ? "bg-gray-50" : "" }`}>

                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                          <Link href="" className="flex items-center">
                          {s.id}
                          </Link>

                        </td>
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                          <Link href="" className="flex items-center">
                          {s.appointment_date}
                          </Link>

                        </td>
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                          <Link href="" className="flex items-center">
                          {s.patients}
                          </Link>

                        </td>
                        <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
                          <Link href="" className="flex items-center">
                          {s.complaint}
                          </Link>

                        </td>

                      </tr>
                      ))
                      ) : (
                      <tr>
                        <td colSpan="13" className="text-center py-10">
                          {/* <img src="/no-data.png" alt="No Data" className="mx-auto mb-4 w-40 h-40 object-contain" />
                          */}
                          <Image src="/no-data.png" alt="No Data" width={40} height={40}
                            className="mx-auto mb-4 w-40 h-40 object-contain" />
                          <p className="text-gray-500 text-sm">No data available</p>
                        </td>
                      </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>
        </div>
        )}

        {activeTab === "tab2" && (
         <div className="bg-white px-2 py-2 rounded-xl shadow-custom border border-gray-100">
                                
                                               <div className="overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-435px)] ">
                                             <Patient/>
                                               </div>  
                                               </div> 
        
        )}

        {activeTab === "tab3" && (
        <AppointmentTable/>
        )}
        {activeTab === "tab4" && (
        <DoctorRecommendationTable/>
        )}
        {activeTab === "tab5" && (
        <Form/>
        )}
        {activeTab === "tab6" && (
        <DoctorEarningTable/>
        )}
      </div>
    </div>

  </>
  )}
</>
);
}