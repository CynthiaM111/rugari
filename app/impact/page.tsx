export default function Impact() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Impact</h1>
          <p>Measuring success through the lives we touch and the futures we shape</p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="content-section">
        <div className="container">
          <div className="content-block" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🚧</div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
              Impact Coming Soon
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              We&apos;re just getting started! As we work towards building our first school in Africa by 2027, we&apos;ll be sharing our impact stories, metrics, and the difference we&apos;re making in children&apos;s lives. Check back soon to see our progress!
            </p>
            <div style={{ marginTop: '3rem' }}>
              <a href="/get-involved" className="btn btn-primary">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commented out - Impact content to be added later when we have significant results */}
      {/* 
      Impact Metrics Section
      Impact Stories Section  
      Impact Areas Section
      */}
    </>
  )
}

