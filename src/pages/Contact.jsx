import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        // Using environment variables for security
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS keys are missing in .env file');
            setStatus('error');
            setIsSending(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                form.current.reset();
                // Clear success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact <span className="gradient-text">Us</span></h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Have a question? We'd love to hear from you.</p>

            <form ref={form} onSubmit={sendEmail} className="glass-panel" style={{ padding: '3rem', display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                    <input type="text" name="user_name" required placeholder="John Doe" style={{
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
                    <input type="email" name="user_email" required placeholder="john@example.com" style={{
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
                    <textarea name="message" rows="4" required placeholder="How can we help?" style={{
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" disabled={isSending} className="btn-primary" style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer'
                    }}>
                        {isSending ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <div style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} />
                            <span>Message sent successfully!</span>
                        </div>
                    )}

                    {status === 'error' && (
                        <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <AlertCircle size={20} />
                            <span>Failed to send. Please check your config.</span>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Contact;
