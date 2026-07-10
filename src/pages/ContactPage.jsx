import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const contactItems = [
  {
    icon: '📧',
    title: 'Email',
    value: 'iamcryptonist@gmail.com',
    sub: 'Tap to send us an email',
    link: 'mailto:iamcryptonist@gmail.com',
  },
  {
    icon: '💬',
    title: 'Telegram',
    value: 'Join Telegram Community',
    sub: 'Tap to join our Telegram community',
    // Agar tumhare paas Telegram ka actual invite link hai to is link ko replace kar dena.
    link: 'https://t.me/ETCACommunity',
  },
  {
    icon: '🎮',
    title: 'Discord',
    value: 'Join Discord Server',
    sub: 'Tap to join our Discord server',
    link: 'https://discord.gg/kRPbpR5gF',
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    value: 'Join WhatsApp Community',
    sub: 'Tap to join our WhatsApp discussion group',
    link: 'https://chat.whatsapp.com/IfZwEBu2qiJB9IYKXNczSP',
  },
  {
    icon: '📍',
    title: 'Office Location',
    value: 'Open Google Maps',
    sub: 'Tap to view our office location',
    link: 'https://maps.app.goo.gl/DJJHZbc5YD5Yny7w9?g_st=ac',
  },
]

export default function ContactPage() {

  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)

  try {
   await emailjs.send(
  'iamcryptonist@gmail.com',
  'template_vl3n2tz',
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  'JCX5fmnEpPigeR06V'
)
await emailjs.send(
  'iamcryptonist@gmail.com',
  'template_zgx38j7',
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  'JCX5fmnEpPigeR06V'
)

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

  } catch (error) {
    console.error(error)
    alert('Message send nahi hua. Please try again.')
  }

  setLoading(false)
}

  return (
    <>
      <div className="etca-page-header">
        <div className="etca-container">
          <span className="etca-section-label">
            Get In Touch
          </span>

          <h1>Contact Us</h1>

          <p>
            Have questions about our courses?
            We're here to help you start your
            trading journey.
          </p>
        </div>
      </div>

      <section
        className="etca-section"
        style={{ background: '#0a0a0a' }}
      >
        <div className="etca-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
            }}
          >
            <div>
              <h2
                style={{
                  color: '#ffffff',
                  fontSize: '22px',
                  fontWeight: 700,
                  marginBottom: '24px',
                }}
              >
                Send Us a Message
              </h2>
              {submitted ? (
  <div
    className="etca-card"
    style={{
      textAlign: 'center',
      padding: '40px',
    }}
  >
    <div
      style={{
        fontSize: '48px',
        marginBottom: '16px',
      }}
    >
      ✅
    </div>

    <h3
      style={{
        color: '#d4af37',
        fontSize: '20px',
        fontWeight: 700,
        marginBottom: '8px',
      }}
    >
      Message Sent!
    </h3>

    <p
      style={{
        color: '#a0a0a0',
        fontSize: '14px',
      }}
    >
      Thank you for reaching out.
      Our team will get back to you within 24 hours.
    </p>
  </div>
) : (
  <form onSubmit={handleSubmit}>
    <div className="etca-form-group">
      <label
        className="etca-label"
        htmlFor="name"
      >
        Full Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        className="etca-input"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="etca-form-group">
      <label
        className="etca-label"
        htmlFor="email"
      >
        Email Address
      </label>

      <input
        id="email"
        name="email"
        type="email"
        className="etca-input"
        placeholder="you@example.com"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="etca-form-group">
      <label
        className="etca-label"
        htmlFor="subject"
      >
        Subject
      </label>

      <select
        id="subject"
        name="subject"
        className="etca-input"
        value={form.subject}
        onChange={handleChange}
        required
      >
        <option value="">
          Select a topic
        </option>

        <option value="courses">
          Course Inquiry
        </option>

        <option value="enrollment">
          Enrollment
        </option>

        <option value="support">
          Technical Support
        </option>

        <option value="partnership">
          Partnership
        </option>

        <option value="other">
          Other
        </option>
      </select>
    </div>

    <div className="etca-form-group">
      <label
        className="etca-label"
        htmlFor="message"
      >
        Message
      </label>

      <textarea
        id="message"
        name="message"
        className="etca-input"
        placeholder="Tell us how we can help..."
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        style={{
          resize: 'vertical',
        }}
      />
    </div>

    <button
      type="submit"
      className="etca-btn-primary"
      style={{ width: '100%' }}
    >
      Send Message
    </button>
  </form>
)}

</div>

<div>

<h2
  style={{
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '24px',
  }}
>
  Contact Information
</h2>

{contactItems.map((item) => (

<a
  key={item.title}
  href={item.link}
  target={
    item.link.startsWith('mailto:')
      ? '_self'
      : '_blank'
  }
  rel="noopener noreferrer"
  style={{
    textDecoration: 'none',
    color: 'inherit',
  }}
>

<div
  className="etca-card"
  style={{
    padding: '24px',
    marginBottom: '16px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    cursor: 'pointer',
    transition: '0.25s',
  }}
>
  <div
    style={{
      fontSize: '28px',
      flexShrink: 0,
    }}
  >
    {item.icon}
  </div>

  <div>

    <div
      style={{
        color: '#d4af37',
        fontWeight: 700,
        fontSize: '14px',
        marginBottom: '4px',
      }}
    >
      {item.title}
    </div>

    <div
      style={{
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: 600,
        marginBottom: '4px',
      }}
    >
      {item.value}
    </div>

    <div
      style={{
        color: '#666666',
        fontSize: '13px',
      }}
    >
      {item.sub}
    </div>

  </div>

</div>

</a>

))}
<div
  className="etca-card"
  style={{
    padding: '24px',
    marginTop: '8px',
  }}
>
  <div
    style={{
      color: '#d4af37',
      fontWeight: 700,
      fontSize: '14px',
      marginBottom: '12px',
    }}
  >
    Office Hours
  </div>

  <div
    style={{
      color: '#a0a0a0',
      fontSize: '14px',
      lineHeight: 1.8,
    }}
  >
    Monday – Friday: 9:00 AM – 6:00 PM IST
    <br />
    Saturday: 10:00 AM – 2:00 PM IST
    <br />
    Sunday: Closed
  </div>
</div>

</div>
</div>
</div>
</section>
</>
)
}