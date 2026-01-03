const Careers = () => {
    const jobs = [
        { title: 'Senior Frontend Developer', dept: 'Engineering', type: 'Remote' },
        { title: 'Product Designer', dept: 'Design', type: 'New York, NY' },
        { title: 'Marketing Manager', dept: 'Marketing', type: 'London, UK' }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Join Our <span className="gradient-text">Team</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Help us build the future of the web.</p>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
                {jobs.map((job, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{job.dept} • {job.type}</p>
                        </div>
                        <button className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}>Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
