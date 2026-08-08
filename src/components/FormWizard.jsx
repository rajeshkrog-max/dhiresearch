import { useState } from 'react'
import Step1AboutYou from './Step1AboutYou'
import Step2Academic from './Step2Academic'
import Step3FocusWellbeing from './Step3FocusWellbeing'
import Step4MotivationConsent from './Step4MotivationConsent'
import ThankYou from './ThankYou'
import { sendApplication } from '../utils/sendApplication'

function FormWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    age: '',
    gender: '',
    classYear: '',
    school: '',
    city: '',
    whatsapp: '',
    email: '',

    // Step 2
    stream: '',
    struggleTopic: '',
    confidence: '',
    stuckFrequency: '',
    whenStuck: '',

    // Step 3
    focusLevel: '',
    stressFrequency: '',
    hasPeers: '',
    comfortSharing: '',
    hopeToGain: '',

    // Step 4
    motivation: '',
    preferredTime: '',
    consent: false
  })

  const totalSteps = 4

  // Update any field
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Go to next step
  const nextStep = async () => {
    // Validation for Step 1
    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        alert('Please enter your Full Name')
        return
      }
      if (!formData.age || formData.age < 13 || formData.age > 19) {
        alert('Please enter a valid Age between 13 and 19')
        return
      }
      if (!formData.gender) {
        alert('Please select your Gender')
        return
      }
      if (!formData.classYear.trim()) {
        alert('Please enter your Class / Year')
        return
      }
      if (!formData.school.trim()) {
        alert('Please enter your School / College Name')
        return
      }
      if (!formData.city.trim()) {
        alert('Please enter your City')
        return
      }
      if (!/^\d{10}$/.test(formData.whatsapp)) {
        alert('Please enter a valid 10-digit WhatsApp number')
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Please enter a valid Email Address')
        return
      }
    }

    // Validation for Step 2
    if (currentStep === 2) {
      if (!formData.stream.trim()) {
        alert('Please enter your Stream / Subjects')
        return
      }
      if (!formData.struggleTopic.trim() || formData.struggleTopic.trim().length < 10) {
        alert('Please describe the topic you struggle with (at least 10 characters)')
        return
      }
      if (!formData.confidence) {
        alert('Please select your confidence level (1-10)')
        return
      }
      if (!formData.stuckFrequency) {
        alert('Please select how often you feel stuck')
        return
      }
      if (!formData.whenStuck) {
        alert('Please select what you usually do when stuck')
        return
      }
    }

    // Validation for Step 3
    if (currentStep === 3) {
      if (!formData.focusLevel) {
        alert('Please rate your focus level')
        return
      }
      if (!formData.stressFrequency) {
        alert('Please select your stress frequency')
        return
      }
      if (!formData.hasPeers) {
        alert('Please answer about peers')
        return
      }
      if (!formData.comfortSharing) {
        alert('Please rate how comfortable you are sharing struggles')
        return
      }
      if (!formData.hopeToGain.trim() || formData.hopeToGain.trim().length < 15) {
        alert('Please write what you hope to gain (at least 15 characters)')
        return
      }
    }

    // Validation for Step 4 + Final Submission
    if (currentStep === 4) {
      if (!formData.motivation.trim() || formData.motivation.trim().length < 20) {
        alert('Please write why you want to join (at least 20 characters)')
        return
      }
      if (!formData.preferredTime) {
        alert('Please select your preferred time')
        return
      }
      if (!formData.consent) {
        alert('You must accept the consent to proceed')
        return
      }

      // Strong confirmation
      const confirmed = window.confirm(
        "Please check all your information carefully.\n\n" +
        "Any misleading or false information can lead to direct rejection of your application.\n\n" +
        "Do you want to submit your application now?"
      )

      if (!confirmed) {
        return
      }

      // Show loading state (optional)
      const submitButton = document.querySelector('button.submit')
      if (submitButton) {
        submitButton.disabled = true
        submitButton.innerText = 'Submitting...'
      }

      // Send the email
      const result = await sendApplication(formData)

      if (result.success) {
        // Move to Thank You page
        setCurrentStep(5)
      } else {
        alert('Something went wrong while submitting. Please try again.\n\nError: ' + result.error)
        if (submitButton) {
          submitButton.disabled = false
          submitButton.innerText = 'Submit Application'
        }
      }

      return
    }

    // For steps 1–3 just go next
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  // Go to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  // Calculate progress percentage
  const progress = currentStep > totalSteps 
    ? 100 
    : (currentStep / totalSteps) * 100

  return (
    <div id="survey_container">
      
      {/* Progress Bar */}
      <div id="top-wizard">
        <strong>
          Progress {currentStep <= totalSteps ? `${currentStep} of ${totalSteps}` : 'Complete'}
        </strong>
        <div id="progressbar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Steps Content */}
      <div id="middle-wizard">
        {currentStep === 1 && (
          <Step1AboutYou 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        )}

        {currentStep === 2 && (
          <Step2Academic 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        )}

        {currentStep === 3 && (
          <Step3FocusWellbeing 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        )}

        {currentStep === 4 && (
          <Step4MotivationConsent 
            formData={formData} 
            updateFormData={updateFormData} 
          />
        )}

        {currentStep === 5 && (
          <ThankYou formData={formData} />
        )}
      </div>

      {/* Bottom Buttons */}
      {currentStep <= totalSteps && (
        <div id="bottom-wizard">
          <button 
            type="button" 
            className="backward" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            ← Backward
          </button>

          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className="forward" 
              onClick={nextStep}
            >
              Forward →
            </button>
          ) : (
            <button 
              type="button" 
              className="submit" 
              onClick={nextStep}
            >
              Submit Application
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FormWizard