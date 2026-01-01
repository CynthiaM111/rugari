export default function Programs() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Work</h1>
          <p>Building the future of education in Africa</p>
        </div>
      </section>

      {/* Current Project Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Current Project: Building a School in Africa</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>
              We are currently working on an ambitious project to build a new school in Africa by 2027. This school will provide quality education to hundreds of children who currently lack access to proper learning facilities.
            </p>

            <div style={{ 
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%)',
              borderRadius: '12px',
              padding: '3rem 2rem',
              color: 'white',
              textAlign: 'center',
              marginTop: '3rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
            }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                $1,000,000
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'white' }}>
                Fundraising Goal
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#f59e0b', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
                We have set a goal to raise one million dollars to make this school a reality. Every contribution brings us closer to providing quality education to children in need.
              </p>
            </div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div style={{
                padding: '2rem',
                background: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏗️</div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Construction</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Building modern, safe, and well-equipped facilities that will serve as a foundation for learning.
                </p>
              </div>

              <div style={{
                padding: '2rem',
                background: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Resources</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Equipping the school with books, technology, and learning materials to ensure quality education.
                </p>
              </div>

              <div style={{
                padding: '2rem',
                background: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2027 Goal</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Our target is to complete construction and open the school doors by 2027, transforming lives through education.
                </p>
              </div>
            </div>

            <div style={{ 
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--bg-light)',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                Help Us Reach Our Goal
              </h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-dark)', marginBottom: '2rem' }}>
                Your support can make a lasting difference. Join us in building a brighter future for children in Africa.
              </p>
              <a 
                href="/get-involved#donate" 
                className="btn btn-primary"
                style={{ display: 'inline-block' }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

