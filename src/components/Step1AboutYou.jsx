function Step1AboutYou({ formData, updateFormData }) {
  return (
    <div className="step">
      <h3 className="step-title">Step 1 — About You</h3>

      <ul className="data-list">
        <li>
          <label>Full Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => updateFormData('fullName', e.target.value)}
          />
        </li>

        <li>
          <label>Age *</label>
          <input
            type="number"
            className="form-control"
            placeholder="Your age (numbers only)"
            value={formData.age}
            onChange={(e) => updateFormData('age', e.target.value)}
            min="13"
            max="19"
          />
        </li>

        <li>
          <label>Gender *</label>
          <ul className="data-list-2">
            {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <label>Class / Year / Grade *</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Class 11, FYBCom, 2nd Year Engineering"
            value={formData.classYear}
            onChange={(e) => updateFormData('classYear', e.target.value)}
          />
        </li>

        <li>
          <label>School / College Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name of your school or college"
            value={formData.school}
            onChange={(e) => updateFormData('school', e.target.value)}
          />
        </li>

        <li>
          <label>City *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your city"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
          />
        </li>

        <li>
          <label>WhatsApp Number *</label>
          <input
            type="tel"
            className="form-control"
            placeholder="10-digit WhatsApp number"
            value={formData.whatsapp}
            onChange={(e) => updateFormData('whatsapp', e.target.value)}
            maxLength="10"
          />
        </li>

        <li>
          <label>Email Address *</label>
          <input
            type="email"
            className="form-control"
            placeholder="Your email address"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
          />
        </li>
      </ul>
    </div>
  )
}

export default Step1AboutYou