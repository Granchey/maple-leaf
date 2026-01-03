const About = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span className="gradient-text">MapleLeaf Outsource</span></h1>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    MapleLeaf Outsource is your bridge to exceptional talent in Kosovo.
                    We believe in the power of connecting global businesses with skilled professionals.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    Our team consists of passionate developers and designers who push the boundaries of what is possible on the web.
                </p>
            </div>
        </div>
    );
};

export default About;
