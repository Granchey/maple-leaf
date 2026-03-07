const Careers = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Join Our <span className="gradient-text">Team</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Help us build the future of the web.</p>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="glass-panel" style={{
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Coming Soon!</h3>
                </div>
            </div>
        </div>
    );
};

export default Careers;
