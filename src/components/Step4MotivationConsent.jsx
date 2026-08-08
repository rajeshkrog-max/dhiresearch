function Step4MotivationConsent({ formData, updateFormData }) {
  return (
    <div className="step">
      <h3 className="step-title">Step 4 — Motivation & Consent</h3>

      <ul className="data-list">
        <li>
          <label>Why do you want to be selected for this 1-month research study? *</label>
          <textarea
            className="form-control"
            placeholder="Please share your honest reason. This helps us select the right participants."
            value={formData.motivation}
            onChange={(e) => updateFormData('motivation', e.target.value)}
          ></textarea>
        </li>

        <li>
          <label>Preferred time for short guided sessions *</label>
          <ul className="data-list-2">
            {[
              'Right now / Very flexible',
              'Weekday evenings (6–9 PM)',
              'Weekend mornings',
              'Weekend evenings',
              'Any time is fine'
            ].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="preferredTime"
                  value={option}
                  checked={formData.preferredTime === option}
                  onChange={(e) => updateFormData('preferredTime', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>

        <li style={{ marginTop: '25px' }}>
          <div style={{ 
            background: '#f8f8f8', 
            padding: '18px', 
            borderRadius: '4px',
            border: '1px solid #e0e0e0',
            fontSize: '13.5px',
            lineHeight: '1.6',
            color: '#444'
          }}>
            <strong>Important Information:</strong><br /><br />
            This is a monitored research pilot conducted under the guidance of a PhD-qualified counselor 
            and affiliated with the American School Counselor Association (ASCA). 
            Only 20 students will be selected. All information you share is confidential and used only for research purposes. 
            If anything makes you uncomfortable at any point, you can withdraw and report it.
          </div>
        </li>

        <li style={{ marginTop: '20px' }}>
          <ul className="data-list-2">
            <li>
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => updateFormData('consent', e.target.checked)}
              />
              <label style={{ fontWeight: 600 }}>
                I understand the above information and wish to apply for this research study. *
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Step4MotivationConsent