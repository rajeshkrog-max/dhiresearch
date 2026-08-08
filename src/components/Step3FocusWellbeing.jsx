function Step3FocusWellbeing({ formData, updateFormData }) {
  return (
    <div className="step">
      <h3 className="step-title">Step 3 — Focus & Wellbeing</h3>

      <ul className="data-list">
        <li>
          <label>How would you rate your ability to stay focused while studying? (1–10) *</label>
          <div className="scale-row">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
              <button
                key={num}
                type="button"
                className={`scale-btn ${formData.focusLevel === String(num) ? 'active' : ''}`}
                onClick={() => updateFormData('focusLevel', String(num))}
              >
                {num}
              </button>
            ))}
          </div>
        </li>

        <li>
          <label>In the last 2 weeks, how often have you felt stressed or overwhelmed about studies? *</label>
          <ul className="data-list-2">
            {['Never', 'Rarely', 'Sometimes', 'Often', 'Almost always'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="stressFrequency"
                  value={option}
                  checked={formData.stressFrequency === option}
                  onChange={(e) => updateFormData('stressFrequency', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <label>Do you currently have peers you can openly discuss academic difficulties with? *</label>
          <ul className="data-list-2">
            {['Yes, regularly', 'Sometimes', 'Rarely', 'No, not really'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="hasPeers"
                  value={option}
                  checked={formData.hasPeers === option}
                  onChange={(e) => updateFormData('hasPeers', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <label>How comfortable are you sharing study struggles with another student? (1–10) *</label>
          <div className="scale-row">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
              <button
                key={num}
                type="button"
                className={`scale-btn ${formData.comfortSharing === String(num) ? 'active' : ''}`}
                onClick={() => updateFormData('comfortSharing', String(num))}
              >
                {num}
              </button>
            ))}
          </div>
        </li>

        <li>
          <label>What do you hope this research experience will help you with? *</label>
          <textarea
            className="form-control"
            placeholder="Write a few lines about what you hope to gain..."
            value={formData.hopeToGain}
            onChange={(e) => updateFormData('hopeToGain', e.target.value)}
          ></textarea>
        </li>
      </ul>
    </div>
  )
}

export default Step3FocusWellbeing