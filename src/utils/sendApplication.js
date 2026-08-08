export async function sendApplication(formData) {
  const now = new Date()
  const dateTime = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  })

  const emailBody = `
Hello Team,

This is Dhi from DhiRise.

A new participant has submitted the research application form.

----------------------------------------
APPLICATION DETAILS
----------------------------------------

Date & Time       : ${dateTime}

Full Name         : ${formData.fullName}
Age               : ${formData.age}
Gender            : ${formData.gender}
Class / Year      : ${formData.classYear}
School / College  : ${formData.school}
City              : ${formData.city}
WhatsApp Number   : ${formData.whatsapp}
Email             : ${formData.email}

Stream / Subjects : ${formData.stream}
Struggle Topic    : ${formData.struggleTopic}
Confidence (1-10) : ${formData.confidence}
Stuck Frequency   : ${formData.stuckFrequency}
When Stuck        : ${formData.whenStuck}

Focus Level (1-10): ${formData.focusLevel}
Stress Frequency  : ${formData.stressFrequency}
Has Peers         : ${formData.hasPeers}
Comfort Sharing   : ${formData.comfortSharing}
Hope to Gain      : ${formData.hopeToGain}

Motivation        : ${formData.motivation}
Preferred Time    : ${formData.preferredTime}
Consent Given     : ${formData.consent ? 'Yes' : 'No'}

----------------------------------------

Thank you,
Regards,
Dhi AI Assistant
DhiRise Company
`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'DhiRise Research <onboarding@resend.dev>',   // change later to your verified domain
        to: ['admin@dhirise.com'],
        subject: `New Research Application – ${formData.fullName}`,
        text: emailBody
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error.message }
  }
}
