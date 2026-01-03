
const Home = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <section className="hero animate-fade-in">
                <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Grow with <span className="gradient-text">MapleLeaf</span>
                    <br /> Outsource.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}>
                    Connecting companies with premier outsourcing services in Kosovo.
                    Reliability, Quality, and Growth.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="/contact" className="btn-primary">Get Started</a>
                    <button className="glass-panel" style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '9999px',
                        color: 'white',
                        border: '1px solid var(--glass-border)',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        Learn More
                    </button>
                </div>
            </section>

            <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--glass-border)',
                            borderRadius: '12px',
                            marginBottom: '1.5rem'
                        }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Feature {i}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Premium glassmorphism cards to showcase your features in style.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
