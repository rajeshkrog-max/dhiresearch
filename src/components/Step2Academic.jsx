function Step2Academic({ formData, updateFormData }) {
  return (
    <div className="step">
      <h3 className="step-title">Step 2 — Academic Situation</h3>

      <ul className="data-list">
        <li>
          <label>Main Stream / Subjects you are studying *</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Science (PCM), Commerce, Arts, Computer Engineering..."
            value={formData.stream}
            onChange={(e) => updateFormData('stream', e.target.value)}
          />
        </li>

        <li>
          <label>Which subject or topic do you struggle with the most right now? *</label>
          <textarea
            className="form-control"
            placeholder="Example: Physics – Electromagnetic Induction, or Accounts – Final Accounts"
            value={formData.struggleTopic}
            onChange={(e) => updateFormData('struggleTopic', e.target.value)}
          ></textarea>
        </li>

        <li>
          <label>On a scale of 1–10, how confident do you currently feel in your studies? *</label>
          <div className="scale-row">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
              <button
                key={num}
                type="button"
                className={`scale-btn ${formData.confidence === String(num) ? 'active' : ''}`}
                onClick={() => updateFormData('confidence', String(num))}
              >
                {num}
              </button>
            ))}
          </div>
        </li>

        <li>
          <label>How often do you feel “stuck” while studying? *</label>
          <ul className="data-list-2">
            {['Rarely', 'Sometimes', 'Often', 'Almost every day'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="stuckFrequency"
                  value={option}
                  checked={formData.stuckFrequency === option}
                  onChange={(e) => updateFormData('stuckFrequency', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <label>When you get stuck, what do you usually do? *</label>
          <ul className="data-list-2">
            {[
              'I try to solve it myself for a long time',
              'I ask a friend or classmate',
              'I search on YouTube / Google',
              'I feel stressed and leave it',
              'I wait for the teacher to explain'
            ].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="whenStuck"
                  value={option}
                  checked={formData.whenStuck === option}
                  onChange={(e) => updateFormData('whenStuck', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Step2Academic