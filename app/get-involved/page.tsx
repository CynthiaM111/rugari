'use client'

import { useState } from 'react'
import Link from 'next/link'
// STRIPE INTEGRATION - COMMENTED OUT
// import { useState, useEffect, Suspense } from 'react'
// import { useSearchParams } from 'next/navigation'

export default function GetInvolved() {
  const [donationAmount, setDonationAmount] = useState('')

  // STRIPE INTEGRATION - COMMENTED OUT
  /*
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check for payment success or cancellation
    const success = searchParams.get('success')
    const canceled = searchParams.get('canceled')

    if (success === 'true') {
      setMessage({ type: 'success', text: 'Thank you for your donation! Your payment was successful. You will receive a receipt via email.' })
    } else if (canceled === 'true') {
      setMessage({ type: 'error', text: 'Payment was canceled. If you encountered any issues, please try again.' })
    }
  }, [searchParams])

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!donationAmount || parseFloat(donationAmount) < 1) {
      setMessage({ type: 'error', text: 'Please enter a valid donation amount (minimum $1.00)' })
      return
    }

    if (!donorName || !donorEmail) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: donationAmount,
          name: donorName,
          email: donorEmail,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process donation')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'An error occurred. Please try again.' })
      setIsLoading(false)
    }
  }
  */

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Join us in making a difference in children&apos;s lives</p>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Make a Donation</h2>
            <p>
              Your financial support directly impacts children&apos;s lives. Every contribution, no matter the size, helps us provide education, resources, and opportunities to children who need them most.
            </p>
            <p>
              Donations support our programs including school fees, learning materials, mentorship programs, and school infrastructure improvements.
            </p>

            <div className="form-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Donate Now</h3>

              {/* STRIPE INTEGRATION - COMMENTED OUT */}
              {/* {message && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  borderRadius: '6px',
                  backgroundColor: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: message.type === 'success' ? '#16a34a' : '#dc2626',
                  border: `1px solid ${message.type === 'success' ? '#16a34a' : '#dc2626'}`,
                  fontWeight: '500'
                }}>
                  {message.text}
                </div>
              )} */}

              <form>
                <div className="form-group">
                  <label htmlFor="amount">Donation Amount (USD)</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Quick Amount Options</label>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDonationAmount('25')}
                    >
                      $25
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDonationAmount('50')}
                    >
                      $50
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDonationAmount('100')}
                    >
                      $100
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setDonationAmount('250')}
                    >
                      $250
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="payment">Payment Method</label>
                  <select id="payment" name="payment" required>
                    <option value="">Select payment method</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Donate Now
                </button>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-light)', textAlign: 'center' }}>
                  Your donation is secure and tax-deductible. We&apos;ll send you a receipt for your records.
                </p>
                {/* STRIPE INTEGRATION - COMMENTED OUT */}
                {/* <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center' }}>
                  💳 Secure payment processing via Stripe
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="content-section alt-bg">
        <div className="container">
          <div className="content-block">
            <h2>Become a Volunteer</h2>
            <p>
              Volunteers are the heart of our organization. Whether you&apos;re interested in mentoring students, helping with events, or supporting our programs in other ways, we have opportunities for you.
            </p>

            <div className="programs-grid" style={{ marginTop: '2rem' }}>
              <div className="program-card">
                <div className="value-icon" style={{ marginBottom: '1.5rem' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="44" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M14 32 Q20 26 32 26 Q44 26 50 32" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M32 26 L32 40 M32 40 L26 46 M32 40 L38 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="32" cy="50" r="4" fill="currentColor" />
                  </svg>
                </div>
                <h3>Mentorship</h3>
                <p>
                  Become a mentor and make a lasting impact on a child&apos;s life. Mentors provide academic support, guidance, and encouragement to students.
                </p>
                <ul className="program-features">
                  <li>Commitment: 2-4 hours per week</li>
                  <li>Training provided</li>
                  <li>Flexible scheduling</li>
                  <li>Remote and in-person options</li>
                </ul>
              </div>

              <div className="program-card">
                <div className="value-icon" style={{ marginBottom: '1.5rem' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="12" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M24 20 L40 20 M24 28 L40 28 M24 36 L40 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="44" r="2" fill="currentColor" />
                    <circle cx="32" cy="44" r="2" fill="currentColor" />
                    <circle cx="40" cy="44" r="2" fill="currentColor" />
                  </svg>
                </div>
                <h3>Program Support</h3>
                <p>
                  Help with program administration, event planning, fundraising, or other operational activities.
                </p>
                <ul className="program-features">
                  <li>Various time commitments</li>
                  <li>Multiple skill sets needed</li>
                  <li>Remote work available</li>
                  <li>Make a difference behind the scenes</li>
                </ul>
              </div>

              <div className="program-card">
                <div className="value-icon" style={{ marginBottom: '1.5rem' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="32" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="48" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M11 32 Q16 26 32 26 Q48 26 53 32" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M11 32 Q16 38 32 38 Q48 38 53 32" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="32" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M26 48 L32 42 L38 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Community Outreach</h3>
                <p>
                  Help us connect with communities, raise awareness, and build partnerships that expand our reach.
                </p>
                <ul className="program-features">
                  <li>Event participation</li>
                  <li>Social media support</li>
                  <li>Community engagement</li>
                  <li>Partnership development</li>
                </ul>
              </div>
            </div>

            <div className="form-section" style={{ marginTop: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Volunteer Application</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="vol-name">Full Name</label>
                  <input type="text" id="vol-name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="vol-email">Email Address</label>
                  <input type="email" id="vol-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="vol-phone">Phone Number</label>
                  <input type="tel" id="vol-phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="vol-interest">Area of Interest</label>
                  <select id="vol-interest" name="interest" required>
                    <option value="">Select an area</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="program-support">Program Support</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="vol-message">Tell us about yourself and why you&apos;d like to volunteer</label>
                  <textarea id="vol-message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Become a Partner</h2>
            <p>
              We work with schools, businesses, and organizations to expand our impact. If you&apos;re interested in partnering with us, we&apos;d love to hear from you.
            </p>
            <p>
              Partnership opportunities include corporate sponsorships, school partnerships, resource sharing, and collaborative programs.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us About Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

