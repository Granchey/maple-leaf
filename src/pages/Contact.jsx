const Contact = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact <span className="gradient-text">Us</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Have a question? We'd love to hear from you.</p>

            <form className="glass-panel" style={{ padding: '3rem', display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                    <input type="text" placeholder="John Doe" style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none'
                    }} />
                </div>

                <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                    <input type="email" placeholder="john@example.com" style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none'
                    }} />
                </div>

                <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                    <textarea rows="4" placeholder="How can we help?" style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'vertical'
                    }}></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ justifySelf: 'start', marginTop: '1rem' }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
