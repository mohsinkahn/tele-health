"use client";
import { useState, useMemo,useRef, useEffect } from "react";
import ActionsMenu from "@/components/ActionsMenu";
import Link from "next/link";
import { Eye, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

export default function Doctor() {

const [openIndex, setOpenIndex] = useState(null);
const menuRefs = useRef([]);

// delete button hide and visible logic
useEffect(() => {
  const deleteBtn = document.getElementById("deleteBtn");
  const checkAll = document.getElementById("checkAll");
  const checkboxes = document.querySelectorAll(".row-check");

  if (!deleteBtn || !checkAll || checkboxes.length === 0) {
    console.warn("Elements not found, skipping checkbox handler...");
    return;
  }

  const updateVisibility = () => {
    const anyChecked = [...checkboxes].some(cb => cb.checked);
    deleteBtn.classList.toggle("hidden", !anyChecked);
  };

  checkAll.addEventListener("change", () => {
    checkboxes.forEach(cb => (cb.checked = checkAll.checked));
    updateVisibility();
  });

  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateVisibility);
  });

  return () => {
    // Cleanup to avoid listener duplication
    checkAll.removeEventListener("change", updateVisibility);
    checkboxes.forEach(cb => {
      cb.removeEventListener("change", updateVisibility);
    });
  };
}, []);




// Close dropdown if clicking outside
useEffect(() => {
function handleClickOutside(event) {
if (
openIndex !== null &&
menuRefs.current[openIndex] &&
!menuRefs.current[openIndex].contains(event.target)
) {
setTimeout(() => setOpenIndex(null), 100); // Delay to allow link clicks
}
}

document.addEventListener("mousedown", handleClickOutside);
return () => {
document.removeEventListener("mousedown", handleClickOutside);
};
}, [openIndex]);

const [suppliers] = useState(
Array(20).fill({
id: "#547388",
doctor: "Dr. Kabir Ahmed",
email: "kabirahmed@mail.com",
phone: "+1 234-432-9876",
license_no: "VV 45678 ",
license_exp: "25 - July - 2024",
appointments: "567",
})
);
// for no data state

// const [suppliers] = useState([]);

// end for no data state

const [selectedRows, setSelectedRows] = useState([]);

const toggleSelectAll = () => {
setSelectedRows(selectedRows.length === suppliers.length ? [] : suppliers.map((_, i) => i));
};

const toggleRow = (index) => {
setSelectedRows((prev) =>
prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
);
};

// const isAllSelected = suppliers && suppliers.length > 0 && selectedRows.length === suppliers.length;
const isAllSelected = useMemo(
() => suppliers?.length > 0 && selectedRows.length === suppliers.length,
[suppliers, selectedRows]
);
return (
<div className=" mx-auto  md:px-6 ">

  <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-4 flex flex-col">

    <div className="bg-white overflow-auto lg:max-h-[calc(100vh-290px)] max-h-[calc(100vh-425px)] ">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-[#F8FAF8] text-[#333333] capitalize text-xs sticky top-0 z-10  whitespace-nowrap">
          <tr>
            {/* <th className="px-4 py-3">
              <input type="checkbox" checked={isAllSelected} onChange={toggleSelectAll} id="checkAll" />
            </th> */}
            {[
            "ID No",
            "Doctors",
            "Email",
            "Phone",
            "License Number",
            "License Expiry",
            "Appointments",
            ].map((header, idx) => (
            <th key={idx} className="px-6 py-3 font-[400] text-[#475467] text-[13px]">
              {header}
            </th>
            ))}
            <th className="px-4 py-3">
               <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z" stroke="#144A6C" stroke-width="1.5" stroke-linecap="round"></path></svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {suppliers.length > 0 ? (
          suppliers.map((s, i) => (
          <tr key={i} className={`border-t border-[#EAECF0] whitespace-nowrap hover:bg-gray-50
            ${selectedRows.includes(i) ? "bg-gray-50" : "" }`}>
            {/* <td className="px-4 py-3">
              <input type="checkbox" checked={selectedRows.includes(i)} onChange={()=> toggleRow(i)}  className="row-check"
              />
            </td> */}
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.id}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.doctor}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.email}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.phone}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.license_no}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.license_exp}
              </Link>

            </td>
            <td className="px-6 py-3 text-[#475467] text-[12px] font-[400]">
              <Link href={`/doctor_view?id=${encodeURIComponent(s.id)}`} className="flex items-center">
              {s.appointments}
              </Link>

            </td>
            <td className="text-center">
              <div className="flex items-center gap-3">
                <Link href="">

                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.21424 14.4937L1.92575 14.7309L1.21424 14.4937ZM2.06269 11.9484L1.35118 11.7112H1.35118L2.06269 11.9484ZM2.93817 10.5318L3.46849 11.0622L3.4685 11.0622L2.93817 10.5318ZM11.3932 2.0768L10.8629 1.54647V1.54647L11.3932 2.0768ZM15.9232 6.60679L16.4535 7.13712L15.9232 6.60679ZM7.46815 15.0618L6.93782 14.5315L6.93782 14.5315L7.46815 15.0618ZM6.05161 15.9373L6.28878 16.6488H6.28878L6.05161 15.9373ZM3.50626 16.7858L3.74343 17.4973H3.74343L3.50626 16.7858ZM7.00378 15.4953L6.5521 14.8965L6.5521 14.8965L7.00378 15.4953ZM6.64697 15.7158L6.31344 15.044L6.64697 15.7158ZM17.0145 3.3361L16.3425 3.66912L16.3425 3.66912L17.0145 3.3361ZM17.0145 5.34749L16.3425 5.01448H16.3425L17.0145 5.34749ZM12.6525 0.985516L12.9855 1.65753L12.9855 1.65753L12.6525 0.985516ZM14.6639 0.985516L14.3309 1.65753V1.65753L14.6639 0.985516ZM2.2842 11.353L2.95596 11.6866L2.95596 11.6866L2.2842 11.353ZM2.50473 10.9962L1.90599 10.5445L1.90599 10.5445L2.50473 10.9962ZM0.792166 16.5215L0.0857373 16.7734L0.792166 16.5215ZM1.47849 17.2078L1.22658 17.9143L1.22658 17.9143L1.47849 17.2078ZM10.791 2.67901C10.4981 2.38611 10.0233 2.38611 9.73037 2.67901C9.43748 2.9719 9.43748 3.44677 9.73037 3.73967L10.2607 3.20934L10.791 2.67901ZM14.2604 8.26966C14.5533 8.56255 15.0281 8.56255 15.321 8.26966C15.6139 7.97676 15.6139 7.50189 15.321 7.209L14.7907 7.73933L14.2604 8.26966ZM1.21424 14.4937L1.92575 14.7309L2.77421 12.1856L2.06269 11.9484L1.35118 11.7112L0.50273 14.2566L1.21424 14.4937ZM2.93817 10.5318L3.4685 11.0622L11.9235 2.60713L11.3932 2.0768L10.8629 1.54647L2.40784 10.0015L2.93817 10.5318ZM15.9232 6.60679L15.3929 6.07646L6.93782 14.5315L7.46815 15.0618L7.99848 15.5922L16.4535 7.13712L15.9232 6.60679ZM6.05161 15.9373L5.81444 15.2258L3.26908 16.0742L3.50626 16.7858L3.74343 17.4973L6.28878 16.6488L6.05161 15.9373ZM7.46815 15.0618L6.93782 14.5315C6.69806 14.7713 6.62681 14.8402 6.5521 14.8965L7.00378 15.4953L7.45546 16.094C7.63266 15.9603 7.78703 15.8036 7.99849 15.5922L7.46815 15.0618ZM6.05161 15.9373L6.28878 16.6488C6.57248 16.5543 6.78168 16.4863 6.98049 16.3876L6.64697 15.7158L6.31344 15.044C6.22961 15.0857 6.13612 15.1186 5.81444 15.2258L6.05161 15.9373ZM7.00378 15.4953L6.5521 14.8965C6.47728 14.953 6.39738 15.0024 6.31344 15.044L6.64697 15.7158L6.98049 16.3876C7.14755 16.3046 7.30656 16.2063 7.45546 16.094L7.00378 15.4953ZM15.9232 2.0768L15.3929 2.60713C16.0532 3.26745 16.2459 3.47414 16.3425 3.66912L17.0145 3.3361L17.6865 3.00309C17.453 2.53195 17.0282 2.12115 16.4535 1.54647L15.9232 2.0768ZM15.9232 6.60679L16.4535 7.13712C17.0282 6.56245 17.453 6.15165 17.6865 5.6805L17.0145 5.34749L16.3425 5.01448C16.2459 5.20945 16.0532 5.41615 15.3929 6.07646L15.9232 6.60679ZM17.0145 3.3361L16.3425 3.66912C16.5525 4.09298 16.5525 4.59062 16.3425 5.01448L17.0145 5.34749L17.6865 5.6805C18.1045 4.83698 18.1045 3.84662 17.6865 3.00309L17.0145 3.3361ZM11.3932 2.0768L11.9235 2.60713C12.5838 1.94682 12.7905 1.75415 12.9855 1.65753L12.6525 0.985516L12.3195 0.313502C11.8484 0.546974 11.4375 0.971802 10.8629 1.54647L11.3932 2.0768ZM15.9232 2.0768L16.4535 1.54647C15.8789 0.971798 15.4681 0.546975 14.9969 0.313502L14.6639 0.985516L14.3309 1.65753C14.5259 1.75415 14.7326 1.94682 15.3929 2.60713L15.9232 2.0768ZM12.6525 0.985516L12.9855 1.65753C13.4094 1.44749 13.907 1.44749 14.3309 1.65753L14.6639 0.985516L14.9969 0.313502C14.1534 -0.104501 13.163 -0.104501 12.3195 0.313502L12.6525 0.985516ZM2.06269 11.9484L2.77421 12.1856C2.88143 11.8639 2.91434 11.7704 2.95596 11.6866L2.2842 11.353L1.61245 11.0195C1.51373 11.2183 1.44575 11.4275 1.35118 11.7112L2.06269 11.9484ZM2.93817 10.5318L2.40784 10.0015C2.19638 10.213 2.03967 10.3673 1.90599 10.5445L2.50473 10.9962L3.10346 11.4479C3.15982 11.3732 3.22873 11.3019 3.46849 11.0622L2.93817 10.5318ZM2.2842 11.353L2.95596 11.6866C2.99764 11.6026 3.04702 11.5227 3.10346 11.4479L2.50473 10.9962L1.90599 10.5445C1.79366 10.6934 1.69539 10.8524 1.61245 11.0195L2.2842 11.353ZM1.21424 14.4937L0.50273 14.2566C0.323031 14.7957 0.171079 15.2492 0.08557 15.613C0.00267547 15.9658 -0.0559448 16.3761 0.0857373 16.7734L0.792166 16.5215L1.49859 16.2696C1.50907 16.299 1.47707 16.2487 1.5458 15.9562C1.61191 15.6748 1.7366 15.2984 1.92575 14.7309L1.21424 14.4937ZM3.50626 16.7858L3.26909 16.0742C2.70162 16.2634 2.32519 16.3881 2.04382 16.4542C1.75133 16.5229 1.70101 16.4909 1.7304 16.5014L1.47849 17.2078L1.22658 17.9143C1.6239 18.0559 2.03418 17.9973 2.38695 17.9144C2.75085 17.8289 3.20433 17.677 3.74343 17.4973L3.50626 16.7858ZM0.792166 16.5215L0.0857373 16.7734C0.275527 17.3056 0.694353 17.7245 1.22658 17.9143L1.47849 17.2078L1.7304 16.5014C1.62226 16.4628 1.53716 16.3777 1.49859 16.2696L0.792166 16.5215ZM10.2607 3.20934L9.73037 3.73967L14.2604 8.26966L14.7907 7.73933L15.321 7.209L10.791 2.67901L10.2607 3.20934Z"
                    fill="#7026A1" />
                </svg>

                </Link>
                <Link href="">

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.3195 16.5334L18.0694 16.5401L17.3195 16.5334ZM3.66797 4.75065C3.25376 4.75065 2.91797 5.08644 2.91797 5.50065C2.91797 5.91486 3.25376 6.25065 3.66797 6.25065V5.50065V4.75065ZM18.3346 6.25065C18.7488 6.25065 19.0846 5.91486 19.0846 5.50065C19.0846 5.08644 18.7488 4.75065 18.3346 4.75065V5.50065V6.25065ZM9.91797 9.16732C9.91797 8.7531 9.58218 8.41732 9.16797 8.41732C8.75376 8.41732 8.41797 8.7531 8.41797 9.16732H9.16797H9.91797ZM8.41797 16.5007C8.41797 16.9149 8.75376 17.2507 9.16797 17.2507C9.58218 17.2507 9.91797 16.9149 9.91797 16.5007H9.16797H8.41797ZM13.5846 9.16732C13.5846 8.7531 13.2488 8.41732 12.8346 8.41732C12.4204 8.41732 12.0846 8.7531 12.0846 9.16732H12.8346H13.5846ZM12.0846 16.5007C12.0846 16.9149 12.4204 17.2507 12.8346 17.2507C13.2488 17.2507 13.5846 16.9149 13.5846 16.5007H12.8346H12.0846ZM17.418 5.50065L16.668 5.49395L16.5695 16.5267L17.3195 16.5334L18.0694 16.5401L18.1679 5.50735L17.418 5.50065ZM13.6529 20.1673V19.4173H8.2513V20.1673V20.9173H13.6529V20.1673ZM4.58464 5.50065H3.83464V16.5007H4.58464H5.33464V5.50065H4.58464ZM3.66797 5.50065V6.25065H4.58464V5.50065V4.75065H3.66797V5.50065ZM4.58464 5.50065V6.25065H7.33464V5.50065V4.75065H4.58464V5.50065ZM7.33464 5.50065V6.25065H14.668V5.50065V4.75065H7.33464V5.50065ZM14.668 5.50065V6.25065H17.418V5.50065V4.75065H14.668V5.50065ZM17.418 5.50065V6.25065H18.3346V5.50065V4.75065H17.418V5.50065ZM7.33464 5.09324H8.08464C8.08464 3.78802 9.30499 2.58398 11.0013 2.58398V1.83398V1.08398C8.64753 1.08398 6.58464 2.79839 6.58464 5.09324H7.33464ZM11.0013 1.83398V2.58398C12.6976 2.58398 13.918 3.78802 13.918 5.09324H14.668H15.418C15.418 2.79839 13.3551 1.08398 11.0013 1.08398V1.83398ZM7.33464 5.09324H6.58464V5.50065H7.33464H8.08464V5.09324H7.33464ZM14.668 5.09324H13.918V5.50065H14.668H15.418V5.09324H14.668ZM8.2513 20.1673V19.4173C6.64047 19.4173 5.33464 18.1115 5.33464 16.5007H4.58464H3.83464C3.83464 18.9399 5.81204 20.9173 8.2513 20.9173V20.1673ZM17.3195 16.5334L16.5695 16.5267C16.5552 18.1273 15.2536 19.4173 13.6529 19.4173V20.1673V20.9173C16.0768 20.9173 18.0478 18.9639 18.0694 16.5401L17.3195 16.5334ZM9.16797 9.16732H8.41797V16.5007H9.16797H9.91797V9.16732H9.16797ZM12.8346 9.16732H12.0846V16.5007H12.8346H13.5846V9.16732H12.8346Z"
                    fill="#EF2D2D" />
                </svg>

                </Link>
              </div>
            </td>
          </tr>
          ))
          ) : (
          <tr>
            <td colSpan="13" className="text-center py-10">
              {/* <img src="/no-data.png" alt="No Data" className="mx-auto mb-4 w-40 h-40 object-contain" /> */}
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
);
}