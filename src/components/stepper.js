"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight,Plus,Download,Pencil,Trash,Check,User,User2,User2Icon,UserCog,ArrowBigRight } from "lucide-react";
import Image from "next/image";

const STEPS = [
  { id: 1, title: "Patient Details" },
  { id: 2, title: "Available Doctors" },
  { id: 3, title: "Plan" },
  { id: 4, title: "Payment Link Sent !" },
];




const doctors = [
  {
    id: 1,
    name: "Jane Dominique",
    specialty: "Psychiatrist",
    image: "/doc.png",
  },
  {
    id: 2,
    name: "Jane Dominique",
    specialty: "Psychiatrist",
    image: "/doc.png",
  },
  {
    id: 3,
    name: "Jane Dominique",
    specialty: "Psychiatrist",
    image: "/doc.png",
  },
  {
    id: 4,
    name: "Jane Dominique",
    specialty: "Psychiatrist",
    image: "/doc.png",
  },
  {
    id: 5,
    name: "Jane Dominique",
    specialty: "Psychiatrist",
    image: "/doc.png",
  },
  
  
];




export default function StepperPage() {
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

    const [activeTab, setActiveTab] = useState("personal");


const plans = {
    personal: {
      title: "Personal Plan",
      price: "$199 /",
      description: "One request at a time. Pause or cancel anytime",
      buttonText: "Find Support",
      features: [
        "One request at a time",
        "Design complexity",
        "Project management",
        "Turnaround time per request",
        "Illustration library access",
        "Dedicated account manager",
      ],
    },
    family: {
      title: "Family Plan",
      price: "$299 /",
      description: "Multiple requests for your family. Pause or cancel anytime",
      buttonText: "Find Support",
      features: [
        "Multiple requests at a time",
        "Design complexity",
        "Project management",
        "Turnaround time per request",
        "Illustration library access",
        "Dedicated account manager",
      ],
    },
  };

  const renderCard = (plan) => (
    <div className=" rounded-xl p-3 w-full  mx-auto bg-[#EDF0EE]">
        <div className="bg-gradient-to-r from-[#7026A1] to-[#6c3094] p-6 rounded-xl">
      <div className="flex items-center mb-6">
        <span className="text-white mr-2">
         <User2/>


        </span>
        <span className="text-white font-normal">{plan.title}</span>
      </div>
      <div className="flex items-center ">
      <h2 className="text-4xl font-normal text-white mb-2 inline-block">{plan.price}</h2> 
      <p className="text-white text-lg">Session</p>
      </div>
      
      <p className="text-white mb-6 text-xs">{plan.description}</p>
      <button className="bg-white text-[#7026A1] w-full py-2 px-3 rounded-lg text-sm font-medium flex justify-between items-center">
        {plan.buttonText}
        <span className="ml-2 bg-[#7026A1] p-3 rounded-lg">
          
<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.55957 3.92055H7.83957M5.03957 0.560547L8.00359 3.52457C8.22228 3.74326 8.22228 4.09783 8.00359 4.31653L5.03957 7.28055" stroke="#D9D9D9" stroke-width="1.12" stroke-linecap="round"/>
</svg>

        </span>
      </button>
        </div>

      <div className=" rounded-b-xl mt-6 p-4 text-sm text-gray-700">
        <h3 className="font-normal text-xl text-[#0A140D] mb-2">What’s included:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-white bg-[#7026A1] rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  // Form state: store all fields for all steps
  const [form, setForm] = useState({
    // Step 1 (Patient Details)
    fileName: "",
    phone: "",
    email: "",
    complaint: "",
    // Step 2 (Appointment Details)
    doctor: "",
    date: "",
    time: "",
    // Step 3 (Insurance)
    provider: "",
    policyNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: null }));
  }

  // Simple per-step validators (customize as needed)
//   function validateStep(currentStep) {
//     const e = {};
//     if (currentStep === 1) {
//       if (!form.fileName.trim()) e.fileName = "File name is required";
//       if (!form.phone.trim()) e.phone = "Phone is required";
//       if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
//     }
//     if (currentStep === 2) {
//       if (!form.doctor.trim()) e.doctor = "Select a doctor";
//       if (!form.date) e.date = "Choose a date";
//       if (!form.time) e.time = "Choose a time";
//     }
//     if (currentStep === 3) {
//       // insurance optional, but if provider filled then policy required
//       if (form.provider && !form.policyNumber) e.policyNumber = "Policy number required";
//     }
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }

  function nextStep() {
    // if (!validateStep(step)) return;
    setStep(s => Math.min(STEPS.length, s + 1));
  }

  function prevStep() {
    setStep(s => Math.max(1, s - 1));
  }

//   async function handleSubmit(e) {
//     e?.preventDefault?.();
//     // final validation of all steps
//     let ok = validateStep(1) && validateStep(2) && validateStep(3);
//     if (!ok) {
//       // jump to first step with errors
//       if (Object.keys(errors).length) {
//         const firstKey = Object.keys(errors)[0];
//         if (["fileName", "phone", "email", "complaint"].includes(firstKey)) setStep(1);
//         else if (["doctor", "date", "time"].includes(firstKey)) setStep(2);
//         else setStep(3);
//       }
//       return;
//     }

//     setSubmitting(true);
//      await new Promise(res => setTimeout(res, 900));
//     setSubmitting(false);
//     setSubmitted(true);
//   }

  const progressPercent = Math.round(((step - 1) / (STEPS.length - 1)) * 100);

  return (
    <div className=" flex items-center justify-center ">
      

      <main className="relative z-10 w-full max-w-4xl p-1 ">
        
        <div className="mb-5">
            <div className="mb-5">
                <p className="text-[#EAECF0] text-[32px] text-center">Search Doctors</p>
            </div>
          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mb-3">
            {STEPS.map(s => (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    s.id === step ? "bg-white w-8 h-2 rounded-lg" : s.id < step ? "bg-white" : "bg-white/30"
                  }`}
                />
                {/* <span className={`text-xs mt-1 ${s.id === step ? "text-white" : "text-white/60"}`}>{s.id === step ? s.title : ""}</span> */}
              </div>
            ))}
          </div>

          
        </div>

        {/* Card */}
        <form 
        // onSubmit={handleSubmit}
        
        >
            <div className="bg-white rounded-2xl shadow-xl ">

            
          <div className="px-3 py-4">
            <h2 className="text-xl font-medium text-[#7026A1] mb-4">{STEPS.find(s => s.id === step).title}</h2>

            {/* Multi-step content */}
            <div className="space-y-6">
              {step === 1 && (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">File Name</label>
                    <input
                    //   value={form.fileName}
                    //   onChange={e => updateField("fileName", e.target.value)}
                      className={`w-full p-3 rounded-md border bg-white ${errors.fileName ? "border-red-400" : "border-gray-200"} focus:outline-none`}
                    />
                    {/* {errors.fileName && <p className="text-xs text-red-500 mt-1">{errors.fileName}</p>} */}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                      <input
                        // value={form.phone}
                        // onChange={e => updateField("phone", e.target.value)}
                        className={`w-full p-3 rounded-md border bg-white ${errors.phone ? "border-red-400" : "border-gray-200"} focus:outline-none`}
                      />
                      {/* {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>} */}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email</label>
                      <input
                        // value={form.email}
                        // onChange={e => updateField("email", e.target.value)}
                        className={`w-full p-3 rounded-md border bg-white ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none`}
                      />
                      {/* {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>} */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-1">Complaint</label>
                    <input
                    //   value={form.complaint}
                    //   onChange={e => updateField("complaint", e.target.value)}
                      className="w-full p-3 rounded-md border bg-white border-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="mb-4 grid lg:grid-cols-3 grid-cols-1 gap-3">
                    <div>
                        <label className="block text-sm text-[#757575] mb-1">Booking Date</label>
                    <select
                    //   value={form.doctor}
                    //   onChange={e => updateField("doctor", e.target.value)}
                      className={`w-full p-3 rounded-md border ${errors.doctor ? "border-red-400" : "border-gray-200"} focus:outline-none bg-white`}
                    >
                      <option value="">Select Date</option>
                      <option value="dr-sara">Dr. Sara</option>
                      <option value="dr-ali">Dr. Ali</option>
                      <option value="dr-khan">Dr. Khan</option>
                    </select>
                    {/* {errors.doctor && <p className="text-xs text-red-500 mt-1">{errors.doctor}</p>} */}
                    </div>
                    <div>
                        
                    <label className="block text-sm text-[#757575] mb-1">Booking Slot</label>
                    <select
                    //   value={form.doctor}
                    //   onChange={e => updateField("doctor", e.target.value)}
                      className={`w-full p-3 rounded-md border ${errors.doctor ? "border-red-400" : "border-gray-200"} focus:outline-none bg-white`}
                    >
                      <option value="">Select Slot</option>
                      <option value="dr-sara">Dr. Sara</option>
                      <option value="dr-ali">Dr. Ali</option>
                      <option value="dr-khan">Dr. Khan</option>
                    </select>
                    {/* {errors.doctor && <p className="text-xs text-red-500 mt-1">{errors.doctor}</p>} */}
                    </div>
                    <div>
                        
                    <label className="block text-sm text-[#757575] mb-1">State</label>
                    <select
                    //   value={form.doctor}
                    //   onChange={e => updateField("doctor", e.target.value)}
                      className={`w-full p-3 rounded-md border ${errors.doctor ? "border-red-400" : "border-gray-200"} focus:outline-none bg-white`}
                    >
                      <option value="">Select State</option>
                      <option value="dr-sara">Dr. Sara</option>
                      <option value="dr-ali">Dr. Ali</option>
                      <option value="dr-khan">Dr. Khan</option>
                    </select>
                    {/* {errors.doctor && <p className="text-xs text-red-500 mt-1">{errors.doctor}</p>} */}
                    </div>
                    
                  </div>
                 <label className="block text-sm text-[#757575] mb-1">Found 10 Doctors</label>
                   <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                       {doctors.map((doc) => {
                       const isSelected = selectedDoctor === doc.id;

                       return (
                       <div key={doc.id} className="bg-white rounded-2xl">
                           <div className="p-6 flex flex-col">
                                   <Image src={doc.image} width={330} height={330} alt="doctor photo"
                                       className="object-contain mx-auto" />

                                   <h1 className="text-md font-[500] text-[#7026A1] mt-4 text-center">
                                       {doc.name}
                                   </h1>

                                   <p className="text-[#6B7280] text-center text-sm mt-2 mb-4">
                                       {doc.specialty}
                                   </p>

                                   {/* Select Button */}
                                   <button type="button" onClick={()=>
                                       setSelectedDoctor(isSelected ? null : doc.id)
                                       }
                                       className={`mb-3 text-xs w-full py-2 rounded-lg transition font-medium
                                       ${isSelected
                                       ? "bg-green-500 text-white"
                                       : "bg-purple-600 text-white"
                                       }
                                       `}
                                       >
                                       <div className="flex gap-2 items-center justify-center">
                                           {isSelected ? (
                                           <>
                                           <Check className="inline-block" />
                                           <span>Selected</span>
                                           </>
                                           
                                           ) : (
                                           <>
                                               <Plus className="inline-block" />
                                               <span>Book Appointment</span>
                                           </>
                                           )}
                                       </div>
                                   </button>
                               
                           </div>
                       </div>
                       );
                       })}
                   </div>

                   </div>
              )}

              {step === 3 && (
                <div className="p-2 ">
                   <div className="p-1  ">
      {/* Tabs */}
      {/* background: #EDF0EE;
    width: fit-content;
    margin: auto;
    padding: 8px 15px;
    border-radius: 12px; */}
      <div className="flex justify-center gap-2 mb-6 bg-[#EDF0EE] w-fit mx-auto p-3 rounded-lg">
        <button
        type="button"
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
            activeTab === "personal"
              ? "bg-white text-purple-600"
              : "bg-[#EDF0EE] text-gray-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20v-2c0-2.21 3.58-4 6-4s6 1.79 6 4v2H6z" />
          </svg>
          Personal
        </button>
        <button
        type="button"
          onClick={() => setActiveTab("family")}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
            activeTab === "family"
              ? "bg-white text-purple-600"
              : "bg-[#EDF0EE] text-gray-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Family
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{activeTab === "personal" ? renderCard(plans.personal) : renderCard(plans.family)}</div>
    </div>

                </div>
              )}

              {step === 4 && (
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">

                  <div className="grid grid-cols-1 gap-3">
                  <p className="text-[#6B676D] text-[16px]">We have sent you a payment link at your registered Email address “Awew12@gmail.com. Please pay the consultation fee to confirm your booking.</p>
                  </div>

                  {submitted && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded">Form submitted successfully ✅</div>
                  )}
                </div>
              )}
            </div>
          </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-4 px-1 pb-6 pt-0 mt-6 ">
            <button
              type="button"
              onClick={() => {
                // if (step === 1) {
                //   setForm({
                //     fileName: "",
                //     phone: "",
                //     email: "",
                //     complaint: "",
                //     doctor: "",
                //     date: "",
                //     time: "",
                //     provider: "",
                //     policyNumber: "",
                //   });
                //   setErrors({});
                // } 
                // else
                     prevStep();
              }}
              className="flex-1 py-3 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
            >
              {step === 1 ? "Cancel" : "Back"}
            </button>

            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 py-3 rounded-lg bg-[#7026A1] text-white hover:bg-purple-700 transition"
              >
                Next
              </button>
            )}

            {step === 4 && (
              <button
                disabled={submitting}
                type="submit"
                className="flex-1 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
          
        </form>

        {/* Optional small footer */}
        {/* <div className="text-center text-xs text-white/60 mt-4">
          <span>Step {step} of {STEPS.length}</span>
        </div> */}
      </main>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 py-2">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-sm text-gray-800 font-medium">{value}</div>
    </div>
  );
}
