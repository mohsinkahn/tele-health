'use client';
import { useState } from "react";
import Link from "next/link";

export default function PsychiatricPlanPage() {
  const [formData, setFormData] = useState({
    // Patient Information
    patientName: '',
    dateOfAssessment: '',
    therapistPsychiatrist: '',
    allergies: '',
    dateOfBirth: '',
    primaryDiagnosis: '',
    medications: '',
    
    // 1. Presenting Problem
    chiefComplaint: '',
    historyOfPresentIllness: '',
    precipitatingFactors: '',
    
    // 2. Assessment & Diagnosis
    secondaryDiagnosis: '',
    medicalComorbidities: '',
    currentSymptomsAndSeverity: '',
    functionalImpairmentLevel: '',
    
    // 3. Treatment Goals
    shortTermGoal1: '',
    shortTermGoal2: '',
    shortTermGoal3: '',
    longTermGoal1: '',
    longTermGoal2: '',
    longTermGoal3: '',
    
    // 4. Interventions
    pharmacologicalInterventions: '',
    targetSymptoms: '',
    monitoringPlan: '',
    psychotherapy: '',
    frequencyAndDuration: '',
    specificTherapeuticTargets: '',
    psychosocialInterventions: '',
    
    // 5. Safety Planning
    immediateSafetyRiskAssessment: '',
    crisisInterventionPlan: '',
    emergencyContactsAndResources: '',
    
    // 6. Monitoring & Follow-up
    followUpSchedule: '',
    progressTracking: '',
    labMonitoring: '',
    coordinationWithOtherProviders: '',
    
    // 7. Patient Involvement
    patientUnderstandingOfTreatmentPlan: '',
    patientPreferencesAndGoals: '',
    barriersToTreatmentAdherence: '',
    advanceDirectives: '',
    
    // 8. Review & Signatures
    treatmentPlanReviewDate: '',
    date: '',
    signature: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          <header className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-medium mb-1 text-[#7026A1]">Psychiatric Treatment Plan - PTP</h1>
            </div>
          </header>

          {/* Scrollable Form Content */}
          <div className="overflow-auto max-h-[calc(100vh-350px)] bg-white rounded-lg px-3 py-3">
            
            {/* Patient Information */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                PATIENT INFORMATION
              </h2>
              
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="patientName" className="text-[#202E2D]">Patient Name</label>
                  <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="dateOfAssessment" className="text-[#202E2D]">Date of Assessment</label>
                  <input
                    id="dateOfAssessment"
                    name="dateOfAssessment"
                    type="date"
                    value={formData.dateOfAssessment}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="therapistPsychiatrist" className="text-[#202E2D]">Therapist/Psychiatrist</label>
                  <input
                    id="therapistPsychiatrist"
                    name="therapistPsychiatrist"
                    type="text"
                    value={formData.therapistPsychiatrist}
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
                  <label htmlFor="primaryDiagnosis" className="text-[#202E2D]">Primary Diagnosis</label>
                  <input
                    id="primaryDiagnosis"
                    name="primaryDiagnosis"
                    type="text"
                    value={formData.primaryDiagnosis}
                    onChange={handleInputChange}
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="medications" className="text-[#202E2D]">Medications</label>
                  <input
                    id="medications"
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2 md:col-span-3">
                  <label htmlFor="allergies" className="text-[#202E2D]">Allergies</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 1. PRESENTING PROBLEM */}
            <section className="mb-8">
              <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                1. PRESENTING PROBLEM
              </h2>
              
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="chiefComplaint" className="text-[#202E2D]">Chief Complaint in patient's own words</label>
                  <textarea
                    id="chiefComplaint"
                    name="chiefComplaint"
                    value={formData.chiefComplaint}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="historyOfPresentIllness" className="text-[#202E2D]">History of Present Illness</label>
                  <textarea
                    id="historyOfPresentIllness"
                    name="historyOfPresentIllness"
                    value={formData.historyOfPresentIllness}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="precipitatingFactors" className="text-[#202E2D]">Precipitating Factors</label>
                  <textarea
                    id="precipitatingFactors"
                    name="precipitatingFactors"
                    value={formData.precipitatingFactors}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 2. ASSESSMENT & DIAGNOSIS */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                2. ASSESSMENT & DIAGNOSIS
              </h2>
            
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="secondaryDiagnosis" className="text-[#202E2D]">Secondary Diagnosis</label>
                  <textarea
                    id="secondaryDiagnosis"
                    name="secondaryDiagnosis"
                    value={formData.secondaryDiagnosis}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="medicalComorbidities" className="text-[#202E2D]">Medical Comorbidities</label>
                  <textarea
                    id="medicalComorbidities"
                    name="medicalComorbidities"
                    value={formData.medicalComorbidities}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="currentSymptomsAndSeverity" className="text-[#202E2D]">Current Symptoms and Severity</label>
                  <textarea
                    id="currentSymptomsAndSeverity"
                    name="currentSymptomsAndSeverity"
                    value={formData.currentSymptomsAndSeverity}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="functionalImpairmentLevel" className="text-[#202E2D]">Functional Impairment Level</label>
                  <textarea
                    id="functionalImpairmentLevel"
                    name="functionalImpairmentLevel"
                    value={formData.functionalImpairmentLevel}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 3. TREATMENT GOALS */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                3. TREATMENT GOALS
              </h2>
            
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium text-[#7026A1] mb-4">Short-Term Goals (1-3 months)</h3>
                  <div className="space-y-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="shortTermGoal1" className="text-[#202E2D]">Goal 1</label>
                      <input
                        id="shortTermGoal1"
                        name="shortTermGoal1"
                        type="text"
                        value={formData.shortTermGoal1}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="shortTermGoal2" className="text-[#202E2D]">Goal 2</label>
                      <input
                        id="shortTermGoal2"
                        name="shortTermGoal2"
                        type="text"
                        value={formData.shortTermGoal2}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="shortTermGoal3" className="text-[#202E2D]">Goal 3</label>
                      <input
                        id="shortTermGoal3"
                        name="shortTermGoal3"
                        type="text"
                        value={formData.shortTermGoal3}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-[#7026A1] mb-4">Long-Term Goals (3-12 months)</h3>
                  <div className="space-y-4">
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="longTermGoal1" className="text-[#202E2D]">Goal 1</label>
                      <input
                        id="longTermGoal1"
                        name="longTermGoal1"
                        type="text"
                        value={formData.longTermGoal1}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="longTermGoal2" className="text-[#202E2D]">Goal 2</label>
                      <input
                        id="longTermGoal2"
                        name="longTermGoal2"
                        type="text"
                        value={formData.longTermGoal2}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                    <div className="form-group flex-col flex gap-2">
                      <label htmlFor="longTermGoal3" className="text-[#202E2D]">Goal 3</label>
                      <input
                        id="longTermGoal3"
                        name="longTermGoal3"
                        type="text"
                        value={formData.longTermGoal3}
                        onChange={handleInputChange}
                        className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. INTERVENTIONS */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                4. INTERVENTIONS
              </h2>
              
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="pharmacologicalInterventions" className="text-[#202E2D]">Pharmacological Interventions (Medications, Dosage, Frequency)</label>
                  <textarea
                    id="pharmacologicalInterventions"
                    name="pharmacologicalInterventions"
                    value={formData.pharmacologicalInterventions}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="targetSymptoms" className="text-[#202E2D]">Target Symptoms</label>
                  <textarea
                    id="targetSymptoms"
                    name="targetSymptoms"
                    value={formData.targetSymptoms}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="monitoringPlan" className="text-[#202E2D]">Monitoring Plan (side effects, efficacy)</label>
                  <textarea
                    id="monitoringPlan"
                    name="monitoringPlan"
                    value={formData.monitoringPlan}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="psychotherapy" className="text-[#202E2D]">Psychotherapy (Modality: CBT, DBT, Psychodynamic, etc.)</label>
                  <textarea
                    id="psychotherapy"
                    name="psychotherapy"
                    value={formData.psychotherapy}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="frequencyAndDuration" className="text-[#202E2D]">Frequency and Duration</label>
                  <textarea
                    id="frequencyAndDuration"
                    name="frequencyAndDuration"
                    value={formData.frequencyAndDuration}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="specificTherapeuticTargets" className="text-[#202E2D]">Specific Therapeutic Targets</label>
                  <textarea
                    id="specificTherapeuticTargets"
                    name="specificTherapeuticTargets"
                    value={formData.specificTherapeuticTargets}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="psychosocialInterventions" className="text-[#202E2D]">Psychosocial Interventions (e.g., Peer support, family therapy, support groups, vocational rehab)</label>
                  <textarea
                    id="psychosocialInterventions"
                    name="psychosocialInterventions"
                    value={formData.psychosocialInterventions}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 5. SAFETY PLANNING */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                5. SAFETY PLANNING
              </h2>
            
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="immediateSafetyRiskAssessment" className="text-[#202E2D]">Immediate Safety/Risk Assessment</label>
                  <textarea
                    id="immediateSafetyRiskAssessment"
                    name="immediateSafetyRiskAssessment"
                    value={formData.immediateSafetyRiskAssessment}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="crisisInterventionPlan" className="text-[#202E2D]">Crisis Intervention Plan</label>
                  <textarea
                    id="crisisInterventionPlan"
                    name="crisisInterventionPlan"
                    value={formData.crisisInterventionPlan}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="emergencyContactsAndResources" className="text-[#202E2D]">Emergency Contacts & Resources (Crisis hotline, ER contact info, Crisis MHAs)</label>
                  <textarea
                    id="emergencyContactsAndResources"
                    name="emergencyContactsAndResources"
                    value={formData.emergencyContactsAndResources}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 6. MONITORING & FOLLOW-UP */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                6. MONITORING & FOLLOW-UP
              </h2>
            
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="followUpSchedule" className="text-[#202E2D]">Follow-up Schedule</label>
                  <textarea
                    id="followUpSchedule"
                    name="followUpSchedule"
                    value={formData.followUpSchedule}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="progressTracking" className="text-[#202E2D]">Progress Tracking (rating scales, assessments)</label>
                  <textarea
                    id="progressTracking"
                    name="progressTracking"
                    value={formData.progressTracking}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="labMonitoring" className="text-[#202E2D]">Lab Monitoring (if applicable)</label>
                  <textarea
                    id="labMonitoring"
                    name="labMonitoring"
                    value={formData.labMonitoring}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="coordinationWithOtherProviders" className="text-[#202E2D]">Coordination with Other Providers</label>
                  <textarea
                    id="coordinationWithOtherProviders"
                    name="coordinationWithOtherProviders"
                    value={formData.coordinationWithOtherProviders}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 7. PATIENT INVOLVEMENT */}
            <section className="mb-8">
                <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                7. PATIENT INVOLVEMENT
              </h2>
             
              <div className="space-y-4">
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="patientUnderstandingOfTreatmentPlan" className="text-[#202E2D]">Patient &quot;s Understanding of Treatment Plan</label>
                  <textarea
                    id="patientUnderstandingOfTreatmentPlan"
                    name="patientUnderstandingOfTreatmentPlan"
                    value={formData.patientUnderstandingOfTreatmentPlan}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="patientPreferencesAndGoals" className="text-[#202E2D]">Patient Preferences and Goals</label>
                  <textarea
                    id="patientPreferencesAndGoals"
                    name="patientPreferencesAndGoals"
                    value={formData.patientPreferencesAndGoals}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="barriersToTreatmentAdherence" className="text-[#202E2D]">Barriers to Treatment Adherence</label>
                  <textarea
                    id="barriersToTreatmentAdherence"
                    name="barriersToTreatmentAdherence"
                    value={formData.barriersToTreatmentAdherence}
                    onChange={handleInputChange}
                    rows="4"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="advanceDirectives" className="text-[#202E2D]">Advance Directives (if applicable)</label>
                  <textarea
                    id="advanceDirectives"
                    name="advanceDirectives"
                    value={formData.advanceDirectives}
                    onChange={handleInputChange}
                    rows="3"
                    className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                  />
                </div>
              </div>
            </section>

            {/* 8. REVIEW & SIGNATURES */}
            <section className="mb-8">
               <span className="bg-[#7026A1] w-2 h-5 p-1 rounded-lg">
                </span>
              <h2 className="font-medium mb-4  pb-3 text-[#7026A1] text-[18px] inline-block ml-3">
                8. REVIEW & SIGNATURES
              </h2>
            
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="treatmentPlanReviewDate" className="text-[#202E2D]">Treatment Plan Review Date</label>
                    <input
                      id="treatmentPlanReviewDate"
                      name="treatmentPlanReviewDate"
                      type="date"
                      value={formData.treatmentPlanReviewDate}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                  <div className="form-group flex-col flex gap-2">
                    <label htmlFor="date" className="text-[#202E2D]">Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="border border-[#D0D5DD] rounded-[8px] px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7026A1] shadow-current"
                    />
                  </div>
                </div>
                <div className="form-group flex-col flex gap-2">
                  <label htmlFor="signature" className="text-[#202E2D]">(Signature here)</label>
                  <textarea
                    id="signature"
                    name="signature"
                    value={formData.signature}
                    onChange={handleInputChange}
                    rows="4"
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
