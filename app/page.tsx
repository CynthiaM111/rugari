import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Education in Africa</h1>
          <p className="hero-subtitle">
            Supporting children&apos;s education in Rwanda and across Africa through access to quality learning resources and opportunities
          </p>
          <div className="hero-buttons">
            <Link href="/get-involved#donate" className="btn btn-primary">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <AnimateOnScroll>
            <h2>Our Mission</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mission-text">
              Rugari Educate Foundation is dedicated to increasing access to education, learning resources, and opportunities for underprivileged children in Africa. We believe that every child deserves the chance to learn, grow, and achieve their dreams, regardless of their circumstances.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mission-text">
              Starting with Rwanda, we work to break down barriers to education by providing school fees, learning materials, mentorship programs, and support to schools and communities.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <AnimateOnScroll>
            <h2>Join Us in Making a Difference</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p>Your support can change a child&apos;s future. Together, we can build a brighter tomorrow for children across Africa.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="cta-buttons">
              <Link href="/get-involved#donate" className="btn btn-primary">
                Make a Donation
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-secondary">
                Become a Volunteer
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

