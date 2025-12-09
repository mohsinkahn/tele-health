'use client';
import { useState } from "react";
import Link from "next/link";

export default function AddInsurancePage() {
  const [formData, setFormData] = useState({
    // Header
    fica: '',
    
    // - 1 - Carrier Information
    medicare: false,
    medicareId: '',
    tricare: false,
    tricareChampus: '',
    groupHealthPlan: false,
    groupHealthPlanId: '',
    other: false,
    otherId: '',
    medicaid: false,
    medicaidId: '',
    champus: false,
    champusSponsorSsn: '',
    fecaBlkLung: false,
    fecaBlkLungSsn: '',
    vaFileNumber: '',
    vaSsnOrId: '',
    
    // - 1a
    insuredIdNumber: '',
    
    // - 2
    patientName: '',
    
    // - 3
    patientBirthDate: '',
    patientSex: '',
    
    // - 4
    insuredName: '',
    
    // - 5
    patientRelationshipToInsured: '',
    
    // - 6
    patientAddress: '',
    patientCity: '',
    patientState: '',
    patientZipCode: '',
    patientTelephone: '',
    
    // - 7
    insuredAddress: '',
    insuredCity: '',
    insuredState: '',
    insuredZipCode: '',
    insuredTelephone: '',
    
    // - 8
    patientMaritalStatus: '',
    patientEmploymentStatus: '',
    
    // - 9
    otherInsuredName: '',
    otherInsuredPolicyOrGroupNumber: '',
    reservedForNuccUse9b: '',
    reservedForNuccUse9c: '',
    insurancePlanNameOrProgramName: '',
    
    // - 10
    conditionRelatedToEmployment: '',
    conditionRelatedToAutoAccident: '',
    conditionRelatedToOtherAccident: '',
    claimCodesDesignedByNucc: '',
    reservedForLocalUse10d: '',
    
    // - 11
    insuredPolicyOrFecaNumber: '',
    insuredBirthDate: '',
    otherClaimIdDesignedByNucc: '',
    insurancePlanNameOrProgramName11c: '',
    isThereAnotherHealthBenefitPlan: '',
    
    // - 12
    patientOrAuthorizedPersonSigned: '',
    patientOrAuthorizedPersonDate: '',
    
    // - 13
    insuredOrAuthorizedPersonSigned: '',
    insuredOrAuthorizedPersonDate: '',
    
    // - 14
    dateOfCurrentIllness: '',
    
    // - 15
    ifPatientHasHadSameOrSimilarIllness: '',
    
    // - 16
    datesPatientUnableToWorkFrom: '',
    datesPatientUnableToWorkTo: '',
    
    // - 17
    nameOfReferringPhysician: '',
    idNumberOfReferringPhysician: '',
    
    // - 18
    hospitalizationDatesFrom: '',
    hospitalizationDatesTo: '',
    
    // - 19
    reservedForLocalUse19: '',
    
    // - 20
    outsideLab: '',
    charge: '',
    
    // - 21
    diagnosis1: '',
    diagnosis2: '',
    diagnosis3: '',
    diagnosis4: '',
    
    // - 22
    resubmissionCode: '',
    originalRefNo: '',
    
    // - 23
    priorAuthorizationNumber: '',
    
    // - 24 - Service Details (array)
    serviceDetails: [
      {
        dateOfServiceFrom: '',
        dateOfServiceTo: '',
        placeOfService: '',
        typeOfService: '',
        proceduresServicesOrSupplies: '',
        proceduresServicesOrSuppliesModifier: '',
        diagnosisCode: '',
        charges: '',
        daysOrUnits: '',
        epsdtFamilyPlan: '',
        emg: '',
        cob: '',
        reservedForLocalUse: ''
      }
    ],
    
    // - 25
    federalTaxIdNumber: '',
    federalTaxIdType: '',
    
    // - 26
    patientAccountNo: '',
    
    // - 27
    acceptAssignment: '',
    
    // - 28
    totalCharge: '',
    
    // - 29
    amountPaid: '',
    
    // - 30
    balanceDue: '',
    
    // - 31
    signatureOfPhysicianDate: '',
    signatureOfPhysicianSigned: '',
    
    // - 32
    nameAndAddressOfFacility: '',
    
    // - 33
    physicianSupplierBillingNameAddress: '',
    pinNumber: '',
    grpNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'check-' ? checked : value
    }));
  };

  const handleServiceDetailChange = (index, field, value) => {
    setFormData(prev => {
      const newServiceDetails = [...prev.serviceDetails];
      newServiceDetails[index] = {
        ...newServiceDetails[index],
        [field]: value
      };
      return {
        ...prev,
        serviceDetails: newServiceDetails
      };
    });
  };

  const handleAddServiceDetail = () => {
    setFormData(prev => ({
      ...prev,
      serviceDetails: [
        ...prev.serviceDetails,
        {
          dateOfServiceFrom: '',
          dateOfServiceTo: '',
          placeOfService: '',
          typeOfService: '',
          proceduresServicesOrSupplies: '',
          proceduresServicesOrSuppliesModifier: '',
          diagnosisCode: '',
          charges: '',
          daysOrUnits: '',
          epsdtFamilyPlan: '',
          emg: '',
          cob: '',
          reservedForLocalUse: ''
        }
      ]
    }));
  };

  const handleRemoveServiceDetail = (index) => {
    if (formData.serviceDetails.length > 1) {
      setFormData(prev => ({
        ...prev,
        serviceDetails: prev.serviceDetails.filter((_, i) => i !== index)
      }));
    }
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
            <div className="flex justify-between items-center mb-1">
              <h1 className="text-2xl font-medium text-[#7026A1]">Health Insurance Claim Form - HICF</h1>
              <div className="flex items-center gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="fica" className="text-[#202E2D] text-sm">FICA</label>
                  <input
                    id="fica"
                    name="fica"
                    type="text"
                    value={formData.fica}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current w-32"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Please complete all sections of this form accurately.
            </p>
          </header>

          {/* Scrollable Form Content */}
          <div className="overflow-auto lg:max-h-[calc(100vh-390px)] max-h-[calc(100vh-350px)] bg-white rounded-lg px-3 py-3">
            
            {/* - 1 - Carrier Information */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 1 - Carrier Information
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="medicare"
                          checked={formData.medicare}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">MEDICARE</span>
                      </label>
                      {formData.medicare && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="medicareId"
                            value={formData.medicareId}
                            onChange={handleInputChange}
                            placeholder="ID"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="tricare"
                          checked={formData.tricare}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">TRICARE</span>
                      </label>
                      {formData.tricare && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="tricareChampus"
                            value={formData.tricareChampus}
                            onChange={handleInputChange}
                            placeholder="CHAMPUS"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="groupHealthPlan"
                          checked={formData.groupHealthPlan}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">GROUP HEALTH PLAN</span>
                      </label>
                      {formData.groupHealthPlan && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="groupHealthPlanId"
                            value={formData.groupHealthPlanId}
                            onChange={handleInputChange}
                            placeholder="ID"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="other"
                          checked={formData.other}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">OTHER</span>
                      </label>
                      {formData.other && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="otherId"
                            value={formData.otherId}
                            onChange={handleInputChange}
                            placeholder="ID"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="medicaid"
                          checked={formData.medicaid}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">MEDICAID</span>
                      </label>
                      {formData.medicaid && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="medicaidId"
                            value={formData.medicaidId}
                            onChange={handleInputChange}
                            placeholder="ID"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="champus"
                          checked={formData.champus}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">CHAMPUS</span>
                      </label>
                      {formData.champus && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="champusSponsorSsn"
                            value={formData.champusSponsorSsn}
                            onChange={handleInputChange}
                            placeholder="Sponsor's SSN"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="fecaBlkLung"
                          checked={formData.fecaBlkLung}
                          onChange={handleInputChange}
                          
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1] rounded border-gray-300"
                        />
                        <span className="text-sm text-[#202E2D]">FECA BLK LUNG</span>
                      </label>
                      {formData.fecaBlkLung && (
                        <div className="form-group flex-col flex gap-2 mt-2">
                          <input
                            type="text"
                            name="fecaBlkLungSsn"
                            value={formData.fecaBlkLungSsn}
                            onChange={handleInputChange}
                            placeholder="SSN"
                            className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="vaFileNumber" className="text-[#202E2D]">VA File #</label>
                      <input
                        id="vaFileNumber"
                        name="vaFileNumber"
                        type="text"
                        value={formData.vaFileNumber}
                        onChange={handleInputChange}
                        
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="vaSsnOrId" className="text-[#202E2D]">SSN or ID</label>
                      <input
                        id="vaSsnOrId"
                        name="vaSsnOrId"
                        type="text"
                        value={formData.vaSsnOrId}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* - 1a */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="insuredIdNumber" className="text-[#202E2D]">- 1a - INSURED'S I.D. NUMBER</label>
                <input
                  id="insuredIdNumber"
                  name="insuredIdNumber"
                  type="text"
                  value={formData.insuredIdNumber}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 2 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="patientName" className="text-[#202E2D]">- 2 - PATIENT'S NAME (Last Name, First Name, Middle Initial)</label>
                <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 3 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="patientBirthDate" className="text-[#202E2D]">- 3 - PATIENT'S BIRTH DATE (MM DD YY)</label>
                  <input
                    id="patientBirthDate"
                    name="patientBirthDate"
                    type="date"
                    value={formData.patientBirthDate}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">SEX</label>
                  <div className="flex flex-wrap gap-4">
                    {['Male', 'Female'].map(sex => (
                      <label key={sex} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="patientSex"
                          value={sex}
                          checked={formData.patientSex === sex}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{sex}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* - 4 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="insuredName" className="text-[#202E2D]">- 4 - INSURED'S NAME (Last Name, First Name, Middle Initial)</label>
                <input
                  id="insuredName"
                  name="insuredName"
                  type="text"
                  value={formData.insuredName}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 5 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label className="text-[#202E2D] mb-2">- 5 - PATIENT RELATIONSHIP TO INSURED</label>
                <div className="flex flex-wrap gap-4">
                  {['Self', 'Spouse', 'Child', 'Other'].map(relationship => (
                    <label key={relationship} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="patientRelationshipToInsured"
                        value={relationship}
                        checked={formData.patientRelationshipToInsured === relationship}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                      />
                      <span className="text-sm text-[#202E2D]">{relationship}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* - 6 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 6 - PATIENT'S ADDRESS
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="patientAddress" className="text-[#202E2D]">No., Street</label>
                  <input
                    id="patientAddress"
                    name="patientAddress"
                    type="text"
                    value={formData.patientAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientCity" className="text-[#202E2D]">CITY</label>
                    <input
                      id="patientCity"
                      name="patientCity"
                      type="text"
                      value={formData.patientCity}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientState" className="text-[#202E2D]">STATE</label>
                    <input
                      id="patientState"
                      name="patientState"
                      type="text"
                      value={formData.patientState}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientZipCode" className="text-[#202E2D]">ZIP CODE</label>
                    <input
                      id="patientZipCode"
                      name="patientZipCode"
                      type="text"
                      value={formData.patientZipCode}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientTelephone" className="text-[#202E2D]">TELEPHONE (Include Area Code)</label>
                    <input
                      id="patientTelephone"
                      name="patientTelephone"
                      type="tel"
                      value={formData.patientTelephone}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 7 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 7 - INSURED'S ADDRESS
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="insuredAddress" className="text-[#202E2D]">No., Street</label>
                  <input
                    id="insuredAddress"
                    name="insuredAddress"
                    type="text"
                    value={formData.insuredAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredCity" className="text-[#202E2D]">CITY</label>
                    <input
                      id="insuredCity"
                      name="insuredCity"
                      type="text"
                      value={formData.insuredCity}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredState" className="text-[#202E2D]">STATE</label>
                    <input
                      id="insuredState"
                      name="insuredState"
                      type="text"
                      value={formData.insuredState}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredZipCode" className="text-[#202E2D]">ZIP CODE</label>
                    <input
                      id="insuredZipCode"
                      name="insuredZipCode"
                      type="text"
                      value={formData.insuredZipCode}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredTelephone" className="text-[#202E2D]">TELEPHONE (Include Area Code)</label>
                    <input
                      id="insuredTelephone"
                      name="insuredTelephone"
                      type="tel"
                      value={formData.insuredTelephone}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 8 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">- 8 - PATIENT MARITAL STATUS</label>
                  <div className="flex flex-wrap gap-4">
                    {['Single', 'Married', 'Other'].map(status => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="patientMaritalStatus"
                          value={status}
                          checked={formData.patientMaritalStatus === status}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">PATIENT EMPLOYMENT STATUS</label>
                  <div className="flex flex-wrap gap-4">
                    {['Employed', 'Full-Time Student', 'Part-Time Student'].map(status => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="patientEmploymentStatus"
                          value={status}
                          checked={formData.patientEmploymentStatus === status}
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

            {/* - 9 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 9 - OTHER INSURED'S INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="otherInsuredName" className="text-[#202E2D]">OTHER INSURED'S NAME (Last Name, First Name, Middle Initial)</label>
                  <input
                    id="otherInsuredName"
                    name="otherInsuredName"
                    type="text"
                    value={formData.otherInsuredName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="otherInsuredPolicyOrGroupNumber" className="text-[#202E2D]">9a - OTHER INSURED'S POLICY OR GROUP NUMBER</label>
                    <input
                      id="otherInsuredPolicyOrGroupNumber"
                      name="otherInsuredPolicyOrGroupNumber"
                      type="text"
                      value={formData.otherInsuredPolicyOrGroupNumber}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="reservedForNuccUse9b" className="text-[#202E2D]">9b - RESERVED FOR NUCC USE</label>
                    <input
                      id="reservedForNuccUse9b"
                      name="reservedForNuccUse9b"
                      type="text"
                      value={formData.reservedForNuccUse9b}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="reservedForNuccUse9c" className="text-[#202E2D]">9c - RESERVED FOR NUCC USE</label>
                    <input
                      id="reservedForNuccUse9c"
                      name="reservedForNuccUse9c"
                      type="text"
                      value={formData.reservedForNuccUse9c}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insurancePlanNameOrProgramName" className="text-[#202E2D]">9d - INSURANCE PLAN NAME OR PROGRAM NAME</label>
                    <input
                      id="insurancePlanNameOrProgramName"
                      name="insurancePlanNameOrProgramName"
                      type="text"
                      value={formData.insurancePlanNameOrProgramName}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 10 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 10 - PATIENT'S CONDITION RELATED TO
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[#202E2D] mb-2 block font-medium">a. EMPLOYMENT (Current or Previous):</label>
                      <div className="flex flex-wrap gap-4">
                        {['YES', 'NO'].map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="conditionRelatedToEmployment"
                              value={option}
                              checked={formData.conditionRelatedToEmployment === option}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                            />
                            <span className="text-sm text-[#202E2D]">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-[#202E2D] mb-2 block font-medium">b. AUTO ACCIDENT:</label>
                      <div className="flex flex-wrap gap-4">
                        {['YES', 'NO'].map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="conditionRelatedToAutoAccident"
                              value={option}
                              checked={formData.conditionRelatedToAutoAccident === option}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                            />
                            <span className="text-sm text-[#202E2D]">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-[#202E2D] mb-2 block font-medium">c. OTHER ACCIDENT:</label>
                      <div className="flex flex-wrap gap-4">
                        {['YES', 'NO'].map(option => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="conditionRelatedToOtherAccident"
                              value={option}
                              checked={formData.conditionRelatedToOtherAccident === option}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                            />
                            <span className="text-sm text-[#202E2D]">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="claimCodesDesignedByNucc" className="text-[#202E2D]">CLAIM CODES DESIGNED BY NUCC</label>
                      <input
                        id="claimCodesDesignedByNucc"
                        name="claimCodesDesignedByNucc"
                        type="text"
                        value={formData.claimCodesDesignedByNucc}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="reservedForLocalUse10d" className="text-[#202E2D]">10d - RESERVED FOR LOCAL USE</label>
                      <input
                        id="reservedForLocalUse10d"
                        name="reservedForLocalUse10d"
                        type="text"
                        value={formData.reservedForLocalUse10d}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* - 11 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 11 - INSURED'S POLICY INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="insuredPolicyOrFecaNumber" className="text-[#202E2D]">INSURED'S POLICY OR FECA NUMBER</label>
                  <input
                    id="insuredPolicyOrFecaNumber"
                    name="insuredPolicyOrFecaNumber"
                    type="text"
                    value={formData.insuredPolicyOrFecaNumber}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredBirthDate" className="text-[#202E2D]">11a - INSURED BIRTH DATE (MM DD YY)</label>
                    <input
                      id="insuredBirthDate"
                      name="insuredBirthDate"
                      type="date"
                      value={formData.insuredBirthDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="otherClaimIdDesignedByNucc" className="text-[#202E2D]">11b - OTHER CLAIM ID DESIGNED BY NUCC</label>
                    <input
                      id="otherClaimIdDesignedByNucc"
                      name="otherClaimIdDesignedByNucc"
                      type="text"
                      value={formData.otherClaimIdDesignedByNucc}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insurancePlanNameOrProgramName11c" className="text-[#202E2D]">11c - INSURANCE PLAN NAME OR PROGRAM NAME</label>
                    <input
                      id="insurancePlanNameOrProgramName11c"
                      name="insurancePlanNameOrProgramName11c"
                      type="text"
                      value={formData.insurancePlanNameOrProgramName11c}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label className="text-[#202E2D] mb-2">11d - IS THERE ANOTHER HEALTH BENEFIT PLAN?</label>
                    <div className="flex flex-wrap gap-4">
                      {['YES', 'NO'].map(option => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isThereAnotherHealthBenefitPlan"
                            value={option}
                            checked={formData.isThereAnotherHealthBenefitPlan === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                          />
                          <span className="text-sm text-[#202E2D]">{option}</span>
                        </label>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">If yes, return to and complete item 9 a-d</p>
                  </div>
                </div>
              </div>
            </section>

            {/* - 12 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 12 - PATIENTS OR AUTHORIZED PERSON'S SIGNATURE
              </h2>
              
              <div className="space-y-6">
                <p className="text-sm text-[#202E2D]">
                  I authorize the release of any medical or other information necessary to process this claim. I also request payment of government benefits either to myself or to the party who accepts assignment below.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientOrAuthorizedPersonSigned" className="text-[#202E2D]">SIGNED</label>
                    <input
                      id="patientOrAuthorizedPersonSigned"
                      name="patientOrAuthorizedPersonSigned"
                      type="text"
                      value={formData.patientOrAuthorizedPersonSigned}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="patientOrAuthorizedPersonDate" className="text-[#202E2D]">DATE</label>
                    <input
                      id="patientOrAuthorizedPersonDate"
                      name="patientOrAuthorizedPersonDate"
                      type="date"
                      value={formData.patientOrAuthorizedPersonDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 13 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 13 - INSURED'S OR AUTHORIZED PERSON'S SIGNATURE
              </h2>
              
              <div className="space-y-6">
                <p className="text-sm text-[#202E2D]">
                  I authorize payment of medical benefits to the undersigned physician or supplier for services described below.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredOrAuthorizedPersonSigned" className="text-[#202E2D]">SIGNED</label>
                    <input
                      id="insuredOrAuthorizedPersonSigned"
                      name="insuredOrAuthorizedPersonSigned"
                      type="text"
                      value={formData.insuredOrAuthorizedPersonSigned}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="insuredOrAuthorizedPersonDate" className="text-[#202E2D]">DATE</label>
                    <input
                      id="insuredOrAuthorizedPersonDate"
                      name="insuredOrAuthorizedPersonDate"
                      type="date"
                      value={formData.insuredOrAuthorizedPersonDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 14 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="dateOfCurrentIllness" className="text-[#202E2D]">- 14 - DATE OF CURRENT ILLNESS (First symptom) OR INJURY (Accident) OR PREGNANCY(LMP)</label>
                <input
                  id="dateOfCurrentIllness"
                  name="dateOfCurrentIllness"
                  type="date"
                  value={formData.dateOfCurrentIllness}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 15 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="ifPatientHasHadSameOrSimilarIllness" className="text-[#202E2D]">- 15 - IF PATIENT HAS HAD SAME OR SIMILAR ILLNESS, GIVE FIRST DATE</label>
                <input
                  id="ifPatientHasHadSameOrSimilarIllness"
                  name="ifPatientHasHadSameOrSimilarIllness"
                  type="date"
                  value={formData.ifPatientHasHadSameOrSimilarIllness}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 16 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 16 - DATES PATIENT UNABLE TO WORK IN CURRENT OCCUPATION
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="datesPatientUnableToWorkFrom" className="text-[#202E2D]">FROM</label>
                    <input
                      id="datesPatientUnableToWorkFrom"
                      name="datesPatientUnableToWorkFrom"
                      type="date"
                      value={formData.datesPatientUnableToWorkFrom}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="datesPatientUnableToWorkTo" className="text-[#202E2D]">TO</label>
                    <input
                      id="datesPatientUnableToWorkTo"
                      name="datesPatientUnableToWorkTo"
                      type="date"
                      value={formData.datesPatientUnableToWorkTo}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 17 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 17 - REFERRING PHYSICIAN INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="nameOfReferringPhysician" className="text-[#202E2D]">NAME OF REFERRING PHYSICIAN OR OTHER SOURCE</label>
                  <input
                    id="nameOfReferringPhysician"
                    name="nameOfReferringPhysician"
                    type="text"
                    value={formData.nameOfReferringPhysician}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="idNumberOfReferringPhysician" className="text-[#202E2D]">17a - I.D. NUMBER OF REFERRING PHYSICIAN</label>
                  <input
                    id="idNumberOfReferringPhysician"
                    name="idNumberOfReferringPhysician"
                    type="text"
                    value={formData.idNumberOfReferringPhysician}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* - 18 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 18 - HOSPITALIZATION DATES RELATED TO CURRENT SERVICES
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="hospitalizationDatesFrom" className="text-[#202E2D]">FROM</label>
                    <input
                      id="hospitalizationDatesFrom"
                      name="hospitalizationDatesFrom"
                      type="date"
                      value={formData.hospitalizationDatesFrom}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="hospitalizationDatesTo" className="text-[#202E2D]">TO</label>
                    <input
                      id="hospitalizationDatesTo"
                      name="hospitalizationDatesTo"
                      type="date"
                      value={formData.hospitalizationDatesTo}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 19 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="reservedForLocalUse19" className="text-[#202E2D]">- 19 - RESERVED FOR LOCAL USE</label>
                <input
                  id="reservedForLocalUse19"
                  name="reservedForLocalUse19"
                  type="text"
                  value={formData.reservedForLocalUse19}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 20 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">- 20 - OUTSIDE LAB?</label>
                  <div className="flex flex-wrap gap-4">
                    {['YES', 'NO'].map(option => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="outsideLab"
                          value={option}
                          checked={formData.outsideLab === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="charge" className="text-[#202E2D]">CHARGE</label>
                  <input
                    id="charge"
                    name="charge"
                    type="text"
                    value={formData.charge}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* - 21 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 21 - DIAGNOSIS OR NATURE OF ILLNESS OR INJURY
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="diagnosis1" className="text-[#202E2D]">1</label>
                    <input
                      id="diagnosis1"
                      name="diagnosis1"
                      type="text"
                      value={formData.diagnosis1}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="diagnosis2" className="text-[#202E2D]">2</label>
                    <input
                      id="diagnosis2"
                      name="diagnosis2"
                      type="text"
                      value={formData.diagnosis2}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="diagnosis3" className="text-[#202E2D]">3</label>
                    <input
                      id="diagnosis3"
                      name="diagnosis3"
                      type="text"
                      value={formData.diagnosis3}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="diagnosis4" className="text-[#202E2D]">4</label>
                    <input
                      id="diagnosis4"
                      name="diagnosis4"
                      type="text"
                      value={formData.diagnosis4}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* - 22 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="resubmissionCode" className="text-[#202E2D]">- 22 - RESUBMISSION CODE</label>
                  <input
                    id="resubmissionCode"
                    name="resubmissionCode"
                    type="text"
                    value={formData.resubmissionCode}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="originalRefNo" className="text-[#202E2D]">ORIGINAL REF. NO.</label>
                  <input
                    id="originalRefNo"
                    name="originalRefNo"
                    type="text"
                    value={formData.originalRefNo}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* - 23 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="priorAuthorizationNumber" className="text-[#202E2D]">- 23 - PRIOR AUTHORIZATION NUMBER</label>
                <input
                  id="priorAuthorizationNumber"
                  name="priorAuthorizationNumber"
                  type="text"
                  value={formData.priorAuthorizationNumber}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 24 - Service Details Table */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 24 - SERVICE DETAILS
              </h2>
              
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[#D0D5DD] text-xs">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-[#D0D5DD] font-medium px-2 py-2 text-left text-[#475467]">DATE OF SERVICE FROM</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 font-medium text-left text-[#475467]">DATE OF SERVICE TO</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">PLACE OF SERVICE</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">TYPE OF SERVICE</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">PROCEDURES, SERVICES, OR SUPPLIES CPT/HCPCS</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">PROCEDURES, SERVICES, OR SUPPLIES MODIFIER</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">DIAGNOSE CODE</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">$ CHARGES</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">DAYS OR UNITS</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">EPSDT Family Plan</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">EMG</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">COB</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">RESERVED FOR LOCAL USE</th>
                        <th className="border border-[#D0D5DD] px-2 py-2 text-left font-medium text-[#475467]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.serviceDetails.map((service, index) => (
                        <tr key={index}>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="date"
                              value={service.dateOfServiceFrom}
                              onChange={(e) => handleServiceDetailChange(index, 'dateOfServiceFrom', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="date"
                              value={service.dateOfServiceTo}
                              onChange={(e) => handleServiceDetailChange(index, 'dateOfServiceTo', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.placeOfService}
                              onChange={(e) => handleServiceDetailChange(index, 'placeOfService', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.typeOfService}
                              onChange={(e) => handleServiceDetailChange(index, 'typeOfService', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.proceduresServicesOrSupplies}
                              onChange={(e) => handleServiceDetailChange(index, 'proceduresServicesOrSupplies', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.proceduresServicesOrSuppliesModifier}
                              onChange={(e) => handleServiceDetailChange(index, 'proceduresServicesOrSuppliesModifier', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.diagnosisCode}
                              onChange={(e) => handleServiceDetailChange(index, 'diagnosisCode', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.charges}
                              onChange={(e) => handleServiceDetailChange(index, 'charges', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.daysOrUnits}
                              onChange={(e) => handleServiceDetailChange(index, 'daysOrUnits', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.epsdtFamilyPlan}
                              onChange={(e) => handleServiceDetailChange(index, 'epsdtFamilyPlan', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.emg}
                              onChange={(e) => handleServiceDetailChange(index, 'emg', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.cob}
                              onChange={(e) => handleServiceDetailChange(index, 'cob', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            <input
                              type="text"
                              value={service.reservedForLocalUse}
                              onChange={(e) => handleServiceDetailChange(index, 'reservedForLocalUse', e.target.value)}
                              className="w-full border-0 focus:outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#D0D5DD] px-2 py-1">
                            {formData.serviceDetails.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveServiceDetail(index)}
                                className="text-red-600 hover:text-red-800 text-xs"
                              >
                                Remove
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  type="button"
                  onClick={handleAddServiceDetail}
                  className="bg-[#7026A1] text-white px-4 py-2 rounded-[8px] hover:bg-[#5a1f85] text-sm"
                >
                  + Add More
                </button>
              </div>
            </section>

            {/* - 25 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="federalTaxIdNumber" className="text-[#202E2D]">- 25 - FEDERAL TAX I.D. NUMBER</label>
                  <input
                    id="federalTaxIdNumber"
                    name="federalTaxIdNumber"
                    type="text"
                    value={formData.federalTaxIdNumber}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label className="text-[#202E2D] mb-2">Type</label>
                  <div className="flex flex-wrap gap-4">
                    {['SSN', 'EIN'].map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="federalTaxIdType"
                          value={type}
                          checked={formData.federalTaxIdType === type}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                        />
                        <span className="text-sm text-[#202E2D]">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* - 26 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="patientAccountNo" className="text-[#202E2D]">- 26 - PATIENT'S ACCOUNT NO.</label>
                <input
                  id="patientAccountNo"
                  name="patientAccountNo"
                  type="text"
                  value={formData.patientAccountNo}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 27 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label className="text-[#202E2D] mb-2">- 27 - ACCEPT ASSIGNMENT? (For govt. claims, see policy)</label>
                <div className="flex flex-wrap gap-4">
                  {['YES', 'NO'].map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="acceptAssignment"
                        value={option}
                        checked={formData.acceptAssignment === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#7026A1] focus:ring-[#7026A1]"
                      />
                      <span className="text-sm text-[#202E2D]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* - 28, 29, 30 */}
            <section className="mb-8">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="totalCharge" className="text-[#202E2D]">- 28 - TOTAL CHARGE</label>
                  <input
                    id="totalCharge"
                    name="totalCharge"
                    type="text"
                    value={formData.totalCharge}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="amountPaid" className="text-[#202E2D]">- 29 - AMOUNT PAID</label>
                  <input
                    id="amountPaid"
                    name="amountPaid"
                    type="text"
                    value={formData.amountPaid}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="balanceDue" className="text-[#202E2D]">- 30 - BALANCE DUE</label>
                  <input
                    id="balanceDue"
                    name="balanceDue"
                    type="text"
                    value={formData.balanceDue}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* - 31 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 31 - SIGNATURE OF PHYSICIAN OR SUPPLIER
              </h2>
              
              <div className="space-y-6">
                <p className="text-sm text-[#202E2D]">
                  I certify that the statements on the reverse apply to this bill and are made a part thereof.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="signatureOfPhysicianDate" className="text-[#202E2D]">DATE</label>
                    <input
                      id="signatureOfPhysicianDate"
                      name="signatureOfPhysicianDate"
                      type="date"
                      value={formData.signatureOfPhysicianDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="signatureOfPhysicianSigned" className="text-[#202E2D]">SIGNED</label>
                    <input
                      id="signatureOfPhysicianSigned"
                      name="signatureOfPhysicianSigned"
                      type="text"
                      value={formData.signatureOfPhysicianSigned}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  By signing this form electronically, and clicking on "Submit Signature", you are agreeing to the terms stated herein.
                </p>
              </div>
            </section>

            {/* - 32 */}
            <section className="mb-8">
              <div className="form-group flex-col flex gap-2">
                <label htmlFor="nameAndAddressOfFacility" className="text-[#202E2D]">- 32 - NAME AND ADDRESS OF FACILITY WHERE SERVICES WERE RENDERED (If other than home or office)</label>
                <input
                  id="nameAndAddressOfFacility"
                  name="nameAndAddressOfFacility"
                  type="text"
                  value={formData.nameAndAddressOfFacility}
                  onChange={handleInputChange}
                  className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                />
              </div>
            </section>

            {/* - 33 */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
              </span>
              <h2 className="font-medium mb-4 pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                - 33 - PHYSICIAN'S/SUPPLIER'S BILLING INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="physicianSupplierBillingNameAddress" className="text-[#202E2D]">PHYSICIAN'S/SUPPLIER'S BILLING NAME, ADDRESS, ZIP CODE & PHONE #</label>
                  <input
                    id="physicianSupplierBillingNameAddress"
                    name="physicianSupplierBillingNameAddress"
                    type="text"
                    value={formData.physicianSupplierBillingNameAddress}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="pinNumber" className="text-[#202E2D]">PIN NUMBER</label>
                    <input
                      id="pinNumber"
                      name="pinNumber"
                      type="text"
                      value={formData.pinNumber}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="grpNumber" className="text-[#202E2D]">GRP #</label>
                    <input
                      id="grpNumber"
                      name="grpNumber"
                      type="text"
                      value={formData.grpNumber}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <Link href="/insurance" className="btn btn-secondary">
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
