export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    }
  }

  try {
    const formData = JSON.parse(event.body)

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

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'DhiRise Research <onboarding@resend.dev>',
        to: ['admin@dhirise.com'],
        subject: `New Research Application – ${formData.fullName}`,
        text: emailBody
      })
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.message || 'Failed to send email' })
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
}