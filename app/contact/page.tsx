'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our programs? Want to learn more about how you can help? Interested in partnering with us? We&apos;re here to help.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
              <div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Contact Information</h3>
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@rugarieducate.org" style={{ color: 'var(--secondary-color)' }}>
                      info@rugarieducate.org
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong><br />
                    <a href="tel:+250123456789" style={{ color: 'var(--secondary-color)' }}>
                      +250 123 456 789
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Address:</strong><br />
                    Kigali, Rwanda
                  </p>
                </div>

                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Follow Us</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#facebook" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                      Facebook
                    </a>
                    <a href="#twitter" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                      Twitter
                    </a>
                    <a href="#instagram" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="form-section">
                  <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="donation">Donation Question</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



