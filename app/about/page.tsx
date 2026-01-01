export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our mission, values, and vision for education in Africa</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Who We Are</h2>
            <p>
              Rugari Educate Foundation is a nonprofit organization committed to transforming lives through education. Founded with a vision to bridge the educational gap in Africa, we focus on providing comprehensive support to underprivileged children, starting with Rwanda.
            </p>
            <p>
              Our team consists of passionate educators, community leaders, and dedicated volunteers who believe in the power of education to create lasting change. We work directly with schools, communities, and families to ensure that every child has access to quality education and the resources they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Rwanda Matters */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="content-block">
            <h2>Why Education in Rwanda Matters</h2>
            <p>Rwanda has made remarkable progress in recent decades, but educational challenges remain. Many children, especially in rural areas, face barriers such as:</p>
            <ul className="feature-list">
              <li>Limited access to quality schools and learning materials</li>
              <li>Financial constraints preventing families from covering school fees</li>
              <li>Lack of mentorship and guidance for academic and personal growth</li>
              <li>Insufficient resources in schools to provide comprehensive education</li>
            </ul>
            <p>
              Education is the foundation for Rwanda&apos;s continued growth and development. By investing in children&apos;s education today, we&apos;re investing in a brighter future for the entire nation. Our work in Rwanda serves as a model for expanding our impact across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M20 32 L28 32 M36 32 L44 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M32 20 L32 28 M32 36 L32 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <h3>Equity</h3>
                <p>We believe every child deserves equal access to quality education, regardless of their background or circumstances.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12 L42 18 L42 28 L52 34 L52 44 L42 50 L32 56 L22 50 L12 44 L12 34 L22 28 L22 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M24 32 L30 38 L40 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>We operate with transparency, accountability, and honesty in all our programs and partnerships.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M14 40 Q20 32 32 32 Q44 32 50 40" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M24 20 Q32 12 40 20" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <h3>Community</h3>
                <p>We work collaboratively with local communities, respecting their knowledge and involving them in decision-making.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8 L38 24 L54 24 L42 34 L46 50 L32 42 L18 50 L22 34 L10 24 L26 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="32" cy="32" r="4" fill="currentColor" />
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>We strive for high-quality programs that create measurable, lasting impact in children&apos;s lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="content-block">
            <h2>Our Vision</h2>
            <p className="vision-text">
              We envision a future where every child in Africa has access to quality education, empowering them to reach their full potential and contribute meaningfully to their communities and the world.
            </p>
            <p>
              Starting with Rwanda, we aim to expand our programs across Africa, creating a network of educational support that transforms lives and builds stronger, more prosperous communities. Through partnerships, innovation, and dedicated support, we believe this vision is achievable.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

