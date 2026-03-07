import { Code, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                    <Link to="/contact" className="btn-primary">Get Started</Link>
                    <Link to="/about" className="glass-panel" style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '9999px',
                        color: 'white',
                        border: '1px solid var(--glass-border)',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        lineHeight: '1.5',
                        display: 'inline-block'
                    }}>
                        Learn More
                    </Link>
                </div>
            </section>

            <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--glass-border)',
                        borderRadius: '12px',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)'
                    }}>
                        <Code size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tech and Engineering</h3>
                    <ul style={{
                        color: 'var(--text-secondary)',
                        paddingLeft: '1.2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        <li>Software Development</li>
                        <li>Mobile Development</li>
                        <li>Data Science / Engineering</li>
                        <li>Cloud Engineering</li>
                        <li>Electrical Engineering</li>
                        <li>Etc ...</li>
                    </ul>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--glass-border)',
                        borderRadius: '12px',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)'
                    }}>
                        <MoreHorizontal size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Coming Soon</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Stay tuned for more updates.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
