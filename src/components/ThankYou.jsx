function ThankYou({ formData }) {
  return (
    <div id="complete">
      <div className="icon-check">✓</div>
      <h3>Application Submitted Successfully</h3>
      <p>
        Thank you, <strong>{formData.fullName || 'Student'}</strong>.
        We have received your application for the DhiRise Research Study.
      </p>
      <p style={{ marginTop: '12px', color: '#555', fontSize: '14.5px' }}>
        Our team will carefully review all applications.
        Only 20 students will be selected.
        If you are selected, we will contact you on WhatsApp.
      </p>
      <p style={{ marginTop: '18px', fontSize: '13.5px', color: '#888' }}>
        You cannot edit this application after submission.
      </p>
    </div>
  )
}

export default ThankYou