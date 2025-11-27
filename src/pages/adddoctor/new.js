'use client';
import { useState } from "react";
import Link from "next/link";

export default function AddDoctorPage() {
  const [formData, setFormData] = useState({
    // SECTION A - PERSONAL & PROFESSIONAL DETAILS
    fullName: '',
    preferredName: '',
    dateOfBirth: '',
    gender: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    officePhone: '',
    mobilePhone: '',
    emailProfessional: '',
    alternateContactName: '',
    alternateContactRelationship: '',
    alternateContactPhone: '',
    licenseNumber: '',
    licenseExpirationDate: '',
    issuingState: '',
    specialty: '',
    subSpecialty: '',
    yearsInPractice: '',
    currentEmployer: '',
    professionalProfile: '',
    supportingDocuments: null,
    
    // SECTION B - EMR & SYSTEMS ACCESS
    desiredUserID: '',
    accessLevelReadOnly: false,
    accessLevelWrite: false,
    accessLevelPrescribing: false,
    accessLevelAdministrative: false,
    departments: '',
    preferredTrainingStartDate: '',
    softwareModuleEPrescribing: false,
    softwareModuleLabOrdering: false,
    softwareModuleImaging: false,
    softwareModuleOther: false,
    softwareModuleOtherText: '',
    deviceDesktop: false,
    deviceTablet: false,
    deviceMobile: false,
    securityAcknowledgeCredentials: false,
    securityAcknowledgeProtocols: false,
    
    // SECTION C - COMPLIANCE & POLICIES
    conflictOfInterest: '',
    consentShareCredentials: false,
    hipaaReviewed: false,
    hipaaConfidentiality: false,
    dataUsageConsent: false,
    dataUsageDate: '',
    dataUsagePrintedName: '',
    signatureDoctor: '',
    
    // SECTION D - FOR ADMINISTRATIVE USE ONLY
    formReceivedBy: '',
    formReceivedDate: '',
    verifiedBy: '',
    verifiedDate: '',
    accessApprovedBy: '',
    accessApprovedDate: '',
    userAccountCreated: '',
    userAccountCreatedDate: '',
    trainingCompletedDate: '',
    trainer: '',
    administrativeNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      supportingDocuments: file
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
            <h1 className="text-2xl font-medium mb-1 text-[#7026A1]">Doctor Registration Form</h1>
            <p className="text-gray-600 text-sm">
              Please complete all sections of this form accurately.
            </p>
          </header>

          {/* Scrollable Form Content */}
          <div className="overflow-auto max-h-[calc(100vh-350px)] bg-white rounded-lg px-3 py-3">
            
            {/* SECTION A - PERSONAL & PROFESSIONAL DETAILS */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                 SECTION A - PERSONAL & PROFESSIONAL DETAILS
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="fullName" className="text-[#202E2D]">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="preferredName" className="text-[#202E2D]">Preferred Name / Pronouns</label>
                    <input
                      id="preferredName"
                      name="preferredName"
                      type="text"
                      value={formData.preferredName}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="dateOfBirth" className="text-[#202E2D]">Date of Birth (MM/DD/YYYY)</label>
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
                    <label className="text-[#202E2D] mb-2">Gender</label>
                    <div className="flex flex-wrap gap-4">
                      {['Male', 'Female', 'non-binary', 'Prefer not to say'].map(gender => (
                        <label key={gender} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                          />
                          <span className="text-sm text-[#202E2D]">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Home Address</label>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="form-group flex-col flex gap-2 md:col-span-2">
                      <label htmlFor="street" className="text-[#202E2D]">Street</label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        value={formData.street}
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
                      <label htmlFor="zip" className="text-[#202E2D]">ZIP</label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Contact Information</label>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="officePhone" className="text-[#202E2D]">Office (_)*</label>
                      <input
                        id="officePhone"
                        name="officePhone"
                        type="tel"
                        value={formData.officePhone}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="mobilePhone" className="text-[#202E2D]">Mobile (_)*</label>
                      <input
                        id="mobilePhone"
                        name="mobilePhone"
                        type="tel"
                        value={formData.mobilePhone}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="emailProfessional" className="text-[#202E2D]">Email (professional)</label>
                      <input
                        id="emailProfessional"
                        name="emailProfessional"
                        type="email"
                        value={formData.emailProfessional}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Alternate Contact Name</label>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="alternateContactName" className="text-[#202E2D]">Name</label>
                      <input
                        id="alternateContactName"
                        name="alternateContactName"
                        type="text"
                        value={formData.alternateContactName}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="alternateContactRelationship" className="text-[#202E2D]">Relationship</label>
                      <input
                        id="alternateContactRelationship"
                        name="alternateContactRelationship"
                        type="text"
                        value={formData.alternateContactRelationship}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="alternateContactPhone" className="text-[#202E2D]">Phone (_)*</label>
                      <input
                        id="alternateContactPhone"
                        name="alternateContactPhone"
                        type="tel"
                        value={formData.alternateContactPhone}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Medical License / Registration</label>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="licenseNumber" className="text-[#202E2D]">License Number</label>
                      <input
                        id="licenseNumber"
                        name="licenseNumber"
                        type="text"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="licenseExpirationDate" className="text-[#202E2D]">Expiration Date: //</label>
                      <input
                        id="licenseExpirationDate"
                        name="licenseExpirationDate"
                        type="date"
                        value={formData.licenseExpirationDate}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="issuingState" className="text-[#202E2D]">Issuing State / Region</label>
                      <input
                        id="issuingState"
                        name="issuingState"
                        type="text"
                        value={formData.issuingState}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="specialty" className="text-[#202E2D]">Specialty / Field of Practice</label>
                    <input
                      id="specialty"
                      name="specialty"
                      type="text"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="subSpecialty" className="text-[#202E2D]">Sub-specialty (if any)</label>
                    <input
                      id="subSpecialty"
                      name="subSpecialty"
                      type="text"
                      value={formData.subSpecialty}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="yearsInPractice" className="text-[#202E2D]">Years in Practice</label>
                    <div className="flex items-center gap-2">
                      <input
                        id="yearsInPractice"
                        name="yearsInPractice"
                        type="number"
                        value={formData.yearsInPractice}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                      <span className="text-sm text-[#202E2D]">years</span>
                    </div>
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="currentEmployer" className="text-[#202E2D]">Current / Most Recent Employer or Practice Name</label>
                    <input
                      id="currentEmployer"
                      name="currentEmployer"
                      type="text"
                      value={formData.currentEmployer}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="professionalProfile" className="text-[#202E2D]">Professional Profile (a short bio, credentials, certifications)</label>
                  <textarea
                    id="professionalProfile"
                    name="professionalProfile"
                    value={formData.professionalProfile}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>

                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">Upload supporting documentation (license, CV, certification)</label>
                  <div className="border-2 border-dashed border-[#D0D5DD] rounded-[8px] p-6 text-center cursor-pointer hover:border-[#7026A1] transition-colors">
                    <input
                      type="file"
                      id="supportingDocuments"
                      name="supportingDocuments"
                      onChange={handleFileChange}
                      accept=".png,.jpeg,.jpg,.pdf,.csv"
                      className="hidden"
                    />
                    <label htmlFor="supportingDocuments" className="cursor-pointer flex flex-col items-center gap-2">
                      <svg className="w-8 h-8 text-[#7026A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm text-[#202E2D]">Click to upload or drag and drop</span>
                      <span className="text-xs text-gray-500">PNG, JPEG, PDF and CSV</span>
                    </label>
                    {formData.supportingDocuments && (
                      <p className="text-xs text-[#7026A1] mt-2">{formData.supportingDocuments.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION B - EMR & SYSTEMS ACCESS */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                SECTION B - EMR & SYSTEMS ACCESS
              </h2>
            
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="desiredUserID" className="text-[#202E2D]">Desired User ID / Username</label>
                  <input
                    id="desiredUserID"
                    name="desiredUserID"
                    type="text"
                    value={formData.desiredUserID}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Access Level Required (check all that apply)</label>
                  <div className="space-y-2">
                    {[
                      { key: 'accessLevelReadOnly', label: 'Read-Only Patient Data' },
                      { key: 'accessLevelWrite', label: 'Write / Charting Access' },
                      { key: 'accessLevelPrescribing', label: 'Prescribing / e-Rx' },
                      { key: 'accessLevelAdministrative', label: 'Administrative / Managerial Access' }
                    ].map(option => (
                      <label key={option.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name={option.key}
                          checked={formData[option.key]}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="departments" className="text-[#202E2D]">Departments / Clinics you will be working with</label>
                    <input
                      id="departments"
                      name="departments"
                      type="text"
                      value={formData.departments}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="preferredTrainingStartDate" className="text-[#202E2D]">Preferred System Training Start Date: //_</label>
                    <input
                      id="preferredTrainingStartDate"
                      name="preferredTrainingStartDate"
                      type="date"
                      value={formData.preferredTrainingStartDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Additional Software Modules Required</label>
                  <div className="space-y-2 mb-4">
                    {[
                      { key: 'softwareModuleEPrescribing', label: 'e-Prescribing' },
                      { key: 'softwareModuleLabOrdering', label: 'Lab Ordering Interface' },
                      { key: 'softwareModuleImaging', label: 'Imaging/Radiology Interface' }
                    ].map(option => (
                      <label key={option.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name={option.key}
                          checked={formData[option.key]}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">{option.label}</span>
                      </label>
                    ))}
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="softwareModuleOther"
                          checked={formData.softwareModuleOther}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">Other:</span>
                      </label>
                      <input
                        type="text"
                        name="softwareModuleOtherText"
                        value={formData.softwareModuleOtherText}
                        onChange={handleInputChange}
                        disabled={!formData.softwareModuleOther}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current flex-1 disabled:bg-gray-100"
                        placeholder="Specify other module"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Portable Devices for Access (Check)</label>
                  <div className="space-y-2">
                    {[
                      { key: 'deviceDesktop', label: 'Desktop/Laptop (in-office)' },
                      { key: 'deviceTablet', label: 'Tablet (in-clinic)' },
                      { key: 'deviceMobile', label: 'Mobile phone (secure)' }
                    ].map(option => (
                      <label key={option.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name={option.key}
                          checked={formData[option.key]}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Security Responsibility Acknowledgment</label>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="securityAcknowledgeCredentials"
                        checked={formData.securityAcknowledgeCredentials}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                      />
                      <span className="text-sm text-[#202E2D]">I agree to use only my authorized login credentials.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="securityAcknowledgeProtocols"
                        checked={formData.securityAcknowledgeProtocols}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                      />
                      <span className="text-sm text-[#202E2D]">I understand I must adhere to data-security protocols and report any breach immediately.</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION C - COMPLIANCE & POLICIES */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                SECTION C - COMPLIANCE & POLICIES
              </h2>
            
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Conflict of Interest Declaration</label>
                  <p className="text-sm text-[#202E2D] mb-2">Please describe any current or potential conflict</p>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="conflictOfInterest" className="text-[#202E2D]">Description</label>
                    <textarea
                      id="conflictOfInterest"
                      name="conflictOfInterest"
                      value={formData.conflictOfInterest}
                      onChange={handleInputChange}
                      rows="4"
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentShareCredentials"
                      checked={formData.consentShareCredentials}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                    />
                    <span className="text-sm text-[#202E2D]">I consent to the EMR provider sharing my credential verification with authorized integrated platforms.</span>
                  </label>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">HIPAA & Privacy Training</label>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="hipaaReviewed"
                        checked={formData.hipaaReviewed}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                      />
                      <span className="text-sm text-[#202E2D]">I have reviewed the Patient Privacy Protocols (HIPAA/GDPR/Other).</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="hipaaConfidentiality"
                        checked={formData.hipaaConfidentiality}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                      />
                      <span className="text-sm text-[#202E2D]">I commit to maintain confidentiality of patient records and follow audit-trail policies.</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#202E2D] mb-3 block font-medium">Data Usage & Analytics Consent</label>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="dataUsageConsent"
                        checked={formData.dataUsageConsent}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300 mt-1"
                      />
                      <span className="text-sm text-[#202E2D]">I consent (or I do not consent) to anonymized usage of my user-activity logs for system performance improvement.</span>
                    </label>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <div className="form-group flex-col flex gap-2">
                        <label htmlFor="dataUsageDate" className="text-[#202E2D]">Date: //</label>
                        <input
                          id="dataUsageDate"
                          name="dataUsageDate"
                          type="date"
                          value={formData.dataUsageDate}
                          onChange={handleInputChange}
                          className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                        />
                      </div>
                      <div className="form-group flex-col flex gap-2">
                        <label htmlFor="dataUsagePrintedName" className="text-[#202E2D]">Printed Name:</label>
                        <input
                          id="dataUsagePrintedName"
                          name="dataUsagePrintedName"
                          type="text"
                          value={formData.dataUsagePrintedName}
                          onChange={handleInputChange}
                          className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="signatureDoctor" className="text-[#202E2D]">Signature - Doctor</label>
                  <textarea
                    id="signatureDoctor"
                    name="signatureDoctor"
                    value={formData.signatureDoctor}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Type your full name here as your electronic signature"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* SECTION D - FOR ADMINISTRATIVE USE ONLY */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                SECTION D - FOR ADMINISTRATIVE USE ONLY
              </h2>
            
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="formReceivedBy" className="text-[#202E2D]">Form Received By</label>
                    <input
                      id="formReceivedBy"
                      name="formReceivedBy"
                      type="text"
                      value={formData.formReceivedBy}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="formReceivedDate" className="text-[#202E2D]">Date: //</label>
                    <input
                      id="formReceivedDate"
                      name="formReceivedDate"
                      type="date"
                      value={formData.formReceivedDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="verifiedBy" className="text-[#202E2D]">Verified By</label>
                    <input
                      id="verifiedBy"
                      name="verifiedBy"
                      type="text"
                      value={formData.verifiedBy}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="verifiedDate" className="text-[#202E2D]">Date: //</label>
                    <input
                      id="verifiedDate"
                      name="verifiedDate"
                      type="date"
                      value={formData.verifiedDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="accessApprovedBy" className="text-[#202E2D]">Access Level Approved By</label>
                    <input
                      id="accessApprovedBy"
                      name="accessApprovedBy"
                      type="text"
                      value={formData.accessApprovedBy}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="accessApprovedDate" className="text-[#202E2D]">Date: //</label>
                    <input
                      id="accessApprovedDate"
                      name="accessApprovedDate"
                      type="date"
                      value={formData.accessApprovedDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="userAccountCreated" className="text-[#202E2D]">User Account Created (username)</label>
                    <input
                      id="userAccountCreated"
                      name="userAccountCreated"
                      type="text"
                      value={formData.userAccountCreated}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="userAccountCreatedDate" className="text-[#202E2D]">Date: //</label>
                    <input
                      id="userAccountCreatedDate"
                      name="userAccountCreatedDate"
                      type="date"
                      value={formData.userAccountCreatedDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="trainingCompletedDate" className="text-[#202E2D]">Training Completed on: //_</label>
                    <input
                      id="trainingCompletedDate"
                      name="trainingCompletedDate"
                      type="date"
                      value={formData.trainingCompletedDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="trainer" className="text-[#202E2D]">Trainer:</label>
                    <input
                      id="trainer"
                      name="trainer"
                      type="text"
                      value={formData.trainer}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>

                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="administrativeNotes" className="text-[#202E2D]">Notes / Comments</label>
                  <textarea
                    id="administrativeNotes"
                    name="administrativeNotes"
                    value={formData.administrativeNotes}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <Link href="/doctors" className="btn btn-secondary">
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
