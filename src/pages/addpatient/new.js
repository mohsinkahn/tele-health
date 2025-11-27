'use client';
import { useState } from "react";
import Link from "next/link";

export default function AddPatientPage() {
  const [formData, setFormData] = useState({
    // Patient Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    socialSecurityNumber: '',
    homeAddress: '',
    city: '',
    state: '',
    zipCode: '',
    homePhone: '',
    cellPhone: '',
    emailAddress: '',
    maritalStatus: '',
    
    // Emergency Contact
    contactName: '',
    relationship: '',
    phoneNumber: '',
    alternatePhone: '',
    
    // Primary Care Physician
    physicianName: '',
    clinicPracticeName: '',
    physicianPhone: '',
    physicianAddress: '',
    
    // Insurance Information
    insuranceCompany: '',
    policyGroupNumber: '',
    policyholderName: '',
    policyholderDateOfBirth: '',
    relationshipToPatient: '',
    
    // Medical History
    medicalConditions: [],
    otherMedicalConditions: '',
    currentMedications: '',
    allergies: '',
    previousSurgeries: '',
    familyMedicalHistory: '',
    
    // Social History
    smokingStatus: '',
    cigarettesPerDay: '',
    alcoholStatus: '',
    drinksPerWeek: '',
    exerciseStatus: '',
    exerciseType: '',
    
    // Review of Systems
    reviewOfSystems: [],
    
    // Current Symptoms
    chiefComplaint: '',
    symptomOnset: '',
    symptomDescription: '',
    painLevel: '',
    
    // Additional Information
    additionalInfo: '',
    
    // Consent
    consent1: false,
    consent2: false,
    consent3: false,
    signatureDate: '',
    signature: ''
  });

  const medicalConditionsList = [
    'Diabetes', 'Heart Disease', 'Cancer', 'Kidney Disease', 
    'Thyroid Problems', 'Stroke', 'High Blood Pressure', 'Asthma',
    'Arthritis', 'Liver Disease', 'Depression/Anxiety', 'Seizures'
  ];

  const reviewOfSystemsCategories = {
    'General': ['Fever', 'Weight Loss', 'Night Sweats', 'Fatigue', 'Weight Gain', 'Chills'],
    'Cardiovascular': ['Chest Pain', 'Shortness of Breath', 'Palpitations', 'Leg Swelling'],
    'Respiratory': ['Cough', 'Shortness of Breath', 'Wheezing', 'Sputum Production'],
    'Gastrointestinal': ['Nausea', 'Diarrhea', 'Abdominal Pain', 'Vomiting', 'Constipation', 'Blood in Stool'],
    'Neurological': ['Headaches', 'Numbness/Tingling', 'Memory Problems', 'Dizziness', 'Weakness', 'Vision Changes'],
    'Musculoskeletal': ['Joint Pain', 'Back Pain', 'Muscle Pain', 'Swelling']
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <div className="p-4 md:p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <header>
            <h1 className="text-2xl font-medium mb-1 text-[#7026A1]">Patient Registration Form</h1>
            <p className="text-gray-600 text-sm">
              Please complete all sections of this form to the best of your knowledge.
            </p>
          </header>

          {/* Scrollable Form Content */}
          <div className="overflow-auto max-h-[calc(100vh-350px)]  bg-white rounded-lg px-3 py-3">
            
            {/* 1. Patient Information */}
            <section className="mb-8">
                <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Patient Information
              </h2>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="firstName" className="text-[#202E2D]">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="lastName" className="text-[#202E2D]">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="dateOfBirth" className="text-[#202E2D]">Date of Birth</label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="socialSecurityNumber" className="text-[#202E2D]">Social Security Number</label>
                  <input
                    id="socialSecurityNumber"
                    name="socialSecurityNumber"
                    type="text"
                    value={formData.socialSecurityNumber}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2 md:col-span-2">
                  <label htmlFor="homeAddress" className="text-[#202E2D]">Home Address</label>
                  <input
                    id="homeAddress"
                    name="homeAddress"
                    type="text"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="city" className="text-[#202E2D]">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="state" className="text-[#202E2D]">State</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="zipCode" className="text-[#202E2D]">ZIP Code</label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="homePhone" className="text-[#202E2D]">Home Phone</label>
                  <input
                    id="homePhone"
                    name="homePhone"
                    type="tel"
                    value={formData.homePhone}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="cellPhone" className="text-[#202E2D]">Cell Phone</label>
                  <input
                    id="cellPhone"
                    name="cellPhone"
                    type="tel"
                    value={formData.cellPhone}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="emailAddress" className="text-[#202E2D]">Email Address</label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">Marital Status</label>
                  <div className="flex flex-wrap gap-4">
                    {['Single', 'Married', 'Divorced', 'Widowed'].map(status => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value={status}
                          checked={formData.maritalStatus === status}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Emergency Contact */}
            <section className="mb-8">
                <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Emergency Contact
              </h2>
             
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="contactName" className="text-[#202E2D]">Contact Name</label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="relationship" className="text-[#202E2D]">Relationship</label>
                  <input
                    id="relationship"
                    name="relationship"
                    type="text"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="phoneNumber" className="text-[#202E2D]">Phone Number</label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="alternatePhone" className="text-[#202E2D]">Alternate Phone</label>
                  <input
                    id="alternatePhone"
                    name="alternatePhone"
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 3. Primary Care Physician */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Primary Care Physician
              </h2> 
            
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="physicianName" className="text-[#202E2D]">Physician Name</label>
                  <input
                    id="physicianName"
                    name="physicianName"
                    type="text"
                    value={formData.physicianName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="clinicPracticeName" className="text-[#202E2D]">Clinic/Practice Name</label>
                  <input
                    id="clinicPracticeName"
                    name="clinicPracticeName"
                    type="text"
                    value={formData.clinicPracticeName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="physicianPhone" className="text-[#202E2D]">Phone Number</label>
                  <input
                    id="physicianPhone"
                    name="physicianPhone"
                    type="tel"
                    value={formData.physicianPhone}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="physicianAddress" className="text-[#202E2D]">Address</label>
                  <input
                    id="physicianAddress"
                    name="physicianAddress"
                    type="text"
                    value={formData.physicianAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 4. Insurance Information */}
            <section className="mb-8">
                 <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Insurance Information
              </h2>
             
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="insuranceCompany" className="text-[#202E2D]">Insurance Company</label>
                  <input
                    id="insuranceCompany"
                    name="insuranceCompany"
                    type="text"
                    value={formData.insuranceCompany}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="policyGroupNumber" className="text-[#202E2D]">Policy/Group Number</label>
                  <input
                    id="policyGroupNumber"
                    name="policyGroupNumber"
                    type="text"
                    value={formData.policyGroupNumber}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="policyholderName" className="text-[#202E2D]">Policyholder Name</label>
                  <input
                    id="policyholderName"
                    name="policyholderName"
                    type="text"
                    value={formData.policyholderName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="policyholderDateOfBirth" className="text-[#202E2D]">Policyholder Date of Birth</label>
                  <input
                    id="policyholderDateOfBirth"
                    name="policyholderDateOfBirth"
                    type="date"
                    value={formData.policyholderDateOfBirth}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="relationshipToPatient" className="text-[#202E2D]">Relationship to Patient</label>
                  <input
                    id="relationshipToPatient"
                    name="relationshipToPatient"
                    type="text"
                    value={formData.relationshipToPatient}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 5. Medical History */}
            <section className="mb-8">
                 <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Medical History
              </h2>
            
              <div className="mb-4">
                <p className="text-sm text-[#202E2D] mb-3">Do you have any of the following conditions? (Check all that apply)</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  {medicalConditionsList.map(condition => (
                    <label key={condition} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.medicalConditions.includes(condition)}
                        onChange={() => handleCheckboxChange('medicalConditions', condition)}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                      />
                      <span className="text-sm text-[#202E2D]">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="otherMedicalConditions" className="text-[#202E2D]">List any other medical conditions:</label>
                  <textarea
                    id="otherMedicalConditions"
                    name="otherMedicalConditions"
                    value={formData.otherMedicalConditions}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="currentMedications" className="text-[#202E2D]">Current Medications (include dosage):</label>
                  <textarea
                    id="currentMedications"
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="allergies" className="text-[#202E2D]">Allergies (medications, foods, environmental):</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="previousSurgeries" className="text-[#202E2D]">Previous Surgeries (include dates):</label>
                  <textarea
                    id="previousSurgeries"
                    name="previousSurgeries"
                    value={formData.previousSurgeries}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="familyMedicalHistory" className="text-[#202E2D]">Family Medical History (parents, siblings):</label>
                  <textarea
                    id="familyMedicalHistory"
                    name="familyMedicalHistory"
                    value={formData.familyMedicalHistory}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 6. Social History */}
            <section className="mb-8">
                 <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Social History
              </h2>
            
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block">Do you smoke?</label>
                  <div className="flex flex-wrap gap-4 mb-3">
                    {['Yes', 'No', 'Former smoker'].map(option => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="smokingStatus"
                          value={option}
                          checked={formData.smokingStatus === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{option}</span>
                      </label>
                    ))}
                  </div>
                  {(formData.smokingStatus === 'Yes' || formData.smokingStatus === 'Former smoker') && (
                    <div className="form-group flex-col flex gap-2 mt-3">
                      <label htmlFor="cigarettesPerDay" className="text-[#202E2D]">If yes, how many per day?</label>
                      <input
                        id="cigarettesPerDay"
                        name="cigarettesPerDay"
                        type="text"
                        value={formData.cigarettesPerDay}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current max-w-xs"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block">Do you drink alcohol?</label>
                  <div className="flex flex-wrap gap-4 mb-3">
                    {['Yes', 'No'].map(option => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="alcoholStatus"
                          value={option}
                          checked={formData.alcoholStatus === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.alcoholStatus === 'Yes' && (
                    <div className="form-group flex-col flex gap-2 mt-3">
                      <label htmlFor="drinksPerWeek" className="text-[#202E2D]">If yes, how many drinks per week?</label>
                      <input
                        id="drinksPerWeek"
                        name="drinksPerWeek"
                        type="text"
                        value={formData.drinksPerWeek}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current max-w-xs"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block">Do you exercise regularly?</label>
                  <div className="flex flex-wrap gap-4 mb-3">
                    {['Yes', 'No'].map(option => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="exerciseStatus"
                          value={option}
                          checked={formData.exerciseStatus === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.exerciseStatus === 'Yes' && (
                    <div className="form-group flex-col flex gap-2 mt-3">
                      <label htmlFor="exerciseType" className="text-[#202E2D]">If yes, what type and how often?</label>
                      <input
                        id="exerciseType"
                        name="exerciseType"
                        type="text"
                        value={formData.exerciseType}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* 7. Review of Systems */}
            <section className="mb-8">
                 <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Review of Systems
              </h2>
           
              <p className="text-sm text-[#202E2D] mb-4">Please check if you are currently experiencing any of the following:</p>
              <div className="space-y-6">
                {Object.entries(reviewOfSystemsCategories).map(([category, symptoms]) => (
                  <div key={category}>
                    <h3 className="text-base font-medium text-[#7026A1] mb-3">{category}:</h3>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                      {symptoms.map(symptom => {
                        const symptomKey = `${category}-${symptom}`;
                        return (
                          <label key={symptomKey} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.reviewOfSystems.includes(symptomKey)}
                              onChange={() => handleCheckboxChange('reviewOfSystems', symptomKey)}
                              className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                            />
                            <span className="text-sm text-[#202E2D]">{symptom}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Current Symptoms */}
            <section className="mb-8">
                <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Current Symptoms
              </h2>
           
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="chiefComplaint" className="text-[#202E2D]">Chief Complaint reason for today's visit:</label>
                  <textarea
                    id="chiefComplaint"
                    name="chiefComplaint"
                    value={formData.chiefComplaint}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="symptomOnset" className="text-[#202E2D]">When did your symptoms begin?</label>
                  <textarea
                    id="symptomOnset"
                    name="symptomOnset"
                    value={formData.symptomOnset}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="symptomDescription" className="text-[#202E2D]">Describe your symptoms in detail:</label>
                  <textarea
                    id="symptomDescription"
                    name="symptomDescription"
                    value={formData.symptomDescription}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="painLevel" className="text-[#202E2D]">Rate your pain level (0-10, where 10 is worst pain):</label>
                  <input
                    id="painLevel"
                    name="painLevel"
                    type="number"
                    min="0"
                    max="10"
                    value={formData.painLevel}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current max-w-xs"
                  />
                </div>
              </div>
            </section>

            {/* 9. Additional Information */}
            <section className="mb-8">
                <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Additional Information
              </h2>
           
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="additionalInfo" className="text-[#202E2D]">Is there anything else you would like us to know?</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows="4"
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* 10. Consent and Signature */}
            <section className="mb-8">
                 <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                Consent and Signature
              </h2>
           
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent1"
                      checked={formData.consent1}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                    />
                    <span className="text-sm text-[#202E2D]">I certify that the information provided is accurate and complete to the best of my knowledge.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent2"
                      checked={formData.consent2}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                    />
                    <span className="text-sm text-[#202E2D]">I authorize the release of my medical information for treatment and billing purposes.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent3"
                      checked={formData.consent3}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                    />
                    <span className="text-sm text-[#202E2D]">I understand that I am financially responsible for all charges.</span>
                  </label>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="signatureDate" className="text-[#202E2D]">Date</label>
                    <input
                      id="signatureDate"
                      name="signatureDate"
                      type="date"
                      value={formData.signatureDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="signature" className="text-[#202E2D]">Signature</label>
                  <textarea
                    id="signature"
                    name="signature"
                    value={formData.signature}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Type your full name here as your electronic signature"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <p className="text-xs text-gray-600 italic mt-2">
                  By signing this form electronically, and clicking on  &quot;Submit Signature &quot;, you are agreeing to the terms stated herein.
                </p>
              </div>
            </section>

          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <Link href="/patients" className="btn btn-secondary">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit 
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
